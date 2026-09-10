# Pavan's portfolio

A dark-only, interactive Next.js portfolio using the original Signal & Systems theme. Includes a searchable project index, shareable project details, expertise and experience selectors, keyboard command menu, responsive navigation, résumé downloads, and a health endpoint. Content is stored in `data/portfolio.ts`; static documents and self-hosted fonts live in `public/`.

## Run locally with Docker

With Docker running, from this folder:

```bash
docker compose up -d --build
```

Open http://localhost:3000. The container restarts automatically with Docker. The production image runs as a non-root user.

```bash
docker compose ps
docker compose logs -f
docker compose down
```

After editing the site, run `docker compose up -d --build` again. This workspace uses the native Docker Engine installed inside Ubuntu on WSL. If Docker is stopped after a WSL restart, start it with `sudo systemctl start docker`.

## Develop without Docker

Use Node.js 22 or later:

```bash
npm ci
npm run dev
```

## Backend

The Next.js Node server serves the pages, static resume files, and `GET /api/health`, which returns `{"status":"ok","service":"pavan-portfolio"}`. The Docker health check calls this endpoint. The current contact UI opens the visitor's email client with a selected subject and offers copy-email, phone, and social links.

The legacy Docker endpoint `POST /api/contact` still accepts JSON fields `name`, `email`, `message`, and the empty honeypot field `website`. It validates input, checks the browser origin, limits request size, and applies a basic in-memory limit of five attempts per address per 15 minutes. Messages are saved as JSON lines in `/app/data/messages.jsonl` on the persistent `contact-data` Docker volume. No emails are sent by this endpoint. Outside Docker, set `CONTACT_DATA_DIR` or messages will be stored in `.contact-data/`.

The rate limit resets when the server restarts and is intended for this single-instance deployment. If adding a public reverse proxy, configure it to overwrite `X-Forwarded-For` with the real client address and preserve the public `Host` header. Back up the contact volume; `docker compose down -v` deletes saved messages. Messages include personal contact information, so restrict access and remove old entries when no longer needed.

On Vercel, the site uses the direct email contact action because Vercel Functions do not provide a persistent writable filesystem. `POST /api/contact` therefore returns `503` when `VERCEL` is set instead of claiming to save a message. The Docker deployment keeps the file-backed handler and persistent volume behavior described above.

## Deployment

The intended Vercel team is `pavan-4b97`. Use that scope when linking this project; the earlier `pavanbu6-2786` account was superseded by the owner's account correction.

The repository includes `vercel.json` for a standard Next.js deployment. Link the checkout to the intended Vercel scope and project, then deploy from the repository root:

```bash
npx vercel@latest link --scope <team-slug> --project <project-name>
npx vercel@latest deploy --prod
```

No application environment variables are required for the Vercel deployment. To keep file-backed contact submissions, build and run the Docker image on a container host with persistent storage and expose port 3000. Configure your domain and HTTPS at the hosting platform or reverse proxy when publishing publicly.

## Verification and hosting costs

```bash
npm ci
npx playwright install --with-deps chromium
npm run test:e2e
```

Tests target the running Docker service at port 3000. Set `TEST_BASE_URL` to check another deployment. They cover the dark-only theme, project search/deep links, keyboard command menu, expertise and career selectors, mobile navigation/layout, email composition and copying, résumé downloads, and backend health.

See [HOSTING_OPTIONS.md](HOSTING_OPTIONS.md) for sourced hosting prices and storage requirements, and [DESIGN_NOTES.md](DESIGN_NOTES.md) for design references and resume provenance.

To read messages locally:

```bash
docker compose exec portfolio cat /app/data/messages.jsonl
```

The file is created after the first valid contact submission. It is not exposed by a public API. To rebuild the resume, install Python ReportLab and run `python3 scripts/generate-resume.py`.

## Local project showcase

The upgraded projects are separate repositories on unique feature branches; see [PROJECT_RELEASES.md](PROJECT_RELEASES.md) for source and release links. Screenshots are kept in those repositories and releases. The portfolio contains no project images or screenshot viewer and always uses the dark theme, regardless of previously saved preferences.

In this workspace, after Docker starts, use:

```bash
./scripts/start-local-showcase.sh
```

The script expects sibling checkouts under `../../projects` (override `PROJECTS_ROOT` if needed). It starts the portfolio and the BITS Social, PhishScope and Image Trust Desk containers. It does not launch an Android emulator; download the Digital Wellbeing APK from its release and install it on a compatible Android device. The portfolio links to source and releases, with no localhost demo buttons.
