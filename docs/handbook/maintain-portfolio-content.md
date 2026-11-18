# Maintain profile, experience and project content

The main content model lives in `data/portfolio.ts`. It contains the profile configuration, experience, projects, publications, education and technology list. Start there when updating an existing fact instead of scattering different versions of the same claim across page components.

Preserve the typed shape of each entry. Project categories and visual-art choices are constrained values used by the interface. Keep existing projects unless their removal is intentional, and distinguish a live product link from a source repository or downloadable release.

For experience or publication edits, retain the evidence behind dates, titles and outcome claims. A design refresh does not justify inventing new metrics. Check the homepage and the relevant index page after an edit; the same data can appear in more than one context, and a long title may need a mobile-layout review.

## Implementation references

- [data/portfolio.ts](../../data/portfolio.ts)
- [components/SelectedWork.tsx](../../components/SelectedWork.tsx)
