import React, { useEffect } from "react";
import ArticleLayout from "../components/ArticleLayout.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import { slug } from "../utils/slug.js";

const article = {
  title: "【2026】Bybit 開戶教學｜完整圖解 + KYC 身份驗證流程",
  pageTitle: "Bybit",
  updatedAt: "最後更新：2026 年 6 月",
  coverImage: "/covers/bybit.png",
  imageBasePath: "/bybit/new",
  meta: { unit: "UNIT 10", category: "中心化交易所", readingTime: "10 分鐘閱讀" },
  tocItems: [
    "文章目錄",
    "開戶前需要準備什麼？",
    "【開戶流程總覽】",
    "Step 1：建立帳號",
    "Step 2：使用郵箱收驗證碼完成帳號確認",
    "Step 3：下載並開啟 Bybit APP，用剛建立的帳號登入",
    "Step 4：KYC 身份驗證（上傳證件 + 人臉辨識）",
    "Step 5：設定 2FA 雙重驗證",
    "Step 6：帳號建立完成 + 如何從 HOYA BIT 入金",
    "延伸閱讀",
  ],
  images: {
    group01: ["100"],
    group02: ["200", "300"],
    group03: ["400", "500"],
    group04: ["600", "700", "800"],
    group05: ["900", "1000"],
    group06: ["1100", "1200", "1300"],
    group07: ["1400"],
    group08: ["1500"],
    group09: ["1600", "1700", "1800"],
    group10: ["1900", "2000", "2100"],
    group11: ["2200"],
    group12: ["2300"],
    group13: ["2400", "2500", "2600"],
    group14: ["2700"],
    group15: ["2800", "2900", "3000"],
    group16: ["3100", "3200"],
    group17: ["3300", "3400", "3500"],
    group18: ["3600"],
    group19: ["3700", "3800", "3900"],
    group20: ["4000", "4100", "4200"],
    group21: ["4300"],
    group22: ["4400", "4500"],
    group23: ["4600", "4700", "4800"],
  },
};

function Images({ name, alt }) {
  return (
    <ImageGallery
      images={article.images[name]}
      basePath={article.imageBasePath}
      alt={alt || article.pageTitle}
    />
  );
}

export default function BybitPage() {
  useEffect(() => {
    document.title = `${article.pageTitle}｜Carry Labs`;
  }, []);

  return (
    <ArticleLayout {...article}>
      <p>最後更新：2026 年 6 月</p>
      <p>Bybit 是一家總部設於杜拜的國際加密貨幣交易所，全球用戶數超過 4,000 萬，提供現貨、合約、質押、NFT 等多元交易服務，是目前全球最大的加密貨幣交易所之一。</p>
      <p>這篇文章會帶你從頭完成 Bybit 的帳號建立與身份驗證，並教你如何領取開戶獎勵，跟著步驟走，整個流程大約 10–15 分鐘就能完成！</p>
      <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠</p>
      <p>註冊連結：<a href="https://partner.bybit.com/b/CARRYLABS" target="_blank" rel="noreferrer">https://partner.bybit.com/b/CARRYLABS</a></p>
      <p>如果是透過 App 註冊，請輸入邀請碼：CARRYLABS</p>
      <h2 id={slug("文章目錄")}>文章目錄</h2>
      <p>開戶前需要準備什麼？</p>
      <p>建立帳號</p>
      <p>電子信箱驗證</p>
      <p>KYC 身份驗證</p>
      <p>設定 2FA 雙重驗證</p>
      <p>HOYA BIT 入金教學</p>
      <p>延伸閱讀</p>
      <h2 id={slug("開戶前需要準備什麼？")}>開戶前需要準備什麼？</h2>
      <p>開戶前，請先準備好以下東西：</p>
      <p>- Bybit APP：至 App Store 或 Google Play 免費下載安裝</p>
      <p>- Google Authenticator：設定 2FA 雙重驗證時使用，可以在 App Store 或 Google Play 免費下載安裝</p>
      <p>- Email 信箱：建立帳號與接收驗證碼用，建議選常用信箱</p>
      <p>- 手機：部分驗證步驟需輸入簡訊驗證碼</p>
      <p>- 身分證或護照正本：KYC 身份驗證拍照用</p>
      <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠</p>
      <p>註冊連結：<a href="https://partner.bybit.com/b/CARRYLABS" target="_blank" rel="noreferrer">https://partner.bybit.com/b/CARRYLABS</a></p>
      <p>如果是透過 App 註冊，請輸入邀請碼：CARRYLABS</p>
      <h2 id={slug("【開戶流程總覽】")}>【開戶流程總覽】</h2>
      <p>Step 1：點擊連結，用手機瀏覽器開啟 Bybit 官網，填入 email 建立帳號（或使用 Google 帳號）</p>
      <p>Step 2：到信箱收取驗證碼，完成帳號確認</p>
      <p>Step 3：下載並開啟 Bybit APP，用剛建立的帳號登入</p>
      <p>Step 4：進行 KYC 身份驗證（上傳身分證 + 自拍人臉）</p>
      <p>Step 5：設定 2FA 雙重驗證（需搭配 Google Authenticator）</p>
      <p>Step 6：開戶完成，接著透過 HOYA BIT 入金，即可開始交易</p>
      <h2 id={slug("Step 1：建立帳號")}>Step 1：建立帳號</h2>
      <p>點擊下方連結，用手機瀏覽器開啟 Bybit 官網，開始建立帳號：</p>
      <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠</p>
      <p>註冊連結：<a href="https://partner.bybit.com/b/CARRYLABS" target="_blank" rel="noreferrer">https://partner.bybit.com/b/CARRYLABS</a></p>
      <p>如果是透過 App 註冊，請輸入邀請碼：CARRYLABS</p>
      <p>建立帳號有兩種方式：</p>
      <p>如果你有 Google 帳號，推薦直接點選「使用 Google 登入」快速建立，未來登入時直接透過 Google 即可，不需要另外記憶密碼。</p>
      <Images name="group01" alt={"Bybit"} />
      <p>如果選擇 Email 信箱註冊，輸入你的常用 email 並設定帳號密碼。</p>
      <h2 id={slug("Step 2：使用郵箱收驗證碼完成帳號確認")}>Step 2：使用郵箱收驗證碼完成帳號確認</h2>
      <p>輸入完帳號資訊後，系統會寄送一封驗證信到你填寫的 email，請前往信箱取得驗證碼，回到網站填入後點擊確認。</p>
      <p>💡 小提醒：若在收件匣找不到驗證信，記得確認「垃圾郵件」或「所有郵件」資料夾，或點選重新發送。</p>
      <Images name="group02" alt={"Bybit"} />
      <p>密碼格式必須符合以下規範：</p>
      <p>- 至少包含一個大寫、小寫英文字母</p>
      <p>- 至少包含一個數字</p>
      <p>- 長度至少 8 個字元以上</p>
      <p>設定您習慣使用的密碼即可。</p>
      <Images name="group03" alt={"Bybit"} />
      <h2 id={slug("Step 3：下載並開啟 Bybit APP，用剛建立的帳號登入")}>Step 3：下載並開啟 Bybit APP，用剛建立的帳號登入</h2>
      <p>接著，請下載 Bybit APP，後續的身份驗證與安全設定在 APP 上操作會更直覺方便。</p>
      <p>‧ iOS 下載：App Store 搜尋「Bybit」</p>
      <p>‧ Android 下載：Google Play 搜尋「Bybit」</p>
      <p>下載並開啟 APP 後，選擇「登入」（Login），輸入你剛才建立的 email 帳號與密碼登入，或是直接選擇 Gmail 來登入。</p>
      <Images name="group04" alt={"Bybit"} />
      <h2 id={slug("Step 4：KYC 身份驗證（上傳證件 + 人臉辨識）")}>Step 4：KYC 身份驗證（上傳證件 + 人臉辨識）</h2>
      <p>登入 APP 後，系統會提示你完成身份驗證。點擊「去認證」後，確認居住地顯示為「台灣」（若不是請手動修改），並點擊最下方的「確認」。</p>
      <Images name="group05" alt={"Bybit"} />
      <p>進入身份驗證頁面後，點擊「Start」，然後拍攝證件的正面與背面，確保照片清晰、沒有遮擋。</p>
      <Images name="group06" alt={"Bybit"} />
      <p>接著進行自拍人臉辨識，讓系統確認是本人操作。完成後等待系統審核。</p>
      <Images name="group07" alt={"Bybit"} />
      <p>根據實際體驗，KYC 審核速度相當快，通常在 10 分鐘至 24 小時內即可完成。</p>
      <Images name="group08" alt={"Bybit"} />
      <h2 id={slug("Step 5：設定 2FA 雙重驗證")}>Step 5：設定 2FA 雙重驗證</h2>
      <p>無論是加密貨幣交易所還是一般的網路帳號，開啟 2FA 雙重驗證都是保護帳號安全最有效的方式之一。即使帳號密碼不慎外洩，有了 2FA 也能阻止他人登入。</p>
      <p>2FA 的原理是在密碼之外，再加入一道「一次性動態驗證碼」。驗證碼每 30 秒更新一次，大幅降低帳號被盜的風險。加密貨幣帳號涉及真實資產，這個步驟強烈建議不要跳過。</p>
      <p>我們統一推薦使用 Google Authenticator 作為 2FA 驗證工具。</p>
      <h3>Step 1：進入安全中心</h3>
      <p>首先點擊左上角進入用戶設定，接著點擊右上角的設定，然後選擇下方的「安全設置」，然後點擊「谷歌身份認證」。</p>
      <Images name="group09" alt={"Bybit"} />
      <p>此處會需要一些帳號驗證，完成驗證後，我們點擊「繼續」，然後複製密鑰，最後按「下一步」。</p>
      <Images name="group10" alt={"Bybit"} />
      <p>先到這個頁面暫停，我們回到應用商店去下載驗證器。</p>
      <Images name="group11" alt={"Bybit"} />
      <h3>Step 3：綁定驗證器 APP</h3>
      <Images name="group12" alt={"Bybit"} />
      <p>請在手機安裝 Google Authenticator 驗證器 APP：</p>
      <p>‧ iOS / Android：Google Authenticator</p>
      <p>下載後開啟 App，使用你的 Google 帳號登入。</p>
      <Images name="group13" alt={"Bybit"} />
      <p>頁面上會出現一組 QR Code 以及手動輸入用的金鑰。在 Google Authenticator 中，點選右下角「+」→「輸入設定金鑰」，然後貼上剛才在 Bybit 上複製的金鑰，即可完成綁定</p>
      <p>綁定後，驗證器 APP 會開始每 30 秒生成一組 6 位數動態碼。將這組驗證碼填入 Bybit 確認，2FA 設定即完成。</p>
      <Images name="group14" alt={"Bybit"} />
      <p>恭喜完成！之後每次登入 Bybit 時，都需要輸入驗證器生成的動態碼，帳號安全性大幅提升。開戶全部完成後，就可以下載 Bybit APP、開始出入金與交易了！</p>
      <h2 id={slug("Step 6：帳號建立完成 + 如何從 HOYA BIT 入金")}>Step 6：帳號建立完成 + 如何從 HOYA BIT 入金</h2>
      <p>所有步驟完成後，恭喜你的 Bybit 帳號正式開通！</p>
      <p>為什麼需要透過 HOYA BIT 入金？</p>
      <p>Bybit 等國際交易所無法直接用台幣入金。雖然 Bybit 也支援信用卡直接購幣，但手續費偏高，非常不推薦使用。幣圈最常見、最划算的做法是：先在 HOYA BIT 台幣交易所以台幣購買 USDT，再透過鏈上轉幣的方式充值到 Bybit 使用。</p>
      <p>為什麼每個人都應該擁有一間台幣交易所帳戶？</p>
      <p>不管是要入金到 Bybit 進行交易，還是未來想把加密貨幣獲利換回台幣存回銀行，這些流程都必須透過台幣交易所才能完成。因此，在初期就開立一間台幣交易所帳戶，是最基本也最建議的做法。</p>
      <p>▶ 延伸閱讀：HOYA BIT 台灣交易所開戶教學（開戶 + 台幣入金完整流程）</p>
      <p><a href="https://hoyabit.com/signup?refCode=CwS4bxVU" target="_blank" rel="noreferrer">https://hoyabit.com/signup?refCode=CwS4bxVU</a></p>
      <p>邀請碼：CwS4bxVU</p>
      <p>新用戶優惠：完成 KYC 並購買 3,000 台幣等值加密貨幣，即可獲得 6 USDT</p>
      <h3>Step1：HOYA BIT 入金</h3>
      <p>1. 在 HOYA BIT 以入金台幣，以先前綁定的銀行帳戶，轉帳至「專屬信託帳戶」</p>
      <Images name="group15" alt={"Bybit"} />
      <p>2. 在台幣入金後，請輸入你想用多少台幣來購買 USDT</p>
      <Images name="group16" alt={"Bybit"} />
      <h3>Step2：HOYA BIT 準備提幣</h3>
      <p>回到 HOYA BIT APP，點選右下角進入首頁，點選「提幣」，選擇「USDT」，並開始選擇主網</p>
      <Images name="group17" alt={"Bybit"} />
      <p>此時注意，選擇哪一個主網，需要依我們要「提領到哪個交易所」而定，「提領」與「充值」必須同主網，比如我們剛才選擇的 BSC。</p>
      <p>另外，單就手續費而言，BSC ≒ AVAX-C &lt; TRC20，其中 TRC20 通用性最廣，但手續費相對高一點點。</p>
      <Images name="group18" alt={"Bybit"} />
      <h3>Step 3：在 Bybit 取得入金地址</h3>
      <p>進入  Bybit  點擊右下角的「資產」，選擇「充值」→ 點擊「存入加密貨幣」。</p>
      <Images name="group19" alt={"Bybit"} />
      <p>選擇幣種（如 USDT）後，接著選擇網路，請依以下優先順序選擇：</p>
      <p>‧ 優先選擇 BNB Smart Chain（BEP20 或稱 BSC），手續費最低</p>
      <p>‧ 次選 TRC20（TRON），此為最通用的鏈，幾乎所有交易所都支援，手續費也低</p>
      <p>⚠️ 請記下你選擇的網路，之後在 HOYA BIT 提幣時，必須選擇完全相同的網路，否則資金將無法找回！</p>
      <Images name="group20" alt={"Bybit"} />
      <p>接下來，複製 Bybit 提供的充幣地址（一長串英數字組合）。</p>
      <Images name="group21" alt={"Bybit"} />
      <h3>Step 4：前往 HOYA BIT 發送 USDT</h3>
      <p>將從 Bybit 複製的地址貼入「接收地址」欄位，最後點選「儲存並下一步」。此處的接收者名稱可自行填入，例如：小明；而接收錢包／平台名稱，可填入交易所名稱，比如 Bybit 。</p>
      <Images name="group22" alt={"Bybit"} />
      <p>輸入要提領的 USDT 數量，確認後點「確認」完成，填入手機驗證碼、Google 驗證器提供的即時驗證碼，就完成了 Bybit 入金。約等待 5–15 分鐘，到帳後即可開始交易。</p>
      <p>⚠️ 重要：HOYA BIT 和 Bybit 選擇的網路必須完全一致，不同網路轉帳可能導致資金損失。</p>
      <Images name="group23" alt={"Bybit"} />
      <h2 id={slug("延伸閱讀")}>延伸閱讀</h2>
      <p>‧ HOYA BIT 開戶教學｜台灣交易所 + 台幣入金完整流程</p>
      <p>‧ 幣安 Binance 開戶教學</p>
      <p>‧ OKX 開戶教學</p>
      <p>‧ Bitget 開戶教學</p>
      <p>‧ 派網 Pionex 開戶教學</p>
      <p>‧ 加密貨幣交易所完整比較推薦</p>
    </ArticleLayout>
  );
}
