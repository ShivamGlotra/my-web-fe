# my-web-fe

My personal portfolio website, built with **Next.js, React, and TypeScript**. It showcases my projects, skills, experience, and education.

Portfolio content is managed through **Contentful CMS**. Contact messages and the admin dashboard will connect to a separate Express backend: `my-web-be`.

## Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript
- **Content:** Contentful CMS
- **Styling:** Bootstrap, Sass, light/dark themes
- **Backend:** Separate Node.js/Express API (`my-web-be`)

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For Contentful integration, create a `.env.local` file with the required environment variables. Keep API tokens server-side and never commit `.env.local`.

## Project Structure

- `src/app/` — Pages and routes
- `src/components/` — Reusable UI components and portfolio sections
- `src/lib/contentful/` — Contentful data fetching
- `src/lib/api/` — Communication with the Express backend
- `src/styles/` — Global styles and themes
- `public/` — Static assets

## Project Plan

The website will include a responsive portfolio, Contentful-managed content, a contact form, and a protected admin dashboard for managing messages.

Deployment and Google Analytics will be added later.

## Architecture

For the complete architecture, planned folder structure, and individual file responsibilities, see the [Frontend Architecture Document](https://github.com/ShivamGlotra/my-web-fe/blob/main/my-web-architecture-prototype.md).
