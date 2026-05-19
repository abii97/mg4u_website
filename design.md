# Design.md

# Mediaguide4u

## Mission
Create implementation-ready, token-driven UI guidance for Mediaguide4u that maximizes lead generation, credibility, and conversion performance across the marketing website.

## Brand
- Product/brand: Mediaguide4u
- URL: https://www.mediaguide4u.com/
- Register: brand
- Product surface: service-led marketing website, dark-only theme

## Style Foundations
- Visual style: dark, authority-driven, performance-focused
- Main font: `Inter, sans-serif`
- Base size: 18px, weight: 400, line-height: 26px

## Typography Scale
| Token | Size |
|-------|------|
| xs | 12px |
| sm | 14px |
| md | 16px |
| lg | 18px |
| xl | 20px |
| 2xl | 24px |
| 3xl | 32px |
| 4xl | 48px |
| 5xl | 56px |
| 6xl | 64px |

## Color Palette (Dark Theme)
| Token | Value |
|-------|-------|
| brand-blue | #0F75BC |
| brand-orange | #F7941D |
| brand-navy | #354A9F |
| surface-deepest | #0A1530 |
| surface-base | #0D1B3E |
| surface-elevated | #132A55 |
| text-primary | #FFFFFF |
| text-secondary | rgba(255, 255, 255, 0.70) |
| text-muted | rgba(255, 255, 255, 0.60) |
| border-subtle | rgba(255, 255, 255, 0.08) |
| border-default | rgba(255, 255, 255, 0.12) |
| gradient-brand | linear-gradient(135deg, #0F75BC, #F7941D) |
| gradient-hero | linear-gradient(135deg, #0F75BC 0%, #7C3AED 40%, #F7941D 100%) |

## Spacing Scale
`space.1=4px`, `space.2=8px`, `space.3=12px`, `space.4=16px`, `space.5=24px`, `space.6=32px`, `space.7=48px`, `space.8=64px`, `section-y=120px`

## Radius / Shadow / Motion
| Token | Value |
|-------|-------|
| radius.sm | 8px |
| radius.md | 12px |
| radius.lg | 16px |
| radius.xl | 24px |
| shadow.glow-sm | 0 0 20px rgba(15,117,188,0.1) |
| shadow.glow | 0 0 40px rgba(15,117,188,0.15) |
| shadow.glow-lg | 0 0 60px rgba(15,117,188,0.2) |
| shadow.glow-orange | 0 0 30px rgba(247,148,29,0.2) |
| motion.fast | 200ms |
| motion.base | 300ms |
| motion.slow | 500ms |

## Accessibility
- Target: WCAG 2.2 AA
- All text contrast >= 4.5:1
- Keyboard-first interactions required
- Focus-visible: 2px orange outline with offset
- Skip-to-content link present
- Touch targets >= 44px
- All decorative SVGs have aria-hidden

## Writing Tone
Concise, confident, outcome-driven, business-focused. Avoid fluff.

## Rules: Do
- Use semantic tokens, not raw values
- Define all component states (default, hover, focus-visible, active, disabled, loading, error)
- Specify responsive behavior
- Document keyboard, pointer, and touch interactions

## Rules: Don't
- No low contrast text (text-muted >= 0.60 opacity on dark)
- No hidden focus states
- No gradient text (background-clip: text banned)
- No glassmorphism as default
- No repeated tiny uppercase kicker labels on every section
- No identical card grids without variation

## Component-Level Rules

### Navigation
- Logo left, menu center/right, CTA right
- Sticky on scroll with backdrop blur
- Mobile hamburger with AnimatePresence
- Keyboard accessible with visible focus

### Hero Section
- Headline (clear value proposition)
- Supporting text
- Primary + secondary CTA
- Trust signals (brand logos)
- Grid background + subtle blur orbs

### Services Section
- 2-column grid on desktop
- Numbered cards with color accents
- Interactive hover states

### Case Studies
- Client, problem, solution, result structure
- Measurable numbers (NumberTicker animation)
- Color-coded per case

### Forms
- Fields: name, email, company, service, message
- States: default, focus, error, success, disabled, loading
- Labels with required indicators
- Inline validation errors
- Server error handling

### Footer
- Navigation links, contact details, copyright

## QA Checklist
- Tokens used everywhere
- All component states implemented
- CTAs clear and visible
- Mobile responsive
- Accessibility passes WCAG AA
- No gradient text
- No repeated kicker labels
- Orphaned components removed
