import React, { useEffect } from "react";
import ArticleLayout from "../components/ArticleLayout.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import { slug } from "../utils/slug.js";

const article = {
  title: "【2026年幣安開戶教學】Binance 註冊 + KYC 身份驗證完整圖解教學",
  pageTitle: "幣安 Binance 開戶教學",
  updatedAt: "最後更新：2026 年 6 月",
  coverImage: "/covers/binance.png",
  imageBasePath: "/binance/new01",
  meta: { unit: "UNIT 4", category: "交易所開戶", readingTime: "15 分鐘閱讀" },
  tocItems: [
    "開戶前準備",
    "幣安開戶教學",
    "Step 4：KYC 身份驗證教學",
    "Step 5：設定 2FA 雙重驗證",
    "Step 6：HOYA BIT 入金教學",
    "延伸閱讀",
  ],
  images: {
    group01: ["100"],
    group02: ["200", "250"],
    group03: ["300", "400", "500"],
    group04: ["550", "600", "700"],
    group05: ["800", "900"],
    group06: ["1100"],
    group07: ["1200", "1300"],
    group08: ["1400", "1500"],
    group09: ["1600", "1700", "1800"],
    group10: ["1900", "2000"],
    group11: ["2100"],
    group12: ["2150", "2200"],
    group13: ["2300", "2400"],
    group14: ["2500"],
    group15: ["2700"],
    group16: ["2900"],
    group17: ["3000", "3100"],
    group18: ["3200", "3300", "3400"],
    group19: ["3500", "3600", "3700"],
    group20: ["3800", "3900"],
    group21: ["4000", "4100", "4200"],
    group22: ["4300"],
    group23: ["4400", "4600", "4700"],
    group24: ["4800", "4900"],
    group25: ["5000"],
    group26: ["5100", "5200", "5300"],
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

export default function BinancePage() {
  useEffect(() => {
    document.title = `${article.pageTitle}｜Carry Labs`;
  }, []);

  return (
    <ArticleLayout {...article}>
      <p>
        幣安 Binance
        是全球交易量最大的加密貨幣交易所，幾乎每一位進入幣圈的投資者，最後都會在幣安擁有一個帳戶。不論是流動性、幣種豐富程度，還是平台穩定性，幣安都長期維持業界第一的地位。
      </p>
      <p>
        除了最基本的現貨買賣之外，幣安還提供合約交易、理財產品、Launchpad
        新幣認購以及多種量化工具。無論是剛踏入幣圈的新手，還是想要進一步操作加密貨幣投資的用戶，幣安都是一個不可缺少的核心平台。
      </p>
      <p>
        本文會帶你一步步完成幣安開戶，包含帳號建立、KYC 身份驗證、2FA
        安全設定，以及從台灣交易所將 USDT 轉入幣安的入金教學。
      </p>
      <p>立即免費開戶幣安</p>
      <p>
        專屬註冊連結：
        <a href="https://www.binance.com/register?ref=CARRYLABS">
          https://www.binance.com/register?ref=CARRYLABS
        </a>
      </p>
      <p>如果是透過 App 註冊，請輸入邀請碼：CARRYLABS</p>
      <h2 id={slug("開戶前準備")}>開戶前準備</h2>
      <p>開戶前，請先準備好以下東西：</p>
      <p>- 幣安 APP：至 App Store 或 Google Play 免費下載安裝</p>
      <p>
        - Google Authenticator：設定 2FA 雙重驗證時使用，至 App Store 或 Google
        Play 免費下載安裝
      </p>
      <p>- Email 信箱：建立帳號與接收驗證碼用，建議選常用信箱</p>
      <p>- 手機：部分驗證步驟需輸入簡訊驗證碼</p>
      <p>- 身分證：KYC 驗證時需要拍攝正反面</p>
      <p>幣安開戶步驟概覽：</p>
      <p>Step 1：在幣安官網註冊一個帳號</p>
      <p>Step 2：在瀏覽器完成 email 驗證</p>
      <p>Step 3：下載並開啟幣安 APP，用剛建立的帳號登入</p>
      <p>Step 4：進行 KYC 身份驗證（上傳身分證 + 自拍人臉）</p>
      <p>Step 5：設定 2FA 雙重驗證（需搭配 Google Authenticator）</p>
      <p>Step 6：開戶完成，接著透過 HOYA BIT 入金，即可開始交易</p>
      <h2 id={slug("幣安開戶教學")}>幣安開戶教學</h2>
      <p>首先，點擊下方連結進入幣安官方網站：</p>
      <p>
        註冊連結：
        <a href="https://www.binance.com/register?ref=CARRYLABS">
          https://www.binance.com/register?ref=CARRYLABS
        </a>
      </p>
      <p>如果是透過 App 註冊，請輸入邀請碼：CARRYLABS</p>
      <h3>Step 1：建立帳號（Email 或 Google 帳號）</h3>
      <p>用手機瀏覽器開啟幣安官網後，有兩種方式可以建立帳號：</p>
      <p>
        如果你有 Google 帳號，推薦直接點選「使用 Google
        登入」完成快速建立。好處是未來登入時直接透過 Google
        即可，不需要另外記憶密碼，方便又安全。
      </p>
      <p>
        如果沒有 Google 帳號，選擇以 Email 方式建立即可。填入你的常用
        Email，設定登入密碼。
      </p>

      <Images name="group01" />

      <h3>Step 2：Email 信箱驗證</h3>
      <p>
        幣安會寄一封驗證信到你的信箱，打開信件找到驗證碼，回到頁面填入，基本帳號就建立完成了。
      </p>
      <p>
        💡
        小提醒：有時候驗證信可能會被歸類到「垃圾郵件」或「所有郵件」資料夾，在收件匣找不到驗證信時，請到這兩個地方確認。若依然沒有收到，頁面上有「重新發送驗證信」按鈕，點選後再試一次即可。
      </p>

      <Images name="group02" />

      <h3>Step 3：設定密碼</h3>
      <p>密碼格式必須符合以下規範：</p>
      <p>- 至少包含一個大寫英文字母</p>
      <p>- 至少包含一個數字</p>
      <p>- 長度至少 8 個字元以上</p>
      <p>設定您習慣使用的密碼即可，完成後點「下一步」繼續。</p>

      <Images name="group03" />

      <h3>Step 4：下載並開啟幣安 APP，用剛建立的帳號登入</h3>
      <p>
        接著，請下載幣安 APP，後續的 KYC 身份驗證與安全設定在 APP
        上操作會更直覺方便。
      </p>
      <p>‧ iOS 下載：App Store 搜尋「Binance」</p>
      <p>‧ Android 下載：Google Play 搜尋「Binance」</p>
      <p>
        下載並開啟 APP 後，選擇「登入」，輸入你剛才建立的 email
        帳號與密碼登入。請注意是點「登入」而非「註冊」，因為帳號已經在網頁版建立好了。
      </p>

      <Images name="group04" />

      <Images name="group05" />

      <h2 id={slug("Step 4：KYC 身份驗證教學")}>Step 4：KYC 身份驗證教學</h2>
      <p>
        KYC（Know Your
        Customer，了解你的客戶）是金融機構用來確認使用者身份的標準程序。幣安 KYC
        通過後，才能解鎖更高的提幣額度與完整交易功能。
      </p>
      <p>
        如果前面的步驟一路操作，系統通常會自動引導到 KYC
        驗證頁面。如果沒有，可以從帳戶選單找到「帳戶」→「身分證明」→「通過驗證」，或是直接在首頁點擊「驗證」即可。
      </p>

      <Images name="group06" />

      <h3>Step 1：選擇居住地與證件類型</h3>
      <p>
        居住地與證件核發地區都選「Taiwan（台灣）」，系統通常會幫你預設好。接著選擇「身分證」作為驗證文件。
      </p>

      <Images name="group07" />

      <h3>Step 2：拍攝身分證正反面</h3>
      <p>
        依照畫面指示，先拍正面再拍反面。拍攝時注意光線充足，避免出現反光或模糊，這是最常造成
        KYC 退件的原因。
      </p>

      <Images name="group08" />

      <h3>Step 3：完成人臉辨識</h3>
      <p>系統會開啟手機前鏡頭，依照指示緩慢轉動臉部，完成真人辨識驗證。</p>

      <Images name="group09" />

      <h3>Step 4：確認個人資料</h3>
      <p>
        完成人臉辨識後，系統會自動帶入你的基本資訊（如姓名、出生日期等）。請仔細核對這些資料是否正確，確認無誤後點「下一步」送出審核。
      </p>

      <Images name="group10" />

      <h3>Step 6：等待審核</h3>
      <p>
        送出資料後系統顯示「審核中」，幣安審核速度很快，通常 15
        分鐘以內就會完成。
      </p>
      <p>KYC 審核通過後，帳戶功能就完整解鎖了！</p>

      <Images name="group11" />

      <h2 id={slug("Step 5：設定 2FA 雙重驗證")}>Step 5：設定 2FA 雙重驗證</h2>
      <p>【Q：為什麼加密貨幣帳戶一定要設定 2FA？】</p>
      <p>
        加密貨幣帳戶一旦被盜，資金幾乎無法追回。2FA
        雙重驗證可以在密碼之外多加一道保護，每隔 30
        秒自動更換一次的驗證碼，讓入侵者就算拿到你的密碼也無法順利登入。這是保護帳戶最基本、也最有效的方式。
      </p>
      <p>我們統一推薦使用 Google Authenticator 作為 2FA 驗證工具。</p>

      <Images name="group12" />

      <h3>Step 1：進入幣安 2FA 設定頁面</h3>
      <p>
        從幣安帳戶選單找到「帳戶」→「安全性」，找到「驗證器 App（Authenticator
        App）」項目，點選「啟用」。
      </p>

      <Images name="group13" />

      <h3>Step 2：Email 驗證身份</h3>
      <p>
        幣安為了確認是本人操作，會向你的帳戶 Email
        發送一封驗證信。請開啟信箱找到驗證碼，回到頁面填入後完成身份驗證，才能繼續下一步。
      </p>

      <Images name="group14" />

      <h3>Step 3：幣安顯示連接驗證器的 QR Code 與備用金鑰</h3>
      <p>
        完成驗證後，幣安頁面會顯示一組專屬的 QR
        Code，以及一串文字格式的「備用金鑰（Secret Key）」。
      </p>
      <p>複製金鑰之後，我們要到應用商店下載 Google 驗證器。</p>

      <Images name="group15" />

      <h3>Step 4：下載並安裝 Google Authenticator</h3>
      <p>在手機上下載 Google Authenticator：</p>
      <p>‧ iOS：App Store 搜尋「Google Authenticator」</p>
      <p>‧ Android：Google Play 搜尋「Google Authenticator」</p>
      <p>下載後開啟 App，使用你的 Google 帳號登入。</p>

      <Images name="group16" />

      <h3>Step 5：手動輸入金鑰完成綁定</h3>
      <p>
        在 Google Authenticator
        中，點選新增帳戶的「+」按鈕，選擇以下任一方式完成綁定：
      </p>
      <p>
        ‧ 方式一：選擇「輸入設定金鑰」，將剛才幣安頁面上複製的備用金鑰貼上來
      </p>
      <p>
        ‧ 方式二：選擇「掃描 QR Code」，將手機鏡頭對準幣安頁面上的 QR Code
        進行掃描
      </p>
      <p>掃描或輸入成功後，Google Authenticator 即完成與幣安帳戶的綁定。</p>

      <Images name="group17" />

      <h3>Step 6：填入驗證碼，確認綁定完成</h3>
      <p>
        綁定完成後，Google Authenticator 上會顯示一組 6
        位數的數字驗證碼，這組驗證碼每 30 秒自動更換一次。
      </p>
      <p>
        請記下當前畫面上的驗證碼，回到幣安頁面，在確認欄位填入這組數字，幣安確認後
        2FA 設定就全部完成了！
      </p>
      <p>
        💡 提醒：輸入時請注意時間，驗證碼須在 30
        秒內填入。若時間到了驗證碼已更新，填入新的一組即可。同時，再次確認備用金鑰已妥善保存，以防日後需要重新綁定。
      </p>

      <Images name="group18" />

      <p>恭喜！帳號建立、身份驗證、安全設定都已全部完成。</p>
      <h2 id={slug("Step 6：HOYA BIT 入金教學")}>Step 6：HOYA BIT 入金教學</h2>
      <p>為什麼需要透過 HOYA BIT 入金？</p>
      <p>
        幣安等國際交易所無法直接用台幣入金。雖然幣安也支援信用卡直接購幣，但這個方式的匯率損失與手續費非常高，非常不推薦使用。
      </p>
      <p>
        幣圈最常見、最划算的做法是：先在台灣的台幣交易所（HOYA BIT）用台幣購買
        USDT 穩定幣，再將 USDT 轉入幣安使用。
      </p>
      <p>為什麼每個人都應該擁有一間台幣交易所帳戶？</p>
      <p>
        不管是入金到幣安進行交易，還是未來在加密貨幣市場賺到錢、想把獲利換回台幣存回銀行，這些流程都必須透過台幣交易所才能完成。因此，在初期就開立一間台幣交易所帳戶，是最基本也最建議的做法。
      </p>
      <p>▶ 延伸閱讀：HOYA BIT 台灣交易所開戶教學（開戶 + 台幣入金完整流程）</p>
      <p>
        <a href="https://hoyabit.com/signup?refCode=CwS4bxVU">
          https://hoyabit.com/signup?refCode=CwS4bxVU
        </a>
      </p>
      <p>邀請碼：CwS4bxVU</p>
      <p>新用戶優惠：完成 KYC 並購買 3,000 台幣等值加密貨幣，即可獲得 6 USDT</p>
      <h3>Step1：HOYA BIT 入金</h3>
      <p>
        1. 在 HOYA BIT 以入金台幣，以先前綁定的銀行帳戶，轉帳至「專屬信託帳戶」
      </p>

      <Images name="group19" />

      <p>2. 在台幣入金後，請輸入你想用多少台幣來購買 USDT</p>

      <Images name="group20" />

      <h3>Step2：HOYA BIT 準備提幣</h3>
      <p>
        回到 HOYA BIT
        APP，點選右下角進入首頁，點選「提幣」，選擇「USDT」，並開始選擇主網
      </p>

      <Images name="group21" />

      <p>
        此時注意，選擇哪一個主網，需要依我們要「提領到哪個交易所」而定，「提領」與「充值」必須同主網，比如我們剛才選擇的
        BSC。
      </p>
      <p>
        另外，單就手續費而言，BSC ≒ AVAX-C &lt; TRC20，其中 TRC20
        通用性最廣，但手續費相對高一點點。
      </p>

      <Images name="group22" />

      <h3>Step 3：在幣安取得入金地址</h3>
      <p>進入幣安，選擇「添加資金」→「鏈上儲值」→ 選擇「USDT」幣種。</p>
      <p>接著選擇網路，請依以下優先順序選擇：</p>
      <p>
        ‧ 優先選擇 BNB Smart Chain（BEP20 或稱 BSC）—
        幣安自家網路，手續費最低，優先推薦
      </p>
      <p>
        ‧ 次選 TRC20（TRON）— 最通用的網路，幾乎所有交易所都支援，手續費也低
      </p>
      <p>
        ⚠️ 請記下你選擇的網路，之後在 HOYA BIT
        提幣時，必須選擇完全相同的網路，否則資金將無法找回！
      </p>
      <p>接下來，複製幣安提供的充幣地址（一長串英數字組合）。</p>

      <Images name="group23" />

      <Images name="group24" />

      <h3>Step 4：前往 HOYA BIT 發送 USDT（完整 7 步驟）</h3>
      <p>
        將從幣安複製的地址貼入「接收地址」欄位，最後點選「儲存並下一步」。此處的接收者名稱可自行填入，例如：小明；而接收錢包／平台名稱，可填入交易所名稱，比如
        幣安。
      </p>

      <Images name="group25" />

      <p>
        7. 輸入要提領的 USDT 數量，確認後點「確認」完成，填入手機驗證碼、Google
        驗證器提供的即時驗證碼，即可完成幣安入金。
      </p>

      <Images name="group26" />

      <p>
        ⚠️ 重要：HOYA BIT
        和幣安選擇的網路必須完全一致，不同網路轉帳可能導致資金損失。
      </p>
      <p>等待鏈上確認（通常 5–15 分鐘），到帳後即可開始交易。</p>
      <h2 id={slug("延伸閱讀")}>延伸閱讀</h2>
      <p>‧ HOYA BIT 開戶教學｜台灣交易所 + 台幣入金完整流程</p>
      <p>‧ OKX 開戶教學｜完整圖解步驟</p>
      <p>‧ 派網 Pionex 開戶教學｜內建套利機器人交易所</p>
      <p>‧ Bybit 開戶教學｜合約交易首選</p>
      <p>‧ Bitget 開戶教學｜跟單交易平台</p>
      <p>【各文章連結請填入】</p>
    </ArticleLayout>
  );
}
