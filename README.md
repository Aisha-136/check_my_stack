# LibraryFind - HCI Principles Implementation Project

## Project Overview

LibraryFind is a user-centered web application designed to help readers find books across multiple library branches. The project demonstrates practical application of Human-Computer Interaction (HCI) principles in web design and development, focusing on usability, accessibility, design thinking, and user experience.

### Purpose
The primary goal of this project is to create a functional, user-friendly website that showcases core HCI principles including:
- Simple and intuitive navigation
- Consistent design patterns
- Aesthetically pleasing interface
- Mobile-responsive design
- Effective error prevention and recovery

### Target Users
- Library patrons seeking books across multiple branches
- Students researching for academic projects
- Avid readers exploring new genres
- Parents looking for children's books
- Anyone needing efficient access to library resources

---

## HCI Principles Implementation

This project implements five core HCI principles throughout the design and development process:

### 1. Usability

**Simple and Intuitive Navigation**
- Consistent header navigation visible on all pages
- Clear menu structure: Home, About, Services, Contact
- Active route highlighting to show current page location
- Breadcrumb-style back buttons on detail pages
- Mobile hamburger menu for smaller screens

**Clear and Consistent Layout**
- Container-based layout system for content alignment
- Card-based components for organized content presentation
- Consistent spacing using Tailwind CSS utilities
- Logical content hierarchy with clear headings

**Informative Feedback**
- Toast notifications for user actions (adding to wishlist, form submissions)
- Real-time form validation feedback
- Loading states during async operations
- Empty state messages (e.g., "Your wishlist is empty")
- Search result counts and status indicators

### 2. Consistency

**Uniform Design Elements**
- Shared Header and Footer components across all pages
- Consistent color scheme using CSS custom properties
- Unified typography hierarchy (headings, body text, labels)
- Standardized button styles and sizes
- Consistent card components throughout

**Predictable User Interactions**
- Navigation links behave consistently
- Forms use the same validation patterns
- Buttons follow the same interaction patterns
- Links use React Router for smooth transitions
- Consistent hover states and transitions

### 3. Aesthetics

**Visually Appealing Design**
- Clean, modern interface with ample whitespace
- Cohesive color palette using primary, secondary, and accent colors
- Professional typography with clear hierarchy
- Subtle shadows and borders for depth
- Smooth transitions and hover effects

**Proper Use of Design Elements**
- Whitespace: Generous padding and margins for readability
- Color: Semantic colors (success, warning, destructive) for status indicators
- Typography: Responsive font sizes with proper line heights
- Icons: Lucide React icons for visual clarity
- Layout: Grid and flexbox for responsive, organized layouts

### 4. Responsiveness

**Mobile-First Approach**
- Tailwind CSS responsive breakpoints (sm, md, lg, xl)
- Mobile hamburger menu for navigation
- Stacked layouts on mobile, multi-column on desktop
- Touch-friendly button sizes (minimum 44x44px equivalent)
- Responsive grid systems (1 column mobile, 2-4 columns desktop)

**Breakpoints Used**
- Mobile: Default (< 640px)
- Tablet: sm (≥ 640px) and md (≥ 768px)
- Desktop: lg (≥ 1024px) and xl (≥ 1280px)

**Touch-Friendly Design**
- Large tap targets for buttons
- Adequate spacing between interactive elements
- Readable font sizes without zooming
- Swipe-friendly mobile navigation

### 5. Error Prevention and Recovery

**Clear Error Messages**
- Field-specific error messages in contact form
- Visual indicators (red borders, error text) for invalid inputs
- Required field indicators (red asterisks)
- Helpful validation messages explaining what's wrong
- Success confirmations after successful actions

**Input Validation**
- Real-time validation using react-hook-form
- Zod schema validation for type safety
- Email format validation
- Character length constraints with clear limits
- Name format validation (letters, spaces, hyphens only)

**Error Recovery**
- Clear error messages help users correct mistakes
- Form retains user input on validation errors
- Loading states prevent duplicate submissions
- Graceful error handling with user-friendly messages

---

## Technical Stack

### Frontend Framework
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and development server

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **CSS Custom Properties** - Theme variables for colors

### UI Components
- **shadcn/ui** - Component library built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Icon library

### Routing
- **React Router DOM 6.30.1** - Client-side routing

### Form Management
- **react-hook-form 7.61.1** - Form state management
- **zod 3.25.76** - Schema validation
- **@hookform/resolvers** - React Hook Form + Zod integration

### State Management
- **@tanstack/react-query 5.83.0** - Server state management
- **localStorage** - Client-side persistence for wishlist

### Notifications
- **sonner 1.7.4** - Toast notification library

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Autoprefixer** - CSS vendor prefixing

---

## Project Structure

```
check_my_stack/
├── public/                    # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── ...
├── src/
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx    # Main navigation header
│   │   │   └── Footer.tsx    # Site footer
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── form.tsx
│   │   │   └── ...
│   │   ├── AvailabilityBadge.tsx
│   │   ├── BookCard.tsx
│   │   ├── BranchAvailabilityCard.tsx
│   │   ├── ContactForm.tsx   # Contact form with validation
│   │   ├── FilterPanel.tsx
│   │   └── SearchBar.tsx
│   ├── pages/                # Page components
│   │   ├── Index.tsx         # Home page (search)
│   │   ├── About.tsx         # About page
│   │   ├── Services.tsx      # Services page
│   │   ├── Contact.tsx       # Contact page
│   │   ├── BookDetail.tsx    # Book details page
│   │   ├── Wishlist.tsx      # Wishlist page
│   │   └── NotFound.tsx      # 404 page
│   ├── lib/                  # Utility libraries
│   │   ├── utils.ts          # Utility functions
│   │   └── validations.ts    # Zod validation schemas
│   ├── data/                 # Mock data
│   │   └── mockData.ts       # Books and branch data
│   ├── hooks/                # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── App.tsx               # Main app component with routing
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles and theme
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

### Key Components

**Layout Components**
- `Header.tsx` - Main navigation with logo, menu, and wishlist button
- `Footer.tsx` - Site footer with links and contact information

**Form Components**
- `ContactForm.tsx` - Contact form with validation using react-hook-form and zod

**Page Components**
- Each page is a self-contained component with its own content and layout

---

## Features

### Pages

#### 1. Home Page (Index.tsx)
- **Route:** `/`
- **Features:**
  - Search bar for books (title, author, ISBN)
  - Welcome screen with library statistics
  - Search results with book cards
  - Filter panel for availability status
  - Real-time search filtering
  - Wishlist toggle for each book

#### 2. About Page (About.tsx)
- **Route:** `/about`
- **Features:**
  - Mission statement and values
  - Statistics display (branches, books, users)
  - Core values section with icons
  - Community information
  - Links to contact page

#### 3. Services Page (Services.tsx)
- **Route:** `/services`
- **Features:**
  - Services and features grid
  - Library branch locations with addresses
  - "How It Works" step-by-step guide
  - Contact call-to-action section

#### 4. Contact Page (Contact.tsx)
- **Route:** `/contact`
- **Features:**
  - Contact form with validation
  - Contact information display
  - Office hours
  - FAQ section
  - Form submission with feedback

#### 5. Book Detail Page (BookDetail.tsx)
- **Route:** `/book/:id`
- **Features:**
  - Book cover image
  - Book metadata (title, author, ISBN, genres)
  - Book description
  - Availability by branch
  - Wishlist toggle
  - Back navigation

#### 6. Wishlist Page (Wishlist.tsx)
- **Route:** `/wishlist`
- **Features:**
  - List of saved books
  - Remove from wishlist functionality
  - Empty state message
  - Links to book details

#### 7. 404 Not Found Page (NotFound.tsx)
- **Route:** `*` (catch-all)
- **Features:**
  - User-friendly error message
  - Navigation back to home
  - Consistent styling with rest of site

### Interactive Features

- **Search Functionality:** Real-time search across book titles, authors, and ISBNs
- **Wishlist Management:** Save and manage books using localStorage
- **Filter System:** Filter books by availability status (available, checked-out, on-hold)
- **Form Validation:** Contact form with real-time validation and error messages
- **Responsive Navigation:** Mobile hamburger menu and desktop navigation
- **Toast Notifications:** User feedback for actions (wishlist changes, form submissions)

---

## Installation & Setup

### Prerequisites

- **Node.js** (version 18 or higher recommended)
- **npm** or **yarn** package manager

### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd check_my_stack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The development server will typically run on `http://localhost:8080`
   - Check the terminal output for the exact URL

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Building for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

---

## Component Documentation

### Layout Components

#### Header Component (`src/components/layout/Header.tsx`)

Main navigation header used across all pages.

**Features:**
- Logo and site title with link to home
- Desktop navigation menu
- Mobile hamburger menu
- Wishlist button with item count
- Active route highlighting
- Responsive design

**Props:** None (uses React Router hooks internally)

#### Footer Component (`src/components/layout/Footer.tsx`)

Site footer with navigation links and contact information.

**Features:**
- Brand section with logo and description
- Navigation links
- Quick links section
- Contact information
- Social media links
- Copyright notice

**Props:** None

### Form Components

#### ContactForm Component (`src/components/ContactForm.tsx`)

Contact form with comprehensive validation.

**Features:**
- Four fields: Name, Email, Subject, Message
- Real-time validation using react-hook-form and zod
- Field-specific error messages
- Character count for message field
- Loading state during submission
- Success/error toast notifications
- Accessible form with ARIA labels

**Validation Rules:**
- Name: 2-100 characters, letters/spaces/hyphens/apostrophes only
- Email: Valid email format
- Subject: 3-200 characters
- Message: 10-1000 characters

**Props:** None

### UI Components

The project uses shadcn/ui components built on Radix UI:
- Button, Card, Input, Textarea, Label
- Form components (FormField, FormItem, FormLabel, FormMessage)
- Toast/Notification components
- All components are accessible and customizable

---

## Form Validation

### Validation Schema (`src/lib/validations.ts`)

The contact form uses Zod schema validation:

```typescript
contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  subject: z.string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})
```

### Error Handling

- **Validation Mode:** `onBlur` - Validates when user leaves a field
- **Error Display:** Field-specific error messages below each input
- **Visual Indicators:** Red borders and text for invalid fields
- **Required Fields:** Red asterisks (*) indicate required fields
- **Help Text:** Descriptions under fields to guide users

---

## Responsive Design

### Breakpoints

The project uses Tailwind CSS default breakpoints:

- **Default (Mobile):** < 640px
- **sm (Small):** ≥ 640px
- **md (Medium):** ≥ 768px
- **lg (Large):** ≥ 1024px
- **xl (Extra Large):** ≥ 1280px

### Mobile Considerations

**Navigation:**
- Hamburger menu on mobile devices
- Full-width mobile menu with stacked links
- Touch-friendly button sizes

**Layout:**
- Single column layout on mobile
- Multi-column grids adapt to screen size
- Stacked form elements on mobile

**Typography:**
- Responsive font sizes
- Adequate line height for readability
- Touch-friendly link sizes

**Images:**
- Responsive images that scale with container
- Proper aspect ratios maintained

### Touch-Friendly Design

- Minimum touch target size: 44x44px equivalent
- Adequate spacing between interactive elements
- Large, readable text without zooming
- Smooth scrolling and transitions

---

## Browser Compatibility

### Supported Browsers

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

### Testing Recommendations

- Test on multiple screen sizes (mobile, tablet, desktop)
- Test form validation in different browsers
- Verify responsive breakpoints work correctly
- Test navigation on touch devices
- Verify accessibility features (keyboard navigation, screen readers)

---

## Development Notes

### Data Storage

- **Wishlist:** Stored in browser localStorage
- **Book Data:** Mock data in `src/data/mockData.ts`
- **Form Submissions:** Currently simulated (no backend integration)

### Theme System

The project uses CSS custom properties for theming, defined in `src/index.css`:
- Light and dark mode support (dark mode via `dark` class)
- Semantic color variables (primary, secondary, success, warning, destructive)
- Consistent spacing and border radius values

### Accessibility

- Semantic HTML elements
- ARIA labels and descriptions
- Keyboard navigation support
- Focus indicators
- Screen reader friendly form labels
- Proper heading hierarchy

---

## Future Enhancements

Potential improvements for future iterations:

- Backend API integration for real book data
- User authentication and accounts
- Book reservation system
- Email notifications for wishlist items
- Advanced search filters (genre, date, language)
- Book recommendations
- Reading history tracking
- Integration with library catalog systems

---

## License

This project is created for educational purposes to demonstrate HCI principles in web application design and development.

---

## Contact

For questions or feedback about this project, please use the Contact page within the application or refer to the project documentation.

---

*Documentation last updated: December 2024*
