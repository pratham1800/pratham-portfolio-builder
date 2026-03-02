

# Visual Overhaul — Adding Lustre to the Portfolio

The current site uses a flat white background with light gray cards and a single indigo accent. The result is monotone and lacks depth. Here's a plan to make it visually striking while keeping it professional.

## Color & Theme Changes

**Shift to a dark-accented design system:**
- Hero section: Deep gradient background (slate-900 to indigo-950) with white text — immediately creates visual impact
- Sections alternate between white and a warm off-white/cream (`#FAFAF8`) instead of the current barely-visible `secondary/50`
- Primary accent shifts from flat indigo to a vibrant gradient (`indigo-500 → violet-500`) used on buttons, badges, and the CTA
- Add a secondary warm accent (amber-400) for highlights like stat numbers and tag pills

**CSS variable updates in `index.css`:**
- Slightly warm the background (`--background: 40 20% 99%`)
- Deepen border color for more card definition
- Add gradient utility classes

## Hero Section Overhaul (`Index.tsx`)
- Full dark gradient hero (`bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900`) with white/light text
- Animated gradient mesh orbs (larger, more colorful — indigo, violet, cyan blobs with blur)
- "Download Resume" button gets a gradient background with glow effect
- Social icons get a subtle glass-pill background on hover
- Add a decorative grid pattern overlay (CSS `background-image` with faint lines)

## Project Cards
- Add a subtle gradient overlay on the placeholder image area (indigo → violet mesh)
- Tags get colored backgrounds: each project gets a unique accent tint (indigo for GharSeva, cyan for Zepto, emerald for Livlong)
- Hover effect: gradient left-border reveal + elevated shadow with color tint

## "How I Think" Section
- Each card gets a unique icon background circle with a soft gradient
- Number labels (`01`, `02`, `03`) get a large watermark-style treatment (oversized, faded behind content)

## Metrics Section
- Wrap in a full-bleed gradient band (dark indigo-900 to slate-900) with white text
- Stat numbers use a gradient text effect (`bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400`)
- Add a subtle divider line between stats

## Experience Timeline
- Timeline line becomes a gradient (indigo → violet)
- Timeline dots get a pulsing glow ring animation
- Cards get a subtle left-border accent color

## Footer
- Dark background (slate-900) with light text to bookend the hero
- CTA button matches the hero gradient style
- Add a decorative top-border gradient line

## Files Modified
- `src/index.css` — new CSS variables, gradient utilities, grid pattern
- `src/pages/Index.tsx` — hero dark theme, card styling, metrics band, timeline upgrades
- `src/components/Footer.tsx` — dark footer with gradient accents
- `src/components/CountUpStat.tsx` — gradient text for numbers
- `src/components/StickyNav.tsx` — dark nav when at top (hero), transitions to glass on scroll

