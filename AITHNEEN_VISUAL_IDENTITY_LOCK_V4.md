# AITHNEEN_VISUAL_IDENTITY_LOCK_V1

## Brand Philosophy

### Core Identity

Aithneen is Ahmed's personal maker identity.

It is not a freelance web-development brand, a generic software studio, or a label tied to one industry. Software, websites, AI systems, research, datasets, open-source work, and future products are different expressions of the same underlying practice.

Aithneen exists at the intersection of the builder and the inventor.

A builder can assemble known things reliably.
An inventor can create new things that are interesting but not useful.
Aithneen must do both: create useful new things while respecting the fundamentals.

### Central Impression

The first impression should be:

> This person thinks differently.

The brand should then reveal, in order:

1. This person thinks differently.
2. This person cares deeply about craft.
3. This person builds ambitious things.
4. This person has skill, shown through the work rather than claimed as the identity.

Skill is evidence, not the headline.

### Working Philosophy

Aithneen studies before building.

The work begins by understanding the domain: its economics, users, constraints, operations, and neglected problems. The result should not be a website produced regardless of context. It should be a considered business asset, a useful system, or a new tool that improves how something works.

The guiding sequence is:

1. Study deeply.
2. Question assumptions.
3. Respect the basics.
4. Build carefully.
5. Create practical value.
6. Publish and improve.

### Relationship to Innovation

Novelty alone is not enough.

Aithneen should be capable of producing ordinary software when ordinary software is what the problem needs. But even the ordinary work should carry care, clarity, and a thoughtful detail that distinguishes it from disposable work.

At other times, the work may become entirely new: an open-source project, an AI system, a dataset, a reusable industry tool, or a product that did not exist before.

The common thread is not the format.
The common thread is useful invention.

### Visual Direction Principle

The visual identity must not be confined by labels such as classical, modern, retro, or futuristic.

Aithneen may use a hero section, glass, modern interface patterns, paper textures, calligraphy, technical diagrams, or experimental motion when they serve the work. No direction is forbidden merely because it belongs to a familiar category.

The test is not:

> Is this modern or classical?

The test is:

> Does this feel considered, distinctive, and unmistakably made by a person who thinks differently?

### Craftsmanship

The visual language is built around craftsmanship.

Craft does not mean nostalgia.
It means attention, intentionality, and visible care.

The handmade signature, portrait style, typography, color system, interface design, and technical presentation should feel like parts of one mind rather than parts of a template.

### Language Direction

Arabic leads the system.
English follows Arabic.

The identity should feel rooted without becoming trapped inside a single historical style. Arabic presence is foundational, not ornamental.

### Positioning Boundaries

Aithneen is not:

- A generic freelancer identity
- A template-driven web agency
- A brand restricted to AI
- A brand restricted to software
- A classical revival identity
- A trend-chasing startup aesthetic

Aithneen is:

- A personal maker identity
- A builder-inventor identity
- A home for useful new things
- A multidisciplinary body of work
- A visual system shaped by unusual thinking and careful craft

---

# Brand Colors

## Primary Accent
#7C5CE6

## Secondary Accent
#149C82

## Light Theme

Paper Surface
#EEE6D7

Primary Text
#47382D

Secondary Text
#68645C

## Dark Theme

Board Surface
#141716

Primary Text
#E6E2D8

Secondary Text
#B9B3A8

## Portrait Colors

Portrait Ink
#8A4D3B

Dark Drawing Lines
#C9C2B6

---

# Typography System

## Arabic Body
Amiri

Fallback:
Times New Roman → serif

## Arabic Light Heading
Amoshref Thulth

Download:
https://www.arfonts.net/font/amoshref-thulth-font

Fallback:
Amoshref Thulth → Katibeh → serif

## Arabic Dark Heading
Aref Ruqaa

## English Body
EB Garamond

Fallback:
Georgia → Times New Roman → serif

## English Light Heading
Cinzel Decorative

Fallback:
Georgia → Times New Roman → serif

## English Dark Heading
Kalam

Fallback:
Comic Sans MS → Segoe Print → cursive

## Technical Font
IBM Plex Mono

Fallback:
ui-monospace → SFMono-Regular → Menlo → Consolas → monospace

---

# Hosting Decision

Self-host all production fonts inside Astro.

Platform:
Cloudflare Pages

---

# Locked Typography Roles

| Role | Arabic | English |
|------|---------|---------|
| Body | Amiri | EB Garamond |
| Light Heading | Amoshref Thulth | Cinzel Decorative |
| Dark Heading | Aref Ruqaa | Kalam |
| Technical | IBM Plex Mono | IBM Plex Mono |

---

# Outstanding Design Decisions

1. Icon library selection
2. Corner radius system
3. Border language
4. Pattern language
5. Illustration style
6. Logo asset pack
7. Dark/light component system
8. Motion and animation rules
9. Spacing scale
10. Design token system

## Icon Library Candidates

- Lucide
- Phosphor
- Tabler Icons

# Surface, Border, and Corner Language

## Single-Surface Principle

Aithneen uses one continuous primary surface per theme.

### Light Theme
The interface should feel like one sheet of genuine paper.

Primary surface:
#EEE6D7

### Dark Theme
The interface should feel like one continuous blackboard.

Primary surface:
#141716

The visual identity should not default to multiple floating surfaces, stacked panels, glass cards, shadowed containers, or repeated card grids.

Content should feel written, drawn, arranged, and annotated directly onto the paper or blackboard.

## Annotation Grammar

Borders, boxes, circles, brackets, and underlines are not default containers.

They are annotation tools.

A border or frame must communicate a reason for existing.

Valid reasons include:

- A conclusion needs emphasis.
- A warning needs separation.
- A technical note needs containment.
- A code block, dataset, diagram, or form field is a real object.
- An important phrase deserves an underline.
- A concept deserves a circle or rounded frame.
- A group of related ideas benefits from a side rule or bracket.

Invalid reason:

- Every item in a grid needs a card.

## Box Usage Rule

Aithneen does not ban boxes.

It bans automatic boxification.

Most content should remain unboxed.

When a box is used, it should feel like a deliberate mark added by a person explaining something on paper or a blackboard.

## Rounded-Corner Principle

Harsh straight-corner rectangles should not dominate the identity.

When a framed element is genuinely needed, its corners should usually feel soft and rounded rather than rigid or mechanical.

Recommended radius system:

| Role | Radius |
|------|--------|
| Small inline label | 10px |
| Highlight box or technical note | 18px |
| Larger framed section | 24px |
| Buttons and compact toggles | 999px |
| Circular marks | 50% |

## Button Language

Buttons are interactive objects and should feel intentionally touchable.

Default button style:

- Fully rounded pill shape
- Transparent or same-surface background by default
- Ink-colored border in light mode
- Chalk-colored border in dark mode
- Teal or violet accent on hover, focus, or selected state
- No harsh rectangular button corners

## Surface Hierarchy Rule

Separate surfaces may be used only when they communicate a real physical or interaction layer.

Valid examples:

- Modal
- Floating toolbar
- Sticky navigation
- Code block
- Data table
- Interactive tool
- Input field
- Embedded image
- Diagram area

These should still feel like objects placed on the paper or blackboard, not like generic SaaS cards.

---

# Icon Language

## Primary Icon Library

Phosphor Icons

Role:
Primary interface voice

Reason:
Phosphor feels expressive, flexible, and crafted without becoming decorative. Its weight system allows the interface to move between quiet editorial use and stronger emphasis without changing families.

Use Phosphor first for all ordinary interface actions and any concept it communicates clearly.

Search across its available weights before using a fallback:

- Thin
- Light
- Regular
- Bold
- Fill
- Duotone

Default usage:
Regular or Light

Reserved usage:
Bold, Fill, and Duotone only when emphasis or interaction meaning genuinely changes.

## Approved Fallback Chain

1. Phosphor
2. Iconoir
3. Material Symbols Rounded
4. Custom Aithneen icon

### Preferred Fallback

Iconoir

Role:
Aesthetic fallback

Use:
When Phosphor lacks a suitable ordinary utility icon and Iconoir provides a clean literal symbol.

Reason:
Iconoir remains closer to the drawn, editorial feeling of Aithneen than more generic dashboard-oriented libraries.

### Large Specialist Fallback

Material Symbols Rounded

Role:
Specialist reservoir

Use:
When both Phosphor and Iconoir fail to provide a clear symbol for an uncommon domain concept.

Examples:

- QR scanner
- Barcode scanner
- Car repair
- Tire repair
- Food delivery
- Takeout dining
- Point of sale
- Forklift
- Conveyor belt
- Inventory
- Schema
- Account tree
- Model training
- Dataset
- Memory module
- Biotech
- Precision manufacturing
- Contract editing
- Oil barrel
- EV charging station

Reason:
The rounded-outline family provides much broader specialist coverage while remaining visually softer than sharper system-icon alternatives.

## Custom Aithneen Icons

Custom icons should be created for concepts that define the identity rather than merely serve interface utility.

Examples:

- Useful invention
- Systems thinking
- Unfinished work
- Second brain
- Aithneen-specific research process
- Workshop or notebook symbols
- Brand-defining product identities

## Icon Normalization Rules

Fallback icons must be visually normalized before use.

Match:

- displayed size
- stroke weight
- optical balance
- ink or chalk color
- accent usage
- alignment
- spacing

Do not mix libraries casually inside the same compact control group.

Fallback use should remain exceptional.

---


# Typography Lock

## Arabic

Body
Amiri

Light Theme Heading
Amoshref Thulth

Dark Theme Heading
Aref Ruqaa

## English

Body
EB Garamond

Light Theme Heading
Bilbo Swash Caps

Dark Theme Heading
Kalam

## Typography Direction

Arabic leads the system.
English follows Arabic.

Arabic is foundational, not ornamental.

The Arabic light heading uses Amoshref Thulth.
The Arabic dark heading uses Aref Ruqaa.
The Arabic body uses Amiri.

The English light heading uses Bilbo Swash Caps.
The English dark heading uses Kalam.
The English body uses EB Garamond.

## Font Fallback Notes

For a shareable HTML file, the browser fallback chain should remain explicit.

Arabic light heading fallback:
Amoshref Thulth → Katibeh → Aref Ruqaa → serif

Arabic dark heading fallback:
Aref Ruqaa → serif

Arabic body fallback:
Amiri → Times New Roman → serif

English light heading fallback:
Bilbo Swash Caps → cursive

English dark heading fallback:
Kalam → Segoe Print → cursive

English body fallback:
EB Garamond → Georgia → Times New Roman → serif

---


# Brand Name Rule

The brand name is always written as:

AITHNEEN

Do not replace the brand name with:

اثنين

This applies in both English and Arabic interfaces.

Arabic copy may explain the meaning of the name when needed, but the visible brand name remains AITHNEEN.

---

# Locked Design Summary

Aithneen is a personal maker identity for a builder-inventor.

The first impression should be:

> This person thinks differently.

The identity is not confined by labels such as classical, modern, retro, or futuristic.

The visual system combines:

- one continuous paper or blackboard surface
- deliberate annotation language
- rounded soft frames when emphasis is needed
- fully rounded pill buttons
- Arabic-first typography with the final font lock
- a crafted icon hierarchy
- Phosphor as the primary icon voice
- Iconoir as the preferred fallback
- Material Symbols Rounded as the specialist fallback
- custom icons for identity-defining concepts

The goal is not novelty for its own sake.

The goal is useful invention expressed through care, clarity, and a distinct hand.

# Locked Visual Assets

## Portrait

Use the approved teal unfinished portrait supplied in the current identity-book workflow.

The portrait should feel:

- contemporary
- carefully drawn
- intentionally incomplete at the edges
- tied to the teal ink system
- personal without becoming a classical costume

## Logo

Use the approved Ahmed signature-logo system.

Available logo directions:

- compact signature without alif
- full signature with alif
- default ink version for light surfaces
- reverse chalk version for dark surfaces
- teal accent option
- violet accent option

---
