# Pavan's portfolio

A responsive Next.js portfolio with a production Node.js server, resume downloads, and a health endpoint. Content is stored in `data/portfolio.ts`; static documents and images live in `public/`.

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

The Next.js Node server serves the pages, static resume files, and `GET /api/health`, which returns `{"status":"ok","service":"pavan-portfolio"}`. The Docker health check calls this endpoint. The contact form uses `POST /api/contact` with JSON fields `name`, `email`, `message`, and the empty honeypot field `website`. It validates input, checks the browser origin, limits request size, and applies a basic in-memory limit of five attempts per address per 15 minutes. Messages are saved as JSON lines in `/app/data/messages.jsonl` on the persistent `contact-data` Docker volume. No emails are sent. Outside Docker, set `CONTACT_DATA_DIR` or messages will be stored in `.contact-data/`.

The rate limit resets when the server restarts and is intended for this single-instance deployment. If adding a public reverse proxy, configure it to overwrite `X-Forwarded-For` with the real client address and preserve the public `Host` header. Back up the contact volume; `docker compose down -v` deletes saved messages. Messages include personal contact information, so restrict access and remove old entries when no longer needed.

## Deployment

Build and run the Docker image on a container host that exposes port 3000, or deploy the Next.js project to a compatible host. Configure your domain and HTTPS at the hosting platform or reverse proxy when publishing publicly.

## Verification and hosting costs

```bash
npm ci
npx playwright install --with-deps chromium
npm run test:e2e
```

Tests target the running Docker service at port 3000. Set `TEST_BASE_URL` to check another local deployment. They cover project filters, mobile navigation/layout, resume downloads, detail routes, and backend rejection of invalid/cross-origin submissions.

See [HOSTING_OPTIONS.md](HOSTING_OPTIONS.md) for sourced hosting prices and storage requirements, and [DESIGN_NOTES.md](DESIGN_NOTES.md) for design references and resume provenance.

To read messages locally:

```bash
docker compose exec portfolio cat /app/data/messages.jsonl
```

The file is created after the first valid contact submission. It is not exposed by a public API. To rebuild the resume, install Python ReportLab and run `python3 scripts/generate-resume.py`.
