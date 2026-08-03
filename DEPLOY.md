# Deployment Instructions

The Orboretum website is deployed to GitHub Pages via GitHub Actions.

## Automatic Deployment

The site automatically deploys on every push to:
- `main` branch
- `claude/orboretum-level-1-accreditation-fwcfj3` branch

The GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and deploys it to GitHub Pages.

## Repository Settings

1. Go to **Settings → Pages**
2. Set **Source** to "Deploy from a branch"
3. Set **Branch** to `gh-pages` (created automatically by the workflow)
4. Set **Folder** to `/ (root)`

The site will be live at: `https://runfromrobots.github.io/orboretum`

## Local Testing

To test the production build locally:

```bash
npm run build
npm start
```

Then visit `http://localhost:3000`.

## Manual Deployment

If needed, you can manually trigger the deploy workflow:

1. Go to **Actions** tab on GitHub
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"
4. Choose your branch

## Static Export

The Next.js app is configured with `output: 'export'` to generate static HTML. This means:
- No server-side rendering
- Fast, lightweight deployment
- Works perfectly with GitHub Pages
- All pages are pre-rendered at build time

## Custom Domain

To use a custom domain (e.g., `theorboretum.org`):

1. Configure DNS records to point to GitHub Pages
2. Add the domain in **Settings → Pages → Custom domain**
3. Ensure HTTPS is enabled

## Troubleshooting

**Site not showing up after push:**
- Check the Actions tab to see if the build passed
- Verify the gh-pages branch exists
- Clear browser cache

**Links not working:**
- Ensure relative links are used (`/page` not `page`)
- Check that all pages are correctly exported as static HTML

**Styling issues:**
- Clear Next.js cache: `rm -rf .next out`
- Rebuild: `npm run build`
