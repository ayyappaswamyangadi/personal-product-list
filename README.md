# 🛒 Personal Product List

A simple, fast shopping/product list app built with React. Add items with a quantity and price, see the running total, and manage your list — all persisted locally in your browser.

**Live demo:** [https://personal-product-list.vercel.app/](https://personal-product-list.vercel.app/)

## Features

- **Add items** with a title, quantity, and price (`/add-item`)
- **View your list** in a table with a running item count and total price (`/` or `/product-list`)
- **Delete** individual items, or **remove all** items with a confirmation step
- **Persistent storage** — items are saved to `localStorage`, so your list survives a page refresh
- Client-side routing via `react-router-dom` (`HashRouter`), toast notifications on add, and an empty-state view when the list is empty

## Tech Stack

- [React](https://reactjs.org/) 17
- [React Router](https://reactrouter.com/) 6
- [react-icons-kit](https://www.npmjs.com/package/react-icons-kit) for icons
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Project Structure

```
src/
├── App.js                 # Routes, state management, localStorage persistence
├── components/
│   ├── Header.js          # App header
│   ├── ProductList.js     # List view, stats bar, remove-all
│   ├── AddItem.js         # Add item form
│   └── View.js             # Table rows + delete action
├── App.css / index.css    # Styling
└── index.js                # Entry point
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads automatically as you edit files.

### Testing

```bash
npm test
```

Launches the test runner in interactive watch mode.

### Production Build

```bash
npm run build
```

Builds an optimized, minified production bundle to the `build` folder.

## Deployment

This project is deployed on [Vercel](https://vercel.com/): **[https://personal-product-list.vercel.app/](https://personal-product-list.vercel.app/)**

Build configuration lives in `vercel.json`:

```json
{
  "buildCommand": "npm install --legacy-peer-deps && npm run build",
  "outputDirectory": "build",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

The app also supports deployment to GitHub Pages via `gh-pages`:

```bash
npm run deploy
```

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). See the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for more on available scripts, code splitting, bundle analysis, and deployment.
