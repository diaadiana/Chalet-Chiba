# 🌲 Chalet Chiba — Official Presentation Platform

Welcome to the official repository of **Chalet Chiba** (Cabana Chiba), a premium mountain retreat nestled in the Bucegi Mountains of Romania. This project is a modern, high-performance, and visually immersive presentation website built to reflect the luxury, serenity, and rustic charm of the physical chalet.

---

## 🎯 Core Website Vision & Goals

The website serves as the primary digital touchpoint for prospective guests, designed with a focus on premium aesthetics, seamless micro-interactions, and conversion. Its goals include:
1. **Immersive Brand Presentation:** Using high-resolution imagery, subtle parallax/zoom effects, and custom typography to convey the atmosphere of the retreat.
2. **Interactive Room Showcase:** Letting users explore each accommodation type using an advanced WebGL/3D circular slider.
3. **Transparent Pricing & Structure:** Providing immediate access to standard rates, weekend packages, and booking requirements.
4. **Trust and Reputation (Social Proof):** Displaying guest ratings aggregated from Booking.com and Google Reviews, alongside an interactive form allowing guests to submit feedback directly from the website.
5. **Seamless Navigation & Wayfinding:** Integrating deep links to mapping services (Google Maps, Apple Maps, Waze) to guide guests from their front door straight to the chalet.

---

## 🏗️ Project Architecture & File Structure

The project follows a standard **Astro** architecture, leveraging islands of interactivity via React for complex UI elements.

```text
/
├── public/                     # Static assets (favicons, rasterized images)
│   ├── images/
│   │   └── about/              # Images specifically for the brand story
│   ├── hero-cabana.jpg         # Full-screen Hero background
│   └── wood-texture.jpg        # Stylized background asset
├── src/
│   ├── components/             # Reusable UI Blocks (Astro & React)
│   │   ├── About.astro         # Section for chalet aesthetics & brand story
│   │   ├── CircularGallery.css # Stylized wrapper for WebGL 3D slider
│   │   ├── CircularGallery.jsx # WebGL-accelerated 3D slider component (React/OGL)
│   │   ├── Contact.astro       # Interactive Review Submission Form
│   │   ├── Facilities.astro    # Grid detailing guest amenities & services
│   │   ├── Footer.astro        # Navigation footers, copyright, social links
│   │   ├── Hero.astro          # Landing section with immersive scroll animations
│   │   ├── Location.astro      # Address, check-in policy, and GPS maps deep-links
│   │   ├── Navbar.astro        # Translucent sticky header with responsive drawer
│   │   ├── Preloader.astro     # Brand entry preloader animation
│   │   ├── Pricing.astro       # Rate cards and call-to-action details
│   │   ├── Reviews.astro       # Customer testimonials and aggregated scores
│   │   ├── RoomCard.astro      # Reusable room preview cards
│   │   └── Rooms.astro         # Wrapper section for room configurations
│   ├── layouts/
│   │   └── Layout.astro        # Document metadata, global stylesheets, fonts
│   ├── pages/
│   │   ├── explore.astro       # Page dedicated to surroundings, trails, and scenery
│   │   └── index.astro         # Main Single-Page landing entry point
│   ├── scripts/                # Independent front-end helper scripts
│   └── styles/
│       └── global.css          # Core design tokens and custom CSS animations
├── astro.config.mjs            # Astro bundler and layout configuration
├── package.json                # Project dependencies and script runner configurations
└── tsconfig.json               # TypeScript pathing and compiler guidelines
```

---

## 📄 Page-by-Page & Component Breakdown

### 1. Main Landing Page (`src/pages/index.astro`)
The landing page coordinates a linear storytelling journey. It aggregates several specialized components:

#### 🟢 Entry Preloader (`Preloader.astro`)
*   **Purpose:** Masks the initial paint of the website while heavy image assets load, ensuring a smooth, polished entrance.
*   **Mechanics:** Uses a full-screen overlay with custom animation, lock-scrolling the body, and transitioning to a clean fade-out once assets are initialized.

#### 🟢 Dynamic Navigation (`Navbar.astro`)
*   **Purpose:** Provides a persistent, translucent header for navigation.
*   **Design & Interactions:** 
    *   Uses **Glassmorphism** styling (`backdrop-blur-md bg-deep/80`) to remain readable over varying background colors.
    *   Transition-based resizing: Compact state activates dynamically on scroll down (`--navbar-height-compact`).
    *   Responsive Drawer: Slide-out menu for mobile viewports using touch-friendly triggers.

#### 🟢 Hero Section (`Hero.astro`)
*   **Purpose:** Establishes the visual tone and key value proposition.
*   **Key Features:**
    *   Background image (`/hero-cabana.jpg`) styled with a subtle `zoom-in` keyframe animation to simulate looking through a camera lens.
    *   Overlay gradients (radial and vertical) ensure that white typography remains legible without obstructing the visibility of the lodge image.
    *   Call-to-Action (CTA) links targeting `#despre` and `#camere`.
    *   Continuous scrolling indicator with a dynamic line-drop animation.

#### 🟢 About Section (`About.astro`)
*   **Purpose:** Showcases the craftsmanship and interior feel of the chalet.
*   **Design:** Relies on a clean asymmetric grid, utilizing smooth hover scale shifts on lazy-loaded local images (e.g., `/images/about/mana.png`).

#### 🟢 Rooms Section (`Rooms.astro` & `CircularGallery.jsx`)
*   **Purpose:** Displays the lodgings.
*   **Interactive WebGL Slider (`CircularGallery.jsx`):** 
    *   Built in **React** using the light-weight WebGL library **OGL**.
    *   Projects room banners onto a cylindrical curve using coordinates computed on-the-fly.
    *   Supports inertia-based click-and-drag and touch gestures.
*   **Room Directory:**
    | Room Name | Capacity & Bed Type | Nightly Rate | Key Features | Styling Theme |
    | :--- | :--- | :--- | :--- | :--- |
    | **Suite Panoramică** | 2 Persons · King Bed | `850 RON` | Mountain views, private bathroom | Forest-to-deep gradient |
    | **Camera Lemn** | 2 Persons · Queen Bed | `650 RON` | Indoor fireplace, balcony | Bark brown gradient |
    | **Camera Piatră** | 3 Persons · Twin+ | `720 RON` | Forest view, private bathroom | Slate-to-deep gradient |
    | **Dormitor Familial** | 4 Persons · 2 Beds | `980 RON` | 2 Bedrooms, private living area | Deep violet gradient |
    | **Studio Verde** | 2 Persons · Sofa Bed | `480 RON` | Kitchenette, private bathroom | Deep green gradient |
    | **Mansardă** | 2 Persons · Queen Loft | `590 RON` | Sky window, sloped ceilings | Amber-to-dark gradient |

#### 🟢 Facilities Section (`Facilities.astro`)
*   **Purpose:** Outlines on-site amenities.
*   **Features:** Displays details in a modern grid using clean icons and hover state highlights:
    *   🌿 **Terasă** (Panoramic terrace for outdoor relaxation).
    *   🛁 **Ciubăr** (Traditional hot tub under the open sky).
    *   🌄 **Balcon** (Individual private balconies for each room).
    *   🔥 **Șemineu** (Indoor fireplace in communal spaces).
    *   🍷 **Degustări** (Curated local wine selection and traditional gastronomy).
    *   🚗 **Parcare** (Secure, free private parking on-site).

#### 🟢 Pricing Section (`Pricing.astro`)
*   **Purpose:** Summarizes booking packages and handles direct contact.
*   **Tariff Breakdown:**
    *   *Midweek Package (Monday — Thursday):* **2.500 RON / Night** for the entire chalet.
    *   *Weekend Package (Friday — Sunday):* **3.500 RON / Night** for the entire chalet.
    *   *CTA:* Direct connection to the booking hotline (`+40 711 111 111`).

#### 🟢 Location & Access (`Location.astro`)
*   **Purpose:** Coordinates physical routing and arrival details.
*   **Contents:**
    *   Check-in (15:00) and Check-out (11:00) times.
    *   Physical address: *Strada Camionului, Munții Bucegi*.
    *   Deep links configured for:
        *   🗺 Google Maps
        *   🍎 Apple Maps
        *   📱 Waze

#### 🟢 Testimonials (`Reviews.astro`)
*   **Purpose:** Displays customer satisfaction metrics.
*   **Metrics:** 4.9/5 stars based on 148 reviews across Google (4.9/5) and Booking.com (9.4/10).

#### 🟢 Review Submissions Form (`Contact.astro`)
*   **Purpose:** Allows returning guests to submit their feedback directly.
*   **Features:**
    *   Interactive rating selector (1-5 stars).
    *   Input fields for Name and Stay Duration (date picker).
    *   Text area for custom feedback text.
    *   Stateful script managing star selection styling upon click.

---

### 2. Gallery / Explore Page (`src/pages/explore.astro`)
*   **Purpose:** Reserved for secondary media representation.
*   **Role:** Acts as an expandable layout for hosting full photo galleries, tourist routes, local trail coordinates, and season-specific information.

---

## 🛠️ Technological Specification

*   **Astro v6.0:** Implements Astro's partial hydration architecture. Static markup is rendered instantly, and interactive widgets (like the WebGL slider) load using the `client:load` attribute.
*   **Tailwind CSS v4.0:** Employs a CSS-first setup using custom HSL colors and gradients configured directly within the styling system. Key design variables:
    *   `--color-gold` (Harmonious gold accents)
    *   `--color-deep` (Dark, forest-green foundation)
    *   `--color-snow` (Warm, off-white backgrounds)
*   **React 19 & OGL:** Power the intensive WebGL animations, offering GPU-accelerated image scaling and bending inside the circular slider without causing main-thread stuttering.
*   **Google Fonts Integration:**
    *   *Cormorant Garamond* (Elegant Serif typography used for primary headers).
    *   *DM Sans* (Clean, highly legible geometric Sans-Serif used for pricing, descriptions, and structural listings).

---

## 🚀 Getting Started & Scripts

To run this project locally, ensure you have **Node.js (>=22.12.0)** installed. Run the following commands in your terminal:

```bash
# 1. Install project dependencies
npm install

# 2. Run the local development server (live hot-reloading)
npm run dev

# 3. Build the project for production deployment
npm run build

# 4. Preview the local build artifacts
npm run preview
```

By default, the development server will run at: **`http://localhost:4321/`**
