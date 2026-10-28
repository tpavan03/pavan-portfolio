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
  studioNight: "#03050A"
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

The homepage is one continuous coastal day, with a full-viewport fixed world behind native-scrolling content. Eleven chapters change the camera, sky, celestial path, atmosphere, shoreline and water depth. This is not a stack of opaque color bands. Soft radial reading veils protect text; content shifts gently in depth, clouds move at different distances, and a foreground edge gateway hands off between chapters. The landscape is original code-native SVG/CSS, without stock photos or reference assets.

| Chapter    | Journey time | Content                          | Environment                            |
| ---------- | ------------ | -------------------------------- | -------------------------------------- |
| firstlight | 05:40        | Personal introduction / portrait | Cool first light, low sun, shore       |
| sunrise    | 06:30        | About / artifact workbench       | Warm sun, shallow water, beach dunes   |
| morning    | 08:15        | Idea-to-product scroll passage   | Rising sun, open morning sky           |
| noon       | 12:00        | Work introduction                | High sun and clean daylight            |
| rain       | 14:10        | Exam Prep King                   | Passing rain, grey clouds, rippled sea |
| clearing   | 15:40        | Saapadu                          | Clear light after the shower           |
| goldenhour | 17:00        | Career                           | Warm low light                         |
| sunset     | 18:20        | Research                         | Coral horizon and reflected sunlight   |
| bluehour   | 19:10        | Public project gallery           | Deep blue, first stars, rising moon    |
| night      | 21:00        | Technical interests / toolkit    | Dark sky and moonlight                 |
| midnight   | 00:00        | Résumé book / contact            | Near-black open ocean, moon reflection |

Journey times are editorial scene labels, not actual time or live weather. LocalTime separately shows the actual IST clock. The small fixed phase caption is quiet and not an aria-live announcement. Normal scrolling, touch, keyboard and hash links remain native; no wheel interception or scrolljacking is used.

A quiet 780px floating navigation precedes the tactile portrait, real product stories, career selectors, research print, public project image wall and open résumé book. All ten projects remain in the searchable /projects index. Portrait reversal and screenshot choice remain keyboard/touch operable. The central passage is 200svh on desktop and 190svh on phones, allowing two nonoverlapping narrative phases. Reduced motion makes the full text static and readable instead.

Desktop content is capped at 1160px. At 390px and 320px the physical objects and product visuals stack naturally. Reading veils stay within section geometry; never hide horizontal overflow to conceal an oversized pseudo-element.

## Elevation & Depth

Use depth for physical photo cards, paper, device frames and the open résumé. Keep navigation, controls and text quiet. Motion belongs to the portrait interaction, the central scroll passage and one-time image reveals; avoid making every control or icon bounce. Hover enhances real actions, with keyboard/touch equivalents.

## Shapes

40px floating navigation and pill actions. Devices use modest rounding; physical papers stay almost square. Gallery frames are 16px. Avoid recurring sticker badges, generic asterisk marks or abstract icon diagrams as the main imagery.

## Components

DayWorld.tsx owns the phase map, one passive native-scroll/rAF observer, deterministic celestial/weather/coastal layers, cached transforms on visible chapter wrappers, phase caption and route cleanup. app/day-world.css owns world colors, geometry, sky interpolation, rain/waves, reading veils and all reduced-motion scenery rules. app/page.tsx maps the story to stable data-day-phase chapters; ProductStories maps its two articles to rain and clearing. #day-world exposes data-active-phase, data-rain, data-moon, data-ocean and data-reduced-motion for verification.

ScrollAtmosphere owns the shared navigation/dialog palette and uses the same 32% viewport threshold as DayWorld. Keep both aligned; nested product chapters are intentional. DayWorld cleans scroll, resize, media and ResizeObserver subscriptions, cancels pending animation frames and removes its body attributes when leaving the homepage. It does not run a perpetual JavaScript animation loop. Depth uses cached direct transforms only on visible wrappers; do not write inherited CSS properties through every content subtree on each frame. The edge gateway is a separate pointer-transparent layer below navigation, using SVG, opacity and transform without large blur/backdrop filters. Its center leaves the reading and interaction area clear. Ambient rain is paused outside its chapter; reduced motion disables ambient animation and chapter transforms while retaining phase tracking and all text.

HomeScenes owns portrait, actual clock, idea passage, product screenshot selectors, artifacts and résumé book. SelectedWork/ProjectVisual remain the canonical searchable project index and conceptual illustrations on /projects. Navbar owns mobile navigation and the native modal command palette. ScrollReveal handles one-time entrance reveals.

Actual screenshots and public source artifacts are bundled in public/work. manifest.json pins repository sources and records live captures and sample profiles. Saapadu uses a fictional sample profile; BITS Social and Image Trust are public fictional fixtures; PhishScope is deterministic demo scoring and does not claim the research classifier’s accuracy. Historical EDF output is an existing committed artifact, not a fresh benchmark.

## Do’s and Don’ts

- Keep all original eight projects and their facts; the two additional personal applications sit alongside them.
- Preserve résumé downloads, publication DOI, phone/email and real social destinations.
- Use actual owned screenshots/artifacts. No irrelevant stock photographs or copied reference assets.
- Keep the portrait flip and screenshot selection operable with mouse, keyboard and touch.
- Check continuous scrolling, intermediate animation frames, reduced motion, narrow widths, every palette and the open command dialog.
- Contact opens an email draft. Do not claim that the Vercel contact API persists or sends a message.
