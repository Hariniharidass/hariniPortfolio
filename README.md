# Harini Natarajan — Developer Portfolio

React + JavaScript, Vite, Tailwind CSS, and React Router. No new dependencies were introduced for the portfolio update.

## Local preview

Use Node.js 20 or later and the existing lockfile:

```powershell
npm.cmd ci
npm.cmd run dev
```

Open http://localhost:5173/hariniPortfolio/. On platforms without PowerShell execution-policy restrictions, `npm` works in place of `npm.cmd`.

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

Production preview: http://localhost:4173/hariniPortfolio/. There is no automated test script in this repository.

## Content and assets

- Home: `src/pages/HomePage.jsx`
- Experience, skills, and education: `src/pages/AboutPage.jsx`
- Projects: `src/pages/ProjectsPage.jsx`
- Shared styles: `src/index.css`
- Assets: `public/images/`
- Web manifest: `public/manifest.json` (moved from the repository root so Vite copies it to the output).

The downloadable CV is `public/CV_Harini_Natarajan.pdf`, supplied by Harini and linked from `AboutPage.jsx` using Vite’s base URL. Replace this PDF with the same filename when updating the CV. The Fyaril AB responsibilities are based on this document. The outdated CV image, unused `CustomButton` and `ParticlesBackground` components, and unreferenced images and technology icons have been removed.

The calculator project is linked to the matching personal repository, `Simple_Python_Microservices`. Added personal projects: `Korklart-app` (React Native/Expo/TypeScript driving-license checklist) and `Shopping-cart-ExpressJS-Mongodb` (server-rendered shopping application). Their descriptions were checked against their public source. No organization-owned projects were added. No public demo was documented for these additions, so they display repository links only. All three previous projects and their descriptions/details remain. Profile URLs and the six existing project URLs returned HTTP 200 during verification on October 27, 2026. HTTP checks do not verify login-gated content, mail delivery, or every feature of a project demo.

## Verification — October 27, 2026

- `npm.cmd run lint`: passed with zero errors and one existing Fast Refresh warning in `ThemeContext.jsx` (the file exports a hook and a provider).
- `npm.cmd run build`: passed.
- Headless Chrome: Home, About, and Projects checked at 375, 768, and 1440 pixels; no horizontal overflow, browser errors, failed requests, or broken images detected.
- Checked mobile navigation, search, empty results, technology filters, theme persistence, keyboard focus, reduced motion, and Pages route restoration. The downloadable CV, manifest, and fallback are available in production output.
- No existing automated test suite is configured. Browser checks used a temporary local script without adding dependencies.
- The existing locked dependency set reports 19 audit findings (3 low, 2 moderate, 14 high). Dependency upgrades were left outside this content/UI update.
- Mail delivery and the deployed GitHub Pages 404 behavior need manual verification after publishing.

## GitHub Pages deployment

Vite's base URL remains `/hariniPortfolio/`; the output is `dist/`. The existing `.github/workflows/delpoy.yml` builds and deploys on pushes to `main`. Its filename is preserved.

`public/404.html` redirects direct visits to nested routes through the application entry point; `src/main.jsx` restores the route before React renders. Test direct visits and refreshes at `/hariniPortfolio/about` and `/hariniPortfolio/projects` after deployment. Vite preview does not reproduce the GitHub Pages 404 redirect; it has its own SPA fallback.

Nothing has been committed, pushed, or deployed automatically. **Pushing to `main` triggers the existing deployment workflow.** When ready to publish:

```powershell
git add -u
git add public/CV_Harini_Natarajan.pdf public/manifest.json public/404.html
git commit -m "Update fullstack portfolio content and improve accessibility"
git push origin main
```

Review the GitHub Actions run and confirm GitHub Pages still uses GitHub Actions as its source. No deployment strategy or workflow changes are required.
