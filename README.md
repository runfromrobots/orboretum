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
- Docker & Docker Compose (for deployment)

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

## Deployment

### Via Docker Compose (Recommended)

```bash
docker-compose up -d
```

This starts both the Next.js app and Nginx reverse proxy. Site is accessible on port 80.

### On VPS (Hetzner / DigitalOcean)

1. **SSH into your server**
   ```bash
   ssh user@your-vps-ip
   ```

2. **Clone the repository**
   ```bash
   git clone https://github.com/runfromrobots/orboretum.git
   cd orboretum
   git checkout claude/orboretum-level-1-accreditation-fwcfj3
   ```

3. **Configure environment (if needed)**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your settings
   ```

4. **Start with Docker Compose**
   ```bash
   docker-compose up -d
   ```

5. **Set up SSL (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot certonly --standalone -d theorboretum.org -d www.theorboretum.org
   ```

6. **Update nginx.conf** with SSL certificate paths and uncomment the HTTPS server block

7. **Restart Nginx**
   ```bash
   docker-compose restart nginx
   ```

### Logs

View application logs:
```bash
docker-compose logs -f app
```

View Nginx logs:
```bash
docker-compose logs -f nginx
```

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
