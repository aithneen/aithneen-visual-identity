# AITHNEEN Full Visual Identity

Canonical visual identity showcase and hosted asset library.

## Structure

- `index.html` - site entry point
- `assets/css/` - website styles
- `assets/js/` - website behavior and asset catalog rendering
- `assets/fonts/` - all Thmanyah web fonts and shared typography CSS
- `fonts/` - backwards-compatible alias for existing shared font URLs
- `assets/logos/` - complete V5 logo pack, icons, previews, and manifest
- `assets/portraits/` - complete portrait archive and manifest
- `docs/` - identity lock and font licenses
- `_headers` - Cloudflare Pages CORS and caching rules

## Shared Typography

```html
<link
  rel="stylesheet"
  href="https://aithneen-visual-identity.pages.dev/assets/fonts/aithneen-thmanyah.css"
>
```

Complete machine-readable catalog:

`https://aithneen-visual-identity.pages.dev/assets/catalog.json`

## Local Preview

```powershell
python -m http.server 8765 --directory AITHNEEN_FULL_VISUAL_IDENTITY
```
