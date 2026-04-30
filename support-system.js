(function () {
  const CONVERSATIONS_KEY = 'yk_support_conversations_v1';
  const SESSION_KEY = 'yk_support_session_id_v1';
  const CHANNEL_NAME = 'yk_support_channel_v1';
  const listeners = new Set();
  const channel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel(CHANNEL_NAME) : null;

  function createId(prefix) {
    return [
      prefix,
      Date.now().toString(36),
      Math.random().toString(36).slice(2, 9)
    ].join('_');
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function safeJsonParse(value, fallback) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function readConversationMap() {
    const raw = localStorage.getItem(CONVERSATIONS_KEY);
    const parsed = safeJsonParse(raw, {});
    return parsed && typeof parsed === 'object' ? parsed : {};
  }

  function writeConversationMap(map, payload) {
    localStorage.setItem(CONVERSATIONS_KEY, JSON.stringify(map));
    emit(payload || { type: 'sync' });
  }

  function normalizeConversation(conversation) {
    return {
      id: conversation.id,
      leadName: conversation.leadName || '',
      leadEmail: conversation.leadEmail || '',
      locale: conversation.locale || 'tr',
      status: conversation.status || 'open',
      createdAt: conversation.createdAt || nowIso(),
      updatedAt: conversation.updatedAt || nowIso(),
      lastMessage: conversation.lastMessage || '',
      unreadForAdmin: Number(conversation.unreadForAdmin || 0),
      unreadForVisitor: Number(conversation.unreadForVisitor || 0),
      messages: Array.isArray(conversation.messages) ? conversation.messages : []
    };
  }

  function listConversations() {
    const map = readConversationMap();
    return Object.values(map)
      .map(normalizeConversation)
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }

  function getConversation(id) {
    if (!id) return null;
    const map = readConversationMap();
    if (!map[id]) return null;
    return normalizeConversation(map[id]);
  }

  function saveConversation(conversation, payload) {
    const map = readConversationMap();
    map[conversation.id] = normalizeConversation(conversation);
    writeConversationMap(map, payload);
    return map[conversation.id];
  }

  function setSessionId(id) {
    if (!id) return;
    sessionStorage.setItem(SESSION_KEY, id);
    localStorage.setItem(SESSION_KEY, id);
  }

  function getSessionId() {
    return sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY) || '';
  }

  function clearSessionId() {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  }

  function ensureConversation(lead) {
    const existingId = getSessionId();
    const existingConversation = existingId ? getConversation(existingId) : null;
    if (existingConversation) {
      const merged = {
        ...existingConversation,
        leadName: lead.name || existingConversation.leadName,
        leadEmail: lead.email || existingConversation.leadEmail,
        locale: lead.locale || existingConversation.locale,
        status: existingConversation.status === 'closed' ? 'open' : existingConversation.status,
        updatedAt: nowIso()
      };
      saveConversation(merged, { type: 'conversation-updated', conversationId: merged.id });
      return merged;
    }

    const created = normalizeConversation({
      id: createId('conv'),
      leadName: lead.name || '',
      leadEmail: lead.email || '',
      locale: lead.locale || 'tr',
      status: 'open',
      createdAt: nowIso(),
      updatedAt: nowIso(),
      unreadForAdmin: 0,
      unreadForVisitor: 0,
      messages: []
    });

    setSessionId(created.id);
    saveConversation(created, { type: 'conversation-created', conversationId: created.id });
    return created;
  }

  function appendMessage(conversationId, sender, text) {
    const conversation = getConversation(conversationId);
    if (!conversation || !text) return null;

    const message = {
      id: createId('msg'),
      sender: sender === 'agent' ? 'agent' : 'user',
      text: String(text).trim(),
      createdAt: nowIso()
    };

    if (!message.text) return null;

    const updated = {
      ...conversation,
      updatedAt: message.createdAt,
      lastMessage: message.text,
      messages: conversation.messages.concat(message),
      unreadForAdmin: sender === 'user' ? conversation.unreadForAdmin + 1 : 0,
      unreadForVisitor: sender === 'agent' ? conversation.unreadForVisitor + 1 : 0,
      status: 'open'
    };

    saveConversation(updated, {
      type: 'message-appended',
      conversationId: updated.id,
      messageId: message.id,
      sender: message.sender
    });

    return message;
  }

  function markRead(conversationId, who) {
    const conversation = getConversation(conversationId);
    if (!conversation) return null;
    const updated = {
      ...conversation,
      unreadForAdmin: who === 'admin' ? 0 : conversation.unreadForAdmin,
      unreadForVisitor: who === 'visitor' ? 0 : conversation.unreadForVisitor
    };
    saveConversation(updated, { type: 'conversation-read', conversationId, who });
    return updated;
  }

  function updateConversationStatus(conversationId, status) {
    const conversation = getConversation(conversationId);
    if (!conversation) return null;
    const updated = {
      ...conversation,
      status: status === 'closed' ? 'closed' : 'open',
      updatedAt: nowIso()
    };
    saveConversation(updated, {
      type: 'conversation-status',
      conversationId,
      status: updated.status
    });
    return updated;
  }

  function getStats() {
    const conversations = listConversations();
    return {
      total: conversations.length,
      open: conversations.filter(item => item.status !== 'closed').length,
      unread: conversations.reduce((sum, item) => sum + item.unreadForAdmin, 0)
    };
  }

  function emit(payload) {
    const detail = {
      payload: payload || { type: 'sync' },
      conversations: listConversations()
    };

    listeners.forEach(listener => {
      try {
        listener(detail);
      } catch (error) {
        console.error('SupportStore listener error:', error);
      }
    });

    window.dispatchEvent(new CustomEvent('support-store:update', { detail }));

    if (channel) {
      try {
        channel.postMessage(detail.payload);
      } catch (error) {
        console.error('SupportStore broadcast error:', error);
      }
    }
  }

  function subscribe(listener) {
    if (typeof listener !== 'function') return function noop() {};
    listeners.add(listener);
    return function unsubscribe() {
      listeners.delete(listener);
    };
  }

  window.addEventListener('storage', function (event) {
    if (event.key === CONVERSATIONS_KEY) {
      emit({ type: 'storage-sync' });
    }
  });

  if (channel) {
    channel.addEventListener('message', function (event) {
      const payload = event && event.data ? event.data : { type: 'broadcast-sync' };
      listeners.forEach(listener => {
        try {
          listener({
            payload,
            conversations: listConversations()
          });
        } catch (error) {
          console.error('SupportStore channel listener error:', error);
        }
      });
      window.dispatchEvent(new CustomEvent('support-store:update', {
        detail: {
          payload,
          conversations: listConversations()
        }
      }));
    });
  }

  window.SupportStore = {
    listConversations,
    getConversation,
    ensureConversation,
    appendMessage,
    markRead,
    updateConversationStatus,
    getStats,
    subscribe,
    getSessionId,
    setSessionId,
    clearSessionId
  };
})();
