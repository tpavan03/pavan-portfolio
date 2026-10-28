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
  studioPaper: "#FCFCFB"
  studioInk: "#303B2B"
  studioSage: "#7E8D71"
  studioNight: "#141B20"
  studioBook: "#F3F1E9"
typography:
  display:
    fontFamily: "Space Grotesk"
  body:
    fontFamily: "Manrope"
  annotation:
    fontFamily: "IBM Plex Mono"
  editorial:
    fontFamily: "Georgia"
rounded:
  card: "21px"
  navigation: "40px"
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
  studioPage:
    backgroundColor: "{colors.studioPaper}"
    textColor: "{colors.studioInk}"
  studioCaption:
    textColor: "{colors.studioSage}"
  studioNight:
    backgroundColor: "{colors.studioNight}"
    textColor: "{colors.darkText}"
  studioBook:
    backgroundColor: "{colors.studioBook}"
    textColor: "{colors.studioInk}"
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

# Personal Studio — Pavan

## Overview

A personal portfolio for an AI/ML engineer, with a spacious introduction, physical artifacts, cinematic scroll storytelling and large, real product screens. The owner explicitly wants the pacing and richness of gowthamoleti.com, including a quiet floating navigation, a tactile portrait, visual pauses, full product stories and a dimensional closing scene. Reference assets, biography, employer evidence and personal photography are not reused. Pavan’s portrait, projects, résumé and public source artifacts supply the story.

The home page is a narrative studio, not a dashboard or compact project catalogue. The full searchable index lives at /projects. All ten projects, supplied career facts, research links, contact destinations and résumé remain available. Do not invent usage metrics, photographs, messages, clinical outcomes or confidential employer logs.

## Colors

app/globals.css owns runtime tokens. The existing content routes retain their shared neutral/cobalt semantic tokens. The personal-home scope adds paper #FCFCFB, botanical ink #303B2B and sage #7E8D71. The scroll passage uses midnight #141B20, career uses moss, research uses lavender, the gallery returns to dark, and the résumé closing scene returns to warm paper #F3F1E9. These static section surfaces work before hydration. ScrollAtmosphere makes the navigation and command dialog follow the active section; it does not change document scrolling or persist a global theme.

## Typography

Self-hosted Space Grotesk carries headings; Manrope is the reading voice and IBM Plex Mono marks real file/source context. Georgia italic supplies the personal handwritten/editorial counterpoint without another network font. Avoid repetitive numbered eyebrows or generic motivational symbols. Labels should encode actual content and real source context.

## Layout

A quiet 780px floating pill navigation precedes a spacious name-led introduction. The portrait is a physical photo card that tilts with a pointer and flips by button, touch or keyboard. A workbench contains project/research artifacts. A two-viewport sticky passage moves an idea note and actual application screen as two narrative statements replace one another. Text opacity ranges must not overlap; reduced motion changes this into a static, fully readable section.

Two alternating product stories use large screenshots in dimensional device frames, concise copy, working screenshot selectors and live/source/build-story links. Professional career selectors remain. Research has a printed-note composition; the dark image wall shows actual public project/demo artifacts, with clear sample/fixture captions. A physical open résumé book links to the unchanged PDF. Contact retains subject selection, email composition, clipboard and social links.

Desktop content is capped at 1160px. Phones stack naturally with normal page scrolling, smaller physical objects, full-width product visuals and an accessible mobile menu. Never use horizontal scroll to conceal overflow.

## Elevation & Depth

Use depth for physical photo cards, paper, device frames and the open résumé. Keep navigation, controls and text quiet. Motion belongs to the portrait interaction, the central scroll passage and one-time image reveals; avoid making every control or icon bounce. Hover enhances real actions, with keyboard/touch equivalents.

## Shapes

40px floating navigation and pill actions. Devices use modest rounding; physical papers stay almost square. Gallery frames are 16px. Avoid recurring sticker badges, generic asterisk marks or abstract icon diagrams as the main imagery.

## Components

HomeScenes owns PortraitCard, LocalTime, StoryPassage, ProductStories, ArtifactShelf and ResumeBook. app/page.tsx owns story order and factual composition. SelectedWork and ProjectVisual remain the canonical searchable project index and conceptual illustrations on /projects. Navbar owns the quiet mobile navigation and native modal command palette. ScrollReveal handles one-time entrance reveals and ScrollAtmosphere tracks the active section palette. Runtime behavior belongs in these shared components, not inline duplicate scripts.

Actual screenshots and public source artifacts are bundled in public/work. manifest.json pins repository image sources to commits and records live captures, preview profiles and the résumé rendering. Saapadu uses a fictional sample profile; BITS Social and Image Trust are public fictional fixtures; PhishScope is deterministic demo scoring and does not claim the research classifier’s accuracy. The historical EDF output is an existing committed artifact, not a fresh benchmark.

## Do’s and Don’ts

- Keep all original eight projects and their facts; the two additional personal applications sit alongside them.
- Preserve résumé downloads, publication DOI, phone/email and real social destinations.
- Use actual owned screenshots/artifacts. No irrelevant stock photographs or copied reference assets.
- Keep the portrait flip and screenshot selection operable with mouse, keyboard and touch.
- Check continuous scrolling, intermediate animation frames, reduced motion, narrow widths, every palette and the open command dialog.
- Contact opens an email draft. Do not claim that the Vercel contact API persists or sends a message.
