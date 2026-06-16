import React, { useEffect } from "react";
import ArticleLayout from "../components/ArticleLayout.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import { slug } from "../utils/slug.js";

const article = {
  title: "【2026】HOYA BIT 開戶教學｜台幣入金 + 銀行帳戶綁定完整圖解",
  pageTitle: "HOYA BIT",
  updatedAt: "最後更新：2026 年 6 月",
  coverImage: "/covers/hoyabit.png",
  coverTitle: "HOYA BIT",
  coverSubtitle: "開戶教學封面圖 placeholder",
  imageBasePath: "/hoyabit/new2",
  meta: {
    unit: "UNIT 1",
    category: "基礎知識",
    readingTime: "1 分鐘閱讀",
  },
  tocItems: [
    "開戶前需要準備什麼？",
    "【HOYA BIT 完整開戶流程總覽】",
    "Step 1：建立 HOYA BIT 帳號",
    "Step 2：下載並登入 HOYA BIT APP",
    "Step 3：KYC 身份驗證",
    "Step 4：綁定台灣銀行帳號",
    "Step 5：設定 2FA 雙重驗證",
    "補充說明：台灣交易所 vs 海外交易所有什麼不同？",
  ],
  images: {
    signupStart: ["100"],
    signupVerify: ["200", "300"],
    signupDone: ["400"],
    download: ["500"],
    login: ["600", "700", "750"],
    appVerify: ["800"],
    kycStart: ["900", "1000"],
    phone: ["1100"],
    id: ["1200", "1300", "1400"],
    face: ["1500"],
    secondId: ["1600"],
    profile: ["1700", "1800", "1900"],
    bank: ["2000", "2300"],
    authIntro: ["2400"],
    authKey: ["2500"],
    authenticator: ["2600", "2700", "2800"],
    authSms: ["2850"],
    authCopy: ["2900"],
    authDone: ["30000"],
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

export default function HoyaBitPage() {
  useEffect(() => {
    document.title = `${article.pageTitle}｜Carry Labs`;
  }, []);

  return (
    <ArticleLayout {...article}>
      <p>
        HOYA BIT 是一家於 2022
        年成立、在台灣本地經營的加密貨幣交易所。與海外交易所最大的不同是：HOYA
        BIT
        可以直接綁定台灣銀行帳戶，支援台幣出入金，而且整個操作介面以台灣用戶為設計出發點，使用起來相當直覺。
      </p>
      <p>
        此外，HOYA BIT 非常注重合規，並提供真人 LINE
        客服服務，對於加密貨幣新手來說，這樣的在地化支援是很大的優勢。
      </p>
      <p>
        如果你想從台灣的管道合法投資加密貨幣，這篇文章會帶你從帳號建立、APP
        下載、身份驗證，一路到綁定銀行帳戶，每個步驟都拆解清楚，讓你不卡關！
      </p>
      <p>
        透過 Carry Labs 的專屬連結開戶，完成 KYC 並購買 3,000
        台幣等值加密貨幣，即可獲得 6 USDT
      </p>
      <p>
        註冊連結：
        <a
          href="https://hoyabit.com/signup?refCode=carrylabs"
          target="_blank"
          rel="noreferrer"
        >
          https://hoyabit.com/signup?refCode=carrylabs
        </a>
      </p>
      <p>如果是透過 App 註冊，請輸入邀請碼：carrylabs</p>
      <h2 id={slug("開戶前需要準備什麼？")}>開戶前需要準備什麼？</h2>
      <p>開始前請先準備好以下物品，確保後續各步驟可以順利完成：</p>
      <p>‧ 常用 email 信箱（帳號建立與收取驗證信使用）</p>
      <p>‧ 台灣身分證正本（KYC 身份驗證必備）</p>
      <p>‧ 第二證件：健保卡、駕照或護照擇一（護照需確認在效期內）</p>
      <p>‧ 常用台灣銀行帳號資料（用於綁定交易所，進行台幣出入金）</p>
      <p>‧ 手機（收簡訊驗證碼、設定 2FA，建議事先下載好 APP）</p>
      <h2 id={slug("【HOYA BIT 完整開戶流程總覽】")}>
        【HOYA BIT 完整開戶流程總覽】
      </h2>
      <p>Step 1：至 HOYA BIT 官網建立帳號密碼</p>
      <p>Step 2：下載並登入手機 APP</p>
      <p>Step 3：完成 KYC 實名認證（預計 24 小時內審核完成）</p>
      <p>Step 4：綁定台灣銀行帳號（審核後最快 15 分鐘內可入金交易）</p>
      <p>Step 5：設定 2FA 雙重驗證，確保帳號安全</p>
      <h2 id={slug("Step 1：建立 HOYA BIT 帳號（官網操作）")}>
        Step 1：建立 HOYA BIT 帳號（官網操作）
      </h2>
      <p>點擊 Carry Labs 的 HOYA BIT 專屬連結進入官網，即可開始建立帳號。</p>
      <p>
        專屬註冊連結：
        <a
          href="https://hoyabit.com/signup?refCode=carrylabs"
          target="_blank"
          rel="noreferrer"
        >
          https://hoyabit.com/signup?refCode=carrylabs
        </a>
      </p>
      <p>建立帳號有兩種方式：</p>
      <p>
        如果你有 Google 帳號，推薦直接點選「使用 Google
        登入」快速建立，未來登入時直接透過 Google 即可，不需要另外記憶密碼。
      </p>
      <p>
        如果選擇 Email 信箱註冊，填入你的常用
        Email，設定登入密碼。密碼格式必須符合以下規範：
      </p>
      <p>- 至少包含一個大寫、小寫英文字母</p>
      <p>- 至少包含一個數字</p>
      <p>- 長度 8～16 個字元</p>
      <p>
        設定您習慣使用的密碼即可，並在邀請碼欄位填入 Carry Labs
        的推薦碼：carrylabs
      </p>
      <p>勾選底下的條款確認後，按下「註冊」。</p>
      <Images name="signupStart" alt="建立 HOYA BIT 帳號" />
      <p>
        系統會寄送一封驗證信到你填入的
        email，前往信箱取得驗證碼填入後完成帳號確認。
      </p>
      <p>
        💡
        小提醒：有時候驗證信可能會被歸類到「垃圾郵件」或「所有郵件」資料夾，在收件匣找不到時可以到這兩個地方確認，或點選「重新發送驗證信」再試一次。
      </p>
      <Images name="signupVerify" alt="HOYA BIT 信箱驗證" />
      <p>
        這樣就完成帳號初步建立！後續的身份驗證建議使用 APP
        操作會更方便，這個頁面可以先點「稍後驗證」，等下載好 APP 再繼續。
      </p>
      <Images name="signupDone" alt="HOYA BIT 帳號建立完成" />
      <h2 id={slug("Step 2：下載並登入 HOYA BIT APP")}>
        Step 2：下載並登入 HOYA BIT APP
      </h2>
      <p>
        在 APP Store 或是 Google Play 找到 APP
        下載入口，按照你的手機型號點選對應的下載連結，進入下載頁面後點「取得」或「下載」來安裝。安裝完畢後，點選「打開」或「執行」
      </p>
      <Images name="download" alt="下載 HOYA BIT APP" />
      <p>下載完成後開啟 APP，輸入你剛才建立的帳號密碼登入。</p>
      <Images name="login" alt="登入 HOYA BIT APP" />
      <p>
        此時會需要再次填寫信箱驗證碼，請再度至信箱收取驗證碼後，填寫驗證碼至 APP
        頁面
      </p>
      <Images name="appVerify" alt="APP 信箱驗證" />
      <h2 id={slug("Step 3：KYC 身份驗證（實名認證）")}>
        Step 3：KYC 身份驗證（實名認證）
      </h2>
      <p>為了符合台灣防洗錢法規，所有台灣加密貨幣交易所都需要進行實名認證。</p>
      <p>
        登入 APP
        後，首頁上方會出現提示要求你完成身份驗證。點選「完成身分驗證」，確認證件都準備好後按「我準備好了」開始流程。
      </p>
      <Images name="kycStart" alt="開始 KYC 身份驗證" />
      <p>── 手機號碼驗證 ──</p>
      <p>
        第一步是手機驗證。輸入你的手機號碼，點選「發送手機驗證碼」，系統會寄送 6
        位數簡訊驗證碼到你的手機，填入後點確認繼續。
      </p>
      <Images name="phone" alt="手機號碼驗證" />
      <p>── 身分證拍攝 ──</p>
      <p>接著選擇證件類型：選「台灣」→「身份證」，點選「繼續」。</p>
      <p>
        按照畫面引導分別拍攝身分證正面與背面。拍攝時注意環境光線充足，確保圖片清晰、四個角完整呈現。
      </p>
      <Images name="id" alt="身分證拍攝" />
      <p>── 人臉辨識 ──</p>
      <p>
        完成身分證拍攝後，APP
        會開啟前鏡頭進行人臉辨識。拍攝時請摘下帽子、眼鏡和口罩，按照畫面指示完成辨識動作。
      </p>
      <Images name="face" alt="HOYA BIT 人臉辨識" />
      <p>── 第二證件上傳 ──</p>
      <p>
        接著需要上傳第二份證件。請選擇健保卡、駕照或護照其中一項（護照請確認在效期內），按照畫面上傳清晰的正面照片。
      </p>
      <Images name="secondId" alt="第二證件上傳" />
      <p>── 填寫個人資料 ──</p>
      <p>
        接著依序填寫你的個人基本資料，包含姓名、身分證字號、出生日期、戶籍地址等，確認資料填寫正確後點「下一步」。
      </p>
      <p>
        接著填寫職業類別、服務單位名稱和收入範圍等資訊，如實填寫即可，完成後點「下一步」送出。
      </p>
      <Images name="profile" alt="填寫個人資料" />
      <p>
        資料全部送出後就完成 KYC 申請！審核通常在 24
        小時內完成，接著可以繼續進行銀行帳戶綁定。
      </p>
      <h2 id={slug("Step 4：綁定台灣銀行帳號（台幣出入金用）")}>
        Step 4：綁定台灣銀行帳號（台幣出入金用）
      </h2>
      <p>
        完成 KYC 送出後，畫面會提示你前往綁定銀行帳戶，點選「前往綁定」繼續。
      </p>
      <p>
        選擇你常用的台灣銀行帳戶，輸入正確的銀行代碼、帳號資訊後點「下一步」，確認資料無誤後按「確認」送出。
      </p>
      <p>
        特別提醒：如果你持有台新國際商業銀行帳戶，入金時可享有免手續費的優惠；其他台灣銀行帳戶也同樣可以綁定使用。
      </p>
      <Images name="bank" alt="綁定台灣銀行帳號" />
      <p>
        銀行帳戶綁定同樣需要人工審核，通常開戶後最快 15
        分鐘內即可入金交易（筆者實測時約為 12 小時）。
      </p>
      <p>審核完成後，就可以在 APP 中用台幣轉帳入金，開始交易加密貨幣了！</p>
      <p>送出後可以繼續點「前往設定」，先完成 2FA 雙重驗證的設定。</p>
      <h2 id={slug("Step 5：設定 2FA 雙重驗證")}>Step 5：設定 2FA 雙重驗證</h2>
      <p>
        2FA 雙重驗證（Two-Factor Authentication）是在密碼之外，再加上一組每 30
        秒更新的一次性動態碼，兩道驗證都通過才能登入，大幅提升帳號的安全性。
      </p>
      <p>我們推薦使用 Google Authenticator 作為 2FA 驗證工具。</p>
      <p>開始前，請先安裝以下驗證器 APP：</p>
      <p>‧ iOS / Android：Google Authenticator</p>
      <p>下載後開啟 App，使用你的 Google 帳號登入。</p>
      <Images name="authIntro" alt="設定 2FA 雙重驗證" />
      <h3>Step 1：取得 2FA 金鑰</h3>
      <p>
        在 APP 的安全設定頁面找到 2FA
        設定入口，畫面會顯示一組金鑰，複製這組金鑰備用。
      </p>
      <Images name="authKey" alt="取得 2FA 金鑰" />
      <h3>Step 2：在驗證器 APP 中新增帳戶</h3>
      <p>
        開啟 Google
        Authenticator，點擊右下角的「+」符號，接著選擇「輸入設定金鑰」，在「帳號名稱」欄位，輸入一個好記的名稱（例如：HOYA
        BIT），在「您的金鑰」欄位，貼上剛才在 HOYA BIT
        複製的金鑰，按「新增」完成綁定。
      </p>
      <Images name="authenticator" alt="Google Authenticator 新增帳戶" />
      <h3>Step 3：輸入簡訊驗證碼確認</h3>
      <p>
        回到 HOYA BIT APP，系統會先傳送簡訊驗證碼到你的手機，輸入收到的 6
        位數簡訊碼。
      </p>
      <Images name="authSms" alt="HOYA BIT 2FA 簡訊驗證" />
      <h3>Step 4：填入驗證器動態碼完成設定</h3>
      <p>
        接著回到 Google
        驗證器，擊你剛才新增的驗證器（通常在最下方）的數字，以完成驗證碼的複製
      </p>
      <Images name="authCopy" alt="複製 Google Authenticator 動態碼" />
      <p>
        最後回到 HOYA BIT 的 APP，填入 Google Authenticator 上生成的 6
        位數動態碼（動態碼每 30 秒更新一次，請在時間內快速填入），確認後 2FA
        設定就完成了。
      </p>
      <Images name="authDone" alt="完成 2FA 設定" />
      <p>
        恭喜，所有開戶步驟已全部完成！等 KYC
        審核和銀行帳戶審核通過後，就可以正式開始用台幣入金、交易加密貨幣了。
      </p>
      <p>
        如果開戶過程中有任何問題，HOYA BIT 提供 email 與 LINE
        真人客服，可以直接聯繫詢問。
      </p>
      <h2 id={slug("補充說明：台灣交易所 vs 海外交易所有什麼不同？")}>
        補充說明：台灣交易所 vs 海外交易所有什麼不同？
      </h2>
      <p>很多加密貨幣投資者會同時使用台灣交易所和海外交易所，主要原因如下：</p>
      <p>
        台灣交易所（如 HOYA
        BIT、MAX）的優點是可以直接用台幣透過銀行帳戶出入金，手續費相對低廉，資金要取出也方便。需要注意的是，自
        2025 年 6 月法規更新後，新用戶每天的入金上限為 10 萬台幣。
      </p>
      <p>
        海外交易所（如幣安、OKX、Bybit）的優點是交易量大、幣種更多、功能更豐富，包含網格機器人、期現套利等進階策略，部分交易所還有
        Visa
        簽帳卡可以直接用加密貨幣消費。缺點是無法直接台幣出入金，需要先在台灣交易所買好
        USDT，再鏈上轉幣過去。
      </p>
      <p>
        簡單來說，台灣交易所是「入金的橋梁」，海外交易所是「操作的戰場」。大多數在幣圈活躍的投資者都同時持有兩種帳號。
      </p>
      <h3>台灣交易所 vs 海外交易所比較：</h3>
      <table>
        <thead>
          <tr>
            <th>
              <p>類型</p>
            </th>
            <th>
              <p>台灣交易所</p>
            </th>
            <th>
              <p>海外交易所</p>
            </th>
          </tr>
          <tr>
            <th>
              <p>優點</p>
            </th>
            <th>
              <p>支援台幣出入金、手續費低</p>
            </th>
            <th>
              <p>交易量大、功能豐富、機器人交易</p>
            </th>
          </tr>
          <tr>
            <th>
              <p>缺點</p>
            </th>
            <th>
              <p>交易量大、功能豐富、機器人交易</p>
            </th>
            <th>
              <p>不支援台幣直接出入金</p>
            </th>
          </tr>
          <tr>
            <th>
              <p>特色</p>
            </th>
            <th>
              <p>可直接銀行轉帳入金</p>
            </th>
            <th>
              <p>多數提供 Visa 卡，用戶可直接刷卡消費交易所內的加密貨幣</p>
            </th>
          </tr>
          <tr>
            <th>
              <p>代表交易所</p>
            </th>
            <th>
              <p>HOYA BIT、MAX</p>
            </th>
            <th>
              <p>幣安、OKX、Bybit、Bitget、派網</p>
            </th>
          </tr>
        </thead>
      </table>
      <h2 id={slug("延伸閱讀")}>延伸閱讀</h2>
      <p>‧ 幣安 Binance 開戶教學</p>
      <p>‧ OKX 開戶教學</p>
      <p>‧ Bybit 開戶教學</p>
      <p>‧ Bitget 開戶教學</p>
      <p>‧ 派網 Pionex 開戶教學</p>
      <p>‧ 加密貨幣交易所完整比較推薦</p>
      <p>【各文章連結請填入】</p>
    </ArticleLayout>
  );
}
