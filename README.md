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

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** TypeScript (pages), CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

### Production Build (Local Testing)

```bash
npm run build
npm start
```

## Deployment to Vercel

### One-Time Setup

1. Push code to GitHub
   ```bash
   git push origin claude/orboretum-level-1-accreditation-fwcfj3
   ```

2. Go to https://vercel.com and sign in

3. Click "Add New..." → "Project"

4. Select "Import Git Repository" and choose `runfromrobots/orboretum`

5. Click "Import" (Vercel auto-detects Next.js)

6. Click "Deploy"

Your site is now live at `https://orboretum.vercel.app`

### Automatic Deployment

Every push to GitHub automatically triggers a new deployment on Vercel.

### Custom Domain (Optional)

1. In your Vercel project settings, go to "Domains"
2. Add your domain (e.g., `theorboretum.org`)
3. Update your DNS records as instructed by Vercel
4. Vercel automatically provisions SSL

## Project Structure

```
/app
  /layout.tsx        - Root layout with header and footer
  /page.tsx          - Home page
  /visit/page.tsx    - Visit information
  /collections/page.tsx - Plant collections
  /education/page.tsx - Educational programming
  /history/page.tsx  - Land acknowledgment and history
  /contact/page.tsx  - Contact and volunteer info
  /globals.css       - Tailwind and component styles

/public             - Static assets (coming)
```

## Color Palette

- Forest Dark: `#0d2818` (headings, header)
- Forest Medium: `#1a3d2e`
- Creek/Teal: `#4a7c7e` (accents, links)
- Moss: `#6b8e6b`
- Wheat: `#f5f1e8` (background)

## Next Steps

- [ ] Plant directory and map (digital collections)
- [ ] Event calendar
- [ ] Research partnership inquiry form
- [ ] School field trip booking system
- [ ] Volunteer management
- [ ] Blog/news updates
- [ ] High-resolution photography
- [ ] Donor/supporter section
- [ ] Accessibility audit and improvements

## Contact

For questions or to get involved:
- Email: hello@theorboretum.org
- Location: 472 Anderson Road, Sprakers, NY 12166

---

*The Orboretum is a 501(c)(3) nonprofit in formation.*
