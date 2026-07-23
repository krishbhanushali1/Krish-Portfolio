# Premium Developer Portfolio Website

A highly polished, premium, and interactive developer portfolio website built from scratch. Inspired by the sleek aesthetic of Vercel, Linear, Apple, and Stripe. Fully responsive, featuring custom canvas particles backgrounds, elastic hover cursors, smooth scroll progression indicators, dark/light themes, and contact form handling with EmailJS.

---

## 🛠️ Tech Stack & Features

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS + Custom Glassmorphism
- **Animations**: Framer Motion (Apple-style easing, staggered entrances, floating elements)
- **Icons**: React Icons (Fi, Fa icons)
- **Forms**: EmailJS browser integration with visual form validation alerts
- **Backdrop**: Optimized HTML5 Canvas dynamic connecting-particles background
- **SEO**: Hand-coded meta tags, OpenGraph, Twitter Cards, and semantic HTML structure
- **Themes**: System preference detection + persistent Dark/Light mode toggle
- **Utilities**: Fast scrollbars, custom pointer trailer, smooth page loader

---

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, ScrollProgress, BackToTop, CustomCursor, Particles, Loader
│   ├── sections/        # Hero, About, Education, Experience, Skills, Projects, Achievements, Contact
│   └── ui/              # GlassCard, Badge, Button, AnimatedText, ThemeToggle, SectionHeading
├── hooks/               # useScrollProgress, useTheme, useActiveSection
├── data/                # personalData.js (Single configuration source)
├── animations/          # variants.js (Centralized motion keyframes)
├── styles/              # index.css (Tailwind & core visual tokens)
└── utils/               # cn.js (classnames helper), emailService.js (EmailJS connector)
```

---

## ⚙️ How to Personalize

To customize all text, projects, links, skills, and resume details, you **only** need to edit one file:
👉 **[src/data/personalData.js](./src/data/personalData.js)**

---

## 🛠️ Setup & Running Locally

Follow these quick commands to spin up the local development workspace:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server (Port 3000)
```bash
npm run dev
```

### 3. Build Production-ready Static Site
```bash
npm run build
```

---

## 📧 EmailJS Setup Checklist

To activate the contact form on your live site:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Connect an Email Service (e.g., Gmail) to obtain a **Service ID**.
3. Create an Email Template with variables `{{from_name}}`, `{{from_email}}`, and `{{message}}` to obtain a **Template ID**.
4. Navigate to Account settings to copy your **Public Key**.
5. Update these values inside:
   👉 **[src/utils/emailService.js](./src/utils/emailService.js)**

---

## 🖼️ Assets Checklist (Where to replace)

Before deploying, ensure you place your personal media files in the designated public folders:

1. **Profile Photo**:
   Replace the placeholder profile photo or name your picture as `profile.jpg` and save to:
   - `public/images/profile.jpg`

2. **Resume PDF**:
   Save your latest resume document as `resume.pdf` to:
   - `public/resume/resume.pdf`

3. **Project Screenshots**:
   Place screenshots for your projects in:
   - `public/images/projects/food-rescue.jpg`
   - `public/images/projects/attendance.jpg`
   - `public/images/projects/portfolio.jpg`

4. **Favicon**:
   If you have a custom brand logo, replace:
   - `public/favicon.svg`
