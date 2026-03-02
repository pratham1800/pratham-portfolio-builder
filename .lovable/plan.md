

# Responsiveness & Animation Improvements

## Current State
The site already has basic responsiveness (md: breakpoints) and ScrollFadeIn animations. But there are gaps: no page transitions, no hover animations on cards, no typewriter effect, the Back-to-Top button lacks animation, and some mobile spacing/layout issues.

## Plan

### 1. Add Page Transition Animations
- Wrap route content in `AnimatePresence` + `motion.div` in `App.tsx` for fade-in/out on route change

### 2. Enhanced Card Hover Animations
- Add `whileHover` scale/shadow effects to skill cards, persona cards, feature cards, and timeline entries across all 3 pages using `motion.div`
- Add orange/teal left-border glow on project card hover (Index page)

### 3. Hero Typewriter Animation
- Add a typewriter component that cycles through "Product Manager" → "Builder" → "Engineer" → "Problem Solver" with a blinking cursor on the Index hero

### 4. Staggered Section Animations
- Add staggered children animations (parent `variants` with `staggerChildren`) for grids (project tiles, skill cards, stats, personas) instead of manual delay offsets

### 5. Back-to-Top Button Animation
- Animate the Back-to-Top button entry/exit with `AnimatePresence` + scale/fade on both GharSeva and Zepto pages

### 6. Mobile Responsiveness Fixes
- **Index**: Reduce hero heading size on small screens (`text-3xl` on xs), add proper padding
- **GharSeva**: Phone mockup grid — use `grid-cols-2 sm:grid-cols-3` instead of jumping to 6 columns; fix dual-sided timeline to be single-column on mobile with proper layout
- **Zepto**: Ensure friction point cards, feature grids, and journey comparisons stack cleanly on mobile
- **Nav**: Ensure mobile menu items have proper touch targets (min 44px)
- **Footer**: Email button should be full-width on mobile

### 7. Smooth Scroll Behavior
- Add `scroll-behavior: smooth` to HTML in CSS for anchor links (e.g., `/#work`, `/#about`)

### 8. Subtle Background Animation on Hero
- Add a slow-moving gradient or dot-grid pattern animation on the Index hero using CSS keyframes

### Technical Approach
- All animation changes use existing `framer-motion` library
- New `Typewriter` component (~30 lines)
- Modifications to `App.tsx`, `Index.tsx`, `GharSeva.tsx`, `Zepto.tsx`, `StickyNav.tsx`, `index.css`
- No new dependencies needed

