# TURBO GYM – Website README

## Owner Checklist (things to do before launching)

### Finding all placeholder tokens
Run this command in the project folder to find every item that needs your input:

```bash
grep -r "\[\[OWNER" .
```

On Windows (PowerShell):
```powershell
Select-String -Path ".\*",".\**\*" -Pattern "\[\[OWNER" -Recurse
```

---

### 1. Details to supply

| Item | File | What to do |
|---|---|---|
| Domain / canonical URL | `index.html` (line with `rel="canonical"`) | Replace `[[OWNER: https://www.turbogym.et/]]` with your real domain |
| og:url | `index.html` (Open Graph block) | Same domain as above |
| og:image | `index.html` (Open Graph block) | Absolute URL to `assets/og-image.jpg` on your domain |
| Sitemap URL in robots.txt | `robots.txt` | Replace placeholder with your real sitemap URL |
| Sitemap URL in sitemap.xml | `sitemap.xml` | Replace placeholder with your real homepage URL |
| Favicon files | `assets/` | Add `favicon.ico`, `favicon.svg`, `apple-touch-icon.png` |
| Bilingual option | `index.html` (comment near bottom of `<head>`) | Decide yes/no for Amharic or Afaan Oromo translation |
| Privacy Policy / Terms | `index.html` (footer-bottom comment) | Add links if required by local law |
| Map embed | `index.html` (OPTIONAL-MAP comment in Visit section) | Uncomment and add Google Maps embed URL once verified |
| Social media links | `index.html` (OPTIONAL-SOCIAL-LINKS comment in footer) | Uncomment and add Facebook / Instagram / TikTok URLs |
| Personal training | `index.html` (OPTIONAL-PERSONAL-TRAINING comment) | Uncomment and describe if offered |
| Group fitness | `index.html` (OPTIONAL-GROUP-FITNESS comment) | Uncomment and describe schedule and class types |
| Weight-management | `index.html` (OPTIONAL-WEIGHT-MANAGEMENT comment) | Uncomment and describe program |

### 2. Photos to supply

Replace placeholder images in `assets/` with real TURBO GYM photos **before launch**. Never use stock photos live.

| Filename | Recommended size | Notes |
|---|---|---|
| `hero-gym.jpg` | ~1600 × 900 px, under 200 KB | Wide landscape shot of the gym floor. Shown above the fold. |
| `gallery-1.jpg` | ~800 × 533 px, under 120 KB each | Any gym area — weights, machines, floor |
| `gallery-2.jpg` | Same | Cardio zone or treadmills |
| `gallery-3.jpg` | Same | Squat rack / power rack area |
| `gallery-4.jpg` | Same | Wide floor shot |
| `gallery-5.jpg` | Same | Equipment detail or functional area |
| `gallery-6.jpg` | Same | Any remaining gym area |
| `og-image.jpg` | 1200 × 630 px, under 200 KB | Used in WhatsApp/Facebook link previews |

**After adding real photos:** update the `alt` text in `index.html` for each `<img>` to describe the real photo accurately. Search for `alt=` to find them all.

---

## How to change things

### Phone number
The phone number appears in **two places** in the code. Search for `251999087712` (international format without `+`) to find both:
1. All `href="tel:+251999087712"` links
2. All `href="https://wa.me/251999087712..."` links
3. The `"telephone"` field in the JSON-LD `<script>` block
4. The visible display number `0999 087 712` — search for this exact string

**Also update `script.js`:** find `var WA_NUMBER = '251999087712';` and change the value.

### Prices
Every price appears in the HTML only inside the `#memberships` section. Search for these strings:
- `150` (Daily)
- `1,500` (Monthly)
- `4,000` (3 months)
- `7,500` (6 months)

The WhatsApp plan buttons read the plan name and price from their own `data-plan` and `data-price` attributes. Update those attributes and the visible text in the same card at the same time. Example:
```html
<span class="price-amount">1,500</span>
...
data-price="1,500"
```
The `script.js` file will automatically build the correct message from these attributes.

### Adding a price plan (e.g. yearly)
1. Copy one `<article class="pricing-card">` block in `index.html`.
2. Update the `id` on the `<h3>` (must be unique).
3. Set the correct `data-plan` and `data-price` attributes on the button.
4. Update the static `href` fallback on the button.

### Adding or removing services
Default-on services are in `<ul class="services-list">`. Commented-out services are labelled `OPTIONAL-*`. To add, uncomment and fill in the description. To remove, delete the `<li>` entirely.

### Opening hours & Live Gym Status
The website features a real-time **Live Gym Status** badge with an animated pulsing indicator (`Open Now`, `Closing Soon`, `Closed Now`) calculated automatically based on **Ethiopia Local Time (East Africa Time, UTC+3)**.
- Default hours: **6:00 AM to 6:00 PM (12 hours daily)**.
- To change the clock hours, open `script.js` and edit `const GYM_HOURS`:
  ```javascript
  const GYM_HOURS = {
    openHour: 6,   // 6:00 AM
    closeHour: 18  // 6:00 PM
  };
  ```
- The status automatically updates in real-time every 30 seconds and switches language seamlessly.

### Multilingual Support (English, Afaan Oromoo, Amharic)
The website includes an instant 3-language switcher in the header:
- **EN** (English)
- **OR** (Afaan Oromoo)
- **አማ** (Amharic with crisp Noto Sans Ethiopic typography)
- All translations and localized WhatsApp inquiry messages are located in `script.js` inside `TRANSLATIONS`. You can edit or refine any phrase directly in `script.js`.

---

## Launch steps

### Option A: GitHub Pages (free, no server needed)
1. Create a free GitHub account at github.com.
2. Create a new public repository (e.g. `turbo-gym`).
3. Upload all files maintaining the same folder structure.
4. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**.
5. GitHub will publish the site at `https://yourusername.github.io/turbo-gym/`.

### Option B: Custom domain + GitHub Pages
1. Buy a `.et` domain from a local registrar, or any `.com` / `.gym` domain.
2. In GitHub Pages settings, enter your custom domain.
3. At your domain registrar, create a CNAME record pointing to `yourusername.github.io`.
4. Enable **Enforce HTTPS** in GitHub Pages settings (wait for certificate, ~15 min).
5. Update all `[[OWNER: ...]]` domain tokens in `index.html`, `robots.txt`, `sitemap.xml`.

### HTTPS
GitHub Pages provides HTTPS automatically. Any hosting provider (Netlify, Vercel, Firebase Hosting) also provides free HTTPS. Never launch without HTTPS — WhatsApp link previews require it.

### Google Search Console
1. Go to search.google.com/search-console.
2. Add your site as a **URL-prefix** property (e.g. `https://www.turbogym.et/`).
3. Verify ownership (HTML file method is simplest — just upload the file Google gives you).
4. Submit your sitemap: **Sitemaps → Add sitemap → enter `sitemap.xml`**.

### Google Business Profile
1. Go to business.google.com.
2. Search for "TURBO GYM Dukem" — claim if found, or create new.
3. Add: phone number, opening hours (once you know clock times), photos.
4. Add your website URL once it is live.
5. A verified Google Business Profile makes TURBO GYM appear on Google Maps.

---

## Phone number locations (for future reference)
All occurrences of the phone number in this project:

| File | Format | Context |
|---|---|---|
| `index.html` | `tel:+251999087712` | All `href="tel:..."` call links |
| `index.html` | `wa.me/251999087712` | All WhatsApp links (static fallback) |
| `index.html` | `0999 087 712` | Visible display text (Visit section + footer) |
| `index.html` | `+251999087712` | JSON-LD schema telephone field |
| `script.js`  | `251999087712` | `var WA_NUMBER` constant |

**Total files containing the phone number: 2** (`index.html` and `script.js`).
"# CROWN-GYM-ET" 
