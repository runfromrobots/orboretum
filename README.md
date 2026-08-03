# The Orboretum

A new arboretum preserving and cultivating native and heritage trees on a historically significant landscape in the Mohawk Valley, NY.

## About

The Orboretum is a 200-acre property in Sprakers, NY, pursuing ArbNet Level I accreditation. We preserve native species, heritage cultivars, and educational plantings while honoring the property's layered history: pre-colonial Mohawk territory, Revolutionary War events, mid-20th century horticulture, and six decades of conservation stewardship.

## Project Status

This is a brand-new project in its early phases. The website is designed to:
- Establish credibility as a serious conservation institution
- Welcome visitors and orient them to the property
- Support educational programming and research partnerships
- Build community engagement and volunteer support
- Document our progress toward ArbNet Level I accreditation

## Tech Stack

- **HTML5** with semantic markup
- **CSS3** for styling (no framework dependencies)
- **JavaScript** (vanilla) for interactivity
- **Static site** — no build step required

## File Structure

```
index.html          - Home page
visit.html          - Visit information
collections.html    - Plant collections
education.html      - Educational programming
history.html        - Land acknowledgment and history
contact.html        - Contact and volunteer info
styles.css          - Shared styles
script.js           - Shared JavaScript
images/             - Images and assets (coming)
```

## Local Development

Simply open `index.html` in a browser, or run a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node (http-server)
npx http-server
```

Then visit `http://localhost:8000`

## Deployment to Vercel

### One-Time Setup

1. Push code to GitHub
   ```bash
   git push origin claude/orboretum-level-1-accreditation-fwcfj3
   ```

2. Go to https://vercel.com and sign in

3. Click "Add New..." → "Project"

4. Select "Import Git Repository" and choose `runfromrobots/orboretum`

5. Click "Import"

6. Click "Deploy"

Your site is now live at `https://orboretum.vercel.app`

### Automatic Deployment

Every push to GitHub automatically triggers a new deployment on Vercel.

### Custom Domain (Optional)

1. In your Vercel project settings, go to "Domains"
2. Add your domain (e.g., `theorboretum.org`)
3. Update your DNS records as instructed by Vercel
4. Vercel automatically provisions SSL

## Color Palette

- Forest Dark: `#0d2818`
- Forest Medium: `#1a3d2e`
- Creek: `#4a7c7e`
- Wheat (background): `#f5f1e8`

## Next Steps

- [ ] Add images (hero, collections, team)
- [ ] Plant directory with details
- [ ] Event calendar
- [ ] Blog/news updates
- [ ] Donation/support system
- [ ] Google Analytics
- [ ] Accessibility audit

## Contact

For questions or to get involved:
- Email: hello@theorboretum.org
- Location: 472 Anderson Road, Sprakers, NY 12166

---

*The Orboretum is a 501(c)(3) nonprofit in formation.*
