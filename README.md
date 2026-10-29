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

## Testimonials (Supabase)

Visitors can leave a note that appears after you approve it.

1. Create a project at supabase.com and run `supabase/testimonials.sql` in the SQL editor.
2. Copy the project URL and anon key into `.env.local` (see `.env.example`) and into the Environment Variables on Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

3. To publish a note, open the `testimonials` table in the Supabase dashboard and set `approved` to true.

Without these variables the Testimonials section and its navbar link are hidden.
