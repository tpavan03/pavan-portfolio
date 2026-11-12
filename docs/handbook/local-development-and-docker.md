# Choose a local development or Docker workflow

The repository supports an interactive Next.js development server and a production-style Docker service. Use `npm ci` followed by `npm run dev` for ordinary source edits. Use `docker compose up -d --build` when checking the container and its persistent contact-data behavior.

Both paths normally use port 3000, so avoid starting competing servers on that port. Check which process serves the browser before interpreting a stale page as a failed code change. Rebuilding the Docker image is separate from editing files for a development server.

Read the repository's Next.js agent instructions and installed framework documentation before changing framework behavior. The package version and lockfile define the working dependency set; a remembered API from another Next.js version is not enough. Keep application credentials out of committed environment files when extending the setup.

## Implementation references

- [package.json](../../package.json)
- [compose.yaml](../../compose.yaml)
- [AGENTS.md](../../AGENTS.md)
