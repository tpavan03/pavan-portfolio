# Maintain product screenshots and artifact provenance

Public product images live under `public/work`. The manifest records where an artifact came from, what it depicts and the limits of the claim it supports. Update that provenance when replacing an image; a visually similar screenshot is not automatically evidence of the same release or environment.

Use synthetic or already public demonstration data when capturing a screen. Remove account information and private operational content before adding an image to a public repository. Preserve any source-commit or release reference that makes a historical artifact traceable.

Check the homepage's screenshot choices and the project visuals after changing filenames. Asset links and captions should describe what the visitor actually sees. A conceptual diagram, public repository artifact and a running product screenshot serve different purposes; label them accurately rather than presenting all three as a live deployment.

## Implementation references

- [public/work/manifest.json](../../public/work/manifest.json)
- [components/HomeScenes.tsx](../../components/HomeScenes.tsx)
- [PROJECT_SOURCES.md](../../PROJECT_SOURCES.md)
