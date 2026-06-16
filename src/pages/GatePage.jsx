import React, { useEffect } from "react";
import ArticleLayout from "../components/ArticleLayout.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import { slug } from "../utils/slug.js";

const article = {
  title: "【2026】Gate 開戶教學｜完整圖解 + KYC 身份驗證流程",
  pageTitle: "Gate 開戶教學",
  updatedAt: "最後更新：2026 年 6 月",
  coverImage: "/covers/gate.png",
  imageBasePath: "/gate/new1",
  meta: { unit: "UNIT 6", category: "交易所開戶", readingTime: "12 分鐘閱讀" },
  tocItems: [
    "開戶前需要準備什麼？",
    "【Gate 開戶流程總覽】",
    "Gate 開戶教學：建立帳號",
    "Step 2：下載並開啟 Gate APP，用剛建立的帳號登入",
    "Step 3：KYC 身份驗證教學",
    "Step 4：設定 2FA 雙重驗證",
    "Step 5：HOYA BIT 入金教學",
    "延伸閱讀",
  ],
  images: {
    image01: ["100", "200", "300"],
    image02: ["400", "500"],
    image03: ["600"],
    image04: ["700", "800"],
    image05: ["900", "1000", "1100"],
    image06: ["1200"],
    image07: ["1300"],
    image08: ["1400", "1500", "1600"],
    image09: ["1700"],
    image10: ["1800"],
    image11: ["1900", "2000", "2100"],
    image12: ["2200", "2300"],
    image13: ["2400"],
    image14: ["2500", "2600", "2700"],
    image15: ["2800"],
    image16: ["2900", "3000", "3100"],
    image17: ["3200", "3300"],
    image18: ["3400", "3500", "3600"],
    image19: ["3700"],
    image20: ["3800", "3900", "4000"],
    image21: ["4100", "4200"],
    image22: ["4300"],
    image23: ["4400", "4500", "4600"],
  },
};

function Images({ name, alt }) {
  return (
    <ImageGallery
      images={article.images[name]}
      basePath={article.imageBasePath}
      alt={alt}
    />
  );
}

export default function GatePage() {
  useEffect(() => {
    document.title = `${article.pageTitle}｜Carry Labs`;
  }, []);

  return (
    <ArticleLayout {...article}>
      <p>
        Gate 是一家成立於 2013
        年的老牌加密貨幣交易所，擁有超過十年的營運歷史，是目前市場上上架幣種最多的交易所之一，支援超過
        1,700 種加密資產的交易。
      </p>
      <p>
        對於喜歡在主流交易所上線之前提早布局新幣的投資者，Gate
        以早期幣種上線速度快、項目種類多元著稱，吸引大量尋求更多交易機會的用戶。
      </p>
      <p>
        此外，Gate
        也提供現貨、合約、理財、借貸等多元功能，是一個功能完整的綜合性交易平台。
      </p>
      <p>透過 Carry Labs 的 Gate 專屬連結開戶，可以享有手續費折扣優惠！</p>
      <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠</p>
      <p>
        註冊連結：
        <a
          href="https://www.gate.com/share/CARRYLAB"
          target="_blank"
          rel="noreferrer"
        >
          https://www.gate.com/share/CARRYLAB
        </a>
      </p>
      <p>如果是透過 App 註冊，請輸入邀請碼：CARRYLAB</p>
      <h2 id={slug("開戶前需要準備什麼？")}>開戶前需要準備什麼？</h2>
      <p>開戶前，請先準備好以下東西：</p>
      <p>- Gate APP：至 App Store 或 Google Play 免費下載安裝</p>
      <p>
        - Google Authenticator：設定 2FA 雙重驗證時使用，至 App Store 或 Google
        Play 免費下載安裝
      </p>
      <p>- Email 信箱：建立帳號與接收驗證碼用，建議選常用信箱</p>
      <p>- 手機：部分驗證步驟需輸入簡訊驗證碼</p>
      <p>- 身分證或護照正本：KYC 身份驗證拍照用</p>
      <h2 id={slug("【Gate 開戶流程總覽】")}>【Gate 開戶流程總覽】</h2>
      <p>Step 1：在 Gate 官網註冊一個帳號</p>
      <p>Step 2：在瀏覽器完成 email 驗證</p>
      <p>Step 3：下載並開啟 Gate APP，用剛建立的帳號登入</p>
      <p>Step 4：進行 KYC 身份驗證（上傳身分證 + 自拍人臉）</p>
      <p>Step 5：設定 2FA 雙重驗證（需搭配 Google Authenticator）</p>
      <p>Step 6：開戶完成，接著透過 HOYA BIT 入金，即可開始交易</p>
      <h2 id={slug("Gate 開戶教學：建立帳號")}>Gate 開戶教學：建立帳號</h2>
      <h3>Step 1：填寫帳號資料</h3>
      <p>
        點擊 Carry Labs 的 Gate 專屬連結，用手機瀏覽器開啟 Gate
        官網，點選「註冊」，選擇以下任一方式建立帳號：
      </p>
      <p>
        如果你有 Google 帳號，推薦點選下方欄位使用 Google 登入，以現有 Google
        帳號一鍵授權建立帳號，無需另外填寫 email
        與密碼，流程最快速。完成後記得在推薦碼（邀請碼）欄位輸入 Carry Labs
        的推薦碼：CARRYLAB。
      </p>
      <p>
        系統會傳送一封含有驗證碼的信件到你填寫的
        email，請前往信箱取得驗證碼，在規定時間內填入完成帳號確認。若收不到，請確認垃圾信件夾或點選重新發送。
      </p>
      <Images name="image01" alt={article.pageTitle} />
      <p>
        如果選擇 Email 信箱註冊，填入常用
        email，設定登入密碼，並在推薦碼（邀請碼）欄位輸入 Carry Labs
        的推薦碼：CARRYLAB。密碼格式必須符合以下規範：
      </p>
      <p>- 至少包含一個大寫英文字母</p>
      <p>- 至少包含一個數字</p>
      <p>- 長度至少 8 個字元以上</p>
      <Images name="image02" alt={article.pageTitle} />
      <p>確認填寫無誤後，勾選服務條款，點選「建立帳號」。</p>
      <Images name="image03" alt={article.pageTitle} />
      <h2 id={slug("Step 2：下載並開啟 Gate APP，用剛建立的帳號登入")}>
        Step 2：下載並開啟 Gate APP，用剛建立的帳號登入
      </h2>
      <p>
        接著，請下載 Gate APP，後續的 KYC 身份驗證與安全設定在 APP
        上操作會更直覺方便。
      </p>
      <p>‧ iOS 下載：App Store 搜尋「Gate」</p>
      <p>‧ Android 下載：Google Play 搜尋「Gate」</p>
      <Images name="image04" alt={article.pageTitle} />
      <p>
        下載並開啟 APP 後，選擇「登入」，輸入你剛才建立的 email
        帳號與密碼登入。請注意是點「登入」而非「註冊」，因為帳號已經在網頁版建立好了。
      </p>
      <Images name="image05" alt={article.pageTitle} />
      <h2 id={slug("Step 3：KYC 身份驗證教學")}>Step 3：KYC 身份驗證教學</h2>
      <p>完成帳號建立後，進行 KYC 身份驗證以解鎖完整功能與提領額度。</p>
      <h3>Step 1：進入驗證流程</h3>
      <p>
        在 Gate APP
        或網頁版中，找到左上角個人中心或直接在首頁，點選「立即認證」。
      </p>
      <Images name="image06" alt={article.pageTitle} />
      <h3>Step 2：選擇居住地與證件類型</h3>
      <p>
        確認居住地為「台灣」（或你所在的國家地區），選擇使用「身分證」進行驗證，點選繼續。
      </p>
      <Images name="image07" alt={article.pageTitle} />
      <h3>Step 3：上傳身分證照片</h3>
      <p>
        按照畫面指示，依序拍攝並上傳身分證正面與背面照片，確保照片清晰、四邊完整、沒有反光或遮擋。上傳完身份証後，會需要確認個人基礎訊息無誤，確認後即可進行點擊「下一步」。
      </p>
      <Images name="image08" alt={article.pageTitle} />
      <h3>Step 4：人臉辨識</h3>
      <p>
        上傳證件後進行人臉辨識，按照畫面指示面向前鏡頭，完成自拍辨識動作。如有眼鏡請先摘下。
      </p>
      <Images name="image09" alt={article.pageTitle} />
      <h3>Step 5：等待審核</h3>
      <p>
        資料送出後進入審核。Gate 的 KYC
        審核速度通常較快，多數情況下幾分鐘至幾小時內即可完成，通過後會收到 email
        通知。
      </p>
      <Images name="image10" alt={article.pageTitle} />
      <h2 id={slug("Step 4：設定 2FA 雙重驗證")}>Step 4：設定 2FA 雙重驗證</h2>
      <p>
        強烈建議在 KYC 等待期間完成 2FA 雙重驗證設定，讓帳號安全多一層保護。
      </p>
      <p>
        在 Gate APP 或網頁版中，找到個人設定，前往安全設定，找到「驗證器
        App」，點選「我已下載」。
      </p>
      <Images name="image11" alt={article.pageTitle} />
      <h3>Step 1：完成驗證</h3>
      <p>此處先發送信箱驗證，然後複製本處的金鑰。</p>
      <Images name="image12" alt={article.pageTitle} />
      <h3>Step 2：綁定 Google Authenticator</h3>
      <p>接著安裝 Google Authenticator：</p>
      <p>
        ‧ iOS / Android：App Store 或 Google Play 搜尋「Google
        Authenticator」，下載並安裝
      </p>
      <p>下載後開啟 App，使用你的 Google 帳號登入。</p>
      <Images name="image13" alt={article.pageTitle} />
      <p>
        在 Google Authenticator 中，點選右下角「+」→「掃描 QR
        Code」，對準畫面上的 QR Code
        完成掃描；若無法掃描，可選「手動輸入金鑰」，複製頁面上顯示的金鑰後貼上完成綁定。
      </p>
      <Images name="image14" alt={article.pageTitle} />
      <h3>Step 3：填入驗證碼完成設定</h3>
      <p>
        Google Authenticator 綁定後會生成 6 位數動態碼，動態碼每 30
        秒更新一次，請在 30 秒內將目前顯示的驗證碼填入 Gate 的確認欄位，完成 2FA
        綁定設定。
      </p>
      <Images name="image15" alt={article.pageTitle} />
      <h2 id={slug("Step 5：HOYA BIT 入金教學")}>Step 5：HOYA BIT 入金教學</h2>
      <p>為何需要台幣交易所？</p>
      <p>
        Gate 等國際交易所無法直接用台幣入金。雖然 Gate
        也支援信用卡直接購幣，但手續費偏高，非常不推薦使用。幣圈最常見、最划算的做法是：先在
        HOYA BIT 台幣交易所以台幣購買 USDT，再透過鏈上轉幣充值到 Gate。
      </p>
      <p>為什麼每個人都應該擁有一間台幣交易所帳戶？</p>
      <p>
        不管是要入金到 Gate
        進行交易，還是未來想把加密貨幣獲利換回台幣存回銀行，這些流程都必須透過台幣交易所才能完成。因此，在初期就開立一間台幣交易所帳戶，是最基本也最建議的做法。
      </p>
      <p>▶ 延伸閱讀：HOYA BIT 台灣交易所開戶教學（開戶 + 台幣入金完整流程）</p>
      <p>
        <a
          href="https://hoyabit.com/signup?refCode=CwS4bxVU"
          target="_blank"
          rel="noreferrer"
        >
          https://hoyabit.com/signup?refCode=CwS4bxVU
        </a>
      </p>
      <p>邀請碼：CwS4bxVU</p>
      <p>新用戶優惠：完成 KYC 並購買 3,000 台幣等值加密貨幣，即可獲得 6 USDT</p>
      <p>
        台灣用戶最常見且手續費最划算的入金方式，是先在 HOYA BIT 用台幣買入
        USDT，再轉入 Gate。
      </p>
      <h3>Step1：HOYA BIT 入金</h3>
      <p>
        1. 在 HOYA BIT 以入金台幣，以先前綁定的銀行帳戶，轉帳至「專屬信託帳戶」
      </p>
      <Images name="image16" alt={article.pageTitle} />
      <p>2. 在台幣入金後，請輸入你想用多少台幣來購買 USDT</p>
      <Images name="image17" alt={article.pageTitle} />
      <h3>Step2：HOYA BIT 準備提幣</h3>
      <p>
        回到 HOYA BIT
        APP，點選右下角進入首頁，點選「提幣」，選擇「USDT」，並開始選擇主網
      </p>
      <Images name="image18" alt={article.pageTitle} />
      <p>
        此時注意，選擇哪一個主網，需要依我們要「提領到哪個交易所」而定，「提領」與「充值」必須同主網，比如我們剛才選擇的
        BSC。
      </p>
      <p>
        另外，單就手續費而言，BSC ≒ AVAX-C &lt; TRC20，其中 TRC20
        通用性最廣，但手續費相對高一點點。
      </p>
      <Images name="image19" alt={article.pageTitle} />
      <h3>Step 3：在Gate取得入金地址</h3>
      <p>
        進入 Gate 點擊右下角的「資產」，選擇「鏈上儲值」→ 選擇「USDT」幣種。
      </p>
      <Images name="image20" alt={article.pageTitle} />
      <p>接著選擇網路，請依以下優先順序選擇：</p>
      <p>
        ‧ 優先選擇 BNB Smart Chain（BEP20 或稱 BSC）—
        Gate自家網路，手續費最低，優先推薦
      </p>
      <p>
        ‧ 次選 TRC20（TRON）— 最通用的網路，幾乎所有交易所都支援，手續費也低
      </p>
      <p>
        ⚠️ 請記下你選擇的網路，之後在 HOYA BIT
        提幣時，必須選擇完全相同的網路，否則資金將無法找回！
      </p>
      <p>接下來，複製Gate提供的充幣地址（一長串英數字組合）。</p>
      <Images name="image21" alt={article.pageTitle} />
      <h3>Step 4：前往 HOYA BIT 發送 USDT（完整 7 步驟）</h3>
      <p>
        將從Gate複製的地址貼入「接收地址」欄位，最後點選「儲存並下一步」。此處的接收者名稱可自行填入，例如：小明；而接收錢包／平台名稱，可填入交易所名稱，比如
        Gate。
      </p>
      <Images name="image22" alt={article.pageTitle} />
      <p>
        7. 輸入要提領的 USDT 數量，確認後點「確認」完成，填入手機驗證碼、Google
        驗證器提供的即時驗證碼，即可完成Gate入金。
      </p>
      <Images name="image23" alt={article.pageTitle} />
      <p>
        ⚠️ 重要：HOYA BIT
        和Gate選擇的網路必須完全一致，不同網路轉帳可能導致資金損失。
      </p>
      <p>等待鏈上確認（通常 5–15 分鐘），到帳後即可開始交易。</p>
      <h2 id={slug("延伸閱讀")}>延伸閱讀</h2>
      <p>‧ HOYA BIT 開戶教學｜台灣交易所 + 台幣入金完整流程</p>
      <p>‧ 幣安 Binance 開戶教學</p>
      <p>‧ OKX 開戶教學</p>
      <p>‧ Bybit 開戶教學</p>
      <p>‧ Bitget 開戶教學</p>
      <p>‧ 派網 Pionex 開戶教學</p>
      <p>‧ 加密貨幣交易所完整比較推薦</p>
    </ArticleLayout>
  );
}
