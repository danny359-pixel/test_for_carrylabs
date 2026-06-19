import React, { useEffect } from "react";
import ArticleLayout from "../components/ArticleLayout.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import { slug } from "../utils/slug.js";

const article = {
  title: "【2026】OKX 開戶教學｜完整圖解 + KYC 身份驗證流程",
  pageTitle: "OKX 開戶教學",
  updatedAt: "最後更新：2026 年 6 月",
  coverImage: "/covers/okx.png",
  imageBasePath: "/okx/new1",
  meta: { unit: "UNIT 7", category: "交易所開戶", readingTime: "15 分鐘閱讀" },
  tocItems: [
    "【OKX 開戶快速流程總覽】",
    "開戶前需要準備什麼？",
    "Step 1：建立 OKX 帳號（創建帳號密碼）",
    "Step 2：在瀏覽器完成 email 驗證與手機號碼綁定",
    "Step 3：設定通行密鑰（建議從 APP 操作）",
    "Step 4：KYC 身份驗證教學（分兩個步驟）",
    "Step 5：設定 2FA 雙重驗證",
    "Step 6：HOYA BIT 入金教學",
    "延伸閱讀",
  ],
  images: {
    image01: ["100"],
    image02: ["200"],
    image03: ["300", "400"],
    image04: ["500", "600"],
    image05: ["700"],
    image06: ["800", "900"],
    image07: ["1000", "1100", "1200"],
    image08: ["1300", "1400", "1500"],
    image09: ["1600"],
    image10: ["1700", "1800"],
    image11: ["1900", "2000"],
    image12: ["2100", "2200"],
    image13: ["2300", "2400", "2500"],
    image14: ["2600"],
    image15: ["2700", "2800", "2900"],
    image16: ["3000", "3100", "3200"],
    image17: ["3300", "3400"],
    image18: ["3500", "3600", "3700"],
    image19: ["3800", "3900"],
    image20: ["4000", "4100", "4200"],
    image21: ["4300", "4400"],
    image22: ["4500", "4600", "4700"],
    image23: ["4800"],
    image24: ["4900", "5000", "5100"],
    image25: ["5200", "5300", "5400"],
    image26: ["5500"],
    image27: ["5600", "5700", "5800"],
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

export default function OkxPage() {
  useEffect(() => {
    document.title = `${article.pageTitle}｜Carry Labs`;
  }, []);

  return (
    <ArticleLayout {...article}>
      <p>
        隨著比特幣、以太坊等主流加密貨幣持續受到關注，越來越多人開始尋找適合的交易所入場。
      </p>
      <p>
        OKX（歐易，前身為
        OKEx）是一個成立多年的全球性數位資產交易平台，目前穩居全球前三大交易所之列，支援現貨、合約、衍生品交易，同時內建
        Web3 錢包功能，是許多加密貨幣投資人的首選平台。
      </p>
      <p>
        這篇文章將帶你一步一步完成 OKX
        的開戶全流程，讓你從建立帳號到完成身份驗證，每個環節都不卡關！
      </p>
      <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠</p>
      <p>
        註冊連結：
        <a
          href="https://okx.com/join/CARRYLABS"
          target="_blank"
          rel="noreferrer"
        >
          https://okx.com/join/CARRYLABS
        </a>
      </p>
      <p>如果是透過 App 註冊，請輸入邀請碼：CARRYLABS</p>
      <h2 id={slug("【OKX 開戶快速流程總覽】")}>【OKX 開戶快速流程總覽】</h2>
      <p>
        Step 1：點擊連結，用手機瀏覽器開啟 OKX 官網，填入 email 建立帳號（或使用
        Google 帳號）
      </p>
      <p>Step 2：在瀏覽器完成 email 驗證與手機號碼綁定</p>
      <p>Step 3：下載 OKX APP，登入後設定通行密鑰（Passkey）</p>
      <p>Step 4：進行 KYC 身份驗證（上傳身分證 + 自拍人臉，共兩個環節）</p>
      <p>Step 5：設定 2FA 雙重驗證（需搭配 Google Authenticator）</p>
      <p>Step 6：開戶完成，接著透過 HOYA BIT 入金，即可開始交易</p>
      <p>
        以下將針對每個步驟提供詳細說明，跟著圖示操作，整個流程預計 10–15
        分鐘內即可完成！
      </p>
      <p>
        帳號建好之後，就可以透過 HOYA BIT 台幣交易所購買 USDT，再轉到 OKX
        開始交易！
      </p>
      <h2 id={slug("開戶前需要準備什麼？")}>開戶前需要準備什麼？</h2>
      <p>開戶前，請先準備好以下東西：</p>
      <p>- OKX APP：至 App Store 或 Google Play 免費下載安裝</p>
      <p>
        - Google Authenticator：設定 2FA 雙重驗證時使用，至 App Store 或 Google
        Play 免費下載安裝
      </p>
      <p>- Email 信箱：建立帳號與接收驗證碼用，建議選常用信箱</p>
      <p>- 手機：部分驗證步驟需輸入簡訊驗證碼</p>
      <p>- 身分證或護照正本：KYC 身份驗證拍照用</p>
      <h2 id={slug("Step 1：建立 OKX 帳號（創建帳號密碼）")}>
        Step 1：建立 OKX 帳號（創建帳號密碼）
      </h2>
      <p>
        點擊下方連結，用手機瀏覽器開啟 OKX
        官網開始建立帳號，整個申請流程大約只需要 1–2 分鐘。
      </p>
      <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠</p>
      <p>
        註冊連結：
        <a
          href="https://okx.com/join/CARRYLABS"
          target="_blank"
          rel="noreferrer"
        >
          https://okx.com/join/CARRYLABS
        </a>
      </p>
      <p>如果是透過 App 註冊，請輸入邀請碼：CARRYLABS</p>
      <p>
        進入官網後，首先確認一下居住地是否正確顯示為「台灣」；若不是台灣用戶，請選擇對應的國家。
      </p>
      <Images name="image01" alt={article.pageTitle} />
      <p>建立帳號有兩種方式：</p>
      <p>
        如果你有 Google 帳號，推薦直接點選「使用 Google
        登入」快速建立，未來登入時直接透過 Google 即可，不需要另外記憶密碼。
      </p>
      <p>
        如果選擇 Email 信箱註冊，填入你的 email
        信箱，並確認邀請碼欄位是否已自動帶入。如果沒有，可以手動輸入 Carry Labs
        的推薦碼：CARRYLABS。
      </p>
      <Images name="image02" alt={article.pageTitle} />
      <h2 id={slug("Step 2：在瀏覽器完成 email 驗證與手機號碼綁定")}>
        Step 2：在瀏覽器完成 email 驗證與手機號碼綁定
      </h2>
      <p>系統會寄送一封驗證信到你的信箱，請開信箱取得驗證碼並填入。</p>
      <p>
        📌
        若收不到驗證信，請先查看「垃圾郵件」或「所有郵件」資料夾；若仍找不到，可點選「重新發送」再試一次。
      </p>
      <Images name="image03" alt={article.pageTitle} />
      <p>
        接著綁定手機號碼，台灣用戶記得選擇國碼 +886，手機號碼開頭的 0
        不需要輸入。
      </p>
      <Images name="image04" alt={article.pageTitle} />
      <p>輸入手機收到的簡訊驗證碼後，繼續設定登入密碼。</p>
      <p>密碼格式必須符合以下規範：</p>
      <p>- 至少包含一個大寫及小寫英文字母</p>
      <p>- 至少包含一個數字</p>
      <p>- 長度 8～32 個字元</p>
      <p>- 至少包含一個符號</p>
      <Images name="image05" alt={article.pageTitle} />
      <p>設定您習慣使用的密碼即可，並妥善保存。</p>
      <p>
        密碼設定完成後，會看到通行密鑰的設定提示。這個部分可以先略過，等到手機安裝好
        APP 後再操作會更方便。
      </p>
      <Images name="image06" alt={article.pageTitle} />
      <h2 id={slug("Step 3：設定通行密鑰（建議從 APP 操作）")}>
        Step 3：設定通行密鑰（建議從 APP 操作）
      </h2>
      <p>
        完成帳號建立後，建議下載 OKX APP 來進行後續操作，使用手機 APP
        整體體驗會比網頁版更流暢。
      </p>
      <p>直接在 App Store 或 Google Play 搜尋「OKX」即可找到並下載官方 APP。</p>
      <Images name="image07" alt={article.pageTitle} />
      <p>
        開啟 APP 後，選擇「登入」，輸入你剛才申請的 email
        帳號，按照畫面指示操作。
      </p>
      <p>
        登入後，系統會要求輸入手機簡訊驗證碼，完成後在通行密鑰頁面，可以點擊右上角的叉叉，再繼續電子郵件和手機號碼的驗證。
      </p>
      <Images name="image08" alt={article.pageTitle} />
      <h2 id={slug("Step 4：KYC 身份驗證教學（分兩個步驟）")}>
        Step 4：KYC 身份驗證教學（分兩個步驟）
      </h2>
      <p>
        OKX 的身份驗證分為兩個環節，分別完成後才算通過完整 KYC。進入 APP
        後，找到「立即驗證」按鈕，點選後依序點選「立即驗證」→「下一步」。
      </p>
      <Images name="image09" alt={article.pageTitle} />
      <h3>Step1：證件上傳與人臉辨識</h3>
      <p>身分證、護照、駕照皆可使用。</p>
      <p>點選「開始認證」→「下一步」，系統將引導你進行後續的拍照流程。</p>
      <Images name="image10" alt={article.pageTitle} />
      <p>依照畫面指示，分別拍攝身分證（或駕照）的正面與反面</p>
      <Images name="image11" alt={article.pageTitle} />
      <Images name="image12" alt={article.pageTitle} />
      <p>接著進行自拍人臉辨識。自拍時記得摘下眼鏡，以利系統辨識。</p>
      <Images name="image13" alt={article.pageTitle} />
      <p>根據實際測試，這個步驟的審核速度相當快，通常在 2 分鐘內即可完成。</p>
      <Images name="image14" alt={article.pageTitle} />
      <h2 id={slug("Step 5：設定 2FA 雙重驗證")}>Step 5：設定 2FA 雙重驗證</h2>
      <p>
        在交易所持有加密資產，強烈建議開啟 2FA
        雙重驗證。這是保護帳號安全最基本也最重要的一道防線，萬一有人取得你的密碼，2FA
        也能阻止他們直接登入。
      </p>
      <h3>
        <strong>Step</strong>1<strong>：</strong>進入 OKX 的 2FA 設定頁面
      </h3>
      <p>
        在 APP
        中，找到選單圖示（三個點或漢堡選單），依序進入「安全設定」→「身份驗證應用程式」。
      </p>
      <Images name="image15" alt={article.pageTitle} />
      <p>此處會進行手機、電子郵件的驗證，依照指示完成即可。</p>
      <Images name="image16" alt={article.pageTitle} />
      <h3>Step2：下載 Google Authenticator</h3>
      <p>
        在手機的 App Store（iOS）或 Google Play（Android）搜尋「Google
        Authenticator」並下載安裝。
      </p>
      <p>下載後開啟 App，使用你的 Google 帳號登入。</p>
      <Images name="image17" alt={article.pageTitle} />
      <h3>
        <strong>Step3：</strong>掃描 QR Code 或手動輸入金鑰
      </h3>
      <p>系統會顯示一組用於綁定的 QR Code。</p>
      <p>
        ‧ 方式一（推薦）：點選「手動新增金鑰」，將顯示的金鑰字串複製後，貼入
        Google Authenticator 的「帳戶金鑰」欄位完成新增。
      </p>
      <p>
        ‧ 方式二：開啟 Google Authenticator，點選「+」→「掃描 QR
        Code」，對準畫面上的 QR Code 完成掃描。
      </p>
      <Images name="image18" alt={article.pageTitle} />
      <h3>
        <strong>Step4：</strong>輸入 6 位數動態驗證碼
      </h3>
      <p>
        完成掃描或手動輸入後，Google Authenticator 會生成一組 6
        位數動態驗證碼，每 30 秒更新一次。請在 30 秒內將當前顯示的驗證碼輸入 OKX
        確認欄位，完成綁定。
      </p>
      <Images name="image19" alt={article.pageTitle} />
      <p>恭喜！所有開戶步驟都完成了，現在可以開始準備入金、交易加密貨幣了！</p>
      <h2 id={slug("Step 6：HOYA BIT 入金教學")}>Step 6：HOYA BIT 入金教學</h2>
      <h3>為什麼需要透過 HOYA BIT 入金？</h3>
      <p>
        OKX 等國際交易所無法直接用台幣入金。幣圈最常見、最划算的做法是：先在
        HOYA BIT 台幣交易所以台幣購買 USDT，再透過鏈上轉幣充值到 OKX。
      </p>
      <p>
        ⚠️
        雖然信用卡購幣也是一個選項，但手續費遠高於鏈上轉帳，僅建議急需少量資金時使用，不建議作為主要入金方式。
      </p>
      <h3>為什麼每個人都應該擁有一間台幣交易所帳戶？</h3>
      <p>
        不管是要入金到 OKX
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
        以下將示範完整的 HOYA BIT 入金 → OKX
        充幣流程，按照圖示一步一步操作就可以完成：
      </p>
      <h3>Step1：HOYA BIT 入金</h3>
      <p>
        1. 在 HOYA BIT 以入金台幣，以先前綁定的銀行帳戶，轉帳至「專屬信託帳戶」
      </p>
      <Images name="image20" alt={article.pageTitle} />
      <p>2. 在台幣入金後，請輸入你想用多少台幣來購買 USDT</p>
      <Images name="image21" alt={article.pageTitle} />
      <h3>Step2：HOYA BIT 準備提幣</h3>
      <p>
        回到 HOYA BIT
        APP，點選右下角進入首頁，點選「提幣」，選擇「USDT」，並開始選擇主網
      </p>
      <Images name="image22" alt={article.pageTitle} />
      <p>
        此時注意，選擇哪一個主網，需要依我們要「提領到哪個交易所」而定，「提領」與「充值」必須同主網，比如我們剛才選擇的
        BSC。
      </p>
      <p>
        另外，單就手續費而言，BSC ≒ AVAX-C &lt; TRC20，其中 TRC20
        通用性最廣，但手續費相對高一點點。
      </p>
      <Images name="image23" alt={article.pageTitle} />
      <h3>Step 3：在OKX取得入金地址</h3>
      <p>
        進入 OKX 點擊右下角的「資產」，選擇「充幣」→「充幣」→ 選擇「USDT」幣種。
      </p>
      <Images name="image24" alt={article.pageTitle} />
      <p>接著選擇網路，請依以下優先順序選擇：</p>
      <p>‧ 優先選擇 Avalanche（或稱 C-chain）— 手續費最低</p>
      <p>
        ‧ 次選 TRC20（TRON）— 最通用的網路，幾乎所有交易所都支援，手續費也低
      </p>
      <p>
        ⚠️ 請記下你選擇的網路，之後在 HOYA BIT
        提幣時，必須選擇完全相同的網路，否則資金將無法找回！
      </p>
      <p>接下來，複製 OKX 提供的充幣地址（一長串英數字組合）。</p>
      <Images name="image25" alt={article.pageTitle} />
      <h3>Step 4：前往 HOYA BIT 發送 USDT</h3>
      <p>
        將從 OKX
        複製的地址貼入「接收地址」欄位，最後點選「儲存並下一步」。此處的接收者名稱可自行填入，例如：小明；而接收錢包／平台名稱，可填入交易所名稱，比如
        OKX。
      </p>
      <Images name="image26" alt={article.pageTitle} />
      <p>
        輸入要提領的 USDT 數量，確認後點「確認」完成，填入手機驗證碼、Google
        驗證器提供的即時驗證碼，即可完成OKX入金。
      </p>
      <Images name="image27" alt={article.pageTitle} />
      <p>
        ⚠️ 重要：HOYA BIT 和 OKX
        選擇的網路必須完全一致，不同網路轉帳可能導致資金損失。
      </p>
      <p>等待鏈上確認（通常 5–15 分鐘），到帳後即可開始交易。</p>
      <h2 id={slug("延伸閱讀")}>延伸閱讀</h2>
      <p>想進一步了解加密貨幣交易，歡迎參考以下 Carry Labs 相關文章：</p>
      <p>‧ HOYA BIT 開戶教學｜台灣交易所 + 台幣入金完整流程</p>
      <p>‧ 幣安 Binance 開戶教學</p>
      <p>‧ Bybit 開戶教學</p>
      <p>‧ Bitget 開戶教學</p>
      <p>‧ 派網 Pionex 開戶教學</p>
      <p>‧ 加密貨幣交易所怎麼選？完整比較推薦</p>
      <p>【各文章連結請填入】</p>
    </ArticleLayout>
  );
}
