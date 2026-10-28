---
version: alpha
colors:
  primary: "#3658CC"
  background: "#F7F8FC"
  surface: "#FFFFFF"
  text: "#1C2940"
  muted: "#5D687F"
  accent: "#3658CC"
  line: "#DCE1ED"
  darkBackground: "#101827"
  darkSurface: "#172235"
  darkText: "#EAF0FC"
  darkMuted: "#A2AFC7"
  darkAccent: "#A7BAFF"
typography:
  display:
    fontFamily: "Space Grotesk"
  body:
    fontFamily: "Manrope"
  annotation:
    fontFamily: "IBM Plex Mono"
rounded:
  card: "21px"
  navigation: "22px"
  control: "11px"
spacing:
  unit: "8px"
components:
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
  button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
  caption:
    textColor: "{colors.muted}"
  darkPage:
    backgroundColor: "{colors.darkBackground}"
    textColor: "{colors.darkText}"
  darkCard:
    backgroundColor: "{colors.darkSurface}"
    textColor: "{colors.darkText}"
  darkCaption:
    textColor: "{colors.darkMuted}"
  darkLink:
    textColor: "{colors.darkAccent}"
---

# Personal Notebook — Pavan

## Overview

A personal portfolio for an AI/ML engineer working across agents, systems,
security, research and usable products. The reference at gowthamoleti.com
informs the personal warmth, contrasting section atmospheres and navigational polish. The composition, cobalt
palette, type, diagrams, content and photograph are Pavan's own direction;
no reference-site assets, identity or work claims are reused.

This is a marketing/content site with preserved interactive project browsing,
keyboard commands and contact actions. Avoid generic agency claims, invented
clients, fabricated metrics and copied designer biographies. Existing work
and résumé facts remain the content authority.

## Colors

`app/globals.css` owns runtime tokens. Light keys above map directly to --bg,
--panel, --text, --muted, --accent and --line. Each section owns its palette through data-palette-zone and data-theme. The
midnight sections map the dark keys to those semantic roles. Paper, moss,
lavender and cobalt zones provide distinct content atmospheres. The floating
navigation and command dialog follow the active section through ScrollAtmosphere;
the document never changes its global theme or hijacks scrolling.
Project illustrations keep their product-specific pastel palettes in both
themes; the portrait frame is photographic paper, with intentionally constant
dark caption ink. These are content surfaces, not unthemed application chrome.

## Typography

Self-hosted Space Grotesk carries compact, characterful headings. Manrope
provides the quieter reading voice; IBM Plex Mono marks dates, context and
technical annotations. Preserve readable font sizes and generous body leading.
Fonts and their licenses live under public/fonts. No external font service is
required at runtime.

## Layout

A contained floating navigation sits above an asymmetric portrait-led hero.
The portrait appears as an upright personal field card over an engineering
grid, not the reference's tilted polaroid. A drawn cobalt underline supplies
the memorable gesture. A full-width midnight engineering interlude explains
context, tools, permission and recovery with an original systems diagram.
Project cards return to paper; career uses moss, research uses lavender,
systems returns to midnight and contact closes in cobalt. These are content
sections with their own layout and atmosphere, rather than alternate global
light/dark modes. Detailed project notes remain expandable and shareable.

Desktop content is capped at 1160px. On phones, content stacks naturally,
navigation expands from its menu button, and project filters wrap. Work,
experience, research and contact use different compositions but one spacing
and type system. The text remains the primary content at every viewport.

## Elevation & Depth

Use subtle hairline borders, quiet panel elevation and limited hover lift.
Keep heavy shadows for the modal command palette. Avoid ambient animation,
oversized empty scroll sequences and ornamental gradients across every card.

## Shapes

21px project cards, 22px floating navigation and 11px controls. The photo frame
is gently rounded. Diagrams use coherent thin strokes and simple geometric
forms; they illustrate project concepts and are never presented as screenshots.

## Components

SelectedWork retains the shared search/filter/disclosure/URL behavior on the
home and projects pages. ProjectVisual owns conceptual art. Navbar owns mobile
navigation and the native modal command dialog. ScrollAtmosphere observes
normal scrolling and updates only navigation/dialog palette attributes at a
32% viewport boundary. Section colors are static CSS and work before hydration.
There is no manual global-theme toggle, persistent theme state or scrolljacking. Contact continues to open an email draft rather than claiming a
message was delivered. The backend API contracts remain unchanged.

Global scrollbars inherit semantic theme tokens; focus, hover and disabled
states remain visible. Search offers explicit clear actions and keyboard focus
restoration. Reduced-motion preferences suppress decorative transitions.

## Do's and Don'ts

- Keep all original eight projects and their factual context; add new products alongside them.
- Separate private professional work from public source and live personal apps.
- Use the authorized GitHub avatar for the portrait without changing identity.
- Preserve résumé downloads, publication DOI, phone/email and social destinations.
- Check every section atmosphere, navigation contrast across transitions, phone widths, keyboard navigation and copied links.
