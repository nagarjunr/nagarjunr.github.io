# Portfolio Website - Nagarjun Rajendran

This repository contains a personal portfolio website for Nagarjun Rajendran, an AIoT Professional, Cloud Architect, and Technology Leader with 15+ years of experience in embedded software, cloud architecture, and digital transformation.

## Project Overview

The portfolio website is a modern, responsive Single-Page Application (SPA) featuring sections for:

- Hero introduction
- About/professional background
- Experience timeline
- Services offered
- Contact information and form

## Technical Stack

### Frontend Framework

- **React** (v19.1.0)
- **React DOM** (v19.1.0)
- **React Router DOM** (v7.6.1)

### Styling

- **Styled Components** (v6.1.18)
- Custom CSS variables (in globals.css)
- Font Awesome icons:
  - @fortawesome/free-brands-svg-icons (v6.7.2)
  - @fortawesome/free-solid-svg-icons (v6.7.2)
  - @fortawesome/react-fontawesome (v0.2.2)

### Animation

- **Framer Motion** (v12.15.0) for smooth transitions and animated components

### Form Handling

- **EmailJS** (v4.4.1) for sending emails from the contact form

### Build Tools

- **Vite** for fast development and optimized production builds

## Project Structure

```
index.html                  # Main HTML file
package.json                # Dependency management
vite.config.js              # Vite configuration
public/
  └── vite.svg              # Favicon/logo
src/
  ├── App.jsx               # Main application component
  ├── main.jsx              # React entry point
  ├── assets/               # Static assets
  │   ├── about-image.jpg   # Image for the About section
  │   └── profile.jpg       # Profile photo
  ├── components/           # React components
  │   ├── Footer.jsx        # Footer component
  │   ├── Header.jsx        # Navigation header component
  │   ├── HomePage.jsx      # Main page component
  │   └── sections/         # Section components
  │       ├── About.jsx     # About section
  │       ├── Contact.jsx   # Contact section with form
  │       ├── Experience.jsx # Work experience section
  │       ├── Hero.jsx      # Hero banner section
  │       └── Services.jsx  # Services section
  └── styles/
      └── globals.css       # Global CSS variables and styles
```

## Design System

### Color Palette

- Primary: LinkedIn blue (#0A66C2)
- Secondary: Darker blue (#2867B2)
- Dark: #1E1E1E (for text and dark backgrounds)
- Light: #F5F5F5 (for light backgrounds)
- Text: #333333 (main text color)
- Text Light: #767676 (secondary text color)
- Background: #FFFFFF (page background)
- Success: #39B54A (for success states)

### Typography

- **Poppins**: Primary font for body text
- **Roboto**: Used for headings
- Font weights range from 300-700

### UI Components

- Custom button variants (primary and outline)
- Consistent section layouts with proper padding
- Responsive containers (max-width: 1200px)
- Utility classes for layout management (.flex, .grid, etc.)

## Component Details

### Header

- Fixed navigation header that changes appearance on scroll
- Responsive design with hamburger menu for mobile devices
- Navigation links to page sections using smooth scroll

### Footer

- Contains social media links (LinkedIn, GitHub, Twitter)
- Multiple column layout with responsive design
- Copyright information

### Hero Section

- Gradient background with animation effects
- Professional introduction with call-to-action buttons
- Social media links

### About Section

- Professional background information
- Skills showcase with icons and descriptions
- Two-column layout with image and text content

### Experience Section

- Work history displayed in a timeline format
- Interactive elements to showcase different roles
- Detailed descriptions of professional accomplishments

### Services Section

- Grid layout displaying professional services offered
- Icons and descriptions for each service
- Animation effects on scroll/interaction

### Contact Section

- Contact form implemented with EmailJS
- Form validation for user inputs
- Additional contact information with icons

## Key Features

1. **Responsive Design**

   - Mobile-first approach
   - Breakpoints at common device sizes
   - Flexible layouts that adapt to different screen sizes

2. **Interactive Elements**

   - Framer Motion animations for enhanced user experience
   - Hover effects for buttons and interactive components
   - Smooth scrolling navigation

3. **Optimized Performance**

   - Built with Vite for fast loading and rendering
   - Optimized asset delivery
   - Component-based architecture for code efficiency

4. **Accessibility**
   - Semantic HTML structure
   - Proper ARIA attributes where needed
   - Keyboard navigable interface

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository

   ```
   git clone https://github.com/nagarjunr/portfolio.git
   ```

2. Install dependencies

   ```
   cd portfolio
   npm install
   ```

3. Start the development server

   ```
   npm run dev
   ```

4. Build for production

   ```
   npm run build
   ```

5. Preview production build
   ```
   npm run preview
   ```

## Development Notes

- The project uses CSS variables for consistent theming
- Styled Components are used for component-specific styling
- React Router is set up for potential multi-page expansion
- The contact form requires proper EmailJS configuration (SERVICE_ID, TEMPLATE_ID, and USER_ID)

## Future Enhancement Possibilities

- Blog section for professional articles
- Project showcase with detailed case studies
- Dark/Light mode toggle
- Internationalization support
- Performance monitoring and analytics

## License

ISC License - See LICENSE file for details

---

Created: May 30, 2025
Last Updated: May 30, 2025
