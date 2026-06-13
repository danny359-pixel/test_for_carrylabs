import React, { useEffect } from 'react';
import ArticleLayout from '../components/ArticleLayout.jsx';
import ImageGallery from '../components/ImageGallery.jsx';
import { slug } from '../utils/slug.js';

const article = {
  title: '【2026年幣安開戶教學】Binance 註冊 + KYC 身份驗證完整圖解教學',
  pageTitle: '幣安 Binance 開戶教學',
  updatedAt: '最後更新：2026 年 6 月',
  coverImage: '/covers/binance.png',
  imageBasePath: '/binance/new01',
  meta: { unit: 'UNIT 4', category: '交易所開戶', readingTime: '15 分鐘閱讀' },
  tocItems: ['開戶前準備', '幣安開戶教學', 'KYC 身份驗證教學', '設定 2FA 雙重驗證', 'HOYA BIT 入金教學', '延伸閱讀'],
  images: {
    signup: ['100', '600', '700', '800'],
    signupDetails: ['200'],
    email: ['900'],
    password: ['300'],
    app: ['500', '550'],
    kycStart: ['1100', '1200', '1300'],
    kycId: ['1400', '1500', '1600'],
    kycFace: ['1700', '1800'],
    kycInfo: ['1900', '2000', '2100', '400'],
    security: ['2150', '2200', '2300'],
    email2fa: ['250', '2500'],
    qr: ['2700'],
    authApp: ['2400', '2900', '3000', '3100'],
    authDone: ['3200', '3300', '3400'],
    hoyaDeposit: ['3500', '3600', '3700', '3800'],
    hoyaBuy: ['3900', '4000', '4100', '4200'],
    hoyaNetwork: ['4300'],
    binanceDeposit: ['4400', '4600', '4700', '4800'],
    binanceAddress: ['4900'],
    hoyaSend: ['5000', '5100', '5200', '5300'],
  },
};

function Images({ name, alt }) {
  return <ImageGallery images={article.images[name]} basePath={article.imageBasePath} alt={alt} />;
}

export default function BinancePage() {
  useEffect(() => { document.title = `${article.pageTitle}｜Carry Labs`; }, []);

  return (
    <ArticleLayout {...article}>
      <p>幣安 Binance 是全球交易量最大的加密貨幣交易所，幾乎每一位進入幣圈的投資者，最後都會在幣安擁有一個帳戶。不論是流動性、幣種豐富程度，還是平台穩定性，幣安都長期維持業界領先地位。</p>
      <p>除了現貨買賣，幣安也提供合約交易、理財產品、Launchpad 新幣認購與多種量化工具。無論是剛踏入幣圈的新手，或想進一步操作加密貨幣投資的用戶，幣安都是重要的核心平台。</p>
      <p>本文會帶你完成帳號建立、KYC 身份驗證、2FA 安全設定，以及從台灣交易所將 USDT 轉入幣安的入金流程。</p>

      <div className="note">
        <p>立即免費開戶幣安</p>
        <p>專屬註冊連結：<a href="https://www.binance.com/register?ref=CARRYLABS" target="_blank" rel="noreferrer">https://www.binance.com/register?ref=CARRYLABS</a></p>
        <p>App 註冊邀請碼：CARRYLABS</p>
      </div>

      <h2 id={slug('開戶前準備')}>開戶前準備</h2>
      <ul>
        <li>幣安 APP：至 App Store 或 Google Play 免費下載安裝</li>
        <li>Google Authenticator：設定 2FA 雙重驗證時使用</li>
        <li>Email 信箱：建立帳號與接收驗證碼用</li>
        <li>手機：部分驗證步驟需輸入簡訊驗證碼</li>
        <li>身分證：KYC 驗證時需要拍攝正反面</li>
      </ul>

      <h3>幣安開戶步驟概覽</h3>
      <ol>
        <li>在幣安官網註冊帳號</li>
        <li>完成 Email 驗證與密碼設定</li>
        <li>下載幣安 APP 並登入</li>
        <li>進行 KYC 身份驗證</li>
        <li>設定 2FA 雙重驗證</li>
        <li>透過 HOYA BIT 入金後開始交易</li>
      </ol>

      <h2 id={slug('幣安開戶教學')}>幣安開戶教學</h2>
      <h3>Step 1：建立帳號</h3>
      <p>以手機瀏覽器開啟幣安官網。你可以使用 Google 帳號快速建立帳戶，或以常用 Email 註冊。</p>
      <Images name="signup" alt="幣安建立帳號" />
      <Images name="signupDetails" alt="幣安填寫推薦碼" />

      <h3>Step 2：Email 信箱驗證</h3>
      <p>幣安會寄送驗證碼到你的信箱，請回到頁面填入。若收件匣沒有驗證信，請檢查垃圾郵件與所有郵件資料夾，或點選重新發送。</p>
      <Images name="email" alt="幣安 Email 驗證" />

      <h3>Step 3：設定密碼</h3>
      <p>密碼至少需包含一個大寫英文字母、一個數字，且長度至少 8 個字元。設定完成後點選下一步。</p>
      <Images name="password" alt="幣安設定密碼" />

      <h3>Step 4：下載並開啟幣安 APP</h3>
      <p>在 App Store 或 Google Play 搜尋「Binance」。開啟 APP 後請選擇登入，使用剛才建立的 Email 與密碼進入帳戶。</p>
      <Images name="app" alt="下載幣安 APP" />

      <h2 id={slug('KYC 身份驗證教學')}>KYC 身份驗證教學</h2>
      <p>KYC（Know Your Customer）是金融機構確認使用者身份的標準程序。通過後才能解鎖更高提幣額度與完整交易功能。</p>

      <h3>Step 1：進入驗證流程</h3>
      <p>從帳戶選單前往「帳戶」→「身分證明」→「通過驗證」，或直接點擊首頁的驗證提示。居住地與證件核發地區請選 Taiwan（台灣）。</p>
      <Images name="kycStart" alt="幣安 KYC 驗證入口" />

      <h3>Step 2：拍攝身分證正反面</h3>
      <p>依畫面指示先拍正面再拍反面。請保持光線充足，避免反光、模糊或遮擋。</p>
      <Images name="kycId" alt="幣安拍攝身分證" />

      <h3>Step 3：完成人臉辨識</h3>
      <p>系統會開啟手機前鏡頭，請依照指示完成真人辨識。</p>
      <Images name="kycFace" alt="幣安人臉辨識" />

      <h3>Step 4：確認資料並等待審核</h3>
      <p>仔細核對姓名、出生日期等資料，確認無誤後送出。幣安通常會在短時間內完成審核。</p>
      <Images name="kycInfo" alt="幣安確認 KYC 資料" />

      <h2 id={slug('設定 2FA 雙重驗證')}>設定 2FA 雙重驗證</h2>
      <p>2FA 能在密碼之外多加一道保護。驗證器會每 30 秒產生一組新的動態碼，即使密碼外洩，攻擊者也無法只靠密碼登入。</p>

      <h3>Step 1：進入安全設定</h3>
      <p>從帳戶選單進入「帳戶」→「安全性」，找到「驗證器 App（Authenticator App）」並點選啟用。</p>
      <Images name="security" alt="幣安安全性設定" />

      <h3>Step 2：驗證身份</h3>
      <p>幣安會向帳戶 Email 發送驗證碼，請回到頁面填入後繼續。</p>
      <Images name="email2fa" alt="幣安 2FA Email 驗證" />

      <h3>Step 3：保存 QR Code 與備用金鑰</h3>
      <p>頁面會顯示專屬 QR Code 與備用金鑰。請先妥善保存金鑰，再前往應用商店下載 Google Authenticator。</p>
      <Images name="qr" alt="幣安驗證器 QR Code 與備用金鑰" />

      <h3>Step 4：綁定 Google Authenticator</h3>
      <p>在 Google Authenticator 點選「+」，選擇輸入設定金鑰或掃描 QR Code。輸入帳戶名稱與金鑰後即可完成連接。</p>
      <Images name="authApp" alt="Google Authenticator 綁定幣安" />

      <h3>Step 5：填入動態驗證碼</h3>
      <p>回到幣安填入 Google Authenticator 顯示的 6 位數驗證碼。驗證碼每 30 秒更新一次，若已過期請使用最新一組。</p>
      <Images name="authDone" alt="完成幣安 2FA 設定" />

      <h2 id={slug('HOYA BIT 入金教學')}>HOYA BIT 入金教學</h2>
      <p>幣安無法直接用台幣入金。雖然也支援信用卡購幣，但匯率損失與手續費通常較高。常見做法是先在 HOYA BIT 用台幣購買 USDT，再轉入幣安。</p>
      <div className="note">
        <p>延伸閱讀：<a href="/hoya-bit">HOYA BIT 台灣交易所開戶教學</a></p>
        <p>註冊連結：<a href="https://hoyabit.com/signup?refCode=CwS4bxVU" target="_blank" rel="noreferrer">https://hoyabit.com/signup?refCode=CwS4bxVU</a></p>
        <p>邀請碼：CwS4bxVU</p>
      </div>

      <h3>Step 1：在 HOYA BIT 入金並購買 USDT</h3>
      <p>以綁定的銀行帳戶轉帳至專屬信託帳戶，台幣到帳後輸入要購買 USDT 的金額。</p>
      <Images name="hoyaDeposit" alt="HOYA BIT 台幣入金" />
      <Images name="hoyaBuy" alt="HOYA BIT 購買 USDT" />

      <h3>Step 2：準備從 HOYA BIT 提幣</h3>
      <p>在 HOYA BIT 選擇提幣與 USDT，再選擇主網。提領端與充值端必須選擇完全相同的網路。</p>
      <Images name="hoyaNetwork" alt="HOYA BIT 選擇 USDT 主網" />

      <h3>Step 3：在幣安取得入金地址</h3>
      <p>進入幣安後選擇「添加資金」→「鏈上儲值」→「USDT」，再選擇網路。優先可選 BNB Smart Chain（BEP20／BSC），或使用通用性高的 TRC20。</p>
      <Images name="binanceDeposit" alt="幣安 USDT 鏈上儲值" />
      <Images name="binanceAddress" alt="幣安 USDT 入金地址" />

      <h3>Step 4：從 HOYA BIT 發送 USDT</h3>
      <p>將幣安地址貼入 HOYA BIT 的接收地址欄位，平台名稱填寫幣安，輸入提領數量後完成手機與 Google 驗證器驗證。</p>
      <Images name="hoyaSend" alt="HOYA BIT 提領 USDT 至幣安" />
      <div className="note"><p><strong>重要：</strong>HOYA BIT 與幣安選擇的網路必須完全一致，不同網路轉帳可能導致資金損失。鏈上確認通常需要 5 至 15 分鐘。</p></div>

      <h2 id={slug('延伸閱讀')}>延伸閱讀</h2>
      <ul>
        <li><a href="/hoya-bit">HOYA BIT 開戶教學｜台灣交易所 + 台幣入金完整流程</a></li>
        <li><a href="/bingx">BingX 開戶教學｜完整圖解步驟</a></li>
        <li><a href="/mexc">MEXC 開戶教學</a></li>
      </ul>
    </ArticleLayout>
  );
}
