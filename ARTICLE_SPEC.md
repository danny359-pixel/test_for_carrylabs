# Carry Labs Exchange Article Spec

This spec documents the current HOYA BIT article implementation so future exchange pages can reuse the same format.

## Page Structure

Each exchange article should be a standalone React page under:

```text
src/pages/<ExchangeName>Page.jsx
```

Register the page in:

```text
src/App.jsx
```

Example:

```jsx
import HoyaBitPage from './pages/HoyaBitPage.jsx';
import BinancePage from './pages/BinancePage.jsx';

const articles = {
  '/': HoyaBitPage,
  '/hoya-bit': HoyaBitPage,
  '/binance': BinancePage,
};
```

## Asset Structure

Put each exchange's images under `public/<exchange-slug>/`.

Recommended:

```text
public/
  hoyabit/
    cover/
      cover.png
    new2/
      100.png
      200.png
      ...
```

For future pages:

```text
public/
  binance/
    cover/
      cover.png
    article/
      100.png
      200.png
      ...
```

## Shared Components

Use these existing components:

```text
src/components/Topbar.jsx
src/components/ArticleLayout.jsx
src/components/ImageGallery.jsx
src/components/Lightbox.jsx
```

`ArticleLayout` handles:

- fixed top bar spacing
- article title area
- cover image or placeholder
- right-side table of contents
- article/sidebar grid

`ImageGallery` handles:

- aligned image groups
- 1/2/3/4 image grid sizing
- clickable image zoom lightbox

## Article Metadata

Each page should define an `article` object:

```jsx
const article = {
  title: '【2026】HOYA BIT 開戶教學｜台幣入金 + 銀行帳戶綁定完整圖解',
  pageTitle: 'HOYA BIT',
  updatedAt: '最後更新：2026 年 6 月',
  coverImage: '/hoyabit/cover/cover.png',
  coverTitle: 'HOYA BIT',
  coverSubtitle: '開戶教學封面圖 placeholder',
  imageBasePath: '/hoyabit/new2',
  meta: {
    unit: 'UNIT 1',
    category: '基礎知識',
    readingTime: '1 分鐘閱讀',
  },
  tocItems: [
    '開戶前需要準備什麼？',
    'HOYA BIT 完整開戶流程總覽',
  ],
  images: {
    signup: ['100', '200', '300'],
  },
};
```

Also set the browser title:

```jsx
useEffect(() => {
  document.title = `${article.pageTitle}｜Carry Labs`;
}, []);
```

## Typography

Current values are aligned to the Carry Labs article page implementation.

Global font:

```css
"Inter", "Noto Sans TC", "Microsoft JhengHei", Arial, sans-serif
```

Desktop article typography:

```css
h1:
  font-size: 2rem;
  line-height: 1.15;
  font-weight: 900;
  letter-spacing: -0.025em;

h2:
  font-size: 28px;
  line-height: 1.4;
  font-weight: 600;
  margin: 48px 0 20px;
  padding: 10px 16px;
  border-left: 4px solid #fcbb00;
  background: rgba(252, 187, 0, 0.1);

h3:
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 600;
  margin: 32px 0 12px;
  padding: 8px 12px;
  border-left: 3px solid #ffd236;
  background: #fffbeb;

p:
  font-size: 1.125rem;
  line-height: 1.66;
  letter-spacing: 0.012em;
  margin: 16px 0;
```

Important: if tightening article text, adjust only `line-height` and `letter-spacing`; do not change paragraph `margin` unless the user asks to change paragraph spacing.

## Image Rules

Images are local assets under `public`.

Single images:

```css
grid-template-columns: minmax(0, 300px);
```

Two images:

```css
grid-template-columns: repeat(2, minmax(0, 300px));
```

Three images:

```css
grid-template-columns: repeat(3, minmax(0, 280px));
```

Four images:

```css
grid-template-columns: repeat(4, minmax(0, 220px));
```

All image groups are left-aligned.

Images open in an in-page lightbox with animation. They should not open in a new tab.

## Mobile Topbar

Desktop topbar is fixed.

Mobile topbar must stay compact:

- height: `64px`
- show logo
- show `套利訊號`
- show hamburger button
- hide full navigation
- hide user circle
- hide `後台管理`

Mobile article top padding:

```css
padding: 92px 18px 58px;
```

## Deployment

Current GitHub repo:

```text
https://github.com/danny359-pixel/test_for_carrylabs
```

Netlify settings:

```text
Build command: npm run build
Publish directory: dist
Branch: main
```

SPA fallback files:

```text
public/_redirects
vercel.json
netlify.toml
```

After editing:

```bash
npm run build
git add .
git commit -m "Describe change"
git push
```

Netlify will auto-deploy from GitHub.
