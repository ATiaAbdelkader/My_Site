# Quick Reference Guide

## 🚀 Live Features

### Navigation
- **Smooth Scrolling**: Click any nav link to smoothly scroll to section
- **Active Link Highlighting**: Current section highlighted in nav
- **Mobile Menu**: Hamburger menu for mobile devices (click X to close)
- **Keyboard**: Press `Escape` to close mobile menu, `Ctrl+Home` for top

### Theme & Language
- **Dark/Light Mode**: Toggle button in navbar (saves preference)
- **Language**: AR/EN toggle (structure ready for full implementation)

### Projects Section
- **Filtering**: Click buttons to filter by category
  - الكل (All)
  - بحث علمي (Research)
  - تطبيقات (Apps)
  - تدريب (Training)
  - ريادة أعمال (Business)

### Contact Form
- **Required Fields**: Name, Email, Subject, Message
- **Validation**: Automatic email validation
- **Toast Notifications**: Success/error messages appear at top
- **Social Links**: Updated with real URLs (modify in code if needed)

### Newsletter
- **Subscription**: Enter email and click "اشترك الآن"
- **Validation**: Email format checked
- **Confirmation**: Success message displayed

### Downloads
- **CV Button**: Click to download CV (add PDF file path)
- **Toast Feedback**: Status shown at top

---

## 🔧 How to Customize

### Update Contact Email
```javascript
// In HTML, find:
<div id="contactEmail" class="text-white text-sm">
  contact@abdelkader-atia.com
</div>
// Change to your actual email
```

### Update Phone Number
```html
<!-- Find this line and update: -->
<div class="text-white text-sm" dir="ltr">
  +213 XXX XXX XXX
</div>
```

### Update Social Media URLs
```javascript
// Find these lines and update URLs:
<a href="https://www.linkedin.com/in/your-profile" target="_blank">
<a href="https://twitter.com/your-handle" target="_blank">
<a href="https://www.facebook.com/your-page" target="_blank">
<a href="https://github.com/your-username" target="_blank">
```

### Add CV for Download
```javascript
// In downloadCV() function, update:
const cvUrl = 'your-cv-file.pdf'; // Put your CV file path here
```

### Update Project Links
```javascript
// In projects data, update the 'link' property:
{ name: 'Project Name', ..., link: '/project-page-or-url' }
```

### Modify Colors
Edit Tailwind colors in the `<script>` section:
```javascript
colors: {
  navy: { 900: '#0a0e27', ... },
  cyan: { 400: '#22d3ee', ... },
  gold: { 400: '#fbbf24', ... }
}
```

---

## 📊 Data Structures

### Projects Object
```javascript
{
  name: 'Project Name',
  desc: 'Description',
  cat: 'app|research|training|business',
  icon: 'emoji',
  link: 'url-or-hash'
}
```

### Testimonials Object
```javascript
{
  text: 'Quote text',
  author: 'Full Name',
  role: 'Job Title',
  initials: 'AA',
  color: 'from-cyan-500 to-cyan-600',
  rating: 5
}
```

---

## 🎯 Form Handling

### Contact Form
Currently shows success message locally. To send emails:
1. Use a backend service (Node.js, Python, PHP)
2. Or use a service like Formspree, Emailjs
3. Add API call in `handleContact()` function

### Newsletter
Currently logs data to console. To save subscriptions:
1. Connect to database
2. Use email service for confirmation
3. Add API call in `subscribeNewsletter()` function

---

## 📱 Responsive Breakpoints

```css
Mobile-first design:
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md, lg)
- Desktop: 1024px+ (xl)
```

---

## 🎨 CSS Classes Reference

### Layout
- `section-padding` - Standard section padding
- `max-w-7xl` - Max width container

### Cards
- `glass-card` - Frosted glass effect with hover
- `glass` - Basic glass effect

### Buttons
- `btn-primary` - Cyan gradient button
- `btn-outline` - Outlined button
- `btn-gold` - Gold gradient button

### Text
- `gradient-text` - Cyan-to-gold gradient text
- `gradient-border` - Gradient underline

---

## 🔍 Debugging Tips

1. **Check Console**: `F12` → Console tab for errors
2. **Check Local Storage**: 
   ```javascript
   localStorage.getItem('theme') // 'dark' or 'light'
   localStorage.getItem('language') // 'ar' or 'en'
   ```
3. **Test Mobile**: Use browser DevTools (F12 → Toggle Device Toolbar)
4. **Performance**: Check Lighthouse in DevTools

---

## 📝 Future Enhancements

- [ ] Add project detail pages
- [ ] Blog post management system
- [ ] Backend API integration
- [ ] Email service integration
- [ ] Analytics tracking
- [ ] Image optimization
- [ ] PWA support
- [ ] Dark mode specific images
- [ ] Internationalization (i18n)
- [ ] CMS integration

---

**Last Updated**: April 21, 2026
