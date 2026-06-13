console.log(`
╔══════════════════════════════════════════════════════════════╗
║         Abdelkader Atia Website - QA Checklist              ║
╚══════════════════════════════════════════════════════════════╝

Instructions: Test each item and mark [PASS] or [FAIL]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. NAVIGATION & ROUTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Homepage (index.html) loads without errors
[ ] English version (index-en.html) loads without errors
[ ] Language switch redirects correctly (AR → EN, EN → AR)
[ ] 404 page works for unknown routes
[ ] Privacy policy page loads
[ ] Terms of service page loads
[ ] All nav links scroll to correct sections
[ ] Mobile hamburger menu opens/closes
[ ] Active nav link highlights on scroll

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. THEME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Dark mode is default
[ ] Theme toggle switches to light mode
[ ] Theme persists on page reload (localStorage)
[ ] All sections render correctly in dark mode
[ ] All sections render correctly in light mode

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. DYNAMIC CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Projects grid renders with 9 items
[ ] Project filtering works (All/Research/Apps/Training/Business)
[ ] Testimonials carousel auto-rotates
[ ] Testimonials pause on hover
[ ] Gallery renders with 9 items
[ ] Gallery filtering works
[ ] Case studies render with challenge/solution/results
[ ] FAQ accordion opens/closes
[ ] Counter animation triggers on scroll (10, 25, 500)
[ ] Skills progress bars animate on scroll

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. BLOG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Blog grid renders with 6 articles
[ ] Each article shows category, title, summary, date
[ ] "Read More" opens article modal
[ ] Article modal shows full content
[ ] Close modal with X button works
[ ] Close modal with Escape key works
[ ] Close modal by clicking overlay works
[ ] Articles have correct Arabic content
[ ] Articles have correct English content

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. CONTACT & FORMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Contact form validates empty fields
[ ] Contact form validates email format
[ ] Loading state shows on submit
[ ] Newsletter subscription validates email
[ ] Newsletter detects duplicate email
[ ] Newsletter saves to localStorage
[ ] Toast notifications display correctly (info/warning/success)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. CHATBOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Chat widget toggle button is visible
[ ] Chat window opens/closes correctly
[ ] Send message shows typing indicator
[ ] Chatbot responds to messages
[ ] Greeting detection works
[ ] Knowledge base queries return relevant info
[ ] Voice button is present
[ ] Conversation persists on page reload (localStorage)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. SOCIAL SHARING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Share modal opens
[ ] Twitter/X share opens popup
[ ] LinkedIn share opens popup
[ ] Facebook share opens popup
[ ] Copy link copies to clipboard
[ ] Close share modal works

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. OPS DASHBOARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] /ops page shows login screen
[ ] Wrong password shows error
[ ] 5 failed attempts lock the dashboard
[ ] Correct password grants access
[ ] Overview tab shows metrics
[ ] Conversations tab shows data
[ ] Costs tab shows breakdown
[ ] Performance tab shows metrics
[ ] Security tab shows status
[ ] Evals tab shows scores
[ ] Logout clears session
[ ] Dashboard is excluded from search engines

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
9. PWA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Service worker registers
[ ] Pages load offline (if previously cached)
[ ] Install prompt appears (on supported browsers)
[ ] Manifest has correct metadata
[ ] App displays in standalone mode

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
10. RESPONSIVE DESIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Desktop (1920x1080): All sections display correctly
[ ] Tablet (768x1024): Responsive layout works
[ ] Mobile (375x667): Hamburger menu, stacked layout works
[ ] Timeline displays correctly on mobile
[ ] Grid items stack properly on small screens

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11. PERFORMANCE & SEO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Page loads in < 3s on 3G
[ ] Images/lazy loading functions
[ ] Structured data (JSON-LD) is injected
[ ] Meta tags are present (og:image, description, keywords)
[ ] Sitemap is accessible
[ ] robots.txt is accessible
[ ] AOS animations run on scroll

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Total passed: ___ / 80
[ ] Critical issues: ___
[ ] Ready for deployment: [YES/NO]
`);
