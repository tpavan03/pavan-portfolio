# Preserve project search and shareable URLs

The project index stores search, category and the expanded project in URL query parameters. This makes a filtered view shareable and lets browser navigation restore a meaningful selection. The homepage's featured subset is separate from the complete project catalog.

When changing a project identity or filter label, test a direct URL as well as clicking through from the initial page. Unknown categories should fall back safely. A project that exists in the data can still be hidden by the current search or featured-only selection.

Review keyboard focus and disclosure behavior after changing the cards. A share link should reveal the intended project without requiring a pointer-only interaction. Keep the source, live and release destinations distinct so visitors know whether they are opening code, an app or an installable artifact.

## Implementation references

- [components/SelectedWork.tsx](../../components/SelectedWork.tsx)
- [app/projects/page.tsx](../../app/projects/page.tsx)
