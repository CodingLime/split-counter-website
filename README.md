<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="src/images/icon-no-bg-white.png" />
    <img alt="Split Counter" src="src/images/icon-no-bg.png" width="72" />
  </picture>
</p>
<h1 align="center">Split Counter — Website</h1>
<p align="center">
  The marketing site for <a href="https://www.splitcounter.app">Split Counter</a>, an MTG life-counter and table companion app.
</p>

## About

This repo contains the public website for **Split Counter**, a Magic: The Gathering utility app for tracking games at the table. The site is a static, single-page marketing site built with Gatsby that showcases the app and links out to the mobile stores.

Split Counter (the app, 2.0) lets players:

- Track life, poison, energy and commander damage for 2 to 6 players, with several layouts per player count
- Show each player's commander (and partner) art behind their life total, picking from any of the card's artworks
- Pick up unfinished games from Home: games save as you play
- Theme the board (Classic, Gradient, Midnight, Pattern) and choose which player gets which colour
- Log life changes in Life History, roll dice, flip coins and pick who goes first
- Search Magic cards via Scryfall for oracle text, rulings, prices and legality in all 23 formats, in or out of a game, with favourites, lists and search history

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
