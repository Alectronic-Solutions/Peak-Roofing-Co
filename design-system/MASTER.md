# Peak Roofing Co - Design System: "Rugged Authority"

## Color Palette

| Token         | Hex       | Tailwind Class     | Usage                                        |
|---------------|-----------|--------------------|----------------------------------------------|
| Deep Slate    | `#0F172A` | `bg-slate-950`     | Primary background, hero, footer             |
| Dark Slate    | `#1E293B` | `bg-slate-900`     | Alternate sections, cards                    |
| Crisp White   | `#F8FAFC` | `text-white`       | Headings, primary body text                  |
| Trust Gold    | `#F59E0B` | `text-gold-500`    | CTAs, accents, trust indicators, active states |
| Gold Hover    | `#FBBF24` | `text-gold-400`    | Hover state for gold elements                |
| Storm Red     | `#F87171` | `text-red-400`     | Emergency banners only - use sparingly       |

**Contrast ratios (WCAG):**
- Gold `#F59E0B` on `#0F172A`: **6.8:1** - AAA ✓
- White `#F8FAFC` on `#0F172A`: **17.2:1** - AAA ✓
- White `#F8FAFC` on `#1E293B`: **12.1:1** - AAA ✓

## Typography

| Role          | Font          | Weight | Tailwind Class         |
|---------------|---------------|--------|------------------------|
| H1–H3, CTAs   | Space Grotesk | 700    | `font-display font-bold` |
| Body          | Inter         | 400    | `font-sans`            |
| Labels / UI   | Inter         | 500–600| `font-sans font-medium`|
| Captions      | Inter         | 400    | `font-sans text-xs`    |

Fonts are loaded via `next/font/google` at build time (self-hosted). Never use CDN `<link>` tags.

## Accessibility Requirements

- **Touch targets:** All interactive elements ≥ 44×44px (`min-h-[44px] min-w-[44px]`)
- **Keyboard nav:** All clickable elements are `<button>` or `<a>` - never non-semantic `div` handlers without `role` and `tabIndex`
- **ARIA:** Use `aria-label` for icon-only controls. Use `role="list"` / `role="listitem"` for badge groups
- **Images:** All `<Image>` components require descriptive `alt` text - never `alt=""`
- **Forms:** All inputs have a visible `<Label>` with matching `htmlFor`/`id` pairs
- **Error states:** Errors use `role="alert"` for screen readers

## Component Principles

### ✅ DO
- Glass panels: `bg-white/5 border border-white/10 backdrop-blur-sm`
- Glassmorphic header: `bg-slate-950/90 backdrop-blur-md`
- Gold CTA shadow: `shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40`
- Subtle section dividers: `border-t border-white/10`
- Geometric SVG logo mark (no external icon dependencies)

### ❌ DON'T
- Neon gradients (e.g., purple-to-pink, teal-to-cyan)
- Generic stock photo illustrations or AI-generated cartoons
- Skeuomorphic shadows or embossed textures
- Bright backgrounds — all sections remain dark
- More than 2 colors in any single button

## Static Export Rules

- Never import from `next/headers`, `next/cookies`, `next/navigation` server APIs
- No server actions (`'use server'`) - all forms use Web3Forms `fetch()`
- All browser-API code inside `'use client'` components
- `next/font/google` downloads at build time - safe for static export
- `trailingSlash: true` in `next.config.js` for Cloudflare/GitHub Pages routing

## File Naming Convention

| Type             | Pattern                        |
|------------------|-------------------------------|
| Page sections    | `components/[section-name].tsx` |
| Shadcn UI        | `components/ui/[component].tsx` |
| Utilities        | `lib/utils.ts`                 |
| App routes       | `app/[route]/page.tsx`         |

## Web3Forms Integration

Both forms (`lead-capture-form.tsx`, `contact-form.tsx`) submit to:
```
POST https://api.web3forms.com/submit
Content-Type: application/json
```

Replace `YOUR_ACCESS_KEY_HERE` with the key from https://web3forms.com before deploying.
