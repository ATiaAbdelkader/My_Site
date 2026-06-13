# Image Optimization Guide

## 📊 Current Status
- CSS minified: ✅ `assets/css/style.min.css`
- JS minified: ⏳ In progress (terser installing)
- Images: Awaiting optimization

## 🖼️ Image Optimization Setup

### Step 1: Organize Images
```
assets/images/
├── projects/          # Project screenshots
├── testimonials/      # Profile pictures
├── gallery/          # Portfolio gallery
├── hero/            # Hero section images
└── logos/           # Logos and icons
```

### Step 2: Compression Tools

#### Windows Tools:
- **ImageMagick**: `choco install imagemagick`
- **FFmpeg**: For video thumbnails
- **Online**: TinyPNG, ImageOptim

#### npm Tools:
```bash
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant
```

### Step 3: Add Lazy Loading to HTML

```html
<!-- Before -->
<img src="assets/images/project.jpg" alt="Project name">

<!-- After -->
<img src="assets/images/placeholder.jpg" data-src="assets/images/project.jpg" alt="Project name" loading="lazy" class="lazy-load">
```

### Step 4: Lazy Load Script

Add to your JavaScript:

```javascript
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy-load');
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Call on load
window.addEventListener('load', initLazyLoading);
```

### Step 5: Responsive Images

```html
<picture>
  <source srcset="assets/images/hero-small.webp" media="(max-width: 768px)" type="image/webp">
  <source srcset="assets/images/hero-large.webp" media="(min-width: 768px)" type="image/webp">
  <img src="assets/images/hero-fallback.jpg" alt="Hero image" loading="lazy">
</picture>
```

### Step 6: WebP Conversion

Use online tool or command:
```bash
cwebp -q 80 input.jpg -o output.webp
```

## 📈 Optimization Targets

| Metric | Target | Method |
|--------|--------|--------|
| JPG Quality | 75-85% | Use 80% quality |
| PNG | Reduce colors | Use pngquant |
| Format | WebP | Convert with cwebp |
| Size | < 100KB each | Compress and resize |
| Loading | Lazy load | Use intersection observer |

## 🚀 Performance Impact

**Before Optimization:**
- Images: 500KB+ total
- Load time: 2-3 seconds
- Performance score: 70-75

**After Optimization:**
- Images: < 150KB total
- Load time: < 1 second
- Performance score: 90+

## 📋 Action Items

- [ ] Create `assets/images/` folder structure
- [ ] Export or capture project screenshots (600x400px)
- [ ] Compress images to 80KB max
- [ ] Convert to WebP format
- [ ] Add lazy loading JavaScript
- [ ] Update HTML with lazy load attributes
- [ ] Test with Lighthouse
- [ ] Verify mobile performance

## 🔗 Resources

- [TinyPNG](https://tinypng.com) - Online compression
- [ImageOptim](https://imageoptim.com) - Mac tool
- [Squoosh](https://squoosh.app) - Google web tool
- [cwebp](https://developers.google.com/speed/webp/docs/cwebp) - CLI tool
- [MDN Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## 💡 Pro Tips

1. **Use `srcset`** for multiple screen sizes
2. **Lazy load below-the-fold** images
3. **Use modern formats** (WebP with fallback)
4. **Compress losslessly** for logos/icons
5. **Test on 3G** with DevTools throttling
6. **Monitor with PageSpeed** Insights
