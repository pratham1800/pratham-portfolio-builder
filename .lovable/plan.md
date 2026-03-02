

# Pratham Maheshwari — Product Manager Portfolio (Full Build)

## Overview
A 3-page portfolio site using React Router, Tailwind CSS, and Framer Motion. Clean white/indigo design for the main site, Navy/Teal/Amber for GharSeva, and a distinct palette for Zepto.

---

## Global Setup
- Install `framer-motion`
- Import Google Fonts: Inter (body), Outfit (headings), JetBrains Mono (metrics)
- Extend Tailwind config with custom colors for each page's palette
- Update CSS variables for the base white/indigo theme

## Shared Components
- **StickyNav** — Glassmorphism blur header with "PM" monogram, nav links, mobile hamburger menu, "Let's Talk" mailto CTA
- **Footer** — "Let's Talk" email link, social icons (LinkedIn, GitHub, Email), "Built with React + Tailwind" label
- **PhoneMockup** — Reusable phone frame with placeholder screenshot slots
- **ScrollFadeIn** — Framer Motion wrapper for fade-up-on-scroll animations
- **CountUpStat** — Animated number counter using IntersectionObserver

---

## Page 1: Landing Page (`/`)
**Palette:** White bg, Slate-900 text, Indigo-600 accent

1. **Hero** — "Hi, I'm Pratham Maheshwari..." headline in Outfit, bio paragraph, social icon links (Lucide), "Download Resume" button linking to external CV URL
2. **Project Grid** — Bento grid with 3 tiles, each with soft lift hover effect:
   - GharSeva → links to `/gharseva`
   - Zepto: Perishable Goods UX → links to `/zepto`
   - Livlong & Healthcare (non-clickable card)
3. **"How I Think"** — 3-column cards: User-Centric Discovery, Technical Execution, Business Strategy
4. **Metrics Bar** — 4 count-up stats (45%, 60%, 1M+, 85%) with JetBrains Mono
5. **Experience Timeline** — Vertical timeline: Paragon, LivLong/IIFL, B.Tech JIIT
6. **Footer**

---

## Page 2: GharSeva Case Study (`/gharseva`)
**Palette:** Navy `#1B263B`, Teal `#2D6A4F`, Amber `#FFB703`

1. **Hero** — "GharSeva" title, subtitle, Mission/Vision side-by-side cards with emojis
2. **Problem** — "Broken System" heading, 3-column grid (Families/Workers/Market) with colored top borders, full-width dark stats band (35M+, 10M+, 90%, ₹1.5L Cr)
3. **Research** — Phase 1 & 2 content, "Insight → Decision" table with alternating rows
4. **Personas** — Priya (Amber) and Rekha (Teal) side-by-side cards with red/green pain point indicators
5. **Solution** — 3-Pillar cards (Verify, Match & Trial, Manage), For Families/Workers benefits, Virtuous Cycle
6. **Product Walkthrough** — Dual-sided vertical timeline (Employer left, Worker right, System center) with 6 phone mockup placeholders
7. **Back to Top** floating button, "← Back to Portfolio" link

---

## Page 3: Zepto Case Study (`/zepto`)
**Palette:** Deep charcoal `#111827`, Electric blue `#3B82F6`, Warning amber `#F59E0B`, Risk red `#EF4444`

1. **Hero** — "Beyond the Stopwatch" title, subtitle about trust infrastructure, About Zepto context card with Mission/Vision
2. **Problem** — "Why It Matters" section with 3 cards (Kirana Reversion, Habit Disruption, Revenue at Risk), Business Impact stats band (68%, 57%, ₹611 Cr)
3. **Research** — "The Data Black Hole" heading, SHAP churn driver analysis cards, Basket Abandonment halo effect explanation, 3 Core Friction Points (Expiry Blind Spot, Thermal Decay, Frozen Failure) as detailed cards with user quotes
4. **Key Insight** — Full-width callout: "Speed is the hook, but Trust is the hook-remover"
5. **Personas** — 3 persona cards (Ananya the Homemaker, Rajesh the Professional, Priya the Student) with pain points and needs
6. **Solution** — "Beyond the Stopwatch" heading with 3 feature sets:
   - Freshness Visibility System (badges, PDP metadata, shelf-life filter)
   - Thermal Shield (Verified Chilled badge, IoT sync, cold-chain premium)
   - Frozen Guardian (PCM boxes, Visual AI refunds, Frozen Guarantee badge)
7. **Before/After Journeys** — Side-by-side journey comparisons for each persona
8. **Tech Architecture** — "Trust Hub" diagram showing Data Sync, IoT Last Mile, Visual AI layers
9. **Success Metrics** — "Trust Pyramid" with North Star (LTV +22%), L1 behavioral metrics, L2 guardrail metrics
10. **Key Takeaways** — 4 insight cards (Quality is the Real Speed, Staples are the Gateway, Ops as Product Feature, Trust as Economic Multiplier)
11. **Back to Top** button, "← Back to Portfolio" link

---

## Animations & Interactions
- All sections: Framer Motion fade-up on scroll
- Metrics: count-up animation on viewport entry
- Project cards: translateY(-4px) + shadow on hover
- Nav: blur backdrop appears after 80px scroll
- Page transitions: fade in/out on route change
- Case study stat bands: staggered number count-up

## Responsive Design
- Bento grid → single column on mobile
- 3-column sections → stacked on mobile
- Persona cards → stacked on mobile
- Nav → hamburger menu on mobile
- Phone mockups scale down proportionally

