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
      <p>對於想要邊學習邊參與市場，或希望跟著有經驗的交易者操作的加密貨幣新手，BingX 是值得考慮的選擇之一。</p>

      <div className="note">
        <p>透過 Carry Labs 的專屬連結開戶，可享有 20% 交易手續費優惠。</p>
        <p>註冊連結：<a href="https://bingxdao.com/invite/VXDYJOM1/" target="_blank" rel="noreferrer">https://bingxdao.com/invite/VXDYJOM1/</a></p>
        <p>App 註冊邀請碼：VXDYJOM1</p>
      </div>

      <h2 id={slug('開戶前需要準備什麼？')}>開戶前需要準備什麼？</h2>
      <ul>
        <li>BingX APP：至 App Store 或 Google Play 免費下載安裝</li>
        <li>Google Authenticator：設定 2FA 雙重驗證時使用</li>
        <li>Email 信箱：建立帳號與接收驗證碼用，建議使用常用信箱</li>
        <li>手機：部分驗證步驟需輸入簡訊驗證碼</li>
        <li>身分證或護照正本：KYC 身份驗證拍照用</li>
      </ul>

      <h3>BingX 開戶流程總覽</h3>
      <ol>
        <li>在 BingX 官網註冊帳號</li>
        <li>在瀏覽器完成 Email 驗證</li>
        <li>下載 BingX APP，使用剛建立的帳號登入</li>
        <li>進行 KYC 身份驗證</li>
        <li>設定 2FA 雙重驗證</li>
        <li>透過 HOYA BIT 入金後開始交易</li>
      </ol>

      <h2 id={slug('BingX 開戶教學：建立帳號')}>BingX 開戶教學：建立帳號</h2>
      <h3>Step 1：填寫帳號資料</h3>
      <p>點擊 Carry Labs 的 BingX 專屬連結，以手機瀏覽器開啟官網並點選「免費註冊」。你可以使用 Google 帳號快速建立帳戶，或以常用 Email 註冊。</p>
      <p>若使用 Email，請填入信箱、設定密碼，並在推薦碼欄位輸入 VXDYJOM1。密碼至少需有一個大寫英文字母、一個數字，且長度至少 8 個字元。</p>
      <Images name="signup" alt="BingX 建立帳號" />

      <h3>Step 2：Email 驗證</h3>
      <p>系統會傳送驗證信到你的 Email，請在規定時間內填入 6 位數驗證碼。若未收到，請檢查垃圾郵件或所有郵件資料夾，也可以點選重新發送。</p>
      <Images name="email" alt="BingX Email 驗證" />

      <h3>Step 3：下載 APP 並登入</h3>
      <p>在 App Store 或 Google Play 搜尋「BingX」並安裝。開啟 APP 後請選擇「登入」，輸入剛才建立的帳號；不要重複點選註冊。</p>
      <Images name="app" alt="下載 BingX APP" />
      <Images name="login" alt="登入 BingX APP" />

      <h2 id={slug('BingX KYC 身份驗證教學')}>BingX KYC 身份驗證教學</h2>
      <p>完成帳號建立後，進行 KYC 身份驗證即可解鎖完整提領額度與所有交易功能。</p>

      <h3>Step 1：進入驗證流程</h3>
      <p>在 BingX APP 的個人中心或首頁提示中找到「身份認證（KYC）」，點選開始認證。</p>
      <Images name="kycStart" alt="BingX KYC 驗證入口" />

      <h3>Step 2：選擇居住地與證件類型</h3>
      <p>確認居住地為台灣，選擇身分證作為驗證文件，閱讀並同意提示後繼續。</p>
      <Images name="kycRegion" alt="BingX 選擇居住地與證件" />

      <h3>Step 3：上傳證件並完成人臉辨識</h3>
      <p>依序拍攝身分證正面與背面，確保四角完整、畫面清晰且沒有反光或手指遮擋。接著按照畫面指示完成人臉辨識。</p>
      <Images name="kycUpload" alt="BingX 上傳證件與人臉辨識" />
      <p>送出後系統即開始審核，多數情況下幾分鐘至幾小時內即可通過。</p>

      <h2 id={slug('設定 2FA 雙重驗證')}>設定 2FA 雙重驗證</h2>
      <p>2FA 會在密碼之外增加一組每 30 秒更新的動態驗證碼。即使密碼外洩，沒有動態碼仍無法登入帳戶。</p>

      <h3>Step 1：前往安全設定</h3>
      <p>從個人設定進入安全中心，找到 Google Authenticator 並點選綁定。</p>
      <Images name="security" alt="BingX 安全設定" />

      <h3>Step 2：保存金鑰並連接驗證器</h3>
      <p>頁面會顯示 QR Code 與備用金鑰，請先妥善保存金鑰。在 Google Authenticator 點選「+」，選擇輸入設定金鑰，或直接掃描 QR Code。</p>
      <Images name="authKey" alt="BingX 驗證器金鑰" />
      <Images name="authenticator" alt="Google Authenticator 綁定 BingX" />

      <h3>Step 3：填入驗證碼完成設定</h3>
      <p>Google Authenticator 會生成 6 位數動態碼，請在 30 秒內填入 BingX 的確認欄位。若驗證碼已更新，請使用 App 顯示的最新一組。</p>
      <Images name="authDone" alt="完成 BingX 2FA 設定" />

      <h2 id={slug('HOYA BIT 入金教學')}>HOYA BIT 入金教學</h2>
      <p>BingX 等國際交易所無法直接用台幣入金。常見做法是先在 HOYA BIT 以台幣購買 USDT，再透過鏈上轉幣充值到 BingX。</p>
      <div className="note">
        <p>延伸閱讀：<a href="/hoya-bit">HOYA BIT 台灣交易所開戶教學</a></p>
        <p>註冊連結：<a href="https://hoyabit.com/signup?refCode=CwS4bxVU" target="_blank" rel="noreferrer">https://hoyabit.com/signup?refCode=CwS4bxVU</a></p>
        <p>邀請碼：CwS4bxVU</p>
      </div>

      <h3>Step 1：在 HOYA BIT 入金並購買 USDT</h3>
      <p>以先前綁定的銀行帳戶轉帳至專屬信託帳戶，台幣到帳後輸入要購買 USDT 的金額。</p>
      <Images name="hoyaDeposit" alt="HOYA BIT 台幣入金" />
      <Images name="hoyaBuy" alt="HOYA BIT 購買 USDT" />
      <Images name="hoyaNetwork" alt="HOYA BIT 選擇 USDT 主網" />

      <h3>Step 2：在 BingX 取得充值地址</h3>
      <p>在 BingX APP 點擊「資產」→「新增資金」→「存入加密貨幣」，選擇 USDT，再選擇主網並複製充值地址。</p>
      <Images name="bingxDeposit" alt="BingX 新增加密貨幣資金" />
      <Images name="bingxAddress" alt="BingX USDT 充值地址" />

      <h3>Step 3：從 HOYA BIT 提領 USDT</h3>
      <p>回到 HOYA BIT，將 BingX 地址貼入接收地址欄位，輸入提領數量，完成手機與 Google 驗證器驗證。</p>
      <Images name="hoyaSend" alt="HOYA BIT 提領 USDT 至 BingX" />
      <div className="note"><p><strong>重要：</strong>HOYA BIT 與 BingX 選擇的網路必須完全一致，不同網路轉帳可能導致資金損失。鏈上確認通常需要 5 至 15 分鐘。</p></div>

      <h2 id={slug('延伸閱讀')}>延伸閱讀</h2>
      <ul>
        <li><a href="/hoya-bit">HOYA BIT 開戶教學｜台灣交易所 + 台幣入金完整流程</a></li>
        <li><a href="/binance">幣安 Binance 開戶教學</a></li>
        <li><a href="/mexc">MEXC 開戶教學</a></li>
      </ul>
    </ArticleLayout>
  );
}
