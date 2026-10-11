# samirpuri.com.np

Personal portfolio site for **Samir Puri** — full-stack developer, Nepal.

Live: **https://samirpuri.com.np**

## Stack

Static HTML, CSS and vanilla JavaScript, built with [Vite](https://vitejs.dev).
No framework, no runtime dependencies — the built output is plain files.

## Layout

```
index.html                      the page (markup, <head> metadata, JSON-LD)
vite.config.js
public/
  manifest.json                 web app manifest
  fonts/                        Bebas Neue + Source Sans 3 (self-hosted woff2)
  assets/
    site.css                    the whole stylesheet
    js/main.js                  nav highlighting, scroll reveal,
                                mobile menu, skills-band pause control
    images/
      portrait-1000.jpg         hero portrait
      nepal-himalaya.jpg        Nepal band photograph
      nepal-pagoda.jpg          Nepal band plate
      nepal-flag.svg            official Flag of Nepal artwork
      favicon.svg               favicon (flag, 32×32 viewBox)
      favicon-96x96.png         PNG favicon
      apple-touch-icon.png      180×180
      icon-192.png, icon-512.png
      og-image.jpg              social share card (1200×630)
```

## Develop

```bash
npm install
npm run dev        # dev server with HMR
npm run build      # outputs to dist/
npm run preview    # serve the built output locally
```

## Deploy

Deployed to Vercel as the `samir-puri-portfolio` project:

```bash
vercel deploy --prod
```

## Credits

The Flag of Nepal artwork in `nepal-flag.svg` is the official construction from
the *Constitution of Nepal, Article 5, Schedule 1*, sourced from Wikimedia
Commons.

**Build by Samir Puri** — [samirpuri.com.np](https://samirpuri.com.np)
