# Carry Labs 文章上稿指南

這份文件是交易所文章新增與改稿的標準流程。目標是把 Google Docs 的文字與圖片，依原稿順序放進既有 React 頁面。

## 先看這裡

每次上稿都照這個順序：

1. 讀 Google Docs，確認全文、標題、圖片數量與圖片前後文字。
2. 找到 `public/` 內既有圖片，將文件圖片配回原始檔名。
3. 在 `src/pages/*Page.jsx` 依原稿順序放入文字與 `ImageGallery`。
4. 逐段核對文字、圖片群組、左右順序與圖片間文字。
5. 執行 build 與 Git 檢查。
6. 只提交預期檔案並推送 `main`。

核心原則：**文章是一條有順序的內容流，不是「一批文字 + 一批圖片」。**

```text
標題 -> 文字 -> 圖片 -> 文字 -> 圖片群組 -> 文字 -> 下一個標題
```

文字出現在兩組圖片之間，就必須在 JSX 中留在兩組圖片之間。

## Step 1：開始前檢查

先執行：

```powershell
git status --short
rg --files
```

確認：

- 目標頁面，例如 `src/pages/HoyaBitPage.jsx`
- 目標圖片資料夾，例如 `public/hoyabit/new2/`
- 是否有使用者尚未提交的修改
- 本文件與相似文章目前採用的寫法

不要覆蓋或回復與本次任務無關的修改。

## Step 2：取得 Google Docs 原稿

從分享網址取得文件 ID：

```text
https://docs.google.com/document/d/<DOCUMENT_ID>/edit
```

DOCX 匯出網址：

```text
https://docs.google.com/document/d/<DOCUMENT_ID>/export?format=docx
```

DOCX 只用於核對原稿，可解析以下內容：

- 完整文字
- `h1`、`h2`、`h3` 順序
- 段落與表格
- 圖片總數
- 每個圖片群組的數量與左右順序
- 每張圖片前後的文字

不要把 DOCX 轉成網站 runtime HTML，也不要加入：

- `dangerouslySetInnerHTML`
- 自動產生的 content JS
- base64 圖片
- `imported/` 圖片資料夾
- DOCX parser production dependency

最後的文章必須仍是既有 React 頁面格式。

## Step 3：製作內容順序表

在改 JSX 前，先把原稿整理成順序表。至少記錄：

| 節點 | 內容 |
|---|---|
| 標題 | Step 1：建立帳號 |
| 文字 | 勾選條款後按下註冊 |
| 圖片 | 文件第 1 張 |
| 文字 | 前往信箱取得驗證碼 |
| 圖片群組 | 文件第 2、3 張 |
| 文字 | 帳號建立完成，可稍後驗證 |
| 圖片 | 文件第 4 張 |

這張表決定 JSX 的垂直順序。

不要只記錄「這一節有四張圖」。上例必須拆成三個圖片群組，因為圖片中間有文字。

## Step 4：把文件圖片配回原始檔名

`public/<exchange>/<folder>/` 內的檔案是正式資產，必須沿用原始檔名：

```text
100.png
200.png
750.png
2850.png
30000.png
```

禁止改成：

```text
01.png
02.png
03.png
```

配圖順序：

1. 比對解碼後像素，確認是否為同一張圖。
2. 若截圖曾更新，比對畫面內容與尺寸。
3. 查看文件中的前一張、後一張圖片。
4. 查看圖片前後文字屬於哪個操作步驟。
5. 確認文件第一張圖對應哪個原始檔名，不能直接假設。

檔名數字只能協助判斷，不能單獨作為順序依據。

完成後應有明確映射：

```text
文件第 1 張 -> 100.png
文件第 2 張 -> 200.png
文件第 3 張 -> 300.png
文件第 4 張 -> 400.png
```

若原稿新增了本地不存在的圖片，才可將新圖片放入既有文章圖片資料夾，並沿用該資料夾的命名規則。

## Step 5：更新 React 頁面

每篇文章使用：

```text
src/pages/<ExchangeName>Page.jsx
```

共用元件：

```text
src/components/ArticleLayout.jsx
src/components/ImageGallery.jsx
src/components/Lightbox.jsx
```

### 文章設定

```jsx
const article = {
  title: '文章完整標題',
  pageTitle: '瀏覽器標題',
  updatedAt: '最後更新：2026 年 6 月',
  coverImage: '/covers/example.png',
  imageBasePath: '/example/article-images',
  meta: {
    unit: 'UNIT 1',
    category: '交易所開戶',
    readingTime: '10 分鐘閱讀',
  },
  tocItems: ['開戶前準備', 'Step 1：建立帳號'],
  images: {
    signupStart: ['100'],
    signupVerify: ['200', '300'],
    signupDone: ['400'],
  },
};
```

圖片群組名稱應描述用途，例如：

- `signupStart`
- `emailVerify`
- `kycId`
- `bankBinding`
- `authDone`

不要在可清楚命名時使用 `group01`、`group02`。

### 依原稿插入圖片

```jsx
<p>勾選條款後按下「註冊」。</p>
<Images name="signupStart" alt="建立帳號" />

<p>前往信箱取得驗證碼。</p>
<Images name="signupVerify" alt="信箱驗證" />

<p>帳號建立完成後，可以先選擇稍後驗證。</p>
<Images name="signupDone" alt="帳號建立完成" />
```

`images` 陣列決定同一群組的左右順序；`<Images>` 在 JSX 的位置決定它在文章中的上下順序。

### 文字規則

Google Docs 是文字來源。除非使用者要求改寫，必須保留：

- 所有段落
- 編號步驟
- 提醒與警告
- 圖片之間的文字
- 連結與推薦碼
- 標題與小標題
- 表格
- 延伸閱讀

不可自行合併、摘要或刪除。

文件標題與更新日期可交給 `ArticleLayout` 顯示；文件內手寫目錄可轉成 `tocItems`。其他正文不可因此省略。

## Step 6：逐段驗收

完成後從文章第一個節點一路核對到最後一個節點。

### 文字

- [ ] 每個標題都存在且順序正確
- [ ] 每個段落都存在且位置正確
- [ ] 編號沒有跳號或漏字
- [ ] 圖片之間的文字沒有被移到圖片群組外
- [ ] 連結與推薦碼正確

### 圖片

- [ ] 圖片總數與 Google Docs 相同
- [ ] 第一張與最後一張正確
- [ ] 每個段落的圖片數量相同
- [ ] 同組圖片左右順序正確
- [ ] 每張圖配到正確的原始檔名
- [ ] 沒有重複或漏圖
- [ ] 所有引用檔案都存在

### 結構

- [ ] 使用 `ArticleLayout` 與 `ImageGallery`
- [ ] 沒有 `imported/` 或另一套文章渲染架構
- [ ] 沒有把原始圖片重新命名成流水號
- [ ] `tocItems` 對應實際 `h2` id

只核對「文字總數」與「圖片總數」不算完成。必須核對圖片原始檔名，以及每張圖片前後的文字。

## Step 7：Build 與發布

執行：

```powershell
npm run build
git diff --check
git status --short
git diff --stat
```

確認只有預期檔案後：

```powershell
git add <本次修改的檔案>
git commit -m "Describe change"
git push origin main
```

發布完成條件：

- build 通過
- commit 已到 `origin/main`
- 工作目錄乾淨
- Netlify 自動部署已觸發

## 專案參考

### 路由

新頁面需在 `src/App.jsx` 註冊：

```jsx
import ExamplePage from './pages/ExamplePage.jsx';

const articles = {
  '/example': ExamplePage,
};
```

### 資產目錄

```text
public/
  covers/
    example.png
  example/
    article-images/
      100.png
      200.png
      300.png
```

不要建立 `imported/`、`generated/` 或 `ordered/` 副本。

### 圖片版面

目前 `ImageGallery` 版面：

| 圖片數 | Desktop grid |
|---:|---|
| 1 | `minmax(0, 340px)` |
| 2 | `repeat(2, minmax(0, 330px))` |
| 3 | `repeat(3, minmax(0, 300px))` |
| 4 | `repeat(2, minmax(0, 330px))` |
| 5 | `repeat(3, minmax(0, 300px))` |

圖片靠左排列，點擊後使用站內 Lightbox，不開新分頁。

### 字體與間距

主要設定位於 `src/styles.css`：

```css
font-family: "Inter", "Noto Sans TC", "Microsoft JhengHei", Arial, sans-serif;
```

若只需調整文字密度，優先修改 `line-height` 與 `letter-spacing`。除非需求明確，不調整段落 `margin`。

### Mobile Topbar

- 高度 `64px`
- 顯示 logo、`套利訊號`、hamburger
- 隱藏完整導覽、使用者圓圈、`後台管理`
- 文章 mobile padding：`92px 18px 58px`

### 部署設定

```text
Repository: https://github.com/danny359-pixel/test_for_carrylabs
Branch: main
Build command: npm run build
Publish directory: dist
```

SPA fallback：

```text
public/_redirects
netlify.toml
vercel.json
```

## 常見錯誤

### 圖片總數正確，但位置錯誤

原因：只按檔名或總順序排列，沒有看圖片前後文字。

修正：重新建立內容順序表，拆分圖片群組。

### 第一張圖不是 `100.png`

可能正確，也可能錯誤。必須比較文件第一張圖片與本地資產，不能從檔名猜測。

### PNG hash 不同

不代表畫面不同。PNG metadata 或壓縮方式可能不同。比較解碼像素、畫面內容與尺寸。

### 原稿有 30 張，本地也有 30 張

仍不能直接按檔名排序。必須確認每張圖片的內容與所在段落。

### 一個步驟有多張連續編號圖片

若中間有文字，就不是同一個 gallery。以原稿內容節點為準。
