<p align="center">
  <img alt="Split Counter" src="src/images/icon-no-bg.png" width="72" />
</p>
<h1 align="center">Split Counter — Website</h1>
<p align="center">
  The marketing site for <a href="https://www.splitcounter.app">Split Counter</a>, an MTG life-counter and table companion app.
</p>

## About

This repo contains the public website for **Split Counter**, a Magic: The Gathering utility app for tracking games at the table. The site is a static, single-page marketing site built with Gatsby that showcases the app and links out to the mobile stores.

Split Counter (the app) lets players:

- Track life totals in any format, from 1v1 to a full six-player commander pod
- Log commander damage per opponent colour (partner commanders included), auto-deducted from life total
- Track poison counters
- Flip coins and roll dice (D4–D20) without leaving the game
- Search Magic cards for oracle text, rulings, format legality, and prices (Cardmarket/TCGplayer), in or out of a game

The app is available on:

- [Google Play](https://play.google.com/store/apps/details?id=app.splitcounter)
- [App Store](https://apps.apple.com/us/app/split-counter-mtg-utility/id6446151892)

## Tech stack

- [Gatsby 5](https://www.gatsbyjs.com/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling (custom `split` blue/amber palette matching the app icon)
- [Headless UI](https://headlessui.com/) + [Heroicons](https://heroicons.com/) for the mobile nav
- [MDX](https://mdxjs.com/) for the legal pages (Privacy Policy, Terms & Conditions)
- `gatsby-plugin-image` / `gatsby-plugin-sharp` for optimized screenshots

## Project structure

```
src/
├── components/       # NavBar, Footer
├── content/           # MDX content (privacy policy, terms & conditions)
├── images/            # App icon, store badges, and marketing screenshots
├── pages/
│   ├── index.tsx           # Home page (hero, features, CTA)
│   ├── android-app.tsx      # Redirects to a mobile store
│   ├── ios-app.tsx          # Redirects to a mobile store
│   ├── privacy-policy.tsx
│   ├── terms-and-conditions.tsx
│   └── 404.tsx
└── styles/            # Global + Tailwind CSS
```

## Getting started

```shell
npm install
npm run develop
```

Your site is now running at `http://localhost:8000`.

## Available scripts

| Script            | Description                                  |
| ----------------- | --------------------------------------------- |
| `npm run develop` | Start the local development server            |
| `npm run build`   | Build the site for production                 |
| `npm run serve`   | Serve the production build locally            |
| `npm run clean`   | Clear the Gatsby cache and public folder       |
| `npm run typecheck` | Run the TypeScript compiler without emitting |

## License

See [LICENSE](LICENSE).
