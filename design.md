# Design.md

# Mediaguide4u

## Mission
Create implementation-ready, token-driven UI guidance for Mediaguide4u that maximizes lead generation, credibility, and conversion performance across the marketing website.

## Brand
- Product/brand: Mediaguide4u
- URL: https://www.mediaguide4u.com/
- Audience: //(already defined)
- Product surface: service-led marketing website

## Style Foundations
- Visual style: clean, authority-driven, performance-focused
- Main font style: `font.family.primary=Inter, sans-serif`, `font.size.base=18px`, `font.weight.base=400`, `font.lineHeight.base=26px`

## Typography Scale
`font.size.xs=12px`
`font.size.sm=14px`
`font.size.md=16px`
`font.size.lg=18px`
`font.size.xl=20px`
`font.size.2xl=24px`
`font.size.3xl=32px`
`font.size.4xl=48px`

## Color Palette
`color.primary=#0B72FF`
`color.primary.hover=#095cd6`
`color.text.primary=#111111`
`color.text.secondary=#555555`
`color.surface.base=#ffffff`
`color.surface.alt=#f7f7f7`
`color.surface.dark=#000000`
`color.text.inverse=#ffffff`

## Spacing Scale
`space.1=4px`
`space.2=8px`
`space.3=12px`
`space.4=16px`
`space.5=24px`
`space.6=32px`
`space.7=48px`
`space.8=64px`

## Radius / Shadow / Motion
`radius.sm=8px`
`radius.md=12px`
`radius.lg=20px`

`shadow.1=0 4px 20px rgba(0,0,0,0.05)`
`shadow.2=0 10px 40px rgba(0,0,0,0.1)`

`motion.duration.fast=200ms`
`motion.duration.base=300ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required
- Focus-visible rules required
- Contrast constraints required

## Writing Tone
Concise, confident, outcome-driven, business-focused. Avoid fluff.

## Rules: Do
- Use semantic tokens, not raw values
- Define all component states (default, hover, focus-visible, active, disabled, loading, error)
- Specify responsive behavior
- Document keyboard, pointer, and touch interactions
- Ensure accessibility is testable

## Rules: Don't
- Do not allow low contrast text
- Do not hide focus states
- Do not introduce inconsistent spacing or typography
- Do not use vague labels

## Component-Level Rules

### Navigation
- Logo left, menu center/right, CTA right
- Sticky on scroll
- Mobile hamburger
- Must support keyboard navigation
- Must show visible focus

### Hero Section
- Headline (clear value proposition)
- Supporting text
- Primary CTA + optional secondary CTA
- Optional trust signals
- CTA must be visible above the fold

### Services Section
- Grid layout (3–6 cards)
- Each card: title, description, optional icon
- Cards must have equal height

### Case Studies
- Must include: client, problem, solution, result
- Results must include measurable numbers

### CTA Section
- Use strong action-based copy
- Must use primary color
- Examples:
  - Book a Strategy Call
  - Get Free Audit

### Forms
- Fields: name, email, phone, message
- States: default, focus, error, success, disabled
- Must include labels (not placeholders only)
- Must show clear error messages

### Footer
- Navigation links
- Contact details
- Social links
- Copyright

## Accessibility Requirements
- All interactive elements must be keyboard accessible
- Focus state must be visible (min 2px outline)
- Contrast ratio must be ≥ 4.5:1
- Forms must include labels and error handling

## Content Standards
- Must be benefit-driven
- Must include numbers where possible
- Avoid vague claims

Good:
"Generated 2M+ impressions in 30 days"

Bad:
"Helping brands grow"

## Anti-Patterns
- Generic agency messaging
- Too many CTAs per section
- Low contrast UI
- Inconsistent spacing
- Hidden navigation

## Edge Cases
- Long text must wrap properly
- Cards must not break layout
- Empty states must show fallback content

## QA Checklist
- Tokens used everywhere
- All component states implemented
- CTAs clear and visible
- Mobile responsive
- Accessibility passes WCAG AA
- No visual inconsistencies