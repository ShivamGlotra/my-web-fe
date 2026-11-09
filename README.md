my-web-fe
My personal portfolio website, built with Next.js, React, and TypeScript. It showcases my projects, skills, experience, and education.

Portfolio content is managed in Contentful. Contact messages and the admin dashboard will connect to a separate Express backend: my-web-be.
Tech Stack
- Frontend: Next.js (App Router), React, TypeScript
- Content: Contentful CMS
- Styling: Bootstrap, Sass, light/dark themes
- Backend: Separate Express API (my-web-be)
Getting Started
Install dependencies and run the development server:
npm install
npm run dev
Open http://localhost:3000.

For Contentful integration, create a .env.local file with the required keys when those features are configured. Keep access tokens server-side and never commit .env.local.
Project Structure
- src/app/ — pages and routes
- src/components/ — reusable UI components and portfolio sections
- src/lib/contentful/ — Contentful data fetching
- src/lib/api/ — calls to the separate backend
- src/styles/ — global styles and themes
- public/ — static assets
Project Plan
The site will include a responsive portfolio, Contentful-managed content, a contact form, and a protected admin dashboard for viewing messages. Deployment and analytics will be added later.

For the full planned architecture and individual file responsibilities, see the [frontend architecture]([url](https://github.com/ShivamGlotra/my-web-fe/blob/main/my-web-architecture-prototype.md)) document in this repository.
