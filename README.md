# Y.E.S. Sports Native

A mobile-first native foundation for Y.E.S. Sports, built with Expo, React Native, TypeScript, and Expo Router.

## First milestone

- The home screen opens directly to six dedicated Y.E.S. worlds.
- Every world has its own deep-linkable route and focused feature outline.
- The midnight, cyan, violet, and gold visual direction carries over from the TD Vortex concept.
- Published Y.E.S. data feeds connect through the existing public Edge Function; ATS stays unavailable until its verified feed is published.

## Run locally

1. Install Node.js LTS and a package manager.
2. Run `npm install`.
3. Copy `.env.example` to `.env` to configure the public Y.E.S. data endpoint.
4. Run `npx expo start` and scan the QR code with Expo Go, or launch an Android/iOS simulator.
5. Run `npm run typecheck` for a TypeScript check.

## Structure

- `app/` — Expo Router screens and navigation.
- `src/data/worlds.ts` — world registry and route content.
- `src/components/` — reusable native interface components.
- `src/theme.ts` — shared visual tokens.

## Production path

Before store builds, confirm the final globally unique iOS bundle identifier and Android application ID, configure signing in EAS, verify the versioned Y.E.S. response contract and live-data freshness, and complete device and store checks. Never place provider secrets or Supabase service-role keys in this client app.

The native world screens read published data through the existing `yes-td-data` Edge Function. Public feed availability and source freshness are shown in each world. The browser preview is exported as static files for Vercel; it is not an App Store or Play Store release.
