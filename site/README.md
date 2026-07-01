# Revytal Next Static Migration

This folder is the rollback-safe React/Next static-export migration for Revytal.

The existing static site at the repository root and `index_v3/` remains the production fallback. This app builds to `site/out/` and does not replace the current GitHub Pages setup until a later cutover.

## Commands

```powershell
npm install
npm run dev
npm run typecheck
npm run build
```

Payload CMS is intentionally deferred for this pass.
