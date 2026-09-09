# University High School — Official Website

Official website of **University High School**, an accredited college-preparatory high school
in Fresno, California.

## Institution details

| Field | Value |
|---|---|
| Legal name | University High School |
| EIN | 77-0515663 |
| Address | 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001, United States |
| Email | admin@universityhighschool.sbs |
| Phone | +1 (319) 555-5405 |
| Website | https://www.universityhighschool.sbs |
| Grades served | 9–12 |

## Tech stack

React 18 · Vite · Tailwind CSS · React Router DOM · React Helmet Async · Lucide React

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The static build is generated in `dist/`. Deploy the contents of `dist/` to your web host
and point `www.universityhighschool.sbs` to it.

## Deployment checklist (Google Workspace for Education verification)

1. Deploy the built site to the domain `www.universityhighschool.sbs`.
2. In `index.html`, replace `PASTE-YOUR-GOOGLE-VERIFICATION-CODE-HERE` with your
   Google Search Console verification meta tag.
3. Verify that `https://www.universityhighschool.sbs/robots.txt` and `/sitemap.xml` are reachable.
4. Request verification in the Google Workspace for Education sign-up flow using
   `admin@universityhighschool.sbs`.

## Structure

- `src/pages/` — 14 pages (Home, About, Academics, Admissions, Student Life, Faculty,
  Contact, Accreditation, Gallery, News, Privacy Policy, Terms, 404)
- `src/seo/EducationalOrganizationSchema.jsx` — Schema.org `HighSchool` JSON-LD with
  name, address, EIN (`taxID`), email and telephone
- `public/images/` — campus, gallery and faculty photography
