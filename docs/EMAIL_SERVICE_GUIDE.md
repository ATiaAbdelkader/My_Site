# Email Service Integration Guide

## 📧 Overview

This guide covers integrating SendGrid email service for:
- Contact form submissions
- Newsletter signup confirmations
- Email notifications

## 🔧 Step 1: Create SendGrid Account

1. Go to [SendGrid](https://sendgrid.com)
2. Click "Sign up free"
3. Complete registration with your email
4. Verify email address
5. Select "I'm here to send emails"
6. Accept terms and complete setup

## 🔑 Step 2: Get API Keys

1. Go to Settings > API Keys
2. Click "Create API Key"
3. Name: "Website Contact Form"
4. Select permissions: "Mail Send"
5. Create and copy the key
6. **Save this securely** (you'll need it)

## 💻 Step 3: Backend Setup (Node.js Example)

Create a `contact-handler.js` file:

```javascript
const nodemailer = require('nodemailer');

// SendGrid SMTP configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});

// Handle contact form
async function handleContactEmail(data) {
  try {
    const mailOptions = {
      from: 'noreply@yourdomain.com',
      to: 'contact@yourdomain.com',
      replyTo: data.email,
      subject: `New Contact: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send admin notification
    await transporter.sendMail(mailOptions);

    // Send user confirmation
    await transporter.sendMail({
      from: 'noreply@yourdomain.com',
      to: data.email,
      subject: 'Thank you for contacting us',
      html: `
        <h2>Thank you, ${data.name}!</h2>
        <p>We received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Dr. Abdelkader Atia</p>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: error.message };
  }
}

module.exports = handleContactEmail;
```

## 🌐 Step 4: Update Contact Form Handler

Update your JavaScript contact handler:

```javascript
function handleContact(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();
  const submitBtn = form.querySelector('button[type="submit"]');

  // Validation
  if (!name || !email || !subject || !message) {
    showToast('⚠️ Please fill in all required fields', 'warning');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Invalid email address', 'warning');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Sending...</span>';

  // Send to your backend
  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, subject, message })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      showToast('✅ Message sent successfully!', 'success');
      form.reset();
    } else {
      showToast('❌ Failed to send message', 'warning');
    }
  })
  .catch(error => {
    showToast('❌ Network error. Please try again.', 'warning');
    console.error('Error:', error);
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message';
  });
}
```

## 📰 Step 5: Newsletter Signup

Update newsletter subscription:

```javascript
async function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value.trim();

  if (!email) {
    showToast('⚠️ Please enter your email address', 'warning');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Invalid email address', 'warning');
    return;
  }

  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (data.success) {
      showToast('✅ Subscribed successfully!', 'success');
      document.getElementById('newsletterEmail').value = '';
    } else {
      showToast('ℹ️ ' + (data.message || 'Already subscribed'), 'warning');
    }
  } catch (error) {
    showToast('❌ Subscription failed', 'warning');
    console.error('Error:', error);
  }
}
```

## 🚀 Step 6: Deploy Backend

Use a serverless solution:

### Option A: Firebase Functions

```javascript
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: functions.config().sendgrid.api_key
  }
});

exports.sendContactEmail = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const { name, email, subject, message } = req.body;

    await transporter.sendMail({
      from: 'noreply@yourdomain.com',
      to: 'contact@yourdomain.com',
      replyTo: email,
      subject: `Contact: ${subject}`,
      html: `<h2>${subject}</h2><p>From: ${name} (${email})</p><p>${message}</p>`
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});
```

### Option B: Vercel Functions

Create `api/contact.js`:

```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'contact@yourdomain.com' }],
          subject: `Contact: ${subject}`
        }],
        from: { email: 'noreply@yourdomain.com' },
        replyTo: { email: email },
        content: [{
          type: 'text/html',
          value: `<h2>${subject}</h2><p>From: ${name}</p><p>${message}</p>`
        }]
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    }
  } catch (error) {
    return res.status(500).json({ success: false });
  }
}
```

## 📋 Checklist

- [ ] Create SendGrid account
- [ ] Generate API key
- [ ] Save API key securely
- [ ] Install nodemailer/SDK
- [ ] Create backend endpoint
- [ ] Update contact form handler
- [ ] Test contact form
- [ ] Set up newsletter signup
- [ ] Create welcome email template
- [ ] Test on production

## 🔒 Security Tips

1. **Store API keys in environment variables**
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```

2. **Never commit API keys**
   ```
   # .gitignore
   .env
   .env.local
   ```

3. **Validate all input server-side**

4. **Rate limit requests**
   ```javascript
   const rateLimit = require('express-rate-limit');
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000,
     max: 5 // 5 requests per 15 minutes
   });
   app.post('/api/contact', limiter, handleContact);
   ```

5. **Use HTTPS only**

## 📊 Email Metrics

Track in SendGrid dashboard:
- Delivery rate: 99%+
- Open rate: 20-30%
- Click rate: 5-10%
- Bounce rate: < 1%

## 🔗 Resources

- [SendGrid Docs](https://docs.sendgrid.com)
- [SendGrid API Reference](https://docs.sendgrid.com/api-reference)
- [Nodemailer Docs](https://nodemailer.com)
- [Firebase Functions](https://firebase.google.com/docs/functions)
- [Vercel Functions](https://vercel.com/docs/functions/api)
