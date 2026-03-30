

## Fix: Vercel 404 on Direct Page Access

This is a classic Single Page Application (SPA) routing issue. Your app uses React Router for client-side routing, but when you directly visit a URL like `/gharseva`, Vercel tries to find an actual file at that path — which doesn't exist. The fix is to tell Vercel to rewrite all requests to `index.html`.

### What to do

Create a `vercel.json` file in the project root with this content:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This tells Vercel to serve `index.html` for all routes, letting React Router handle the routing client-side.

### Steps
1. Create `vercel.json` in the project root with the rewrite rule above.
2. Redeploy on Vercel.

That's it — one file, one rule.

