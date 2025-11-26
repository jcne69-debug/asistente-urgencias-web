# Design Guidelines: Asistente-Urgencias Personal

## Design Approach
**Reference-Based Design** inspired by modern SaaS platforms like Stripe, Intercom, and WhatsApp Business, focusing on trust, clarity, and conversion optimization for service-oriented businesses.

## Core Design Principles
- **Professional credibility**: Clean, trustworthy design that inspires confidence in automated services
- **Mobile-first clarity**: Every element optimized for mobile viewing before desktop
- **Conversion-focused**: Clear visual hierarchy guiding users toward installation/contact CTAs
- **WhatsApp integration visibility**: Emphasize the WhatsApp connection as a core brand element

## Typography System

**Fonts**: Inter (primary) via Google Fonts CDN
- **Headings**: 
  - H1: text-4xl md:text-5xl lg:text-6xl, font-bold, tight leading
  - H2: text-3xl md:text-4xl, font-semibold
  - H3: text-2xl md:text-3xl, font-semibold
- **Body**: text-base md:text-lg, font-normal, relaxed leading
- **CTAs**: text-base md:text-lg, font-semibold, uppercase tracking

## Color Palette
- **Primary Dark Blue**: #1e3a8a (navigation, headers, primary sections)
- **WhatsApp Green**: #25D366 (CTAs, highlights, success states)
- **Supporting Blues**: #3b82f6 (accents), #1e40af (hover states)
- **Neutrals**: #f8fafc (backgrounds), #334155 (text), #64748b (secondary text)
- **White**: #ffffff (cards, contrast sections)

## Layout System

**Spacing Units**: Use Tailwind spacing of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (for text-heavy sections)
- Card spacing: p-6 md:p-8
- Gap in grids: gap-8 md:gap-12

## Component Library

### Navigation
- Fixed header with transparent-to-solid transition on scroll
- Logo left-aligned, navigation menu right-aligned
- Mobile: Hamburger menu with slide-in drawer
- Height: h-16 md:h-20
- Links with subtle underline animation on hover

### Hero Section (index.html)
- Full-width with gradient overlay (blue to dark blue)
- Large hero image showing professional on phone/working
- Centered content: headline + subheadline + primary CTA
- No background blur on CTA button
- Height: min-h-screen on mobile, flexible on desktop

### How It Works Section
- 4-step process displayed as numbered cards
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Each card: icon (FontAwesome), number badge, title, brief description
- Cards with subtle shadow and hover lift effect

### CTA Sections
- Full-width colored backgrounds alternating between white and light blue
- Centered content with headline + description + button
- Primary CTA: WhatsApp green with white text
- Secondary CTA: Outlined dark blue

### Service Cards (servicios.html)
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each card: icon, heading, description, feature list
- White cards with shadow on colored background

### Pricing (precios.html)
- Single centered pricing card (future-ready for multiple plans)
- Card with border-2 border-green accent
- Feature list with checkmark icons
- Prominent "Consultar" CTA at bottom

### FAQ (faq.html)
- Accordion-style expandable items
- Question in bold with chevron icon
- Answer revealed on click with smooth animation
- Alternating subtle background colors for visual separation

### Contact Form (contacto.html)
- Single-column form, max-w-2xl centered
- Input fields: border-2, rounded-lg, focus ring in blue
- Full-width submit button in WhatsApp green
- Supporting text below: "Sin backend - demo visual"

### Footer
- Dark blue background (#1e3a8a)
- Three columns: Navigation links, Contact info, Legal links
- Social icons (if applicable) centered below
- Padding: py-12

## Icons
**Font Awesome 6** via CDN
- Phone icon for calls
- WhatsApp icon (brand) for messaging features  
- Clock for 24/7 availability
- Shield for security/trust
- Checkmarks for feature lists
- Chevrons for accordions/dropdowns

## Animations
- Button hover: Subtle scale (scale-105) + shadow increase
- Card hover: Slight lift (translate-y-1) + shadow
- Page transitions: Fade-in on scroll (using Intersection Observer)
- Menu open/close: Slide animation
- FAQ accordion: Max-height transition with ease-in-out

## Images

### Hero Image (index.html)
Professional Hispanic/Latino freelancer (plumber, electrician, or similar tradesperson) answering phone while working, bright modern setting, authentic feel. Full-width background image with gradient overlay (dark blue to transparent).

### Supporting Images (servicios.html)
- WhatsApp notification mockup showing example urgent call summary
- Phone screenshot showing incoming call interface
- Optional: Professional at work being interrupted by call

## Accessibility
- ARIA labels on all interactive elements
- Focus visible states with ring-2 ring-offset-2
- Sufficient color contrast (WCAG AA minimum)
- Semantic HTML throughout
- Skip to main content link
- Alt text on all images

## Responsive Breakpoints
- Mobile: base (up to 768px) - single column, stacked navigation
- Tablet: md (768px+) - 2 columns where appropriate
- Desktop: lg (1024px+) - full multi-column layouts
- Wide: xl (1280px+) - maximum container widths applied