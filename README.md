# Damien Tuyizere Portfolio

A modern, premium portfolio website for Damien Tuyizere built with React, Vite, JavaScript, Tailwind CSS, and Lucide icons.

## Features
- Responsive portfolio layout
- Dark/light theme toggle
- Animated sections and smooth scrolling
- Project filtering and portfolio cards
- Contact form with validation
- EmailJS-ready configuration
- Download CV button
- SEO-ready metadata
- Custom favicon and 404 page
- Production-ready Vite setup

## Tech Stack
- React.js
- Vite
- JavaScript ES6+
- Tailwind CSS
- Lucide React
- EmailJS

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the app in development mode
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## EmailJS Setup
1. Create a free EmailJS account.
2. Create an email service and template.
3. Copy your credentials into `.env.local` based on `.env.example`.
4. Update the EmailJS configuration in `src/components/ContactForm.jsx` if needed.

Example:
```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

## GitHub Publication
1. Initialize git if needed:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
```
2. Create a GitHub repository named `damien-tuyizere-portfolio`.
3. Push it to GitHub:
```bash
git branch -M main
git remote add origin https://github.com/<your-username>/damien-tuyizere-portfolio.git
git push -u origin main
```

## Vercel Deployment
1. Push the project to GitHub.
2. Open https://vercel.com and import the repository.
3. Use the default Vercel settings.
4. Deploy.
5. Set the project root to the repository root.

## Project Structure
```text
src/
  assets/
  components/
  data/
  App.jsx
  main.jsx
  index.css
public/
  favicon.svg
  cv.pdf
```

## Notes
- Replace placeholder profile data, education, project links, and contact details in `src/data/portfolioData.js`.
- Update `public/cv.pdf` with your real CV file for download.
- You can replace the placeholder profile art in `src/assets/profile-avatar.svg` with your own photo later.
