# my-web-fe — Portfolio Frontend

> **Status:** Frontend architecture plan. This is the **`my-web-fe`** repository. The Express backend lives in a separate repository, **`my-web-be`**. This is a proposed file layout; files are added as features are built, not all at once.

## 1. Purpose

Build a responsive portfolio showcasing projects, skills, work experience, and education. **Contentful** provides public portfolio content. A separate **Express API** (`my-web-be`) handles contact submissions, admin authentication, and saved messages.

**Responsibilities**

- **Frontend:** render pages, fetch Contentful data on the Next.js server, provide reusable UI, display contact and admin forms, call the backend API.
- **Backend:** validate incoming requests, authenticate and authorize admin users, store contact messages in Supabase PostgreSQL, and enforce rate limits.
- **Not in the frontend:** direct PostgreSQL access, password verification, or trusting the UI alone to secure admin data.

```text
Visitor -> Next.js (my-web-fe) -> Contentful (server-side fetch)
                    |
                    +-> Contact form -> Express API (my-web-be) -> PostgreSQL
                    +-> Admin UI ----> Express API (my-web-be) -> PostgreSQL
```

The public portfolio should remain usable if the Express API is temporarily unavailable; contact and admin actions should show helpful error messages.

## 2. Stack and design

| Area       | Choice                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------- |
| Framework  | Next.js App Router, React, TypeScript                                                              |
| CMS        | Contentful (server-side access)                                                                    |
| Styling    | Bootstrap 5.3 + Sass, customized variables and CSS                                                 |
| Theme      | Light / dark / system preference, persisted locally                                                |
| Colors     | Dark accent `#FF7A3D`, light accent `#C2410C`; warm neutral backgrounds; green availability status |
| Fonts      | Inter (body) and Bricolage Grotesque (headings), via `next/font`                                   |
| Components | Reusable components in one folder; **not strict Atomic Design**                                    |
| Forms      | Optional client-side Zod feedback; Express validates every request                                 |
| Backend    | Separate `my-web-be` API (no direct frontend database connection)                                  |
| CI         | Basic GitHub Actions: lint, type-check, build                                                      |
| Hosting    | **TBD** (Vercel is an option)                                                                      |
| Analytics  | Google Analytics **later**, with consent controls                                                  |

### Visual design already planned

- **Utility strip:** availability, general location, contact email.
- **Header:** brand, section links, mobile menu, theme toggle, contact button.
- **Hero:** introduction, call-to-action buttons, resume link, photo area.
- **About:** introduction and cards describing what I do.
- **Skills:** grouped technologies displayed clearly on desktop and mobile.
- **Projects:** category filters, featured project and project cards; optional project detail pages.
- **Experience and education:** role and education cards.
- **Contact:** contact information and a form.
- **Footer:** navigation, social links, back-to-top.

Admin screens follow the same theme but are separate from the public pages.

## 3. Proposed repository structure

Comments describe **what each file does**. Do not create empty files just to match the diagram.

```text
my-web-fe/
├── README.md                           # This document
├── package.json                        # Dependencies and npm scripts
├── package-lock.json                   # Locked dependency versions
├── tsconfig.json                       # TypeScript settings and @/ import alias
├── next.config.ts                      # Next.js configuration and image hosts
├── eslint.config.mjs                   # ESLint rules
├── .gitignore                          # Excludes secrets, dependencies and build files
├── .env.example                        # Environment variable names, no real secrets
├── .github/
│   └── workflows/
│       └── ci.yml                      # Install, lint, type-check, build
├── public/
│   ├── favicon.ico                     # Site favicon
│   └── resume.pdf                      # Optional: only if resume isn't hosted in Contentful
├── src/
│   ├── app/                            # Routes and app layouts
│   │   ├── layout.tsx                  # Global layout, fonts, theme, header/footer
│   │   ├── page.tsx                    # Homepage, assembles portfolio sections
│   │   ├── error.tsx                   # Error boundary UI
│   │   ├── not-found.tsx               # 404 page
│   │   ├── sitemap.ts                  # Sitemap for public pages
│   │   ├── robots.ts                   # Search crawler instructions
│   │   ├── privacy/
│   │   │   └── page.tsx                 # Privacy information
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx             # Optional project detail page
│   │   └── admin/
│   │       ├── login/
│   │       │   └── page.tsx             # Admin sign-in page
│   │       └── (dashboard)/            # Route group, not part of URL
│   │           ├── layout.tsx           # Admin layout and loading/auth UI checks
│   │           ├── page.tsx             # /admin dashboard
│   │           └── messages/
│   │               └── page.tsx         # /admin/messages
│   │
│   ├── components/                     # Reusable presentational components
│   │   ├── Heading/Heading.tsx         # Semantic heading with visual size options
│   │   ├── Text/Text.tsx               # Consistent text styles
│   │   ├── Button/Button.tsx           # Buttons and button-styled links
│   │   ├── Link/Link.tsx               # Consistent internal/external links
│   │   ├── Container/Container.tsx     # Max-width layout wrapper
│   │   ├── Section/Section.tsx         # Section spacing/background
│   │   ├── Card/Card.tsx               # Generic card container
│   │   ├── Tag/Tag.tsx                 # Technology tags
│   │   ├── Badge/Badge.tsx             # Status labels
│   │   ├── Icon/Icon.tsx               # Shared icon rendering
│   │   ├── SiteImage/SiteImage.tsx     # Wrapper for next/image, if useful
│   │   ├── UtilityStrip/UtilityStrip.tsx # Availability/contact strip
│   │   ├── Header/Header.tsx           # Navigation and mobile menu
│   │   ├── ThemeToggle/ThemeToggle.tsx # Light/dark/system selector
│   │   ├── Footer/Footer.tsx           # Footer navigation and links
│   │   ├── Hero/Hero.tsx               # Intro, buttons, optional photo
│   │   ├── AboutSection/AboutSection.tsx # About and services overview
│   │   ├── ServiceCard/ServiceCard.tsx # One expertise card
│   │   ├── SkillsSection/SkillsSection.tsx # Grouped skills
│   │   ├── ProjectsSection/ProjectsSection.tsx # Featured and listed projects
│   │   ├── ProjectFilter/ProjectFilter.tsx # Interactive category filter
│   │   ├── ProjectCard/ProjectCard.tsx # Project summary card
│   │   ├── ExperienceSection/ExperienceSection.tsx # Work history
│   │   ├── ExperienceItem/ExperienceItem.tsx # One role and its details
│   │   ├── EducationSection/EducationSection.tsx # Degrees/certifications
│   │   ├── EducationCard/EducationCard.tsx # One education entry
│   │   ├── ContactSection/ContactSection.tsx # Contact details and form layout
│   │   ├── ContactForm/ContactForm.tsx # Form fields, submission and feedback
│   │   ├── Field/Field.tsx             # Reusable labelled form field
│   │   ├── Alert/Alert.tsx             # Success/error information
│   │   └── admin/
│   │       ├── LoginForm.tsx           # Admin credentials form
│   │       ├── AdminLayout.tsx         # Admin nav and dashboard frame
│   │       ├── AdminDashboard.tsx      # Summary of message activity
│   │       ├── MessageList.tsx         # List/filter saved messages
│   │       └── MessageDetail.tsx       # Read, archive, delete, reply via email link
│   │
│   ├── lib/                            # Non-visual application code
│   │   ├── contentful/
│   │   │   ├── client.ts               # Server-only Contentful client
│   │   │   ├── queries/
│   │   │   │   ├── site.ts             # Site settings and navigation
│   │   │   │   ├── about.ts            # About content
│   │   │   │   ├── skills.ts           # Skill data
│   │   │   │   ├── projects.ts         # Project list/details
│   │   │   │   ├── experience.ts       # Work experience
│   │   │   │   └── education.ts        # Education data
│   │   │   ├── mappers.ts              # Convert Contentful data to UI-friendly types
│   │   │   └── index.ts                # Exports for the content layer
│   │   ├── api/
│   │   │   ├── client.ts               # Express base URL, fetch and error handling
│   │   │   ├── contact.ts              # Submit contact messages
│   │   │   ├── auth.ts                 # Login, session status, logout
│   │   │   └── messages.ts             # Authenticated message operations
│   │   ├── validation/
│   │   │   ├── contact.schema.ts       # Optional frontend Zod checks
│   │   │   └── login.schema.ts         # Optional login field checks
│   │   ├── theme.ts                    # Theme preference helpers
│   │   └── metadata.ts                 # Common SEO metadata helpers
│   ├── types/
│   │   ├── content.ts                  # Project, skill, role, education types
│   │   └── api.ts                      # API request/response types
│   └── styles/
│       ├── main.scss                   # Main Sass entry and Bootstrap setup
│       ├── theme.scss                  # Light/dark CSS variables and colors
│       └── globals.scss                # Site-wide CSS rules
└── tests/
    └── e2e/                            # Optional Playwright tests added later
```

Component folders can gain an `index.ts`, `.module.scss`, or test file **only when needed**. `components/admin/` is separated so public screens do not import the admin UI.

## 4. How data flows

### Portfolio content

1. A Next.js Server Component calls `lib/contentful/queries/*`.
2. The Contentful client fetches published content with server-side credentials.
3. The page passes typed, UI-friendly data into reusable components.
4. Visitors see rendered content, **not Contentful tokens**.

### Contact form

1. `ContactForm` collects name, email, and message.
2. Optional frontend Zod checks show friendly errors.
3. `lib/api/contact.ts` sends the request to `my-web-be`.
4. The backend validates again, applies rate limiting, and saves to Supabase PostgreSQL.
5. The frontend displays success or failure.

### Admin

1. Visit `/admin/login` and sign in through the Express API.
2. Open `/admin` and `/admin/messages` after successful authentication.
3. The frontend requests message data from the Express API.
4. **The API must check authorization on every protected request.** Hiding a page is not security.
5. “Reply” opens the sender's address in the default email app (`mailto:`); the site does not send mail directly.

The exact session/token implementation is defined in the **backend README**, not duplicated here. The frontend must follow that API contract and avoid storing sensitive credentials in local storage.

## 5. Component and styling conventions

- Prefer **Server Components** for static page sections; use Client Components for interactive controls (theme toggle, project filters, forms, admin interactions).
- Keep components reusable without forcing Atomic Design naming.
- Build `Heading`, `Text`, `Button`, `Section`, etc., for consistent styling. Do not add abstractions without a use case.
- Use Bootstrap/Sass variables and semantic colors for both themes, rather than scattering hardcoded values.
- Use `data-bs-theme` for dark/light mode; remember user preference and default to the OS setting.
- Keep buttons visibly interactive, links identifiable, and tags non-interactive unless explicitly designed otherwise.
- Make layouts responsive and keyboard accessible; label inputs and provide error text.
- Use `next/image` and `next/font` where appropriate.

## 6. Contentful data models (starting point)

| Content type | Purpose                                                                       |
| ------------ | ----------------------------------------------------------------------------- |
| SiteSettings | Site title, tagline, nav links, socials and availability message              |
| About        | Intro and expertise cards                                                     |
| Skill        | Name, category and order                                                      |
| Project      | Title, summary, description, category, status, technologies, images and links |
| Experience   | Role, organization, dates, description, technologies                          |
| Education    | School, credential, dates, certifications                                     |
| ContactInfo  | Public email, location and social links                                       |

Only create fields that the current design needs. Preview, webhooks, type generation and detailed caching can come later.

## 7. Environment variables

Create a local `.env.local` using `.env.example` as a guide:

```dotenv
CONTENTFUL_SPACE_ID=
CONTENTFUL_DELIVERY_TOKEN=
CONTENTFUL_ENVIRONMENT=master

NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Add preview tokens, Turnstile public keys and Analytics variables **only when those features are implemented**. Never commit real secrets.

## 8. CI, hosting and quality

- **GitHub Actions (frontend repository):** `npm ci`, lint, TypeScript check, production build.
- **Hosting:** TBD; Vercel is one possible Next.js host. Deployment instructions belong in this repo once decided.
- **Basic quality:** mobile responsiveness, accessible navigation/forms, proper headings, page metadata, reasonable image optimization, helpful error states.
- **Backend deployment, database migrations, Docker and EC2:** documented in `my-web-be`, not here.

## 9. Build order

1. Set up Next.js, TypeScript, Bootstrap/Sass and the theme.
2. Create reusable UI components and the homepage with temporary data.
3. Integrate Contentful through `lib/contentful`.
4. Add contact form and connect to the Express API.
5. Implement login and admin message screens against the backend API.
6. Add basic frontend CI, SEO and accessibility checks.
7. Deploy once hosting is selected.

## 10. Later / TBD

- Google Analytics and consent banner.
- More advanced Contentful preview and revalidation.
- Project detail pages, if needed for project write-ups.
- More admin dashboard features (analytics links, editing shortcuts).
- Exact frontend hosting provider and deployment configuration.
- E2E browser tests with Playwright.

**Related repo:** `my-web-be` — routes, controllers, services, validation, authentication, Supabase PostgreSQL, rate limiting and backend hosting.
