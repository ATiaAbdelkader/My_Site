# Abdelkader Atia - Personal Website

Bilingual personal website for Abdelkader Atia, PhD Researcher & Agricultural Innovator.

## Features

- **Bilingual Support**: Arabic (RTL) and English (LTR) versions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes
- **Accessibility**: ARIA labels, skip-to-content links, keyboard navigation
- **SEO Optimized**: Structured data (JSON-LD), Twitter Cards, canonical URLs, sitemap
- **Print Friendly**: Optimized CSS for printing

## Project Structure

```
E:\My Site ATia\
├── index.html              # Arabic version (RTL)
├── index-en.html           # English version (LTR)
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   ├── main-ar.js      # Arabic JavaScript
│   │   └── main-en.js      # English JavaScript
│   └── images/             # Image assets
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── package.json            # Build scripts
└── .gitignore              # Git ignore rules
```

## Setup

1. Clone or download the project
2. Open `index.html` (Arabic) or `index-en.html` (English) in a browser
3. For development with live reload:
   ```bash
   npm install
   npm run dev
   ```

## Build Scripts

```bash
# Start local development server
npm run dev

# Minify CSS
npm run minify-css

# Minify JavaScript
npm run minify-js
```

## Customization

### Colors
Edit the Tailwind config in the `<script>` tag in each HTML file:
```javascript
colors: {
  navy: { 900: '#0a0e27', 800: '#0f1538', 700: '#151d4a', 600: '#1b2660' },
  cyan: { 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2' },
  gold: { 400: '#fbbf24', 500: '#f59e0b' }
}
```

### Content
- Edit projects data in `assets/js/main-ar.js` and `assets/js/main-en.js`
- Update testimonials in the same files
- Modify HTML content directly in `index.html` and `index-en.html`

### Contact Form
The contact form currently logs to console. To enable actual email sending:
1. Integrate with Formspree, Netlify Forms, or a custom backend
2. Update the `handleContact` function in the JS files

## Deployment

Deploy to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect to Git repository
- **GitHub Pages**: Push to gh-pages branch
- **Static server**: Use `npm run dev` or any static file server

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use for personal projects.
