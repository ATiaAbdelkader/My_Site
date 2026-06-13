# 🌐 Language Switcher Guide

## Overview
Your portfolio now has full **bilingual support** with an English and Arabic version that seamlessly switch between each other.

## 📁 Files

| File | Language | Direction | Purpose |
|------|----------|-----------|---------|
| `Index.html` | Arabic (عربي) | RTL | Main Arabic version |
| `Index-EN.html` | English | LTR | English version |

## 🔄 How It Works

### Language Toggle Button
Located in the navbar (top-right), next to the theme toggle:
- **EN** button → Switches to English version (Index-EN.html)
- **AR** button → Switches to Arabic version (Index.html)

### User Preference Storage
- Language preference is saved in **LocalStorage**
- Default language: **Arabic** (ar) for Index.html, **English** (en) for Index-EN.html
- When users switch languages, the preference is saved for their next visit

### File Structure

```
Index.html              ← Default (Arabic) - Open this first
├─ Navbar with language toggle (AR/EN)
├─ When user clicks EN → Loads Index-EN.html
└─ Preference saved to localStorage

Index-EN.html          ← English version
├─ Navbar with language toggle (EN/AR)  
├─ When user clicks AR → Loads Index.html
└─ Preference saved to localStorage
```

## 🎯 Features

✅ **Seamless Switching** - Click language button to load the other version
✅ **Memory** - Browser remembers user's language preference
✅ **Active Button Indicator** - Shows which language is currently active
✅ **Independent Content** - Each version has its own optimized content
✅ **Same Design/Features** - Both versions maintain design and functionality

## 📊 Content Differences

### Arabic Version (Index.html)
- All text in Arabic (عربي)
- RTL layout (right-to-left reading)
- Cairo font (supports Arabic script)
- Optimized for Arabic users

### English Version (Index-EN.html)
- All text in English
- LTR layout (left-to-right reading)
- Poppins font (optimized for English)
- Optimized for English users

## 🚀 Deployment

### Option 1: Both Versions Live (Recommended)
Upload both files to your server:
```
your-domain.com/Index.html       ← Arabic (default)
your-domain.com/Index-EN.html    ← English
```

### Option 2: URL-based Selection
Set up redirects or use query parameters:
```
your-domain.com/?lang=en         → English
your-domain.com/?lang=ar         → Arabic (default)
```

### Option 3: Subdomain/Path
```
your-domain.com/ar/index.html    ← Arabic
your-domain.com/en/index.html    ← English
```

## 💡 How to Customize

### Change Default Language
For Index.html (Arabic), find this line in JavaScript:
```javascript
const savedLang = localStorage.getItem('language') || 'ar';
```

For Index-EN.html (English), find this line:
```javascript
const savedLang = localStorage.getItem('language') || 'en';
```

### Modify Language Toggle Function
In both files, locate `setLanguage()` function to customize the switching behavior.

## 🔧 Testing

### Test Language Switching
1. Open `Index.html` in browser
2. Click **EN** button → Should load `Index-EN.html`
3. Click **AR** button → Should load `Index.html`
4. Check browser console → Should see localStorage entries

### Check LocalStorage
Open browser DevTools → Application → LocalStorage → Find `language` key

## 📱 Mobile Responsive

Language toggle is:
- ✅ Hidden on mobile screens (< 640px)
- ✅ Visible on tablets and desktop (≥ 640px)
- ✅ Works perfectly on all devices

**Note:** Mobile users can add sites to home screen where language preference is remembered

## ⚠️ Important Notes

1. **File Names Matter** - Don't rename files without updating the `setLanguage()` function
2. **LocalStorage Clearing** - If user clears browser data, language preference resets
3. **Absolute Paths** - File paths in `setLanguage()` use relative paths (same directory)
4. **Browser Compatibility** - Requires localStorage support (all modern browsers ✅)

## 🎨 Styling Notes

Both versions maintain:
- Same color scheme (Navy, Cyan, Gold)
- Same glassmorphism design
- Same animations and transitions
- Same responsive breakpoints
- Different fonts optimized for each language

### Font Differences
- **Arabic Version**: Cairo (Google Fonts) - Better for Arabic text
- **English Version**: Poppins (Google Fonts) - Better for English text

## 📈 Analytics Tip

To track language preference in analytics:
```javascript
// Add this to track language changes
window.addEventListener('storage', (e) => {
  if (e.key === 'language') {
    console.log('Language changed to:', e.newValue);
    // Send to analytics
  }
});
```

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Language button not working | Check file names match exactly |
| Language preference not saving | Check localStorage is enabled |
| Wrong language loads | Verify setLanguage() function paths |
| Styling looks off | Check font loading (Cairo vs Poppins) |

## 📞 Quick Reference

**To switch languages:** Click **EN** or **AR** button in navbar
**To check current language:** Look at which button has cyan background
**To reset preference:** Clear browser LocalStorage and reload

---

**Last Updated**: April 2026
**Version**: 2.0 - Full Bilingual Support
