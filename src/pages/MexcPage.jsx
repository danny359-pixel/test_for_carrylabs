import React, { useEffect } from 'react';
import ArticleLayout from '../components/ArticleLayout.jsx';
import ImageGallery from '../components/ImageGallery.jsx';
import { slug } from '../utils/slug.js';

const article = {
  title: '【2026】MEXC 開戶教學｜完整圖解 + KYC 身份驗證流程',
  pageTitle: 'MEXC 開戶教學',
  updatedAt: '最後更新：2026 年 6 月',
  coverTitle: 'MEXC',
  coverSubtitle: '開戶教學與 KYC 身份驗證流程',
  imageBasePath: '/mexc/new',
  meta: {
    unit: 'UNIT 2',
    category: '交易所開戶',
    readingTime: '1 分鐘閱讀',
  },
  tocItems: [
    '開戶前需要準備什麼？',
    'MEXC 開戶教學：建立帳號',
    'KYC 身份驗證教學',
    '設定 2FA 雙重驗證',
    'HOYA BIT 入金教學',
    '延伸閱讀',
  ],
  images: {
    signup: ['1', '2', '3'],
    email: ['4'],
    appDownload: ['5', '6'],
    kycEntry: ['7', '8', '9'],
    kycFace: ['10', '11', '12'],
    security: ['13', '14', '16'],
    authSetup: ['17', '18'],
    authApp: ['21'],
    authCode: ['22', '23', '24'],
    authDone: ['25'],
    hoyaDeposit: ['27', '28', '29'],
    hoyaBuy: ['30', '31'],
    hoyaWithdraw: ['32', '33', '34'],
    mexcDeposit: ['35', '36', '37'],
    hoyaAddress: ['38', '39', '40'],
    hoyaConfirm: ['41', '42', '43'],
    hoyaVerify: ['44', '45'],
  },
};

function Images({ name, alt }) {
  return <ImageGallery images={article.images[name]} basePath={article.imageBasePath} alt={alt} />;
}

export default function MexcPage() {
  useEffect(() => {
    document.title = `${article.pageTitle}｜Carry Labs`;
  }, []);

  return (
    <ArticleLayout
      meta={article.meta}
      title={article.title}
      coverTitle={article.coverTitle}
      coverSubtitle={article.coverSubtitle}
      updatedAt={article.updatedAt}
      tocItems={article.tocItems}
    >
      <p>MEXC（抹茶交易所）成立於 2018 年，是一家提供全球服務的數位資產交易平台，以幣種豐富、新幣上線速度快著稱，目前上架超過 1,500 種加密貨幣，是許多尋找山寨幣和新興項目的投資者首選的交易所之一。</p>
      <p>對於想要接觸更多元幣種、不只侷限於主流幣的加密貨幣玩家來說，MEXC 提供了相當豐富的選擇。平台支援現貨、合約交易，並提供多種語言的操作介面。</p>
      <p>這篇文章將帶你一步一步完成 MEXC 的開戶流程，從建立帳號到完成 KYC 身份驗證，讓你快速開始交易！</p>

      <div className="note">
        <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠。</p>
        <p>註冊連結：<a href="https://promote.mexc.com/a/buawnzvB" target="_blank" rel="noreferrer">https://promote.mexc.com/a/buawnzvB</a></p>
        <p>如果是透過 App 註冊，請輸入邀請碼：mexc-carrylabs</p>
      </div>

      <h2 id={slug('開戶前需要準備什麼？')}>開戶前需要準備什麼？</h2>
      <p>開戶前，請先準備好以下東西：</p>
      <ul>
        <li>MEXC APP：至 App Store 或 Google Play 免費下載安裝</li>
        <li>Google Authenticator：設定 2FA 雙重驗證時使用，至 App Store 或 Google Play 免費下載安裝</li>
        <li>Email 信箱：建立帳號與接收驗證碼用，建議選常用信箱</li>
        <li>手機：部分驗證步驟需輸入簡訊驗證碼</li>
        <li>身分證或護照正本：KYC 身份驗證拍照用</li>
      </ul>

      <h3>MEXC 開戶流程總覽</h3>
      <ol>
        <li>在 MEXC 官網註冊一個帳號</li>
        <li>在瀏覽器完成 Email 驗證</li>
        <li>下載並開啟 MEXC APP，用剛建立的帳號登入</li>
        <li>進行 KYC 身份驗證（上傳身分證 + 自拍人臉）</li>
        <li>設定 2FA 雙重驗證（需搭配 Google Authenticator）</li>
        <li>開戶完成，接著透過 HOYA BIT 入金，即可開始交易</li>
      </ol>

      <h2 id={slug('MEXC 開戶教學：建立帳號')}>MEXC 開戶教學：建立帳號</h2>
      <h3>Step 1：填寫帳號資料</h3>
      <p>建立帳號有兩種方式：如果你有 Google 帳號，推薦直接點選「使用 Google 登入」快速建立，未來登入時直接透過 Google 即可，不需要另外記憶密碼。</p>
      <p>如果選擇 Email 信箱註冊，填入你的常用 Email。密碼至少包含一個大寫、小寫英文字母、至少一個數字，且長度需 10 個字元以上。</p>
      <p>設定你習慣使用的密碼，並確認邀請碼欄位內已填入 Carry Labs 的推薦碼：mexc-carrylabs。確認填寫無誤後，勾選服務條款，點選「註冊」。</p>
      <Images name="signup" alt="MEXC 註冊填寫帳號資料" />

      <h3>Step 2：Email 驗證</h3>
      <p>系統會傳送驗證碼到你填寫的 Email 信箱，請前往收取並在規定時間內填入完成驗證。</p>
      <p>小提醒：有時候驗證信可能會被歸類到「垃圾郵件」或「所有郵件」資料夾，在收件匣找不到時可以到這兩個地方確認，或點選「重新發送驗證信」再試一次。</p>
      <Images name="email" alt="MEXC Email 驗證" />

      <h3>Step 3：下載並開啟 MEXC APP</h3>
      <p>接著，請下載 MEXC APP，後續的 KYC 身份驗證與安全設定在 APP 上操作會更直覺方便。iOS 可至 App Store 搜尋「MEXC」，Android 可至 Google Play 搜尋「MEXC」。</p>
      <p>下載並開啟 APP 後，選擇「登入」，輸入你剛才建立的 Email 帳號與密碼登入。</p>
      <Images name="appDownload" alt="下載並登入 MEXC APP" />

      <h2 id={slug('KYC 身份驗證教學')}>KYC 身份驗證教學</h2>
      <p>完成帳號建立後，進行 KYC 身份驗證可以解鎖完整提領額度與所有交易功能。</p>

      <h3>Step 1：進入驗證流程</h3>
      <p>登入後，在首頁提示中找到「身份驗證」入口，點選「立即認證」。首先完成初級驗證，再完成高級驗證。</p>
      <Images name="kycEntry" alt="MEXC KYC 進入驗證流程" />

      <h3>Step 2：選擇居住地與證件類型</h3>
      <p>確認居住地為「台灣」（或你所在的國家），選擇「身分證」作為驗證證件（護照、駕照亦可），點選「下一步」。</p>

      <h3>Step 3：上傳身分證照片</h3>
      <p>按照畫面指示，依序拍攝並上傳身分證正面與背面照片，確保圖片清晰、無遮擋、四個角完整呈現。</p>

      <h3>Step 4：人臉辨識</h3>
      <p>等待 1～2 小時後，接著進行「高級驗證」。如果你此時跳出了畫面，可以點擊左上角的頭像，進入設定，並點擊「已認證」的按鈕，就能重新回到畫面。</p>
      <p>選擇高級認證後，點選人臉辨識，按照畫面指示面向前鏡頭，完成自拍辨識動作。</p>
      <Images name="kycFace" alt="MEXC 高級驗證與人臉辨識" />

      <h3>Step 5：等待審核</h3>
      <p>資料送出後進入審核流程。MEXC 的 KYC 審核速度較快，通常幾分鐘到幾小時內即可完成。審核通過後會收到 Email 通知。</p>

      <h2 id={slug('設定 2FA 雙重驗證')}>設定 2FA 雙重驗證</h2>
      <p>KYC 送出後，可以先趁等待審核的時間設定 2FA 雙重驗證，為帳號加上一道動態密碼保護。</p>

      <h3>Step 1：進入安全設定</h3>
      <p>在 MEXC APP 或網頁版中，前往「個人設定」→「安全設置」，找到「Google Authenticator」項目，點選「綁定」。</p>
      <Images name="security" alt="MEXC 進入安全設定" />

      <h3>Step 2：綁定驗證器 APP</h3>
      <p>我們統一推薦使用 Google Authenticator 作為 2FA 驗證工具。請先在手機安裝 Google Authenticator，下載後開啟 App，使用你的 Google 帳號登入。</p>
      <Images name="authSetup" alt="MEXC 綁定 Google Authenticator" />
      <Images name="authApp" alt="下載 Google Authenticator" />
      <p>頁面會顯示一組 QR Code 和備用金鑰。在 Google Authenticator 中，點選右下角「+」→「掃描 QR Code」，對準頁面上的 QR Code 完成掃描；或選擇「手動輸入金鑰」，複製金鑰後貼入完成綁定。</p>
      <Images name="authCode" alt="Google Authenticator 掃描或輸入金鑰" />

      <h3>Step 3：填入驗證碼完成設定</h3>
      <p>Google Authenticator 綁定後會生成動態碼，將這組 6 位數驗證碼填回 MEXC 確認，2FA 即設定完成。</p>
      <Images name="authDone" alt="MEXC 完成 2FA 設定" />

      <h2 id={slug('HOYA BIT 入金教學')}>HOYA BIT 入金教學</h2>
      <h3>為什麼需要透過 HOYA BIT 入金？</h3>
      <p>MEXC 等國際交易所無法直接用台幣入金。雖然 MEXC 也支援信用卡直接購幣，但手續費偏高，非常不推薦使用。幣圈最常見、最划算的做法是：先在 HOYA BIT 台幣交易所以台幣購買 USDT，再透過鏈上轉幣充值到 MEXC。</p>
      <p>不管是要入金到 MEXC 進行交易，還是未來想把加密貨幣獲利換回台幣存回銀行，這些流程都必須透過台幣交易所才能完成。因此，在初期就開立一間台幣交易所帳戶，是最基本也最建議的做法。</p>

      <div className="note">
        <p>延伸閱讀：<a href="/hoya-bit">HOYA BIT 台灣交易所開戶教學（開戶 + 銀行綁定完整流程）</a></p>
        <p>優惠註冊連結：<a href="https://hoyabit.com/signup?refCode=CwS4bxVU" target="_blank" rel="noreferrer">https://hoyabit.com/signup?refCode=CwS4bxVU</a></p>
        <p>邀請碼：CwS4bxVU</p>
        <p>新用戶優惠：完成 KYC 並購買 3,000 台幣等值加密貨幣，即可獲得 6 USDT</p>
      </div>

      <h3>入金步驟</h3>
      <ol>
        <li>在 HOYA BIT 以先前綁定的銀行帳戶，轉帳至「專屬信託帳戶」。</li>
        <li>台幣入金後，輸入你想用多少台幣來購買 USDT。</li>
      </ol>
      <Images name="hoyaDeposit" alt="HOYA BIT 台幣入金" />
      <Images name="hoyaBuy" alt="HOYA BIT 購買 USDT" />

      <ol start="3">
        <li>回到 HOYA BIT APP，點選右下角進入首頁，點選「提幣」，選擇「USDT」，並開始選擇主網。</li>
      </ol>
      <Images name="hoyaWithdraw" alt="HOYA BIT 選擇 USDT 提幣主網" />
      <p>此時注意，選擇哪一個主網，需要依我們要「提領到哪個交易所」而定，「提領」與「充值」必須同主網。單就手續費而言，BSC 約等於 AVAX-C，小於 TRC20，其中 TRC20 通用性最廣，但手續費相對高一點點。</p>

      <ol start="4">
        <li>在 MEXC APP 找到「充值」，選擇 USDT 幣種，在此我們以 BSC 作為示範。</li>
        <li>選擇幣種，選擇主網，最後複製 MEXC 的充幣地址。</li>
      </ol>
      <Images name="mexcDeposit" alt="MEXC 複製 USDT 充幣地址" />

      <ol start="6">
        <li>將從 MEXC 複製的地址貼入 HOYA BIT「接收地址」欄位，最後點選「儲存並下一步」。接收者名稱可自行填入，例如小明；接收錢包／平台名稱可填入交易所名稱，例如 MEXC。</li>
      </ol>
      <Images name="hoyaAddress" alt="HOYA BIT 新增 MEXC 提幣地址" />

      <ol start="7">
        <li>輸入要提領的 USDT 數量，確認後點「確認」完成，填入手機驗證碼、Google 驗證器提供的即時驗證碼，即可完成 MEXC 入金。</li>
      </ol>
      <Images name="hoyaConfirm" alt="HOYA BIT 確認 USDT 提領" />
      <Images name="hoyaVerify" alt="HOYA BIT 提領驗證碼" />

      <div className="note">
        <p>重要：HOYA BIT 和 MEXC 選擇的網路必須完全一致，不同網路轉帳可能導致資金損失。</p>
        <p>等待鏈上確認（通常 5–15 分鐘），到帳後即可開始交易。</p>
      </div>

      <h2 id={slug('延伸閱讀')}>延伸閱讀</h2>
      <ul>
        <li><a href="/hoya-bit">HOYA BIT 開戶教學｜台灣交易所 + 銀行綁定完整流程</a></li>
        <li>幣安 Binance 開戶教學</li>
        <li>OKX 開戶教學</li>
        <li>Bybit 開戶教學</li>
        <li>Bitget 開戶教學</li>
        <li>派網 Pionex 開戶教學</li>
        <li>加密貨幣交易所完整比較推薦</li>
      </ul>
    </ArticleLayout>
  );
}
