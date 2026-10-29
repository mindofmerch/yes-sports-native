# Y.E.S. Sports Native

A mobile-first native foundation for Y.E.S. Sports, built with Expo, React Native, TypeScript, and Expo Router.

## First milestone

- The home screen opens directly to six dedicated Y.E.S. worlds.
- Every world has its own deep-linkable route and focused feature outline.
- The midnight, cyan, violet, and gold visual direction carries over from the TD Vortex concept.
- Live data is intentionally absent until a verified API contract is connected.

## Run locally

1. Install Node.js LTS and a package manager.
2. Run `npm install`.
3. Run `npx expo start` and scan the QR code with Expo Go, or launch an Android/iOS simulator.
4. Run `npm run typecheck` for a TypeScript check.

## Structure

- `app/` — Expo Router screens and navigation.
- `src/data/worlds.ts` — world registry and route content.
- `src/components/` — reusable native interface components.
- `src/theme.ts` — shared visual tokens.

## Production path

Before store builds, confirm the final globally unique iOS bundle identifier and Android application ID, configure signing in EAS, connect the approved Y.E.S. backend using a versioned response contract, and verify live-data freshness and failure states. Never place provider secrets or Supabase service-role keys in this client app.
