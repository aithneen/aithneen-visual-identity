# AITHNEEN Visual Identity Lock V5

## Purpose of This File

This is the current visual-identity source of truth for AITHNEEN.

It replaces the earlier V4 brief.

The previous manuscript-like direction was useful while discovering the character of the brand, but several rules have now been deliberately removed:

- no beige paper surface
- no blackboard metaphor as a governing layout rule
- no separate light-mode and dark-mode accent variants
- no mixture of unrelated heading and body fonts
- no typography-based theatricality
- no assumption that uniqueness must come from decorative styling

The new direction is cleaner, more digital, and more suitable for a personal brand built around website design, software systems, research, and useful invention.

---

# 1. Brand Core

## Brand Name

Always write the visible brand name as:

`AITHNEEN`

Do not replace the visible brand name with:

`اثنين`

This applies in both Arabic and English interfaces.

Arabic copy may explain the origin or meaning of the name when useful, but the displayed brand name remains `AITHNEEN`.

## Brand Identity

AITHNEEN is Ahmed's personal maker identity.

It is not:

- a generic developer portfolio
- a freelance web-agency identity
- an AI-only label
- a classical-art imitation
- a trend-following SaaS template

It is a home for:

- software systems
- websites
- interactive interfaces
- research
- data work
- open-source contributions
- industry-specific products
- experiments
- useful new things

## Core Position

AITHNEEN sits between builder and inventor.

The brand should communicate:

> This person thinks differently.

The identity should also show:

- care for craft
- respect for the basics
- ambition
- curiosity
- useful invention
- the ability to study a problem before building
- the ability to create practical systems rather than merely decorate screens

## Working Principle

AITHNEEN should not chase novelty for its own sake.

The objective is:

> Useful invention expressed through clear thinking, careful execution, and distinctive digital experiences.

---

# 2. Updated Design Philosophy

## The Important Correction

The identity should not attempt to prove originality mainly through unusual fonts, old-paper styling, or a blackboard metaphor.

Ahmed designs and builds websites.

The website itself should prove that through:

- interaction
- motion
- layout
- interface behavior
- responsive composition
- project storytelling
- unusual but useful transitions
- interactive diagrams
- systems maps
- progressive reveals
- visual relationships between research, architecture, and product output

## Digital Workshop Direction

The site may still feel crafted, personal, and thoughtful.

But the new direction is:

> A modern digital workshop.

Not:

> A scanned notebook.

The brand should feel like the work of a person who studies systems deeply, then builds interfaces with care and invention.

## What Must Remain Distinctive

The uniqueness should come primarily from:

- how the UI behaves
- how sections transform
- how information is revealed
- how projects are connected
- how research turns into systems
- how the portfolio itself demonstrates web-design ability

Typography and color should support this work, not compete with it.

---

# 3. Locked Color System

## Accent Colors

Use only two accent colors across both light and dark modes.

### Violet

`#7C5CE6`

### Teal

`#2CB89A`

Do not maintain separate light-mode and dark-mode accent variants unless future accessibility testing proves that a specific component needs a controlled exception.

## Background Colors

### Light Background

`#F1F4F8`

Description:

- bright blue-gray
- clean
- modern
- calm
- not sterile white
- not beige
- not paper-like
- suitable for interactive interfaces

### Dark Background

`#101319`

Description:

- deep blue-charcoal
- dark without becoming pure black
- suitable for motion and glowing accents
- digital rather than muddy
- comfortable for long reading

## Text Colors

### Light Mode

Primary text:

`#1E2833`

Secondary text:

`#5F6B78`

### Dark Mode

Primary text:

`#E8EDF2`

Secondary text:

`#A7B3BE`

## Locked Palette Table

| Role | Hex |
|---|---|
| Light background | `#F1F4F8` |
| Light primary text | `#1E2833` |
| Light secondary text | `#5F6B78` |
| Dark background | `#101319` |
| Dark primary text | `#E8EDF2` |
| Dark secondary text | `#A7B3BE` |
| Violet accent | `#7C5CE6` |
| Teal accent | `#2CB89A` |

## Color Usage Rules

### Violet

Use violet for:

- selected states
- focus states
- larger labels
- icon emphasis
- active paths
- section accents
- motion trails
- decorative energy
- diagrams
- occasional borders

Avoid using violet for:

- long paragraphs
- small body text
- dense metadata
- large text blocks

### Teal

Use teal for:

- primary interactive accents
- buttons
- links
- underlines
- active indicators
- icons
- diagrams
- data highlights
- focus rings

Avoid using teal for:

- long body text
- large volumes of small text on the light background

### Gradients

The core accent gradient is:

`linear-gradient(to right, #7C5CE6, #2CB89A)`

Use gradients sparingly.

They should communicate movement, connection, or energy.

They should not become a default background treatment for every component.

---

# 4. Typography Lock

## Single Typography System

Use the Thmanyah font family everywhere.

Do not use a collection of unrelated fonts for light mode, dark mode, Arabic, and English.

The typography system should remain coherent across the whole website.

## Thmanyah Families

### Thmanyah Serif Display

Use for:

- hero headings
- major section headings
- large editorial statements
- project-title moments
- occasional large quotes

### Thmanyah Serif Text

Use for:

- paragraphs
- project descriptions
- research explanations
- case-study text
- longer Arabic copy
- longer English copy
- article-like content

### Thmanyah Sans

Use for:

- navigation
- buttons
- labels
- metadata
- captions
- forms
- filters
- menus
- status text
- dashboard UI
- compact interface text

## Available Weights

Each Thmanyah family has five weights:

- Light `300`
- Regular `400`
- Medium `500`
- Bold `700`
- Black `900`

## Automatic Optical Typography Scale

AITHNEEN uses a locked five-step typography scale. Designers and developers choose
the text size step only. Each step automatically determines the Thmanyah family,
weight, and intended role.

| Computed size | Automatic family | Automatic weight | Intended role |
|---|---|---:|---|
| Below `16px` | Thmanyah Sans | Medium `500` | labels, metadata, captions, compact UI |
| `16px–19px` | Thmanyah Serif Text | Regular `400` | paragraphs and long reading |
| `20px–31px` | Thmanyah Serif Display | Medium `500` | introductions and small headings |
| `32px–55px` | Thmanyah Serif Display | Bold `700` | section and project headings |
| `56px` and above | Thmanyah Serif Display | Black `900` | hero and major editorial statements |

The two principal Arabic serif forms are treated optically:

- Thmanyah Serif Text is the calm reading form used below `20px`.
- Thmanyah Serif Display is the more extended expressive form used from `20px`.
- The Display form becomes fully emphatic with Black `900` from `56px`.

Thmanyah Sans remains the automatic choice below `16px` because compact interface
text needs stronger clarity than a light serif form.

### Light Weight Rule

Light `300` is available in all three families, but it is not part of the automatic
scale. Never assign Light automatically to very small text. It may be used only as
an intentional exception for large, quiet editorial statements after readability
has been checked.

### Size-Only Selection Rule

Do not choose font family and weight independently during ordinary implementation.
Choose one locked size token and allow that token to supply all three properties:

- `font-size`
- `font-family`
- `font-weight`

Arbitrary sizes outside the locked steps should be rare. UI controls remain
Thmanyah Sans regardless of their size.

## Code Exception

Do not load IBM Plex Mono as a brand font.

Use a browser-system monospace stack only for genuinely code-like content:

- code snippets
- file paths
- API keys
- hashes
- terminal output
- debugging logs

Recommended stack:

`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace`

## Typography Principle

> Choose the size. The system chooses the form and weight.

---

# 5. Logo System

## Primary Logo

Use the compact Ahmed signature logo without the alif as the default mark.

Use it for:

- navigation bars
- favicons
- profile images
- social assets
- small interface placements
- mobile headers
- footers
- compact digital environments

## Full Logo

Use the full signature logo with the alif sparingly.

It is not the default logo.

Use it only where there is generous horizontal or visual space:

- hero compositions
- identity-book cover
- large posters
- wide banners
- large presentation pages
- occasional ceremonial moments

Do not use the full alif logo in:

- favicons
- small navigation bars
- tight cards
- compact buttons
- narrow mobile placements
- small interface controls

## Logo Variants

Maintain these variants:

- compact signature without alif
- full signature with alif
- default light-surface version
- reverse dark-surface version
- teal accent version
- violet accent version

## Logo Principle

> The compact logo is the working mark. The full logo is the ceremonial mark.

---

# 6. Portrait Direction

Use the approved teal unfinished portrait.

The portrait should feel:

- contemporary
- personal
- carefully drawn
- intentionally incomplete at the edges
- connected to the teal accent
- thoughtful rather than theatrical
- crafted without becoming a classical costume

The portrait remains an important identity asset, but it should no longer force the entire website into an old-paper or Renaissance-notebook aesthetic.

Use it as:

- hero art
- profile image source
- about-page visual
- occasional large identity moment

---

# 7. Icon Language

## Primary Library

Phosphor Icons

Role:

Primary interface voice.

Use Phosphor first for ordinary interface actions and concepts it communicates clearly.

Search across available weights before using a fallback.

Default usage:

- Regular
- Light

Reserved usage:

- Bold
- Fill
- Duotone

Use the reserved styles only when interaction meaning or emphasis genuinely changes.

## Preferred Fallback

Iconoir

Use when:

- Phosphor lacks the required icon
- Iconoir provides a clear literal symbol
- the Iconoir symbol remains visually compatible with the surrounding interface

## Specialist Fallback

Material Symbols Rounded

Use when:

- Phosphor fails
- Iconoir fails
- a specialist domain concept still needs a literal symbol

Examples:

- QR scanner
- barcode scanner
- car repair
- tire repair
- food delivery
- takeout dining
- point of sale
- forklift
- conveyor belt
- inventory
- schema
- account tree
- model training
- dataset
- memory module
- biotech
- precision manufacturing
- contract editing
- oil barrel
- EV charging station

## Custom AITHNEEN Icons

Draw custom icons for brand-defining concepts rather than borrowing generic substitutes.

Examples:

- useful invention
- systems thinking
- second brain
- unfinished work
- research-to-product process
- AITHNEEN-specific product identities

## Fallback Chain

1. Phosphor
2. Iconoir
3. Material Symbols Rounded
4. Custom AITHNEEN icon

## Normalization Rules

Fallback icons must be visually normalized.

Match:

- displayed size
- stroke weight
- optical balance
- alignment
- spacing
- color
- active-state behavior

Do not mix libraries casually inside the same compact control group.

---

# 8. Shape Language

## Rounded Corners

Rounded corners remain approved.

The site should not feel boxy, harsh, or mechanically rectangular.

## Radius Guidance

| Role | Radius |
|---|---|
| Small label | `10px` |
| Compact note | `18px` |
| Large framed interface object | `24px` |
| Buttons and toggles | `999px` |
| Circular indicators | `50%` |

## Buttons

Buttons should use fully rounded pill shapes.

Default button behavior:

- clear clickable silhouette
- rounded pill edge
- transparent or controlled surface background
- visible hover state
- visible focus state
- violet or teal emphasis
- no harsh rectangular corners

## Important Rule

Rounded corners do not mean that every item becomes a card.

Avoid automatic card grids.

Use framed containers only when they represent real UI objects or improve comprehension.

---

# 9. Layout and UI Direction

## What to Avoid

Avoid:

- generic SaaS dashboards as a visual default
- card grids everywhere
- floating glass panels everywhere
- decorative complexity without function
- beige-paper imitation
- blackboard imitation
- excessive borders
- fonts doing the work that interaction should do
- template-like portfolio sections

## What to Explore

Explore:

- scroll-based assembly
- systems diagrams
- interactive project maps
- layered but controlled reveals
- relationship lines
- motion paths using violet and teal
- case studies that unfold progressively
- research notes transforming into products
- clickable architecture diagrams
- responsive layouts that feel designed rather than templated
- carefully staged hero interactions
- project navigation that demonstrates front-end skill

## UI Principle

> The website should demonstrate the work before it explains the work.

---

# 10. Surfaces and Components

## Surface Philosophy

The website is no longer governed by a single paper or blackboard metaphor.

Use the locked light and dark backgrounds as digital surfaces.

### Light Surface

`#F1F4F8`

### Dark Surface

`#101319`

## Secondary Surfaces

Secondary surfaces are allowed when they improve structure or interaction.

Use them deliberately for:

- modals
- sticky tools
- menus
- floating controls
- dashboard panels
- code blocks
- diagrams
- media frames
- inputs
- comparison tools
- interactive layers

Do not introduce secondary surfaces merely because a template expects cards.

## Borders

Borders should remain restrained.

Use them for:

- focus
- hierarchy
- object boundaries
- interaction
- diagrams
- selected states

Avoid outlining every item.

---

# 11. Implementation Notes

## CSS Variables

```css
:root {
  --aithneen-bg-light: #F1F4F8;
  --aithneen-text-primary-light: #1E2833;
  --aithneen-text-secondary-light: #5F6B78;

  --aithneen-bg-dark: #101319;
  --aithneen-text-primary-dark: #E8EDF2;
  --aithneen-text-secondary-dark: #A7B3BE;

  --aithneen-violet: #7C5CE6;
  --aithneen-teal: #2CB89A;

  --aithneen-radius-small: 10px;
  --aithneen-radius-note: 18px;
  --aithneen-radius-large: 24px;
  --aithneen-radius-pill: 999px;
}
```

## Typography CSS Direction

```css
:root {
  --aithneen-font-display: "Thmanyah Serif Display", Georgia, serif;
  --aithneen-font-body: "Thmanyah Serif Text", Georgia, serif;
  --aithneen-font-ui: "Thmanyah Sans", system-ui, sans-serif;
  --aithneen-font-code:
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    "Liberation Mono",
    monospace;

  /* Choose a size token; its family and weight are locked with it. */
  --aithneen-type-xs-size: 0.75rem;
  --aithneen-type-body-size: 1.125rem;
  --aithneen-type-lead-size: 1.5rem;
  --aithneen-type-heading-size: 2.5rem;
  --aithneen-type-hero-size: clamp(3.5rem, 9vw, 7.5rem);
}

.type-xs {
  font: 500 var(--aithneen-type-xs-size) / 1.5 var(--aithneen-font-ui);
}

.type-body {
  font: 400 var(--aithneen-type-body-size) / 1.7 var(--aithneen-font-body);
}

.type-lead {
  font: 500 var(--aithneen-type-lead-size) / 1.4 var(--aithneen-font-display);
}

.type-heading {
  font: 700 var(--aithneen-type-heading-size) / 1.15 var(--aithneen-font-display);
}

.type-hero {
  font: 900 var(--aithneen-type-hero-size) / 1 var(--aithneen-font-display);
}
```

CSS cannot react to an arbitrary element's computed `font-size` by changing its
family and weight. Therefore, the automatic system is implemented through the
five locked size tokens above. Selecting a token is selecting the complete
typographic treatment.

## Hosting

Self-host the Thmanyah `.woff2` files inside the website.

Recommended approach:

- store files in the static assets directory
- define them with `@font-face`
- preload only the most important weights
- load uncommon weights only when needed
- serve the fonts from the same Cloudflare Pages domain as the site

---

# 12. Locked Decisions Summary

## Brand

- Visible brand name: `AITHNEEN`
- Position: personal maker identity
- Character: builder-inventor
- First impression: this person thinks differently
- Goal: useful invention

## Color

- Light background: `#F1F4F8`
- Dark background: `#101319`
- Light primary text: `#1E2833`
- Light secondary text: `#5F6B78`
- Dark primary text: `#E8EDF2`
- Dark secondary text: `#A7B3BE`
- Violet accent: `#7C5CE6`
- Teal accent: `#2CB89A`

## Typography

- Use Thmanyah everywhere
- Display: Thmanyah Serif Display
- Body: Thmanyah Serif Text
- UI: Thmanyah Sans
- Select typography by locked size token, not by separate family and weight choices
- Below `16px`: Sans Medium
- `16px–19px`: Serif Text Regular
- `20px–31px`: Serif Display Medium
- `32px–55px`: Serif Display Bold
- `56px+`: Serif Display Black
- Light `300`: intentional large-text exception only
- Code only: browser-system monospace

## Logo

- Compact logo without alif: default
- Full logo with alif: ceremonial and wide-space use only

## Portrait

- Use the approved teal unfinished portrait
- Keep it contemporary and personal
- Do not let it force the entire site into a historical visual metaphor

## Icons

- Phosphor
- Iconoir
- Material Symbols Rounded
- Custom AITHNEEN icons

## UI

- uniqueness comes from digital interaction
- not from decorative typography
- not from beige-paper imitation
- not from blackboard imitation
- not from generic SaaS cards

---

# 13. Open Design Work

The following still need deliberate exploration:

- motion language
- scroll behavior
- interactive hero concept
- project-page structure
- systems-map component
- research-to-product storytelling
- diagram language
- border-opacity scale
- secondary-surface scale
- shadow usage, if any
- mobile interaction behavior
- favicon selection from the compact logo
- final logo color rules per surface
- portrait crops for hero, avatar, and social use
- reusable Astro design tokens
- reusable Tailwind theme mapping
- accessibility testing for accent usage
- contrast testing for interactive states

---

# Final Principle

> AITHNEEN should feel like the work of a person who studies deeply, builds carefully, and creates digital experiences that do not look borrowed.
