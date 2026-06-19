import React, { useEffect } from "react";
import ArticleLayout from "../components/ArticleLayout.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import { slug } from "../utils/slug.js";

const article = {
  title: "【2026】Bitget 開戶教學｜完整圖解 + KYC 身份驗證流程",
  pageTitle: "Bitget 開戶教學",
  updatedAt: "最後更新：2026 年 6 月",
  coverImage: "/covers/bitget.png",
  imageBasePath: "/bitget/new",
  meta: { unit: "UNIT 8", category: "交易所開戶", readingTime: "12 分鐘閱讀" },
  tocItems: [
    "開戶前需要準備什麼？",
    "Bitget 開戶教學：建立帳號",
    "Step 4：KYC 身份驗證教學（圖解流程）",
    "Step 5：設定 2FA 雙重驗證",
    "Step 6：HOYA BIT 入金教學",
    "延伸閱讀",
  ],
  images: {
    group01: ["100"],
    group02: ["200", "300"],
    group03: ["400", "500", "600"],
    group04: ["700", "800", "900"],
    group05: ["1000", "1100"],
    group06: ["1200", "1300"],
    group07: ["1400"],
    group08: ["1500"],
    group09: ["1600", "1700", "1800"],
    group10: ["1900", "2000", "2100"],
    group11: ["2200", "2300"],
    group12: ["2400"],
    group13: ["2500", "2600", "2700"],
    group14: ["2800"],
    group15: ["2900", "3000", "3100"],
    group16: ["3200", "3300"],
    group17: ["3400", "3500", "3600"],
    group18: ["3700"],
    group19: ["3800", "3900", "4000"],
    group20: ["4100", "4200", "4300"],
    group21: ["4400"],
    group22: ["4500", "4600", "4700"],
  },
};

function Images({ name }) {
  return (
    <ImageGallery
      images={article.images[name]}
      basePath={article.imageBasePath}
      alt={article.pageTitle}
    />
  );
}

export default function BitgetPage() {
  useEffect(() => {
    document.title = `${article.pageTitle}｜Carry Labs`;
  }, []);

  return (
    <ArticleLayout {...article}>
      <p>
        Bitget 是一家成立於 2018 年、總部位於新加坡的加密貨幣交易所，目前已躋身全球交易量前三大，擁有超過
        800 萬名活躍用戶，平台上架超過 550 種幣種，選擇相當豐富。
      </p>
      <p>
        對於想要多元配置資產、嘗試不同交易所的投資人來說，Bitget
        是個值得考慮的選項。這篇文章將帶你完成完整的開戶流程，讓你輕鬆踏出加密貨幣投資的第一步！
      </p>
      <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠</p>
      <p>
        註冊連結：
        <a href="https://partner.bitget.com/bg/9ggpr5mp" target="_blank" rel="noreferrer">
          https://partner.bitget.com/bg/9ggpr5mp
        </a>
      </p>
      <p>如果是透過 App 註冊，請輸入邀請碼：CARRYLABS</p>

      <h2 id={slug("開戶前需要準備什麼？")}>開戶前需要準備什麼？</h2>
      <p>開戶前，請先準備好以下東西：</p>
      <p>- Bitget APP：至 App Store 或 Google Play 免費下載安裝</p>
      <p>
        - Google Authenticator：設定 2FA 雙重驗證時使用，至 App Store 或 Google Play 免費下載安裝
      </p>
      <p>- Email 信箱：建立帳號與接收驗證碼用，建議選常用信箱</p>
      <p>- 手機：部分驗證步驟需輸入簡訊驗證碼</p>
      <p>- 身分證或護照正本：KYC 身份驗證拍照用</p>
      <h3>Bitget 開戶流程總覽</h3>
      <p>Step 1：在 Bitget 官網註冊一個帳號</p>
      <p>Step 2：在瀏覽器完成 email 驗證</p>
      <p>Step 3：下載並開啟 Bitget APP，用剛建立的帳號登入</p>
      <p>Step 4：進行 KYC 身份驗證（上傳身分證 + 自拍人臉）</p>
      <p>Step 5：設定 2FA 雙重驗證（需搭配 Google Authenticator）</p>
      <p>Step 6：開戶完成，接著透過 HOYA BIT 入金，即可開始交易</p>

      <h2 id={slug("Bitget 開戶教學：建立帳號")}>Bitget 開戶教學：建立帳號</h2>
      <p>Bitget 的帳號建立流程相當快速，和一般網站的會員註冊差不多，大約 1 分鐘就能完成。</p>
      <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠</p>
      <p>
        註冊連結：
        <a href="https://partner.bitget.com/bg/9ggpr5mp" target="_blank" rel="noreferrer">
          https://partner.bitget.com/bg/9ggpr5mp
        </a>
      </p>
      <p>如果是透過 App 註冊，請輸入邀請碼：CARRYLABS</p>
      <h3>Step 1：填寫帳號資料</h3>
      <p>建立帳號有兩種方式：</p>
      <p>如果選擇 Email 信箱註冊，填入你的常用 Email，設定登入密碼。密碼格式必須符合以下規範：</p>
      <p>- 至少包含一個大寫英文字母</p>
      <p>- 至少包含一個數字</p>
      <p>- 長度至少 8 個字元以上</p>
      <p>- 至少包含一個特殊符號</p>

      <Images name="group01" />

      <p>如果你有 Google 帳號，推薦直接點選「使用 Google 登入」快速建立，未來登入時直接透過 Google 即可，不需要另外記憶密碼。</p>
      <p>接下來，設定您習慣使用的密碼即可。</p>
      <p>勾選條款同意後，點擊「創建帳戶」。</p>
      <h3>Step 2：收取 email 驗證碼</h3>
      <p>到你填寫的 email 信箱收取 6 位數驗證碼，回到網站填入後點擊「註冊新用戶」。</p>
      <p>
        💡 小提醒：有時候驗證信可能會被歸類到「垃圾郵件」或「所有郵件」資料夾，在收件匣找不到時可以到這兩個地方確認，或點選「重新發送驗證信」再試一次。
      </p>
      <p>這樣帳號就建立完成了！</p>

      <Images name="group02" />

      <h3>Step 3：下載並開啟 Bitget APP，用剛建立的帳號登入</h3>
      <p>接著，請下載 Bitget APP，後續的 KYC 身份驗證與安全設定在 APP 上操作會更直覺方便。</p>
      <p>‧ iOS 下載：App Store 搜尋「Bitget」</p>
      <p>‧ Android 下載：Google Play 搜尋「Bitget」</p>
      <p>
        下載並開啟 APP 後，選擇「登入」，輸入你剛才建立的 email
        帳號與密碼登入。請注意是點「登入」而非「註冊」，因為帳號已經在網頁版建立好了。
      </p>

      <Images name="group03" />

      <p>此處登入時，一樣會需要進行 Gmail 或手機號碼的驗證</p>

      <Images name="group04" />

      <h2 id={slug("Step 4：KYC 身份驗證教學（圖解流程）")}>Step 4：KYC 身份驗證教學（圖解流程）</h2>
      <p>準備好手機和身分證，開始進行 KYC 身份驗證。</p>
      <h3>Step 1：進入驗證流程</h3>
      <p>帳號建立完成後，系統會引導你進行身份驗證。點選「前往認證」→「立即認證」。</p>

      <Images name="group05" />

      <h3>Step 2：確認居住地與選擇證件類型</h3>
      <p>確認居住國家與證件發行國是否正確，然後選擇「身分證」或「駕照」作為驗證文件，按照畫面指示分別拍攝證件的正面，確保畫面清晰無遮擋。</p>

      <Images name="group06" />

      <h3>Step 3：人臉辨識自拍</h3>
      <p>拍完身分證後，按照指示進行人臉辨識。系統會要求你緩慢轉動頭部一圈，確認是本人操作，請照著指示完成。</p>

      <Images name="group07" />

      <h3>Step 4：等待審核</h3>
      <p>完成拍照後，系統會進入審核流程。出現審核提示畫面即表示資料已成功送出，審核速度通常很快，多數情況下幾分鐘內就會通過。</p>

      <Images name="group08" />

      <h2 id={slug("Step 5：設定 2FA 雙重驗證")}>Step 5：設定 2FA 雙重驗證</h2>
      <p>
        設定 2FA
        雙重驗證（Two-Factor Authentication）可以在密碼之外，額外新增一道動態驗證碼保護你的帳號。即使密碼外洩，沒有驗證碼也無法登入，大幅提升帳號安全性。
      </p>
      <p>我們統一推薦使用 Google Authenticator 作為 2FA 驗證工具。</p>
      <h3>Step 1：進入安全中心</h3>
      <p>在網站上找到帳號安全相關設定，進入「安全中心」，並在安全中心頁面找到「Google Authenticator」項目，點擊「設置」。</p>

      <Images name="group09" />

      <p>此處會需要一些帳號驗證，完成驗證後，我們繼續點擊 Bind now（立即綁定）-&gt; 下一步</p>

      <Images name="group10" />

      <p>最後，請複製這裡的金鑰，然後再點擊「下一步」</p>

      <Images name="group11" />

      <h3>Step 3：綁定驗證器 APP</h3>

      <Images name="group12" />

      <p>請在手機安裝 Google Authenticator 驗證器 APP：</p>
      <p>‧ iOS / Android：Google Authenticator</p>
      <p>下載後開啟 App，使用你的 Google 帳號登入。</p>

      <Images name="group13" />

      <p>
        頁面上會出現一組 QR Code 以及手動輸入用的金鑰。在 Google Authenticator
        中，點選右下角「+」→「輸入設定金鑰」，然後貼上剛才在 Bitget 上複製的金鑰，即可完成綁定
      </p>
      <p>綁定後，驗證器 APP 會開始每 30 秒生成一組 6 位數動態碼。將這組驗證碼填入 Bitget 確認，2FA 設定即完成。</p>

      <Images name="group14" />

      <p>恭喜完成！之後每次登入 Bitget 時，都需要輸入驗證器生成的動態碼，帳號安全性大幅提升。開戶全部完成後，就可以下載 Bitget APP、開始出入金與交易了！</p>

      <h2 id={slug("Step 6：HOYA BIT 入金教學")}>Step 6：HOYA BIT 入金教學</h2>
      <p>為什麼需要透過 HOYA BIT 入金？</p>
      <p>
        Bitget 等國際交易所無法直接用台幣入金。雖然 Bitget 也支援信用卡直接購幣，但手續費偏高，非常不推薦使用。幣圈最常見、最划算的做法是：先在 HOYA BIT 台幣交易所以台幣購買
        USDT，再透過鏈上轉幣充值到 Bitget。
      </p>
      <p>為什麼每個人都應該擁有一間台幣交易所帳戶？</p>
      <p>
        不管是要入金到 Bitget
        進行交易，還是未來想把加密貨幣獲利換回台幣存回銀行，這些流程都必須透過台幣交易所才能完成。因此，在初期就開立一間台幣交易所帳戶，是最基本也最建議的做法。
      </p>
      <p>▶ 延伸閱讀：HOYA BIT 台灣交易所開戶教學（開戶 + 台幣入金完整流程）</p>
      <p>
        <a href="https://hoyabit.com/signup?refCode=CwS4bxVU" target="_blank" rel="noreferrer">
          https://hoyabit.com/signup?refCode=CwS4bxVU
        </a>
      </p>
      <p>邀請碼：CwS4bxVU</p>
      <p>新用戶優惠：完成 KYC 並購買 3,000 台幣等值加密貨幣，即可獲得 6 USDT</p>
      <h3>Step1：HOYA BIT 入金</h3>
      <p>1. 在 HOYA BIT 以入金台幣，以先前綁定的銀行帳戶，轉帳至「專屬信託帳戶」</p>

      <Images name="group15" />

      <p>2. 在台幣入金後，請輸入你想用多少台幣來購買 USDT</p>

      <Images name="group16" />

      <h3>Step2：HOYA BIT 準備提幣</h3>
      <p>回到 HOYA BIT APP，點選右下角進入首頁，點選「提幣」，選擇「USDT」，並開始選擇主網</p>

      <Images name="group17" />

      <p>
        此時注意，選擇哪一個主網，需要依我們要「提領到哪個交易所」而定，「提領」與「充值」必須同主網，比如我們剛才選擇的
        BSC。
      </p>
      <p>另外，單就手續費而言，BSC ≒ AVAX-C &lt; TRC20，其中 TRC20 通用性最廣，但手續費相對高一點點。</p>

      <Images name="group18" />

      <h3>Step 3：在 Bitget 取得入金地址</h3>
      <p>進入  Bitget  點擊右下角的「資產」，選擇「充值」→ 點擊「充值加密貨幣」。</p>

      <Images name="group19" />

      <p>選擇幣種（如 USDT）後，接著選擇網路，請依以下優先順序選擇：</p>
      <p>‧ 優先選擇 BNB Smart Chain（BEP20 或稱 BSC），手續費最低</p>
      <p>‧ 次選 TRC20（TRON），此為最通用的鏈，幾乎所有交易所都支援，手續費也低</p>
      <p>⚠️ 請記下你選擇的網路，之後在 HOYA BIT 提幣時，必須選擇完全相同的網路，否則資金將無法找回！</p>
      <p>接下來，複製 Bitget 提供的充幣地址（一長串英數字組合）。</p>

      <Images name="group20" />

      <h3>Step 4：前往 HOYA BIT 發送 USDT</h3>
      <p>
        將從 Bitget
        複製的地址貼入「接收地址」欄位，最後點選「儲存並下一步」。此處的接收者名稱可自行填入，例如：小明；而接收錢包／平台名稱，可填入交易所名稱，比如
        Bitget 。
      </p>

      <Images name="group21" />

      <p>輸入要提領的 USDT 數量，確認後點「確認」完成，填入手機驗證碼、Google 驗證器提供的即時驗證碼，即可完成 Bitget 入金。</p>

      <Images name="group22" />

      <p>⚠️ 重要：HOYA BIT 和 Bitget 選擇的網路必須完全一致，不同網路轉帳可能導致資金損失。</p>
      <p>等待鏈上確認（通常 5–15 分鐘），到帳後即可開始交易。</p>

      <h2 id={slug("延伸閱讀")}>延伸閱讀</h2>
      <p>‧ HOYA BIT 開戶教學｜台灣交易所 + 台幣入金完整流程</p>
      <p>‧ 幣安 Binance 開戶教學</p>
      <p>‧ OKX 開戶教學</p>
      <p>‧ Bybit 開戶教學</p>
      <p>‧ 派網 Pionex 開戶教學</p>
      <p>‧ MEXC 開戶教學</p>
      <p>‧ 加密貨幣交易所完整比較推薦</p>
      <p>【各文章連結請填入】</p>
    </ArticleLayout>
  );
}
