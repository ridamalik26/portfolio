# Rida Malik Portfolio

Next.js (App Router), TypeScript, Tailwind CSS and framer-motion.

All content lives in `src/data/portfolio.ts`. Edit that file to change text, links, projects, experience and skills.

## Run

```bash
npm install
npm run dev
npm run build
```

## Files to add to `public/`

- `Rida_Malik_CV.pdf`
- `projects/smart-solar-advisor.png`
- `projects/multi-vendor-ecommerce.png`
- `projects/compass.png`
- `projects/profolio.png`
- `projects/answerdesk.png`
- `projects/mediremind.png`
- `projects/kharcha.png`
- `projects/taskflow.png`

Missing project images show a pink placeholder with the project name.

## Deploy

Import the repo on Vercel. No extra configuration is needed.


The avatar and browser icons are already generated. To regenerate the icons after changing public/avatar.png, run `node scripts/generate-icons.mjs`.

## Contact form

The contact form submits through Formspree. Create a form at formspree.io, copy its ID (the part after `/f/`), then add it to `.env.local` locally and to the project's Environment Variables on Vercel:

```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

Without it the form shows a message asking visitors to email you directly.
