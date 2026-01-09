# Shopify Vite Dawn Theme

A modern Shopify theme development setup using Dawn theme as the base with Vite and Tailwind CSS v4.

## Project Structure

```
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── frontend/                 # Frontend source files
│   └── entrypoints/          # Entry points for Vite
│       ├── app.css           # Main CSS file with Tailwind
│       └── app.js            # Application JavaScript
└── theme/                    # Shopify theme files (Dawn)
    ├── assets/               # Theme assets
    ├── config/               # Theme configuration
    ├── layout/               # Theme layouts
    ├── locales/              # Language files
    ├── sections/             # Theme sections
    ├── snippets/             # Theme snippets
    └── templates/            # Theme templates
```

## Tech Stack

- **Shopify Dawn Theme** - Base theme
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **vite-plugin-shopify** - Shopify integration for Vite
- **npm-run-all** - Run multiple npm scripts in parallel/sequence

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your Shopify store:**
   Update the store name in `package.json` scripts:
   ```json
   "shopify:dev": "shopify theme dev --path theme --store your-store-name",
   "shopify:push": "shopify theme push --path theme --store your-store-name"
   ```

3. **Authenticate with Shopify CLI:**
   ```bash
   shopify auth login
   ```

## Development

Start the development server with hot reloading:

```bash
npm run dev
```

This runs both:
- Vite dev server for frontend assets
- Shopify theme dev server for live preview

## Building

Build optimized assets for production:

```bash
npm run vite:build
```

## Deployment

Deploy to your Shopify store:

```bash
npm run deploy
```

This builds the assets and pushes the theme to Shopify.

## Available Scripts

- `npm run dev` - Start development servers (Vite + Shopify)
- `npm run deploy` - Build and deploy to Shopify
- `npm run vite:dev` - Start Vite dev server only
- `npm run vite:build` - Build production assets
  - ⚠️ restart the dev server after building, otherwise hmr will no longer work (p.s. with `npm run dev` running with hmr, you don't need to do this)
- `npm run shopify:dev` - Start Shopify theme dev only
- `npm run shopify:push` - Push theme to Shopify

## Configuration

### Vite Configuration

The `vite.config.js` is configured with:
- Shopify plugin with `themeRoot: 'theme'`
- Tailwind CSS v4 integration
- CORS settings for Shopify domains
- Source maps for debugging

### Tailwind CSS

Main CSS entry point at `frontend/entrypoints/app.css` imports Tailwind:
```css
@import "tailwindcss" source("../..");
```

## Theme Structure

All Shopify theme files are located in the `/theme` directory following standard Shopify theme structure. The Vite plugin automatically handles asset injection into the theme.

## Notes

- Theme files are organized in the `/theme` folder (not at project root)
- Vite generates assets and injects them into Shopify templates
- Hot reloading works for both frontend assets and Liquid templates
- Tailwind CSS classes can be used directly in Liquid templates
