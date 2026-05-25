# PDF Tools

Unlock password-protected PDFs and resize PDFs/images — entirely in your browser. **Your files never leave your device.**

## Features

- **Unlock PDFs** — Remove passwords from encrypted PDFs
- **Resize PDFs** — Compress PDFs to a target file size
- **Resize Images** — Compress JPG/PNG/WebP images to a target size
- **100% Private** — All processing happens in your browser using JavaScript
- **Works Offline** — After first load, works without internet (PWA with service worker)
- **Mobile Friendly** — Works on iOS Safari, Android Chrome, and desktop browsers

## How to Deploy on GitHub Pages

1. Create a new GitHub repository (e.g., `pdf-tools`)
2. Push this folder's contents to the repo:

```bash
cd github-pages
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pdf-tools.git
git push -u origin main
```

3. Go to your repo on GitHub → **Settings** → **Pages**
4. Under "Source", select **Deploy from a branch**
5. Select **main** branch, **/ (root)** folder, click **Save**
6. Wait ~1 minute, your site will be live at: `https://YOUR_USERNAME.github.io/pdf-tools/`

## Add to Home Screen (iOS/Android)

Once the site is live, open it in Safari (iOS) or Chrome (Android):
- **iOS**: Tap Share → "Add to Home Screen"
- **Android**: Tap menu → "Add to Home Screen" or "Install app"

This gives you an app-like experience with an icon on your home screen.

## Technology

- [pdf.js](https://mozilla.github.io/pdf.js/) — Mozilla's PDF renderer (loaded from CDN)
- [jsPDF](https://github.com/parallax/jsPDF) — PDF generation in JavaScript (loaded from CDN)
- Service Worker for offline caching
