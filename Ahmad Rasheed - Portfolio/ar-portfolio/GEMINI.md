# GEMINI.md - Project Context

## Project Overview
**ar-portfolio** is a modern React web application built with Vite, intended to serve as a personal portfolio for Ahmad Rasheed. It leverages React 19 and Vite 8 for a high-performance development experience with Hot Module Replacement (HMR).

### Main Technologies
- **React 19**: Frontend UI library.
- **Vite 8**: Next-generation frontend tooling for building and serving.
- **ESLint**: Linting and code quality tool.
- **Vanilla CSS**: Used for styling (`index.css`, `App.css`).

### Architecture
- **Entry Point**: `src/main.jsx` initializes the React application.
- **Main Component**: `src/App.jsx` serves as the primary layout and component container.
- **Assets**: Static assets like images and SVGs are stored in `src/assets/` and `public/`.
- **Public Assets**: Includes a global `icons.svg` sprite sheet for consistent iconography.

## Building and Running
The following commands are defined in `package.json` for development and production:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Builds the project for production (output to `dist/`). |
| `npm run lint` | Runs ESLint to check for code quality issues. |
| `npm run preview` | Previews the production build locally. |

## Development Conventions

### Coding Style
- **ESM**: The project uses ECMAScript Modules (`"type": "module"`).
- **JSX**: Components are written in `.jsx` files.
- **Functional Components**: React hooks (e.g., `useState`) are used in functional components.

### Asset Management
- **Images**: Import images in `.jsx` files from the `assets` folder (e.g., `import heroImg from './assets/hero.png'`).
- **Icons**: SVG icons are managed via a sprite sheet in `public/icons.svg`. Use them with the `<use>` tag:
  ```html
  <svg className="icon">
    <use href="/icons.svg#icon-id"></use>
  </svg>
  ```

### Styling
- Global styles are located in `src/index.css`.
- Component-specific styles are located in `src/App.css`.

### Linting
- Configuration is located in `eslint.config.js`. Ensure all code passes `npm run lint` before committing.
