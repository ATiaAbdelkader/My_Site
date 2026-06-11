/**
 * Floating Chat Widget
 * AI-powered conversational interface with text and voice support
 */

class ChatbotWidget {
  constructor(options = {}) {
    this.options = {
      position: 'bottom-right',
      title: 'Abdelkader\'s Assistant',
      subtitle: '',
      theme: 'dark',
      enableVoice: false,
      maxWidth: '400px',
      ...options
    };

    this.conversationId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    this.messages = [];
    this.isOpen = false;
    this.isLoading = false;
    this.voiceEnabled = false;

    this.init();
  }

  init() {
    this.createWidget();
    this.attachEventListeners();
    this.loadConversationHistory();
  }

  createWidget() {
    // Widget container
    const widget = document.createElement('div');
    widget.id = 'chatbot-widget';
    widget.className = 'fixed z-[9999]';
    widget.innerHTML = `
      <div class="chatbot-container ${this.options.position}">
        <!-- Chat window -->
        <div class="chatbot-window hidden bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
             style="max-width: ${this.options.maxWidth}; height: 600px; width: 100%;">
          
          <!-- Header -->
          <div class="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 flex justify-between items-center">
            <div>
              <h3 class="text-white font-bold">${this.options.title}</h3>
              ${this.options.subtitle ? `<p class="text-cyan-100 text-xs">${this.options.subtitle}</p>` : ''}
            </div>
            <button class="chatbot-close-btn text-white hover:bg-cyan-500 p-1 rounded transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Messages area -->
          <div class="chatbot-messages flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800/50"></div>

          <!-- Input area -->
          <div class="border-t border-gray-700 p-4 bg-gray-900">

            <div class="flex gap-2">
              <input type="text" class="chatbot-input flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
                     placeholder="Ask anything...">
              <button class="chatbot-send-btn bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Toggle button -->
        <button class="chatbot-toggle-btn fixed bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110"
                style="width: 56px; height: 56px; display: flex; align-items: center; justify-content: center;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    `;

    document.body.appendChild(widget);
    this.element = widget;
    this.window = widget.querySelector('.chatbot-window');
    this.messagesContainer = widget.querySelector('.chatbot-messages');
    this.input = widget.querySelector('.chatbot-input');
    this.sendBtn = widget.querySelector('.chatbot-send-btn');
    this.toggleBtn = widget.querySelector('.chatbot-toggle-btn');
    this.closeBtn = widget.querySelector('.chatbot-close-btn');
    this.voiceBtn = widget.querySelector('.chatbot-voice-btn');

    this.positionWidget();
  }

  positionWidget() {
    const container = this.element.querySelector('.chatbot-container');
    const toggleBtn = this.toggleBtn;
    const window = this.window;

    const [vertical, horizontal] = this.options.position.split('-');
    
    let toggleStyle = `${vertical}: 20px; ${horizontal}: 20px;`;
    let windowStyle = `${vertical}: 100px; ${horizontal}: 20px;`;

    container.style.cssText += toggleStyle;
    window.style.cssText += windowStyle;
  }

  attachEventListeners() {
    this.toggleBtn.addEventListener('click', () => this.toggle());
    this.closeBtn.addEventListener('click', () => this.close());
    this.sendBtn.addEventListener('click', () => this.sendMessage());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    if (this.voiceBtn) {
      this.voiceBtn.addEventListener('click', () => this.toggleVoice());
    }
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.window.classList.remove('hidden');
    this.toggleBtn.style.display = 'none';
    this.input.focus();
  }

  close() {
    this.isOpen = false;
    this.window.classList.add('hidden');
    this.toggleBtn.style.display = 'flex';
  }

  showTypingIndicator() {
    this.typingEl = document.createElement('div');
    this.typingEl.className = 'flex justify-start';
    this.typingEl.innerHTML = `
      <div class="bg-gray-700 text-gray-100 rounded-2xl rounded-tl-none px-4 py-2 text-sm flex items-center gap-1">
        <span class="typing-dot" style="animation:typingDot 1.4s infinite;animation-delay:0s">.</span>
        <span class="typing-dot" style="animation:typingDot 1.4s infinite;animation-delay:0.2s">.</span>
        <span class="typing-dot" style="animation:typingDot 1.4s infinite;animation-delay:0.4s">.</span>
      </div>`;
    this.messagesContainer.appendChild(this.typingEl);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  hideTypingIndicator() {
    if (this.typingEl) {
      this.typingEl.remove();
      this.typingEl = null;
    }
  }

  async sendMessage() {
    const text = this.input.value.trim();
    if (!text) return;

    this.addMessage(text, 'user');
    this.input.value = '';
    this.isLoading = true;
    this.sendBtn.disabled = true;
    this.showTypingIndicator();

    try {
      const context = this.messages.length > 2
        ? { lastTopic: this.messages[this.messages.length - 2]?.text?.split(' ').slice(0, 5).join(' ') }
        : {};

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationId: this.conversationId,
          context
        })
      }).catch(() => {
        return this.getLocalResponse(text);
      });

      this.hideTypingIndicator();

      if (response.ok || response.content) {
        const data = typeof response.json === 'function' ? await response.json() : response;
        this.addMessage(data.content || data, 'assistant');
      } else {
        this.addMessage('Sorry, I couldn\'t process that request. Please try again.', 'system');
      }
    } catch (error) {
      this.hideTypingIndicator();
      console.error('Chat error:', error);
      this.addMessage('An error occurred. Please try again.', 'system');
    } finally {
      this.isLoading = false;
      this.sendBtn.disabled = false;
    }
  }

  async getLocalResponse(text) {
    // Use local mock response
    const mockResponse = generateMockResponse(text);
    return { content: mockResponse };
  }

  addMessage(text, role) {
    const messageEl = document.createElement('div');
    messageEl.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
    messageEl.innerHTML = `
      <div class="max-w-xs ${
        role === 'user' 
          ? 'bg-cyan-600 text-white rounded-2xl rounded-tr-none' 
          : role === 'system'
            ? 'bg-red-600 text-white rounded-2xl'
            : 'bg-gray-700 text-gray-100 rounded-2xl rounded-tl-none'
      } px-4 py-2 text-sm">
        ${text}
      </div>
    `;
    this.messagesContainer.appendChild(messageEl);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

    this.messages.push({ role, text, timestamp: new Date().toISOString() });
    this.saveConversation();
  }

  toggleVoice() {
    this.voiceEnabled = !this.voiceEnabled;
    if (this.voiceEnabled) {
      this.startVoiceInput();
    } else {
      this.stopVoiceInput();
    }
  }

  startVoiceInput() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = document.documentElement.lang || 'en-US';
    
    recognition.onstart = () => {
      this.voiceBtn.style.backgroundColor = '#a855f7';
      this.addMessage('🎤 Listening...', 'system');
    };

    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
      }
      this.input.value = transcript;
    };

    recognition.onend = () => {
      this.voiceBtn.style.backgroundColor = '';
      this.voiceEnabled = false;
    };

    recognition.onerror = (event) => {
      this.addMessage(`🎤 Error: ${event.error}`, 'system');
      this.voiceEnabled = false;
    };

    recognition.start();
  }

  stopVoiceInput() {
    // Implementation for stopping voice
  }

  saveConversation() {
    localStorage.setItem(
      `conversation_${this.conversationId}`,
      JSON.stringify(this.messages)
    );
  }

  loadConversationHistory() {
    const stored = localStorage.getItem(`conversation_${this.conversationId}`);
    if (stored) {
      this.messages = JSON.parse(stored);
      this.messages.forEach(msg => {
        this.addMessage(msg.text, msg.role);
      });
    }
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ChatbotWidget({
      position: 'bottom-right',
      theme: 'dark',
      enableVoice: false
    });
  });
} else {
  new ChatbotWidget({
    position: 'bottom-right',
    theme: 'dark',
    enableVoice: true
  });
}
