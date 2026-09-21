# Mack Global Redesign Demo

A modern, mobile-first redesign concept for [Mack Global](https://mackglobal.com/) focused on public-sector buyers, credibility, conversion, search visibility, and a future GoHighLevel government-contracting learning community.

## Highlights

The demo presents Mack Global’s services in five buyer-friendly capability groups, surfaces its credentials and selected past performance, adds structured direct answers for SEO and AEO, and creates a prominent Government Contracting Learning Hub gateway. The interface is responsive, keyboard accessible, and based on the green and gold identity of the existing logo.

## Run locally

```bash
pnpm install
pnpm dev
```

Validate the project with:

```bash
pnpm check
pnpm build
```

## GitHub Pages

The production Vite base path is `/mackglobal-redesign-demo/`. The repository publishes the contents of `dist/public` through the `gh-pages` branch.

## GoHighLevel handoff

The “Enter the learning hub” button is a functioning demo placeholder. Replace the `openLearningHub` handler in `client/src/pages/Home.tsx` with the final GoHighLevel community, offer, or classroom URL when Mack Global supplies it.

## Audit

See [MACKGLOBAL-AUDIT-AND-IMPROVEMENTS.md](./MACKGLOBAL-AUDIT-AND-IMPROVEMENTS.md) for the current-site findings, implemented improvements, and recommended production roadmap.
