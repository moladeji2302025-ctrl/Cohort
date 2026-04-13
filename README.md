# Cohort — NIGCOMSAT Accelerator History & Alumni Portal

## Vercel Deployment Checklist

Use this checklist when deploying or troubleshooting the production Vercel URL.

### Dashboard Settings

| Setting | Required Value | Notes |
|---|---|---|
| **Framework Preset** | `Next.js` | Must **not** be `Other` or `Static HTML` |
| **Root Directory** | `.` (repo root) | `app/` lives at the repo root, not inside `src/` |
| **Build Command** | `next build` (default) | Do not override unless intentional |
| **Output Directory** | `.next` (default) | Do not change — overriding this breaks Vercel detection |
| **Install Command** | `npm install` (default) | — |
| **Node.js Version** | 20.x (LTS) | `@types/node` is pinned to `^20` in `package.json` |

### Environment Variables (optional)

No required environment variables for the base deployment. If you ever want to make `basePath` configurable without a code change, add:

```
NEXT_PUBLIC_BASE_PATH=/history
```

…and update `next.config.ts` to read `process.env.NEXT_PUBLIC_BASE_PATH`.

### Why `/` redirects to `/history`

`next.config.ts` sets `basePath: "/history"`. This means Next.js only handles routes
under `/history/*`. Without a redirect, visiting the root URL `/` returns `404: NOT_FOUND`.

The `redirects()` entry in `next.config.ts` sends visitors from `/` → `/history`
automatically, so the production URL works out of the box.

### Quick smoke-test after deploy

1. Visit the production URL (e.g. `https://cohort-xxx.vercel.app/`) — should redirect to `.../history`.
2. Visit `.../history` directly — should show the home page.
3. Check Vercel build logs for `Route (app)` — the `/history` route must be present.

---