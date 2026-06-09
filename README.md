# Carry Labs Exchange Articles

React/Vite project for Carry Labs exchange tutorial articles.

## Current page

- HOYA BIT: `/hoya-bit`

## Structure

```text
src/
  App.jsx
  main.jsx
  components/
    ArticleLayout.jsx
    ImageGallery.jsx
    Lightbox.jsx
    Topbar.jsx
  pages/
    HoyaBitPage.jsx
  utils/
    slug.js
public/
  carry-labs-logo.png
  hoyabit/
    new2/
      100.png
      200.png
      ...
```

## Add another exchange article

Follow [ARTICLE_SPEC.md](./ARTICLE_SPEC.md) for the current approved typography, layout, image, and deployment rules.

1. Put images under `public/<exchange-slug>/<image-folder>/`.
2. Copy `src/pages/HoyaBitPage.jsx` to a new page, for example `BinancePage.jsx`.
3. Update article metadata, text, `imageBasePath`, `tocItems`, and image groups.
4. Import the new page in `src/App.jsx` and add a route:

```jsx
const articles = {
  '/': HoyaBitPage,
  '/hoya-bit': HoyaBitPage,
  '/binance': BinancePage,
};
```

## Commands

```bash
npm install
npm run dev
npm run build
```
