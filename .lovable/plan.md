

## GharSeva Enhancements Plan

### 1. Hero — Only the family image as background
Currently the hero uses `gharseva-preview.png` (a screenshot of the GharSeva homepage). The user wants **only the family image** visible as the landing background. Since no new image was uploaded, I'll adjust the hero to use `object-cover` with `object-position: center` and remove the dark overlay intensity so the family image (which appears to be part of the preview) is more prominent. If the user means a specific family image from the GharSeva site, they'll need to upload it — but I'll proceed assuming the current image should be displayed more prominently with less overlay.

**Change**: Reduce the gradient overlay opacity from 0.75–0.85 to ~0.4–0.6 so the image is more visible. Set `object-position: top` to focus on the family portion.

### 2. "The Problem" text bigger than "Broken System"
Currently: "The Problem" is `text-sm` and "Broken System" is `text-5xl md:text-7xl`.

**Change**: Make "The Problem" heading `text-6xl md:text-8xl font-extrabold` while keeping "Broken System" at `text-4xl md:text-5xl font-bold` — reversing the hierarchy so "The Problem" is the dominant text.

### 3. Unify card animations across all sections
Currently the "Broken System" cards have: `whileHover={{ scale: 1.05, y: -8, boxShadow }}` with spring stiffness 300, damping 20, solid colored backgrounds, and colored top borders.

**Apply the same animation pattern to**:
- Mission/Vision cards (lines 121-145)
- Phase 1/Phase 2 research cards (lines 237-262)
- Persona cards (lines 330-391)
- For Families / For Workers benefit cards (lines 418-447)
- Virtuous Cycle card (lines 450-461)
- Product Walkthrough cards (lines 480-508)

Each card will get: `whileHover={{ scale: 1.05, y: -8, boxShadow: "0 20px 40px <color>25" }}` with `transition={{ type: "spring", stiffness: 300, damping: 20 }}`, matching the Broken System cards exactly.

### Files Modified
- `src/pages/GharSeva.tsx` — all changes in this single file

