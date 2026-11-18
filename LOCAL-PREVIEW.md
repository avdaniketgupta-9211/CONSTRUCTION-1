# Local preview

This folder is running as a local Next.js preview.

- URL: http://localhost:3001
- Dev server: `npm.cmd run dev -- --port 3001`
- Production preview: `npm.cmd run build` then `npm.cmd start -- --port 3001`

## Environment

`.env.local` is configured with:

```
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

## Database

The estimate form persists to PostgreSQL through Drizzle. A local Docker container
is running for this project:

- Container: `premium-finance-db`
- Image: `postgres:17-alpine`
- Port: `5432`
- Database: `app_db`
- User / password: `postgres` / `postgres`
- Volume: `premium-finance-pgdata`

Start it again after a reboot with:

```
docker start premium-finance-db
```

The `leads` table was created from `src/db/schema.ts`. For a new database, run
`npx drizzle-kit push` (the config in `drizzle.config.json` points at the same URL).

## Notes

- `public/images/*` is real Pexels photography (1200-2400px JPEG). The homepage
  background video is a Pexels clip at 1280x720 (~12.6 MB). All source URLs and
  creator names are stored in `imageCredits` in `src/content/site.ts` and shown
  on `/content-status`.
- The background video is desktop-only; mobile and small screens keep the poster.
  It is muted, loops, has a poster fallback, and is skipped under
  `prefers-reduced-motion`.
- Replace the Pexels media with client-owned assets when they are supplied.
- The project is not a Git repository.
- Next.js 16.4.2 reports a known security advisory; upgrade before deploying.
