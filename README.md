# README — Challenge Bask Design System Docs

## Project

This repo is located at:

```bash
/challenge-bask
```

The goal is to build a documentation page/site where the **foundations**, **components**, **specs**, and usage rules of the challenge design system can be explored clearly.

This first version should focus only on the **information architecture, folder structure, page structure, and documentation scaffolding**.

Do **not** implement Figma MCP, token sync, or advanced automation yet.

---

## Main Goal

Create a clean, scalable documentation experience for the challenge design system.

The documentation should help:

- understand the system quickly
- browse foundations and components
- review specs and behavior rules
- align design and development
- support future iteration and expansion

This should feel like a lightweight internal docs site rather than a marketing page.

The main reference for the documentation experience is **Polaris by Shopify**.
Use Polaris as the benchmark for:

- documentation clarity
- navigation logic
- page hierarchy
- component documentation depth
- usage guidance structure
- practical examples and rules

Do not copy Polaris literally.
Instead, use it as the quality bar and structural reference for how the docs should feel and behave.

---

## Scope for This Phase

For now, Cursor should only set up the structural base for the docs.

### Include

- app structure
- page routing
- navigation structure
- docs layout
- foundations section
- components section
- specs section
- reusable page templates for docs
- placeholder content structure for future documentation

### Do not include yet

- Figma MCP integration
- design token sync from Figma
- automated doc generation
- storybook integration
- complex data pipelines
- visual regression testing
- API-based content ingestion

---

## Reference

The primary reference for this docs experience is **Shopify Polaris**.

Cursor should study Polaris as a documentation benchmark and use it to inform:

- overall information architecture
- section grouping
- sidebar behavior
- content hierarchy
- documentation page templates
- guidance patterns such as anatomy, usage, best practices, and accessibility

Important:

- use Polaris as a structural and editorial reference
- do not clone Polaris visually
- do not reproduce Shopify branding
- adapt the best parts of Polaris to the needs of this challenge

The final result should feel inspired by a mature system like Polaris, but remain specific to the Bask challenge.

---

## What Cursor Should Build

Cursor should create a docs experience that allows users to navigate and read:

1. **Overview**
2. **Foundations**
3. **Components**
4. **Specs / guidelines**
5. **States, variants, and behaviors**

The structure must be:

- clear
- modular
- easy to scale
- easy to maintain
- visually consistent
- ready for future integration

---

## Design System Usage Rule

This docs site should not only document the design system.
It should also **use the design system to build the documentation experience itself** wherever appropriate.

That means Cursor should, when reasonable:

- use challenge design tokens for spacing, typography, radius, shadows, and color
- use challenge UI components to compose parts of the docs UI
- keep documentation-specific wrappers separate from shared design system components
- avoid building a docs UI that visually or structurally contradicts the system being documented

Important:

- do not force every part of the docs UI into a design system component
- use pragmatic judgment
- documentation-specific structures such as layout shells, sidebars, and content sections can still have docs-specific wrappers
- but the visual language should come from the design system itself

---

## Suggested Tech Direction

Use a structure that is simple and flexible for documentation.

Recommended baseline:

- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS**
- local content-driven pages for docs
- reusable documentation components

Keep the implementation lightweight.

Avoid overengineering the first version.

---

## Suggested Project Structure

Use `/challenge-bask` as the root and organize the docs like this:

```txt
/challenge-bask
  /public
  /src
    /app
      /(docs)
        /page.tsx                     # Docs home / overview
        /foundations
          /page.tsx
          /colors
            /page.tsx
          /typography
            /page.tsx
          /spacing
            /page.tsx
          /grid
            /page.tsx
          /radius
            /page.tsx
          /shadows
            /page.tsx
          /iconography
            /page.tsx
          /motion
            /page.tsx
        /components
          /page.tsx
          /button
            /page.tsx
          /input
            /page.tsx
          /select
            /page.tsx
          /checkbox
            /page.tsx
          /radio
            /page.tsx
          /switch
            /page.tsx
          /textarea
            /page.tsx
          /badge
            /page.tsx
          /card
            /page.tsx
          /modal
            /page.tsx
          /tooltip
            /page.tsx
          /toast
            /page.tsx
          /tabs
            /page.tsx
          /table
            /page.tsx
          /pagination
            /page.tsx
          /navbar
            /page.tsx
          /sidebar
            /page.tsx
        /specs
          /page.tsx
    /components
      /layout
        DocsLayout.tsx
        DocsSidebar.tsx
        DocsTopbar.tsx
      /docs
        DocHeader.tsx
        DocSection.tsx
        DocTable.tsx
        DocCallout.tsx
        DocPreview.tsx
        DocAnatomy.tsx
        DoDontGrid.tsx
      /ui
    /content
      /foundations
      /components
      /specs
    /data
      navigation.ts
    /lib
    /styles
  package.json
  README.md
```

---

## Information Architecture

The documentation should be divided into the following main sections.

### 1. Overview

This is the entry point of the docs.

It should explain:

- what the system is
- why it exists
- what is documented
- how to navigate the docs
- what the current challenge scope includes

### 2. Foundations

This section documents the visual and interaction foundations of the system.

Suggested foundations:

- Colors
- Typography
- Spacing
- Grid / Layout
- Radius
- Shadows
- Iconography
- Motion
- Borders / strokes
- Elevation

Each foundation page should explain:

- what it is
- why it exists
- rules of use
- scale / values
- examples
- do / don’t when relevant

### 3. Components

This section documents each UI component.

Each component page should cover:

- purpose
- anatomy
- variants
- sizes
- states
- behavior
- accessibility notes
- usage guidelines
- do / don’t
- examples / previews

### 4. Specs

This section is for cross-cutting rules and implementation details.

Examples:

- spacing logic
- responsive behavior
- interaction states
- naming conventions
- documentation rules
- content formatting rules
- accessibility expectations
- implementation conventions for the docs site

---

## Suggested Routes

Suggested high-level routes:

```txt
/
/foundations
/foundations/colors
/foundations/typography
/foundations/spacing
/foundations/grid
/foundations/radius
/foundations/shadows
/foundations/iconography
/foundations/motion
/components
/components/button
/components/input
/components/select
/components/checkbox
/components/radio
/components/switch
/components/textarea
/components/badge
/components/card
/components/modal
/components/tooltip
/components/toast
/components/tabs
/components/table
/components/pagination
/components/navbar
/components/sidebar
/specs
```

If needed, this can later evolve into nested MDX/content-driven routes, but for now keep it straightforward.

---

## Documentation Style Reference

The documentation should borrow the strongest qualities of Polaris-style docs:

- clear left-hand navigation
- strong page titles and descriptions
- predictable section ordering
- practical guidance over theory
- clear distinction between foundations, components, and specs
- strong emphasis on usage rules, accessibility, and best practices
- scannable long-form pages with reusable content blocks

Cursor should treat Polaris as the reference for documentation UX maturity.

---

## Navigation Requirements

The docs UI should include a simple documentation layout with:

- a persistent sidebar
- grouped navigation by section
- a top area for page title and short description
- consistent content width
- anchor-friendly sections when useful

Suggested sidebar groups:

- Overview
- Foundations
- Components
- Specs

The navigation should prioritize readability over visual experimentation.

---

## Foundation Page Template

Each foundation page should follow a consistent structure like this:

```md
# Foundation name

## Overview

Short explanation of what this foundation is and why it matters.

## Principles

Core principles or decision criteria.

## Values / scale

Tokens, steps, or foundational values.

## Rules

Clear usage rules.

## Usage

How this should be applied in the system.

## Do / Don’t

Correct and incorrect usage.

## Examples

Visual or practical examples.
```

---

## Polaris-Inspired Documentation Expectations

For component docs in particular, Cursor should aim for a Polaris-like level of clarity.

Each component page should feel complete and useful, not just descriptive.
That means documenting not only what the component looks like, but also:

- when to use it
- when not to use it
- how it behaves
- what states matter
- what accessibility concerns apply
- what mistakes teams should avoid

The goal is to make the docs useful for both design review and implementation decisions.

---

## Component Page Template

Each component page should follow a structure like this:

```md
# Component name

## Overview

What the component is and when to use it.

## Anatomy

Main parts of the component.

## Variants

Available visual or structural variants.

## Sizes

Supported sizes if applicable.

## States

Default, hover, focus, active, disabled, error, success, etc.

## Behavior

Interaction and functional rules.

## Accessibility

Keyboard, labels, semantics, contrast, focus expectations.

## Usage guidelines

When to use it and when not to use it.

## Do / Don’t

Practical good and bad usage examples.

## Specs

Optional section for spacing, sizing, internal rules, or implementation notes.

## Examples

Rendered examples or preview blocks.
```

---

## Specs Page Template

Specs pages should document cross-cutting rules and implementation decisions.

Suggested structure:

```md
# Spec name

## Overview

What this spec governs.

## Applies to

Which foundations, components, or pages are affected.

## Rules

Core constraints and requirements.

## Implementation notes

Technical or structural guidance.

## Do / Don’t

Practical examples.

## Examples

Applied cases.
```

---

## Docs Components to Create

Create small reusable building blocks for the docs so every page stays consistent.

Suggested docs components:

- `DocHeader`
- `DocSection`
- `DocCallout`
- `DocTable`
- `DocPreview`
- `DocAnatomy`
- `DoDontGrid`
- `DocsSidebar`
- `DocsTopbar`
- `DocsLayout`

These components are for the documentation UI itself, not for the design system inventory.

Whenever appropriate, these docs components should be composed using the challenge design system primitives and shared components.

---

## Content Strategy

For now, content can be scaffolded with placeholder text as long as the structure is correct.

Priority order:

1. set up layout and routing
2. create navigation model
3. create reusable docs components
4. scaffold foundations pages
5. scaffold components pages
6. scaffold specs pages

Avoid spending time on polishing content before the structure is stable.

---

## Implementation Plan

Check off items in the plan above as we accomplish them as a todo list.
If you have open questions that require my input, add those under the relevant section in the plan.

### Phase 1 — Documentation shell

- [x] create base docs layout
- [x] create sidebar navigation
- [x] create overview page
- [x] create section index pages
- [x] confirm route structure is stable

Open questions:

- None yet.

### Phase 2 — Foundations scaffold

- [x] add foundations routes
- [x] create consistent foundation page template
- [x] add placeholder sections for each foundation
- [x] connect foundations to sidebar navigation

Open questions:

- None yet.

### Phase 3 — Components scaffold

- [x] add components routes
- [x] create reusable component doc sections
- [x] scaffold core component pages
- [x] define documentation order for each component page

Open questions:

- None yet.

### Phase 4 — Specs

- [x] add specs page
- [x] define cross-cutting rules structure
- [x] connect specs into navigation
- [x] ensure specs can reference both foundations and components

Open questions:

- None yet.

### Phase 5 — Design system adoption in the docs UI

- [x] identify which existing design system tokens should be applied to the docs UI
- [x] identify which existing design system components can be reused directly
- [x] define which wrappers remain docs-specific
- [x] ensure the docs page visually reflects the system it documents

Open questions:

- None yet.

At this stage, the output should already be navigable and structurally sound.

---

## Visual and UX Direction

The docs UI should take inspiration from Polaris in its product documentation approach:

- sober and functional
- highly readable
- structured before expressive
- practical rather than decorative
- clearly built for system usage and implementation

Avoid a marketing-site feel.
Avoid excessive visual experimentation.
Avoid ornamental layouts that reduce clarity.

This project should prioritize usability and documentation quality first.

---

## Design Principles for the Docs UI

The docs interface should be:

- minimal
- structured
- calm
- readable
- system-oriented

It should feel closer to a real product documentation experience than to a portfolio or landing page.

Focus on:

- hierarchy
- spacing consistency
- section clarity
- easy scanning
- maintainable structure

---

## Rules for Cursor

When generating this first version, Cursor should follow these rules:

1. Keep the architecture modular.
2. Prefer reusable documentation building blocks.
3. Do not mix documentation UI components with challenge UI components.
4. Keep content structure consistent across all pages.
5. Do not add Figma MCP or token sync yet.
6. Do not overcomplicate the stack.
7. Prioritize navigability and extensibility.
8. Use clean naming for routes, folders, and files.
9. Use Polaris as the main reference for documentation structure and editorial clarity.
10. Favor practical docs patterns inspired by mature design systems over custom experimentation.
11. Use the design system itself to help build the docs UI wherever appropriate.
12. Treat the implementation plan as a live checklist and update it as work is completed.
13. If there are questions that need my input, add them under the relevant phase in the plan instead of scattering them elsewhere.

---

## Expected Output for This Step

After this step, the repo should have:

- a working docs layout
- a sidebar navigation structure
- overview page
- foundations index and child pages
- components index and child pages
- specs page
- reusable docs page sections
- an implementation plan that can be maintained as a checklist

The pages do not need to be fully populated yet, but the structure should be ready.

---

## Not Included Yet

The following will be addressed later:

- Figma MCP setup
- token ingestion from Figma
- design-to-code sync rules
- component metadata automation
- docs population from structured source files
- advanced preview rendering

---

## Local MCP Setup

The repo keeps Figma MCP credentials out of source-controlled config.

For local use:

1. Create a local `.env` file from `.env.example`
2. Set `FIGMA_API_KEY` with your own Figma key
3. Start your MCP client normally

The local `.mcp.json` file now launches `scripts/start-figma-mcp.ps1`, which reads the key from the environment at runtime.

---

## Next Step

Once this structure is ready, the next iteration will define:

- how Figma MCP should be integrated
- how design data should be mapped into the docs
- how foundations and components should connect to actual Figma specs
- how to structure source-of-truth data

For now, focus only on the documentation architecture inside:

```bash
/challenge-bask
```
