# Damien Tuyizere Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, and Lucide icons.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` to configure the optional contact form. The site works without EmailJS credentials; the form shows a setup message until they are added.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

In EmailJS, configure a template with `from_name`, `from_email`, `subject`, and `message` variables. For Vercel, add the same `VITE_EMAILJS_*` values under Project Settings → Environment Variables, then redeploy.

## Personalize the content

Edit `src/data/portfolioData.js` to update the biography, skills, projects, services, education, and social links. Known public GitHub project links are included; add live demo URLs only when deployed. Replace `src/assets/profile-avatar.svg` with your own image and update its imports in `src/App.jsx` as needed. Replace `public/cv.pdf` with your real CV before publishing—the included PDF is clearly marked as a placeholder.

Education dates, email, phone number, work history, live demos, and unverified profile links have intentionally not been invented.

## Production build

```bash
npm run build
npm run preview
```

## Publish to GitHub

Create a repository on GitHub, then push the project:

```bash
git init
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

## Deploy on Vercel

1. Import the GitHub repository at [vercel.com/new](https://vercel.com/new).
2. Keep the project root at the repository root and use the detected Vite settings (`npm run build`, output directory `dist`).
3. Add EmailJS environment variables if using the contact form, then deploy.

## Project structure

```text
src/
  assets/
  components/
  data/
  App.jsx
  main.jsx
  index.css
public/
  cv.pdf
  favicon.svg
```
