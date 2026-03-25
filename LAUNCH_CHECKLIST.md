# Evoke Power Launch Checklist

## 1) Domain and Hosting
- Connect production domain: `www.evokepower.in`
- Connect staging domain: `staging.evokepower.in`
- Enable Force HTTPS and HSTS in Netlify
- Configure branch deploys (`main` -> production, `staging` -> staging)

## 2) Form Capture (No Custom Backend)
- Netlify Forms is enabled in the form markup
- Configure Netlify form email notifications to sales inbox
- Connect Netlify Forms webhook to CRM (HubSpot/Zoho/Salesforce)
- Add bot defense key (Cloudflare Turnstile or hCaptcha) and verify before submit

## 3) Analytics and Ad Tracking
- Replace `G-XXXXXXXXXX` with your GA4 Measurement ID in main HTML
- Add Google Ads/Meta/LinkedIn pixels as required
- Verify events in GA4 DebugView:
  - `cta_click`
  - `calculator_interaction`
  - `form_start`
  - `form_submit`
- Confirm UTM fields are visible in form submissions

## 4) Legal and Company Data
- Replace placeholders in `privacy.html` and `terms.html`:
  - legal entity name
  - registered address
  - GSTIN/CIN
  - jurisdiction city
- Confirm legal pages are linked in footer and form consent copy

## 5) Monitoring and Reliability
- Add uptime checks (UptimeRobot/Pingdom) for `/`
- Add weekly export/backup for form submissions
- Set alert notifications to email/Slack

## 6) SEO Validation
- Submit `sitemap.xml` in Google Search Console
- Verify `robots.txt` is accessible
- Add final OG image at `/og-image.jpg`
- Run Lighthouse on mobile and desktop (target >= 90 for Performance, SEO, Best Practices)

## 7) Optional Performance Hardening
- Compress hero image and OG image (WebP/AVIF where possible)
- Consider moving inline CSS/JS to external minified files
- Re-test Core Web Vitals after deployment
