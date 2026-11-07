# swift

A modular, API-independent community toolkit for DonutSMP players.

## Current sections
- Overview dashboard and navigation.
- Searchable farm-schematic starter library. Entries are placeholders until verified instructions, materials, images and schematic files are supplied.
- Farm profit, item value and break-even calculators. All values are manually entered.

## Local development
Requires Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` for a production build and `npm run typecheck` for TypeScript checks.

## Deploy
Import this repository at https://vercel.com/new. Vercel should detect Next.js automatically. No environment variables or DonutSMP API key are required.

## Architecture
Keep future sections modular and any future server integration behind server-side adapters. The site must remain useful without an API.

This is an independent fan project, not affiliated with or endorsed by DonutSMP. Starter schematic listings are not verified instructions or downloadable builds.
