# ICC & Jus Mundi Partnership Landing Page

## Assignment Context

This project was created as part of a **Tech - Front-end Specialists Kata** assignment. The goal was to recreate a landing page experience based on an animated Figma design using Vue 3 and Nuxt 3.

### Original Requirements

- **Technology**: Vue 3 and Nuxt 3
- **Styling**: No CSS libraries allowed, CSS preprocessors like SASS/LESS were acceptable
- **Animation**: CSS-only animations
- **Responsiveness**: Adaptive design (not mobile-first)
- **AI Tools**: Allowed while maintaining clean, readable code

### Sections to Implement

1. **Header block with animation** - ICC logo animation, navigation, and main content
2. **Quotes block** - ICC commitment statement with decorative quotes
3. **Why partnership block** - Three feature cards explaining partnership benefits

### Evaluation Criteria

- Clean code structure
- Component composition and definition
- CSS reusability
- Visual fidelity to the animated Figma design

## 🚀 How to Launch the App

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd <cloned repository>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:3000`

## 🏗️ Architecture

The project follows a **clean, component-based architecture** with clear separation of concerns:

```
<cloned repository>/
├── components/
│   ├── sections/          # Page section components
│   │   ├── header-section.vue
│   │   ├── quotes-section.vue
│   │   └── partnership-section.vue
│   └── ui/               # Reusable UI components
│       ├── app-icon.vue
│       ├── decorative-line.vue
│       └── feature-card.vue
├── assets/
│   └── css/              # Global styles and utilities
│       ├── main.css      # Main entry point
│       ├── variables.css # CSS custom properties
│       ├── typography.css # Font declarations
│       ├── animations.css # Reusable animations
│       ├── reset.css     # CSS reset
│       └── shared.css    # Shared patterns
├── pages/
│   └── index.vue         # Main landing page
├── public/
│   ├── images/           # SVG icons and images
│   └── fonts/            # Local Larken fonts
└── nuxt.config.ts        # Nuxt configuration
```

### Architectural Principles

1. **Component Separation**: Clear distinction between page sections and reusable UI components
2. **CSS Architecture**: Modular CSS with shared patterns and utility classes
3. **Design System**: Consistent variables for colors, typography, spacing, and shadows
4. **Accessibility**: Proper semantic HTML, ARIA labels, and keyboard navigation
5. **Responsive Design**: Mobile-first approach with logical breakpoints

## ⚙️ Configuration

### Nuxt Configuration

The project uses a **basic Nuxt 3 setup** with minimal configuration:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
});
```

Key features:

- **ESLint integration** for code quality
- **Nuxt Fonts module** for Google Fonts optimization
- **Global CSS imports** for design system

### Font Setup

The project combines **local and remote fonts**:

- **Local fonts**: Larken family (Light, Regular, Bold, ExtraBold) from `/public/fonts/`
- **Google Fonts**: IBM Plex Sans and Lato for UI elements
- **Typography variables**: `--font-primary`, `--font-secondary`, `--font-ui`

## 📁 File Structure Explanation

### Pages

#### `pages/index.vue`

The main landing page that orchestrates the three sections. **Important architectural decision**: The page is responsible for layout and spacing between sections, allowing each section component to remain reusable and not bound to this specific page's styling.

```vue
<!-- The page controls overall layout -->
<HeaderSection class="header-section" />
<QuotesSection class="quotes-section" />
<PartnershipSection class="partnership-section" />
```

This approach ensures sections can be reused in different contexts without carrying page-specific styling baggage.

### Sections (`components/sections/`)

Each section is a **self-contained component** responsible for its own layout and styling:

#### `header-section.vue`

- **Complex animations**: ICC logo growth, background fade-ins, diagonal slides
- **Responsive layout**: Side-by-side on desktop, stacked on mobile
- **Interactive elements**: Navigation button with hover effects
- **Animation sequence**: Orchestrated timing for visual impact

#### `quotes-section.vue`

- **Typography-focused**: Italic quote text with custom SVG quote marks
- **Centered layout**: Clean, reading-focused design
- **Document information**: Structured content with clear hierarchy

#### `partnership-section.vue`

- **Feature grid**: Three-column layout collapsing to single column
- **Decorative elements**: Green lines flanking the title
- **Component composition**: Uses FeatureCard components for consistency

### UI Components (`components/ui/`)

#### `app-icon.vue`

**Standardized icon handling** with accessibility built-in:

- Dynamic sizing via props
- Decorative vs. meaningful icon distinction

#### `decorative-line.vue`

**Reusable decorative elements** with configurable properties:

- Width, height, color, and rotation props
- Used across header and partnership sections

#### `feature-card.vue`

**Modular feature cards** for partnership benefits:

- Icon, title, and description composition
- Responsive design built-in

### CSS Architecture (`assets/css/`)

#### `main.css`

Entry point that imports all stylesheets in the correct order.

#### `variables.css`

**Complete design system** with CSS custom properties:

- Color palette (brand, semantic, shadow colors)
- Typography scales and font families
- Shadow system for depth and interactivity
- Gradient definitions for effects

#### `shared.css`

**Reusable patterns** extracted from component usage:

- Button variants (primary, secondary, link)
- Layout patterns (centered content, section containers)
- Grid patterns (features grid with responsive behavior)
- Typography patterns (titles, descriptions)

#### `animations.css`

**Keyframe animations** for reusability:

- Circle growth animations (normal and mobile)
- Fade-in variations
- Slide-in animations (left, diagonal)
- Background appearance effects

## 🎨 Implementation Approach

### Figma Fidelity

Since I didn't have access to Figma design devtools, I **recreated the design by visual inspection**. This resulted in some specific measurements that might seem unusual:

```css
/* Examples of pixel-perfect matching */
padding: 1.3rem 1.8rem; /* CTA button */
box-shadow: 0 4px 20px 0px var(--shadow-dark-light); /* Navigation */
font-size: 3.5rem; /* Large titles */
```

These precise values come from careful visual matching to achieve the closest possible resemblance to the Figma design.

### Creative Decisions

#### Button Icon Choice

For the "ACCESS ICC AWARDS" button, I used a **`>` symbol instead of an icon** because:

- No specific icon was provided in the assets
- Avoided installing an entire icon library for one symbol
- Maintains semantic meaning and visual clarity
- Keeps dependencies minimal

#### Responsive Design

I **took liberty to modify the design for smaller formats** to ensure good user experience:

- Header layout switches from side-by-side to stacked
- ICC logo becomes the focal point on mobile
- Background GIF hidden on smaller screens
- Typography scales appropriately for readability

### Technical Focus

Based on my understanding, **the assignment focused on CSS and visual placement** rather than complex JavaScript or architectural patterns. The emphasis was on:

- Accurate visual reproduction
- CSS animation skills
- Component organization
- Responsive design implementation

## 📱 Section Details

### Header Section

**Complex animated hero section** featuring:

- **ICC Logo Animation**: Scale-in effect with circle background
- **Background Elements**: Animated GIF with gradient overlays
- **Jus Mundi Overlay**: Diagonal slide-in animation with precise timing
- **Typography**: Large impact text with proper hierarchy
- **CTA Button**: Interactive button with hover effects and animation delay
- **Navigation**: Floating button with shadow and micro-interactions

**Animation Sequence** (total ~3 seconds):

1. Circle grows (0.7s)
2. ICC logo fades in (0.8s delay)
3. Text content appears (0.8s delay)
4. Background elements (1.8s delay)
5. CTA button (2.5s delay)

### Quotes Section

**Typography-focused content section** with:

- **Quote Marks**: Custom SVG icons positioned absolutely
- **Italic Text**: Larken Light Italic for elegant appearance
- **Document Info**: Structured metadata presentation
- **Call-to-Action**: Subtle link with hover effects
- **Responsive**: Maintains readability across all screen sizes

### Partnership Section

**Feature showcase section** featuring:

- **Section Header**: Title flanked by decorative green lines
- **Description**: Centered content explaining partnership value
- **Feature Grid**: Three-column layout (responsive to single column)
- **Feature Cards**: Reusable components with icons and descriptions
- **Spacing System**: Generous whitespace for visual breathing room

## 🧩 UI Components

### AppIcon

**Unified icon system** providing:

- Consistent sizing and positioning
- Accessibility features (decorative vs. meaningful)
- TypeScript props for reliability
- Dynamic sizing via CSS variables

### DecorativeLine

**Flexible decorative elements** offering:

- Configurable dimensions and rotation
- Color theming via CSS variables
- Reusable across multiple sections

### FeatureCard

**Modular content cards** including:

- Icon, title, and description slots
- Responsive design built-in
- Consistent typography using shared classes
- Flexible content length handling

## 🔮 Future Enhancements

- **Animation Polish**: Add more micro-interactions and easing variations
- **Performance**: Implement lazy loading for images and animations
- **Accessibility**: Enhanced keyboard navigation and screen reader support
- **Testing**: Add unit and integration tests for components
- **Documentation**: Component storybook for design system documentation
