Act as an expert Frontend Developer. I need to update my React (Vite + Tailwind CSS) portfolio website with two specific updates. Please provide the clean, responsive code.

### 1. Update "What I'm Doing" Grid
Add a third service card for AI Automation alongside Full-Stack and Backend Engineering.
- **Data:** - **Title:** "AI Automation"
  - **Description:** "Building smart CLI tools and integrating LLMs using modern AI-driven development."
  - **Icon:** Terminal or AI Spark SVG.
- **Layout:** Use Tailwind grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`) to ensure it scales flawlessly from mobile rows to a desktop row.

### 2. Add Project Category Filters
Inside the Projects component, add a sub-navigation filter bar below the main heading to differentiate my work.
- **Categories:** [All, Full-Stack, Frontend, AI & CLI Tools]
- **Logic:** Use a React `useState` hook to manage the active filter and dynamically filter the projects array.
- **Styling:** Match the existing premium dark aesthetic. Active tabs should have a subtle background highlight or bottom border accent line.

### Please Provide:
- The updated Component JSX code.
- The React state logic and dynamic filtering code.