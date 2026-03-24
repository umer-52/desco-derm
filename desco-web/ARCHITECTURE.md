# DESCO Web Architecture

## System Design
The application is built using the **Next.js App Router**, following a modern React server/client architecture. It operates primarily as a catalog frontend for medical hygiene products.

## Directory Structure
- **`app/`**: Next.js App Router root containing all pages, layouts, and global styles.
  - **`app/components/`**: Reusable UI components (e.g., `Header`, `Footer`, `ProductCard`, `TechnicalDataBlock`).
  - **`app/products/`**: Dynamic routing for individual product details (`[id]`) and collections (`collection/[slug]`).
  - **`app/about/`, `app/contact/`, `app/compliance/`, `app/search/`**: Top-level informational and utility pages.
  - **`app/data.ts`**: The central data store acting as a mock backend for all product and collection data.

## Styling Approach
The project uses plain, scoped CSS alongside Next.js features. CSS files are named and placed beside their respective components or pages (e.g., `Header.css`, `page.module.css`).

## Data Flow
Data flows strictly unidirectionally from the static data source (`app/data.ts`) into server or client components. Pages fetch the required properties based on route parameters (e.g., `id` or `slug`) and provide them as props to the display components.
