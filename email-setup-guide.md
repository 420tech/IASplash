# Email Setup Guide for AcelRater Waitlist

## Option 1: Formspree (Recommended - Free & Easy)

### Setup Steps:

1. **Go to [Formspree.io](https://formspree.io)**
2. **Sign up for a free account**
3. **Create a new form**
4. **Copy your form endpoint** (looks like: `https://formspree.io/f/xpznvqko`)
5. **Replace `YOUR_FORM_ID` in index.html** with your actual form ID

### In index.html, change this line:
```html
<form id="waitlistForm" class="waitlist-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### To:
```html
<form id="waitlistForm" class="waitlist-form" action="https://formspree.io/f/xpznvqko" method="POST">
```
(Replace `xpznvqko` with your actual form ID)

### Features:
- ✅ **Free**: 50 submissions/month
- ✅ **Email notifications**: Get emails when someone signs up
- ✅ **Spam protection**: Built-in spam filtering
- ✅ **Export data**: Download CSV of all submissions
- ✅ **Custom thank you page**: Redirects to your thank-you.html

---

## Option 2: Netlify Forms (Alternative)

If you move to Netlify hosting:

1. **Add `netlify` attribute to form**:
```html
<form netlify name="waitlist" action="/thank-you.html">
```

2. **Deploy to Netlify** instead of GitHub Pages

---

## Option 3: EmailJS (Client-side email)

For sending emails directly from the browser:

1. **Sign up at [EmailJS.com](https://emailjs.com)**
2. **Set up email service** (Gmail, Outlook, etc.)
3. **Add EmailJS script** to your HTML
4. **Update JavaScript** to use EmailJS

---

## Recommended: Start with Formspree

**Formspree is the easiest option** for your current GitHub Pages setup. Just:

1. Sign up at formspree.io
2. Create a form
3. Replace `YOUR_FORM_ID` in index.html
4. Push to GitHub
5. Done! You'll get emails when people sign up.

## What You'll Receive:

When someone signs up, you'll get an email with:
- First Name
- Last Name  
- Email Address
- Company (if provided)
- Role
- Timestamp
- Subject: "New AcelRater Waitlist Signup"

The user will be redirected to your beautiful thank-you page after submitting!