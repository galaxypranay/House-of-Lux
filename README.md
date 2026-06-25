# House of Lux — Landing Page

Landing page for **House of Lux** (by Anupam Sharma) — Gola Road, Patna.
Plain HTML/CSS/JS, no build step, no framework. Deploy karna bahut easy hai.

## Files
- `index.html` — page structure
- `style.css` — saara design (3D hero, colors, layout)
- `script.js` — mouse-tilt 3D effect + WhatsApp order form

## 1. GitHub par push karna

```bash
cd houseoflux-landing
git init
git add .
git commit -m "House of Lux landing page"
```

Phir GitHub par naya **empty** repo banao (e.g. `houseoflux-landing`), aur:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/houseoflux-landing.git
git push -u origin main
```

## 2. Vercel par deploy karna

**Option A — Vercel dashboard se (sabse easy):**
1. https://vercel.com par login karo (GitHub se sign in)
2. "Add New Project" → apna `houseoflux-landing` repo select karo
3. Framework preset: **Other** (kyunki ye plain HTML hai)
4. Build command: empty rakho, Output directory: empty rakho
5. "Deploy" daba do — 30 second me live ho jayega, ek `.vercel.app` link milega

**Option B — CLI se:**
```bash
npm i -g vercel
cd houseoflux-landing
vercel
```
Saare prompts me default answer enter daba ke aage badh jao.

## 3. Apna number/handle update karna

Agar phone number, WhatsApp ya Instagram handle change karna ho, to dhoondo:
- `index.html` me — `wa.me/919060968792`, `instagram.com/houseoflux51`, `tel:+91...`
- `script.js` me — `const waNumber = "919060968792"`

Sab jagah same number daal dena, simple find & replace se ho jayega.

## 4. Custom domain (optional)

Vercel project ke "Settings → Domains" me jaake apna domain (e.g. `houseoflux.in`) add kar sakte ho — Vercel khud DNS records bata dega.
