# Rida Malik

### AI Automation & Full-Stack Developer

Building modern web applications, mobile experiences, and automation solutions.

<p align="left">
  <a href="https://portfolio-ridam.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-Visit%20Website-ec4899?style=for-the-badge" alt="Portfolio">
  </a>
  <a href="https://github.com/ridamalik26">
    <img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://linkedin.com/in/rida-malik-softwareengineer">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
  </a>
</p>

---

## Overview

Welcome to my personal portfolio repository.

This website serves as a central place to explore my professional journey, technical expertise, projects, and certifications.

Designed with a dark charcoal and pink aesthetic, the portfolio focuses on a clean user experience, responsive layouts, and interactive elements. It also includes a live testimonials feature powered by Supabase.

**Live Website:** [portfolio-ridam.vercel.app](https://portfolio-ridam.vercel.app/)

## Features

### Design & Experience
- Modern dark charcoal and pink design.
- Light and dark themes with dark mode as the default.
- Fully responsive layout, from mobile devices to wide desktop screens.
- Smooth animations and transitions.
- Hero section featuring an avatar and floating technology icons.

### Portfolio Sections
- **About:** Personal introduction and professional background.
- **Experience:** Dedicated page highlighting professional experience.
- **Projects:** Interactive project gallery with category-based filtering.
- **Skills:** Technical skills organized into groups.
- **Certifications:** Professional certifications and achievements.
- **Resume:** Downloadable PDF resume.
- **Contact:** Gmail compose link and copy-email functionality.

### Projects Gallery

Projects can be filtered by the following categories:

| Category | Description |
|---|---|
| All | View all projects |
| AI & Automation | AI-powered applications and automation solutions |
| Full-Stack Web | Full-stack web applications |
| Mobile | Mobile application development |
| ML | Machine learning projects |

Each project includes an interactive details modal with its description, features, technology stack, and GitHub link.

### Live Testimonials

The portfolio includes a testimonials section connected to Supabase.

- Visitors can submit testimonials through the website.
- New submissions remain hidden until manually approved.
- Approved testimonials are displayed on the portfolio.
- A honeypot field helps prevent automated spam.
- A one-submission-per-minute rate limit is implemented.

## Tech Stack

| Technology | Usage |
|---|---|
| [Next.js](https://nextjs.org/) | React framework using App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://motion.dev/) | Animations and interactions |
| [next-themes](https://github.com/pacocoursey/next-themes) | Theme management |
| [lucide-react](https://lucide.dev/) | Interface icons |
| [react-icons](https://react-icons.github.io/react-icons/) | Additional icons |
| [Supabase](https://supabase.com/) | Testimonials storage |
| [Vercel](https://vercel.com/) | Deployment and hosting |

## Screenshots

Screenshots of the portfolio will be added below.

| Hero Section | Projects |
|---|---|
| TODO: Add hero screenshot | TODO: Add projects screenshot |

| Dark Mode | Light Mode |
|---|---|
| TODO: Add dark mode screenshot | TODO: Add light mode screenshot |

### Mobile View

TODO: Add mobile screenshot.

## Project Structure

```text
portfolio/
├── public/
│   └── Resume PDF and static assets
│
├── src/
│   ├── app/
│   │   └── Application pages and routes
│   │
│   ├── components/
│   │   └── Reusable UI components
│   │
│   └── data/
│       └── portfolio.ts
│
├── supabase/
│   └── testimonials.sql
│
├── .env.example
├── package.json
└── README.md
