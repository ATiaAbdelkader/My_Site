# Google Analytics 4 Setup Guide

## 📊 What is GA4?
Google Analytics 4 (GA4) is the latest analytics platform that tracks user interactions with your site and provides insights about user behavior, traffic sources, and conversion tracking.

## 🚀 Setup Steps

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Admin" (bottom left)
4. Click "Create Property"
5. Enter property name: "Abdelkader Atia Website"
6. Select timezone and currency
7. Click "Create"

### Step 2: Set Up Data Stream

1. Go to "Data Streams"
2. Click "Add Stream" > "Web"
3. Enter your website URL: `https://yourdomain.com`
4. Stream name: "Website Traffic"
5. Click "Create Stream"
6. Copy the **Measurement ID** (starts with `G-`)

### Step 3: Add Tracking Code to Website

Add this code to the `<head>` section of both HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'page_path': window.location.pathname,
    'anonymize_ip': true
  });
</script>
```

**Replace `G-XXXXXXXXXX` with your Measurement ID**

### Step 4: Set Up Events

Add custom event tracking in your JavaScript:

```javascript
// Track contact form submission
function trackContactSubmission() {
  gtag('event', 'form_submit', {
    'form_name': 'contact_form',
    'form_id': 'contactForm'
  });
}

// Track newsletter signup
function trackNewsletterSignup() {
  gtag('event', 'newsletter_signup', {
    'method': 'email'
  });
}

// Track CV download
function trackCVDownload() {
  gtag('event', 'file_download', {
    'file_name': 'CV_AbdelkaderAtia.pdf'
  });
}

// Track project view
function trackProjectView(projectName) {
  gtag('event', 'view_item', {
    'items': [
      {
        'id': projectName,
        'name': projectName,
        'category': 'project'
      }
    ]
  });
}
```

### Step 5: Add Event Tracking to HTML

```html
<!-- Contact Form -->
<form id="contactForm" onsubmit="handleContact(event); trackContactSubmission();">
  ...
</form>

<!-- Newsletter Button -->
<button onclick="subscribeNewsletter(); trackNewsletterSignup();">
  Subscribe
</button>

<!-- CV Download Button -->
<button onclick="downloadCV(); trackCVDownload();">
  Download CV
</button>
```

### Step 6: Set Up Conversions

1. Go to "Admin" > "Events"
2. Click "Create event"
3. Name: "contact_form_submit"
4. Event name: "form_submit"
5. Click "Create"

### Step 7: Create Goals/Conversions

1. Go to "Admin" > "Conversions"
2. Click "New conversion event"
3. Select events like:
   - form_submit
   - newsletter_signup
   - file_download

## 📈 Key Metrics to Track

| Metric | Event | Purpose |
|--------|-------|---------|
| Page Views | automatic | Track overall traffic |
| Session Duration | automatic | User engagement |
| Bounce Rate | automatic | Content relevance |
| Form Submissions | form_submit | Lead generation |
| Newsletter Signups | newsletter_signup | Audience growth |
| CV Downloads | file_download | Interest indicator |
| Project Views | view_item | Content interest |
| Social Clicks | outbound_link_click | Engagement |

## 📱 Mobile & Desktop Tracking

GA4 automatically tracks:
- Device type (mobile, desktop, tablet)
- Browser and OS
- Geographic location
- Language
- Traffic source (organic, direct, referral, paid)

## 🔍 View Reports

1. Go to "Reports"
2. Explore default reports:
   - **Realtime**: Live user activity
   - **Users**: User demographics and behavior
   - **Acquisition**: How users find your site
   - **Engagement**: User interactions
   - **Conversions**: Goal completions

## 🎯 Advanced Setup (Optional)

### UTM Parameters

Add to social media links:
```
https://yourdomain.com?utm_source=linkedin&utm_medium=social&utm_campaign=profile
https://yourdomain.com?utm_source=twitter&utm_medium=social&utm_campaign=profile
```

### Email Campaign Tracking

```
https://yourdomain.com?utm_source=newsletter&utm_medium=email&utm_campaign=apr2026
```

### A/B Testing

```javascript
// Test two CTAs
function getVariant() {
  const variant = Math.random() > 0.5 ? 'A' : 'B';
  gtag('event', 'ab_test', {
    'test_name': 'cta_button',
    'variant': variant
  });
  return variant;
}
```

## ⏱️ Timeline

- **Day 1**: Tracking is live immediately
- **Day 2-7**: Data starts appearing in reports
- **Week 2+**: Meaningful insights emerge

## 🚀 Success Metrics

- Visitors per month: Target 500+
- Bounce rate: < 50%
- Avg session duration: > 1 minute
- Conversion rate: > 2%
- Mobile traffic: 60%+

## 🔗 Resources

- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Event Configuration](https://support.google.com/analytics/answer/11091066)
- [UTM Parameters](https://support.google.com/analytics/answer/1033173)
- [GA4 Debugger](https://chromewebstore.google.com/detail/google-analytics-debugger)

## ✅ Checklist

- [ ] Create GA4 property
- [ ] Generate Measurement ID
- [ ] Add tracking code to index.html
- [ ] Add tracking code to index-en.html
- [ ] Set up form submission tracking
- [ ] Set up newsletter signup tracking
- [ ] Set up CV download tracking
- [ ] Create conversion goals
- [ ] Test with GA4 debugger
- [ ] Verify data in real-time report
