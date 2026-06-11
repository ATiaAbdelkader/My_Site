#!/bin/bash
# 🚀 Quick Start Commands for Abdelkader Atia's Advanced Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build

# Run automated tests (71 evals)
npm run evals

# Run OPS dashboard API tests
npm run test:ops

# Generate analytics report
npm run analytics:report

# Generate XML sitemap
npm run sitemap

# Test contract compliance
npm run test:contract

# Export OPS data
npm run ops:export

# ============================================
# 🤖 FEATURE QUICK REFERENCE
# ============================================

# ACCESS OPS DASHBOARD
# URL: http://localhost:5173/ops
# Default Password: ops_admin_2024
# Change this in production! (/ops/dashboard.js:70)

# CHATBOT WIDGET
# - Floats on bottom-right corner
# - Click 💬 to open
# - Click 🎤 for voice mode
# - Ask questions about your work

# RAG KNOWLEDGE BASE
# Edit: /api/rag-search.js
# Add topics to knowledgeBase array
# Chatbot will reference automatically

# MODIFY AI SYSTEM PROMPT
# Edit: /api/chatbot-system-prompt.txt
# Change tone, domains, guidelines

# ANALYTICS TRACKING
# In browser console:
# analytics.trackEvent('event-name', {data})
# analytics.exportData()

# ADD NEW EVALS
# Edit: /evals/runner.js
# Add test with: this.addTest(category, id, desc, function)

# PWA SERVICE WORKER
# File: /sw.js
# Auto registers on first load
# Enables offline support

# JSON-LD SCHEMAS
# File: /assets/js/structured-data.js
# Auto-injects on page load
# Improves SEO & AI indexing

# ============================================
# 📊 FILE LOCATIONS
# ============================================

# Chatbot Files
echo "Chatbot system prompt: /api/chatbot-system-prompt.txt"
echo "Chatbot backend: /api/chat.js"
echo "RAG search: /api/rag-search.js"
echo "Chat widget: /assets/js/chatbot-widget.js"

# Analytics Files
echo "Client analytics: /assets/js/analytics-tracker.js"
echo "Server analytics: /api/analytics.js"

# Dashboard Files
echo "OPS dashboard: /ops/dashboard.js"
echo "OPS page: /ops/index.html"

# Testing Files
echo "Evals runner: /evals/runner.js"

# PWA Files
echo "Service worker: /sw.js"
echo "Manifest: /manifest.json"

# SEO Files
echo "Structured data: /assets/js/structured-data.js"
echo "Robots.txt: /robots.txt"
echo "Sitemap.xml: /sitemap.xml"

# ============================================
# 🔧 CONFIGURATION
# ============================================

# DEFAULT CREDENTIALS
# OPS Dashboard: ops_admin_2024
# ⚠️ CHANGE IN PRODUCTION!

# Update password:
# 1. Edit /ops/dashboard.js
# 2. Line 70: expectedPassword = 'new_password'
# 3. Deploy

# ============================================
# 🚀 DEPLOYMENT
# ============================================

# Build and optimize
npm run build

# Files ready in:
# - Minified JS in /assets/js/
# - CSS optimization done
# - All assets ready for CDN

# Deploy to production:
# 1. Push to GitHub/GitLab
# 2. Deploy to Vercel/Netlify
# 3. Set environment variables
# 4. Change OPS dashboard password
# 5. Monitor /ops dashboard

# ============================================
# 📈 MONITORING
# ============================================

# Check dashboard: /ops
# View conversations: Overview tab
# Monitor costs: Costs tab
# Track performance: Performance tab
# Security check: Security tab
# Test results: Evals tab

# ============================================
# 🐛 TROUBLESHOOTING
# ============================================

# Chatbot not responding?
# 1. Check browser console (F12)
# 2. Verify /api/chat.js loaded
# 3. Clear localStorage
# 4. Hard refresh (Ctrl+Shift+R)

# OPS dashboard not loading?
# 1. Check password
# 2. Verify /ops/dashboard.js loaded
# 3. Check browser console
# 4. Clear cache

# Analytics not tracking?
# 1. Check localStorage available
# 2. Verify analytics-tracker.js loaded
# 3. Try in incognito window
# 4. Check beacon API support

# Voice not working?
# 1. Use Chrome/Edge (better support)
# 2. Verify HTTPS enabled
# 3. Check microphone permissions
# 4. Test speaker volume

# ============================================
# 📊 KEY METRICS
# ============================================

# Monitor these metrics:
# - Total conversations
# - Avg response time
# - Quality score (target: >85%)
# - Safety score (target: >95%)
# - Cost per message
# - User engagement
# - Voice session count

# ============================================
# 💡 PRO TIPS
# ============================================

# 1. Check evals regularly - run "npm run evals"
# 2. Review analytics daily - visit /ops
# 3. Update RAG knowledge - edit /api/rag-search.js
# 4. Monitor costs - check /ops Costs tab
# 5. Test voice quality - use /ops Voice tab
# 6. Track security - check /ops Security tab
# 7. Improve prompts - based on eval results
# 8. Backup dashboard data - run "npm run ops:export"

echo "✅ All commands ready! Start with: npm run dev"
