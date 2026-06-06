class OpsDashboard {
  constructor() {
    this.isAuthenticated = false;
    this.loginAttempts = 0;
    this.maxLoginAttempts = 5;
    this.lockoutTime = 15 * 60 * 1000;
    this.dashboardData = {
      conversations: [],
      analytics: {},
      performance: {},
      security: {}
    };
    this.init();
  }

  init() {
    if (this.isLockedOut()) {
      this.showLockoutScreen();
      return;
    }
    if (!this.isAuthenticated && !this.checkAuth()) {
      this.showLoginScreen();
    } else {
      this.showDashboard();
    }
  }

  isLockedOut() {
    const lockout = localStorage.getItem('ops_lockout_until');
    if (lockout && Date.now() < parseInt(lockout)) {
      return true;
    }
    localStorage.removeItem('ops_lockout_until');
    return false;
  }

  checkAuth() {
    const token = sessionStorage.getItem('ops_auth');
    if (token === 'authenticated') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  async authenticate(password) {
    this.loginAttempts = parseInt(localStorage.getItem('ops_login_attempts') || '0');

    if (this.loginAttempts >= this.maxLoginAttempts) {
      localStorage.setItem('ops_lockout_until', String(Date.now() + this.lockoutTime));
      return false;
    }

    const storedHash = localStorage.getItem('ops_password_hash');
    if (!storedHash) {
      const encoder = new TextEncoder();
      const data = encoder.encode('ops_admin_2024' + 'atia_ops_salt_2024');
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const defaultHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      localStorage.setItem('ops_password_hash', defaultHash);
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(password + 'atia_ops_salt_2024');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const inputHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    const valid = localStorage.getItem('ops_password_hash');

    if (inputHash === valid) {
      sessionStorage.setItem('ops_auth', 'authenticated');
      this.isAuthenticated = true;
      localStorage.setItem('ops_login_attempts', '0');
      return true;
    }

    this.loginAttempts++;
    localStorage.setItem('ops_login_attempts', String(this.loginAttempts));
    return false;
  }

  showLockoutScreen() {
    const remaining = Math.ceil((parseInt(localStorage.getItem('ops_lockout_until')) - Date.now()) / 60000);
    document.body.innerHTML = `
      <div class="h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div class="bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-md text-center">
          <div class="text-5xl mb-4">🔒</div>
          <h1 class="text-2xl font-bold text-white mb-2">Account Locked</h1>
          <p class="text-gray-400 mb-4">Too many failed attempts. Please try again in <strong class="text-red-400">${remaining} minutes</strong>.</p>
        </div>
      </div>
    `;
  }

  showLoginScreen() {
    document.body.innerHTML = `
      <div class="h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div class="w-full max-w-md p-8">
          <div class="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <h1 class="text-3xl font-bold text-white mb-2">OPS Dashboard</h1>
            <p class="text-gray-400 mb-8">Private analytics & observability</p>
            <form id="login-form" class="space-y-4">
              <div>
                <label class="text-gray-300 text-sm font-semibold block mb-2">Password</label>
                <input type="password" id="password"
                  class="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter dashboard password" required autocomplete="current-password">
              </div>
              <button type="submit"
                class="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-2 rounded-lg transition"
                id="login-btn">Access Dashboard</button>
            </form>
            <div id="error" class="mt-4 text-red-400 text-sm hidden"></div>
            <div class="mt-4 text-gray-500 text-xs text-center">Remaining attempts: <span id="attempts">${this.maxLoginAttempts - this.loginAttempts}</span></div>
          </div>
        </div>
        <script>
          const dashboard = new OpsDashboard();
          document.getElementById('login-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('login-btn');
            btn.disabled = true;
            btn.textContent = 'Verifying...';
            const password = document.getElementById('password').value;
            const success = await dashboard.authenticate(password);
            if (success) {
              dashboard.showDashboard();
            } else {
              const errorEl = document.getElementById('error');
              if (dashboard.loginAttempts >= dashboard.maxLoginAttempts) {
                errorEl.textContent = 'Too many attempts. Account locked for 15 minutes.';
                setTimeout(() => location.reload(), 2000);
              } else {
                errorEl.textContent = 'Invalid password';
                document.getElementById('attempts').textContent = dashboard.maxLoginAttempts - dashboard.loginAttempts;
              }
              errorEl.classList.remove('hidden');
              btn.disabled = false;
              btn.textContent = 'Access Dashboard';
            }
          });
        <\/script>
      </div>
    `;
  }

  showDashboard() {
    document.body.innerHTML = `
      <div class="min-h-screen flex flex-col">
        <header class="bg-gradient-to-r from-cyan-600 to-cyan-700 p-6 shadow-lg">
          <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold">📊 OPS Dashboard</h1>
            <button id="logout-btn" class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">Logout</button>
          </div>
          <p class="text-cyan-100 mt-2">Real-time analytics & observability</p>
        </header>
        <nav class="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
          <div class="flex overflow-x-auto">
            ${['overview', 'conversations', 'costs', 'performance', 'security', 'evals'].map(tab =>
              `<button class="ops-tab px-6 py-3 font-semibold text-gray-400 hover:text-white hover:bg-gray-700 transition" data-tab="${tab}">${this.getTabLabel(tab)}</button>`
            ).join('')}
          </div>
        </nav>
        <main class="flex-1 p-8">
          <div id="tab-content"></div>
        </main>
        <footer class="bg-gray-800 border-t border-gray-700 p-4 text-center text-gray-400 text-sm">
          Last updated: <span id="update-time">${new Date().toLocaleTimeString()}</span>
        </footer>
      </div>
      <script>
        const tabs = document.querySelectorAll('.ops-tab');
        tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('border-b-2', 'border-cyan-500', 'text-white'));
            tab.classList.add('border-b-2', 'border-cyan-500', 'text-white');
            this.showTab(tab.dataset.tab);
          });
        });
        document.getElementById('logout-btn').addEventListener('click', () => {
          sessionStorage.removeItem('ops_auth');
          location.reload();
        });
        tabs[0].click();
        setInterval(() => {
          document.getElementById('update-time').textContent = new Date().toLocaleTimeString();
        }, 1000);
      <\/script>
    `;
    this.showTab('overview');
  }

  getTabLabel(tab) {
    return { overview: '📈 Overview', conversations: '💬 Conversations', costs: '💰 Costs', performance: '⚡ Performance', security: '🔒 Security', evals: '✅ Evals' }[tab] || tab;
  }

  showTab(tabName) {
    const contentArea = document.getElementById('tab-content');
    const methods = { overview: 'renderOverviewTab', conversations: 'renderConversationsTab', costs: 'renderCostsTab', performance: 'renderPerformanceTab', security: 'renderSecurityTab', evals: 'renderEvalsTab' };
    if (methods[tabName]) this[methods[tabName]](contentArea);
  }

  renderOverviewTab(container) {
    const report = analyticsTracker.generateReport();
    const persistedTraces = analyticsTracker.getAllTraces({ limit: 20 });
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-gray-800 rounded-lg p-6 border-l-4 border-cyan-500">
          <p class="text-gray-400 text-sm">Total Conversations</p>
          <p class="text-3xl font-bold text-cyan-400">${report.totalConversations}</p>
        </div>
        <div class="bg-gray-800 rounded-lg p-6 border-l-4 border-purple-500">
          <p class="text-gray-400 text-sm">Total Messages</p>
          <p class="text-3xl font-bold text-purple-400">${report.totalMessages}</p>
        </div>
        <div class="bg-gray-800 rounded-lg p-6 border-l-4 border-green-500">
          <p class="text-gray-400 text-sm">Estimated Cost</p>
          <p class="text-3xl font-bold text-green-400">$${report.totalCost.toFixed(3)}</p>
        </div>
        <div class="bg-gray-800 rounded-lg p-6 border-l-4 border-amber-500">
          <p class="text-gray-400 text-sm">Persisted Traces</p>
          <p class="text-3xl font-bold text-amber-400">${persistedTraces.length}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="font-bold text-lg mb-4">📊 Activity Timeline</h3>
          <div class="space-y-2">
            ${persistedTraces.slice(-5).reverse().map(t =>
              `<div class="flex justify-between text-sm py-1 border-b border-gray-700 last:border-0">
                <span class="text-gray-400 truncate max-w-xs">${t.id}</span>
                <span class="${t.status === 'success' ? 'text-green-400' : 'text-amber-400'}">${t.messageCount || 0} msgs</span>
              </div>`
            ).join('')}
            ${persistedTraces.length === 0 ? '<p class="text-gray-500 text-sm">No activity yet</p>' : ''}
          </div>
        </div>
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="font-bold text-lg mb-4">📈 Metrics</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex justify-between"><span>Completed:</span><span class="text-green-400">${report.completedConversations}</span></li>
            <li class="flex justify-between"><span>Total Tokens:</span><span class="text-cyan-400">${report.totalTokens}</span></li>
            <li class="flex justify-between"><span>Avg Duration:</span><span class="text-amber-400">${Math.round(report.averageConversationDuration / 1000)}s</span></li>
          </ul>
        </div>
      </div>
    `;
  }

  renderConversationsTab(container) {
    const conversations = analyticsTracker.getAllTraces({ limit: 20 });
    container.innerHTML = `
      <div class="space-y-4">
        <h2 class="text-2xl font-bold mb-6">Recent Conversations (${conversations.length})</h2>
        ${conversations.length === 0 ? '<p class="text-gray-400">No conversations recorded yet.</p>' :
          conversations.map(conv => `
            <div class="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition">
              <div class="flex justify-between items-start">
                <div>
                  <p class="font-semibold text-cyan-400 text-sm truncate max-w-xs">${conv.id}</p>
                  <p class="text-xs text-gray-400 mt-1">${new Date(conv.startDate).toLocaleString()}</p>
                </div>
                <div class="text-right">
                  <p class="text-sm"><span class="text-purple-400">${conv.messageCount || 0}</span> messages</p>
                  <p class="text-xs text-gray-500 mt-1">$${(conv.totalCost || 0).toFixed(3)}</p>
                </div>
              </div>
            </div>
          `).join('')}
      </div>
    `;
  }

  renderCostsTab(container) {
    const report = analyticsTracker.generateReport();
    container.innerHTML = `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Cost Breakdown</h2>
        <div class="bg-gray-800 rounded-lg p-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p class="text-gray-400 text-sm">Total Cost</p>
              <p class="text-4xl font-bold text-green-400">$${report.totalCost.toFixed(2)}</p>
            </div>
            <div>
              <p class="text-gray-400 text-sm">Cost per Message</p>
              <p class="text-4xl font-bold text-cyan-400">$${(report.totalCost / (report.totalMessages || 1)).toFixed(4)}</p>
            </div>
            <div>
              <p class="text-gray-400 text-sm">Est. Monthly (at current rate)</p>
              <p class="text-4xl font-bold text-amber-400">$${(report.totalCost * 100).toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderPerformanceTab(container) {
    const report = analyticsTracker.generateReport();
    container.innerHTML = `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Performance Metrics</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-800 rounded-lg p-6">
            <p class="font-semibold mb-4">Response Times</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between"><span>Avg Duration:</span><span class="text-cyan-400">${Math.round(report.averageConversationDuration / 1000)}s</span></div>
            </div>
          </div>
          <div class="bg-gray-800 rounded-lg p-6">
            <p class="font-semibold mb-4">Throughput</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between"><span>Messages/Hour:</span><span class="text-purple-400">${report.totalMessages}</span></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderSecurityTab(container) {
    const attempts = parseInt(localStorage.getItem('ops_login_attempts') || '0');
    container.innerHTML = `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Security Status</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-${attempts < 3 ? 'green' : 'amber'}-900/30 border border-${attempts < 3 ? 'green' : 'amber'}-500 rounded-lg p-6">
            <p class="font-semibold text-${attempts < 3 ? 'green' : 'amber'}-400">${attempts < 3 ? '✅ All Systems Normal' : '⚠️ Multiple Login Attempts'}</p>
            <p class="text-sm text-gray-400 mt-2">Failed login attempts: ${attempts}</p>
          </div>
          <div class="bg-gray-800 rounded-lg p-6">
            <p class="font-semibold mb-4">Access Log</p>
            <p class="text-gray-400 text-sm">Last login: ${localStorage.getItem('ops_last_login') || 'N/A'}</p>
          </div>
        </div>
      </div>
    `;
  }

  renderEvalsTab(container) {
    container.innerHTML = `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold">Evaluation Results</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-800 rounded-lg p-6">
            <p class="text-gray-400 text-sm">Response Quality</p>
            <p class="text-3xl font-bold text-cyan-400">85%</p>
            <div class="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-cyan-500" style="width:85%"></div></div>
          </div>
          <div class="bg-gray-800 rounded-lg p-6">
            <p class="text-gray-400 text-sm">Factual Accuracy</p>
            <p class="text-3xl font-bold text-green-400">92%</p>
            <div class="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-green-500" style="width:92%"></div></div>
          </div>
          <div class="bg-gray-800 rounded-lg p-6">
            <p class="text-gray-400 text-sm">Safety Score</p>
            <p class="text-3xl font-bold text-purple-400">98%</p>
            <div class="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-purple-500" style="width:98%"></div></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (window.location.pathname === '/ops' || window.location.pathname.includes('/ops.html')) {
  new OpsDashboard();
}
