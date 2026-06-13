import React, { useEffect } from 'react';
import ArticleLayout from '../components/ArticleLayout.jsx';
import ImageGallery from '../components/ImageGallery.jsx';
import { slug } from '../utils/slug.js';

const article = {
  title: '【2026】BingX 開戶教學｜完整圖解 + KYC 身份驗證流程',
  pageTitle: 'BingX 開戶教學',
  updatedAt: '最後更新：2026 年 6 月',
  coverImage: '/covers/bingx.png',
  imageBasePath: '/bingx/new1',
  meta: { unit: 'UNIT 3', category: '交易所開戶', readingTime: '12 分鐘閱讀' },
  tocItems: ['開戶前需要準備什麼？', 'BingX 開戶教學：建立帳號', 'BingX KYC 身份驗證教學', '設定 2FA 雙重驗證', 'HOYA BIT 入金教學', '延伸閱讀'],
  images: {
    signup: ['600', '700', '200'],
    email: ['300'],
    app: ['500', '400'],
    login: ['800', '900'],
    kycStart: ['100', '1100', '1200'],
    kycRegion: ['1300', '1400', '1500'],
    kycUpload: ['1600', '1700', '1800'],
    security: ['1900', '2000', '2100'],
    authKey: ['2200', '2300'],
    authenticator: ['2400', '2500', '2700', '2800'],
    authDone: ['2850', '2900', '3000', '350'],
    hoyaDeposit: ['3100', '3200', '3300', '3400'],
    hoyaBuy: ['3500', '3600', '3700', '3800'],
    hoyaNetwork: ['35'],
    bingxDeposit: ['3950', '4000', '4100', '4200'],
    bingxAddress: ['4300', '4400', '4500'],
    hoyaSend: ['4600', '4700', '4800', '4900'],
  },
};

function Images({ name, alt }) {
  return <ImageGallery images={article.images[name]} basePath={article.imageBasePath} alt={alt} />;
}

export default function BingXPage() {
  useEffect(() => { document.title = `${article.pageTitle}｜Carry Labs`; }, []);

  return (
    <ArticleLayout {...article}>
      <p>BingX 是一家成立於 2018 年、全球用戶超過 1,000 萬的加密貨幣交易所，以「社交跟單交易（Copy Trading）」功能起家，讓投資者可以直接複製專業交易者的倉位操作，不需要自行分析行情。</p>
      <p>除了跟單交易，BingX 也提供現貨、合約、網格機器人等多元交易功能，是一個功能全面且對新手相對友善的平台。</p>
      <p>對於想要邊學習邊參與市場，或是希望跟著有經驗的交易者操作的加密貨幣新手，BingX 是值得考慮的選擇之一。</p>
      <p>透過 Carry Labs 的 BingX 專屬連結開戶，還能享有手續費折扣優惠！</p>

      <div className="note">
        <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠。</p>
        <p>註冊連結：<a href="https://bingxdao.com/invite/VXDYJOM1/" target="_blank" rel="noreferrer">https://bingxdao.com/invite/VXDYJOM1/</a></p>
        <p>如果是透過 App 註冊，請輸入邀請碼：VXDYJOM1</p>
      </div>

      <h2 id={slug('開戶前需要準備什麼？')}>開戶前需要準備什麼？</h2>
      <p>開戶前，請先準備好以下東西：</p>
      <ul>
        <li>BingX APP：至 App Store 或 Google Play 免費下載安裝</li>
        <li>Google Authenticator：設定 2FA 雙重驗證時使用，至 App Store 或 Google Play 免費下載安裝</li>
        <li>Email 信箱：建立帳號與接收驗證碼用，建議選常用信箱</li>
        <li>手機：部分驗證步驟需輸入簡訊驗證碼</li>
        <li>身分證或護照正本：KYC 身份驗證拍照用</li>
      </ul>

      <h3>BingX 開戶流程總覽</h3>
      <ol>
        <li>Step 1：在 BingX 官網註冊一個帳號</li>
        <li>Step 2：在瀏覽器完成 Email 驗證</li>
        <li>Step 3：下載並開啟 BingX APP，用剛建立的帳號登入</li>
        <li>Step 4：進行 KYC 身份驗證（上傳身分證 + 自拍人臉）</li>
        <li>Step 5：設定 2FA 雙重驗證（需搭配 Google Authenticator）</li>
        <li>Step 6：開戶完成，接著透過 HOYA BIT 入金，即可開始交易</li>
      </ol>

      <h2 id={slug('BingX 開戶教學：建立帳號')}>BingX 開戶教學：建立帳號</h2>
      <h3>Step 1：填寫帳號資料</h3>
      <p>點擊 Carry Labs 的 BingX 專屬連結，用手機瀏覽器開啟 BingX 官網，點選「免費註冊」，選擇以下任一方式建立帳號：</p>
      <p>如果你有 Google 帳號，推薦點選「使用 Google 帳號繼續」，選擇你的 Google 帳號授權登入，系統將自動建立 BingX 帳號。完成後記得在帳號設定中填入推薦碼：VXDYJOM1。</p>
      <p>如果選擇 Email 信箱註冊，填入常用 Email、設定密碼，並在推薦碼欄位輸入 Carry Labs 的推薦碼：VXDYJOM1。密碼格式必須符合以下規範：</p>
      <ul>
        <li>至少包含一個大寫英文字母</li>
        <li>至少包含一個數字</li>
        <li>長度至少 8 個字元以上</li>
      </ul>
      <p>確認填寫無誤後，勾選服務條款，點選「建立帳號」。</p>
      <Images name="signup" alt="BingX 建立帳號" />

      <h3>Step 2：Email 驗證</h3>
      <p>系統會傳送驗證信到你填寫的 Email，請前往信箱取得 6 位數驗證碼，在規定時間內填入完成驗證。</p>
      <p>若收不到驗證信，請檢查「垃圾郵件」或「所有郵件」資料夾；仍找不到可點「重新發送」重試。</p>
      <Images name="email" alt="BingX Email 驗證" />

      <h3>Step 3：下載並開啟 BingX APP，用剛建立的帳號登入</h3>
      <p>接著，請下載 BingX APP，後續的 KYC 身份驗證與安全設定在 APP 上操作會更直覺方便。</p>
      <p>iOS 下載：App Store 搜尋「BingX」；Android 下載：Google Play 搜尋「BingX」。</p>
      <p>下載並開啟 APP 後，選擇「登入」，輸入你剛才建立的 Email 帳號與密碼登入。請注意是點「登入」而非「註冊」，因為帳號已經在網頁版建立好了。</p>
      <Images name="app" alt="下載 BingX APP" />
      <Images name="login" alt="登入 BingX APP" />

      <h2 id={slug('BingX KYC 身份驗證教學')}>BingX KYC 身份驗證教學</h2>
      <p>完成帳號建立後進行 KYC 身份驗證，解鎖完整提領額度與所有交易功能。</p>

      <h3>Step 1：進入驗證流程</h3>
      <p>在 BingX APP 或網頁版中，找到個人中心或首頁提示，找到「身份認證（KYC）」入口，點選開始認證。</p>
      <Images name="kycStart" alt="BingX KYC 驗證入口" />

      <h3>Step 2：選擇居住地與證件類型</h3>
      <p>確認居住地為「台灣」，選擇「身分證」作為驗證文件，點選繼續。</p>
      <Images name="kycRegion" alt="BingX 選擇居住地與證件" />

      <h3>Step 3：上傳身分證照片</h3>
      <p>依序拍攝並上傳身分證正面與背面照片。請確保照片清晰、四個角完整入鏡、沒有反光或手指遮擋。</p>
      <Images name="kycUpload" alt="BingX 上傳證件與人臉辨識" />

      <h3>Step 4：人臉辨識</h3>
      <p>上傳證件照片後，系統會進入人臉辨識步驟。按照畫面指示，面向前鏡頭完成辨識動作，如有眼鏡請先摘下。</p>

      <h3>Step 5：等待審核</h3>
      <p>資料送出後系統開始審核。BingX 的 KYC 審核速度通常很快，多數情況下幾分鐘至幾小時內即可通過。</p>

      <h2 id={slug('設定 2FA 雙重驗證')}>設定 2FA 雙重驗證</h2>
      <p>KYC 審核期間，可以先完成 2FA 雙重驗證設定，讓帳號安全多一層保護。</p>
      <p>2FA 會在密碼之外，增加一組每 30 秒更新的動態驗證碼。即使密碼被盜，也無法在沒有驗證碼的情況下登入。</p>
      <p>開始前，請先在手機安裝 Google Authenticator：</p>
      <p>iOS / Android：App Store / Google Play 搜尋「Google Authenticator」下載安裝。</p>
      <p>下載後開啟 App，使用你的 Google 帳號登入。</p>

      <h3>Step 1：前往安全設定</h3>
      <p>在 BingX APP 或網頁版中，前往個人設定，找到安全中心，找到「Google Authenticator」，點選「綁定」。</p>
      <Images name="security" alt="BingX 安全設定" />

      <h3>Step 2：掃描 QR Code 或輸入金鑰</h3>
      <p>頁面會顯示 QR Code 及備用金鑰，先把金鑰複製下來。</p>
      <p>在 Google Authenticator 中，點選右下角「+」→「輸入設定金鑰」。</p>
      <Images name="authKey" alt="BingX 驗證器金鑰" />
      <Images name="authenticator" alt="Google Authenticator 綁定 BingX" />

      <h3>Step 3：填入驗證碼完成設定</h3>
      <p>Google Authenticator 綁定後會生成 6 位數動態碼，請在 30 秒內將動態碼填入 BingX 的確認欄位，2FA 設定即完成。</p>
      <p>驗證碼每 30 秒會更新一次，若已過期，可以回到驗證器 App 再次複製新的驗證碼來貼上。</p>
      <Images name="authDone" alt="完成 BingX 2FA 設定" />

      <h2 id={slug('HOYA BIT 入金教學')}>Step 6：HOYA BIT 入金教學</h2>
      <h3>為何需要台幣交易所？</h3>
      <p>BingX 等國際交易所無法直接用台幣入金。幣圈最常見、最划算的做法是：先在 HOYA BIT 台幣交易所以台幣購買 USDT，再透過鏈上轉幣充值到 BingX。</p>
      <div className="note">
        <p>▶ 延伸閱讀：<a href="/hoya-bit">HOYA BIT 台灣交易所開戶教學（開戶 + 台幣入金完整流程）</a></p>
        <p>註冊連結：<a href="https://hoyabit.com/signup?refCode=CwS4bxVU" target="_blank" rel="noreferrer">https://hoyabit.com/signup?refCode=CwS4bxVU</a></p>
        <p>邀請碼：CwS4bxVU</p>
      </div>

      <h3>Step 1：在 HOYA BIT 入金並購買 USDT</h3>
      <p>1. 在 HOYA BIT 以入金台幣，以先前綁定的銀行帳戶，轉帳至「專屬信託帳戶」。</p>
      <Images name="hoyaDeposit" alt="HOYA BIT 台幣入金" />
      <p>2. 在台幣入金後，請輸入你想用多少台幣來購買 USDT。</p>
      <Images name="hoyaBuy" alt="HOYA BIT 購買 USDT" />
      <p>3. 回到 HOYA BIT APP，點選右下角進入首頁，點選「提幣」，選擇「USDT」，並開始選擇主網。</p>
      <Images name="hoyaNetwork" alt="HOYA BIT 選擇 USDT 主網" />
      <p>此時注意，選擇哪一個主網，需要依我們要提領到哪個交易所而定，「提領」與「充值」必須同主網，比如我們剛才選擇的 BSC。</p>
      <p>另外，單就手續費而言，BSC ≒ AVAX-C &lt; TRC20，其中 TRC20 通用性最廣，但手續費相對高一點點。</p>

      <h3>Step 2：在 BingX 取得充值地址</h3>
      <p>4. 回到 BingX APP，點擊右下角的「資產」，接著點擊「新增資金」，接著點擊「存入加密貨幣」，選擇 USDT 幣種。</p>
      <Images name="bingxDeposit" alt="BingX 新增加密貨幣資金" />
      <p>5. 再來選擇主網（此處以 BSC 為範例），最後複製 BingX 的充幣地址。</p>
      <Images name="bingxAddress" alt="BingX USDT 充值地址" />

      <h3>Step 3：從 HOYA BIT 提領 USDT</h3>
      <p>6. 將從 BingX 複製的地址貼入「接收地址」欄位，最後點選「儲存並下一步」。此處的接收者名稱可自行填入，例如：小明；而接收錢包／平台名稱，可填入交易所名稱，比如 BingX。</p>
      <p>7. 輸入要提領的 USDT 數量，確認後點「確認」完成，填入手機驗證碼、Google 驗證器提供的即時驗證碼，即可完成 BingX 入金。</p>
      <Images name="hoyaSend" alt="HOYA BIT 提領 USDT 至 BingX" />
      <div className="note"><p><strong>重要：</strong>HOYA BIT 和 BingX 選擇的網路必須完全一致，不同網路轉帳可能導致資金損失。</p></div>
      <p>等待鏈上確認（通常 5–15 分鐘），到帳後即可開始交易。</p>

      <h2 id={slug('延伸閱讀')}>延伸閱讀</h2>
      <ul>
        <li><a href="/hoya-bit">HOYA BIT 開戶教學｜台灣交易所 + 台幣入金完整流程</a></li>
        <li><a href="/binance">幣安 Binance 開戶教學</a></li>
        <li><a href="/mexc">MEXC 開戶教學</a></li>
        <li>OKX 開戶教學</li>
        <li>Bybit 開戶教學</li>
        <li>Bitget 開戶教學</li>
        <li>加密貨幣交易所完整比較推薦</li>
      </ul>
    </ArticleLayout>
  );
}
