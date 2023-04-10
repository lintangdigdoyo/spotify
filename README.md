# Spotify Landing Page

This is a Spotify landing page project built using the following tech stack:

- Next.js v13
- React v18
- Typescript
- Tailwind CSS
- React Query
- Axios
- Framer Motion

## Installation

To run this application locally, please follow these steps:

1. Clone this repository `https://github.com/lintangdigdoyo/spotify.git`
2. Navigate to the root directory of the project in your terminal.
3. Run npm install to install the dependencies.
4. Create a .env.local file and add your Spotify API client ID and client secret as follows:

```
SPOTIFY_CLIENT_ID=YOUR_CLIENT_ID_HERE
SPOTIFY_CLIENT_SECRET=YOUR_CLIENT_SECRET_HERE
```

5. Run npm run dev to start the development server.

## Scripts

- `npm run dev` — Launches the app in development mode on [http://localhost:3000](http://localhost:3000/)
- `npm run build` — Compiles and bundles the app for deployment
- `npm start` — Start the production server
- `npm run lint` — Run linting
- `npm run lint:fix` — Run linting and format it using prettier
- `npm run format` — Format the codes with prettier
- `npm run format:check` — Check codes format with prettier

## Optimization

- `PWA:` The page is optimized to be used offline and can be installed on a user's device as a PWA.
- `Caching:` The page utilizes caching with service worker to reduce the number of API requests.
