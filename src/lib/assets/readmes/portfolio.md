# Portfolio

Personal website and developer portfolio built with SvelteKit.

## Overview

I built this as my main developer portfolio, mainly to have a solid place to link from my CV and GitHub. Beyond just listing projects, I wanted the site itself to say something about how I write code, so I put extra care into details like the custom scrollbar behavior, the terminal-style heading hover effect, and the asymmetric border radius used consistently across cards and inputs.

## Features

- Dark/light theme toggle
- Custom scrollbar with hover expansion
- Project browsing with Markdown rendering
- Scroll-to-top button with smooth animation
- Contact form integrated with Formspree
- Terminal-style headings with hover effect (`>` + blinking cursor)
- Fully responsive layout

## Tech stack

- **Framework:** SvelteKit
- **Language:** TypeScript
- **Libraries:** marked, overlayscrollbars
- **Forms:** Formspree
- **Build:** Vite
- **Deploy:** Netlify

## Screenshots

![Home page](/src/lib/assets/screenshots/portfolio/home.png)
![Projects page](/src/lib/assets/screenshots/portfolio/projects.png)
![Contact page](/src/lib/assets/screenshots/portfolio/contact.png)

## Installation

```bash
git clone https://github.com/mk-forge/portfolio.git
cd portfolio
npm install
npm run dev
```

The site opens at http://localhost:5173.