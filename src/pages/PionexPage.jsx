import React, { useEffect } from "react";
import ArticleLayout from "../components/ArticleLayout.jsx";
import ImageGallery from "../components/ImageGallery.jsx";
import { slug } from "../utils/slug.js";

const article = {
  title: "【2026】派網 Pionex 開戶教學｜完整圖解 + KYC 身份驗證流程",
  pageTitle: "派網 Pionex",
  updatedAt: "最後更新：2026 年 6 月",
  coverImage: "/covers/pionex.png",
  imageBasePath: "/pionex/new",
  meta: { unit: "UNIT 9", category: "量化交易所", readingTime: "10 分鐘閱讀" },
  tocItems: [
    "文章目錄",
    "開戶前需要準備什麼？",
    "【派網開戶流程總覽】",
    "派網開戶教學（圖解流程）",
    "Step 2：email 驗證",
    "Step 3：下載並開啟派網 APP，用剛建立的帳號登入",
    "Step 4：KYC 實名認證",
    "Step 5：設定 2FA 雙重驗證",
    "Step 6：HOYA BIT 入金教學",
  ],
  images: {
    group01: ["100", "200"],
    group02: ["300"],
    group03: ["400", "500"],
    group04: ["600", "700"],
    group05: ["800", "900", "1000"],
    group06: ["1100"],
    group07: ["1200", "1300"],
    group08: ["1400"],
    group09: ["1500", "1600", "1700"],
    group10: ["1800", "1900"],
    group11: ["2000", "2100"],
    group12: ["2200"],
    group13: ["2400", "2500", "2600"],
    group14: ["2700"],
    group15: ["2800"],
    group16: ["2900", "3000", "3100"],
    group17: ["3200"],
    group18: ["3300", "3400", "3500"],
    group19: ["3600", "3700"],
    group20: ["3800", "3900", "4000"],
    group21: ["4100"],
    group22: ["4200", "4300", "4400"],
    group23: ["4500", "4600"],
    group24: ["4700"],
    group25: ["4800", "4900", "5000"],
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

export default function PionexPage() {
  useEffect(() => {
    document.title = `${article.pageTitle}｜Carry Labs`;
  }, []);

  return (
    <ArticleLayout {...article}>
      <p>最後更新：2026 年 6 月</p>
      <p>如果你覺得加密貨幣交易太複雜、不知道何時買賣，那派網（Pionex）絕對值得你了解。</p>
      <p>派網是一家專注於「量化機器人交易」的加密貨幣交易所，總部設於新加坡，並且同時受到新加坡金融管理局（MAS）監管，以及持有美國 FinCEN 頒發的 MSB（Money Services Business）牌照，是一間合規且安全的交易所。</p>
      <p>派網最大的特色，是提供多種內建的自動化交易機器人，包含「網格交易、期限套利」等策略，讓剛接觸加密貨幣的新手也能透過機器人 24 小時自動操作，不需要一直盯著行情。</p>
      <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠</p>
      <p>註冊連結：<a href="https://www.pionex.com/zh-TW/signUp?r=Jum2ytsq" target="_blank" rel="noreferrer">https://www.pionex.com/zh-TW/signUp?r=Jum2ytsq</a></p>
      <p>如果是透過 App 註冊，請輸入邀請碼：Jum2ytsq</p>
      <h2 id={slug("文章目錄")}>文章目錄</h2>
      <p>開戶前需要準備什麼？</p>
      <p>派網開戶教學（圖解流程）</p>
      <p>KYC 實名認證</p>
      <p>設定 2FA 雙重驗證</p>
      <p>HOYA BIT 入金教學</p>
      <p>延伸閱讀</p>
      <h2 id={slug("開戶前需要準備什麼？")}>開戶前需要準備什麼？</h2>
      <p>開戶前，請先準備好以下東西：</p>
      <p>- 派網 APP：至 App Store 或 Google Play 免費下載安裝</p>
      <p>- Google Authenticator：設定 2FA 雙重驗證時使用，至 App Store 或 Google Play 免費下載安裝</p>
      <p>- Email 信箱：建立帳號與接收驗證碼用，建議選常用信箱</p>
      <p>- 手機：部分驗證步驟需輸入簡訊驗證碼</p>
      <p>- 身分證或護照正本：KYC 身份驗證拍照用</p>
      <h2 id={slug("【派網開戶流程總覽】")}>【派網開戶流程總覽】</h2>
      <p>Step 1：在派網官網註冊一個帳號</p>
      <p>Step 2：在瀏覽器完成 email 驗證</p>
      <p>Step 3：下載並開啟派網 APP，用剛建立的帳號登入</p>
      <p>Step 4：進行 KYC 身份驗證（上傳身分證 + 自拍人臉）</p>
      <p>Step 5：設定 2FA 雙重驗證（需搭配 Google Authenticator）</p>
      <p>Step 6：開戶完成，接著透過 HOYA BIT 入金，即可開始交易</p>
      <h2 id={slug("派網開戶教學（圖解流程）")}>派網開戶教學（圖解流程）</h2>
      <h3>Step 1：建立帳號</h3>
      <p>點擊下方連結，用手機瀏覽器開啟派網官網：</p>
      <p>透過 Carry Labs 的專屬連結開戶，就能享有 20% 交易手續費優惠</p>
      <p>註冊連結：<a href="https://www.pionex.com/zh-TW/signUp?r=Jum2ytsq" target="_blank" rel="noreferrer">https://www.pionex.com/zh-TW/signUp?r=Jum2ytsq</a></p>
      <p>如果是透過 App 註冊，請輸入邀請碼：Jum2ytsq</p>
      <p>用手機瀏覽器開啟官網後，建立帳號有兩種方式可以選擇：</p>
      <p>如果你有 Google 帳號，推薦直接點選「使用 Google 帳號登入」，選擇帳號並授權後即完成快速註冊，無需另外設定密碼，最為便捷。</p>
      <p>如果選擇 Email 信箱或手機進行註冊，請向下滑填入常用 email 或手機，接著設定密碼。</p>
      <Images name="group01" alt={"?? Pionex"} />
      <p>密碼格式必須符合以下規範：</p>
      <p>- 至少包含一個大寫英文字母</p>
      <p>- 至少包含一個數字</p>
      <p>- 長度至少 8 個字元以上</p>
      <Images name="group02" alt={"?? Pionex"} />
      <p>填寫完成後點「註冊」。點擊後畫面可能出現拖曳拼圖安全驗證，將圓圈按鈕往右拖到對應缺口完成即可。</p>
      <h2 id={slug("Step 2：email 驗證")}>Step 2：email 驗證</h2>
      <p>系統會傳送驗證碼到你填寫的 email 信箱，請前往信箱找到驗證信並填入驗證碼，完成後就會看到「註冊成功！」的訊息。</p>
      <p>💡 若收不到驗證信，請檢查「垃圾郵件」或「所有郵件」資料夾；仍找不到可點「重新發送」。</p>
      <Images name="group03" alt={"?? Pionex"} />
      <h2 id={slug("Step 3：下載並開啟派網 APP，用剛建立的帳號登入")}>Step 3：下載並開啟派網 APP，用剛建立的帳號登入</h2>
      <p>接著，請下載派網 APP，後續的 KYC 身份驗證與安全設定在 APP 上操作會更直覺方便。</p>
      <p>‧ iOS 下載：App Store 搜尋「Pionex」</p>
      <p>‧ Android 下載：Google Play 搜尋「Pionex」</p>
      <Images name="group04" alt={"?? Pionex"} />
      <p>下載並開啟 APP 後，選擇「登入」，輸入你剛才建立的 email 帳號與密碼登入。</p>
      <Images name="group05" alt={"?? Pionex"} />
      <p>此時可以進行通行密鑰的設定，以便未來快速登入，但建議可以點擊「以後再說」，先進行 KYC 實名認證</p>
      <Images name="group06" alt={"?? Pionex"} />
      <h2 id={slug("Step 4：KYC 實名認證")}>Step 4：KYC 實名認證</h2>
      <p>完成帳號建立後，進行手機號碼綁定與 KYC 實名認證，解鎖完整功能與提領額度。</p>
      <h3>1.進入認證</h3>
      <p>在首頁直接點擊「去認證」，開始 KYC 流程。</p>
      <Images name="group07" alt={"?? Pionex"} />
      <p>接著確認國家為「Taiwan」，並填入姓名，勾選選項後，即可完成一級認證</p>
      <Images name="group08" alt={"?? Pionex"} />
      <h3>2.二級實名認證</h3>
      <p>接著繼續點擊「去升級」，並且開始認證，並點選「非美國居民」的選項</p>
      <Images name="group09" alt={"?? Pionex"} />
      <p>此時選擇使用「身分證」作為驗證文件（駕照、護照也可），完成後點選「Continue」。</p>
      <Images name="group10" alt={"?? Pionex"} />
      <h3>4.上傳證件照片</h3>
      <p>按照要求分別實體拍攝以下三張照片：</p>
      <p>‧ 身分證正面（清晰、完整，沒有遮擋）</p>
      <p>‧ 身分證背面</p>
      <p>完成後會進行人臉辨識，依照指示完成辨識即可</p>
      <Images name="group11" alt={"?? Pionex"} />
      <p>全部上傳完成後，點選「提交」送出審核。審核通過後，派網會發送 email 通知你。</p>
      <Images name="group12" alt={"?? Pionex"} />
      <h2 id={slug("Step 5：設定 2FA 雙重驗證")}>Step 5：設定 2FA 雙重驗證</h2>
      <p>在等待 KYC 審核的期間，可以先完成 2FA 雙重驗證的設定，不需要等 KYC 通過才能做。</p>
      <p>2FA 雙重驗證能在密碼之外，為帳號加上一層每 30 秒更新的一次性動態碼。即使有人取得你的密碼，沒有驗證碼也無法登入，帳號安全大幅提升。</p>
      <h3>Step 1：進入驗證器綁定</h3>
      <p>載派網的首頁，可以直接點擊「去綁定」，就可以進入 Google 驗證器設定頁面。完成信箱驗證後，即可進行下一步。</p>
      <Images name="group13" alt={"?? Pionex"} />
      <p>最後，請複製這裡的金鑰，然後我們將回到應用程式下載的地方，去下載驗證器。</p>
      <Images name="group14" alt={"?? Pionex"} />
      <h3>Step 3：綁定驗證器 APP</h3>
      <Images name="group15" alt={"?? Pionex"} />
      <p>請在手機安裝 Google Authenticator 驗證器 APP：</p>
      <p>‧ iOS / Android：Google Authenticator</p>
      <p>下載後開啟 App，使用你的 Google 帳號登入。</p>
      <p>在 Google Authenticator 中，點選右下角「+」→「輸入設定金鑰」，然後貼上剛才在派網上複製的金鑰，即可完成綁定</p>
      <Images name="group16" alt={"?? Pionex"} />
      <p>綁定後，驗證器 APP 會開始每 30 秒生成一組 6 位數動態碼。將這組驗證碼填入派網確認，並點擊下方的「確定」，即完成了 2FA 設定。</p>
      <Images name="group17" alt={"?? Pionex"} />
      <p>恭喜完成！之後每次登入派網時，都需要輸入驗證器生成的動態碼，帳號安全性大幅提升。開戶全部完成後，就可以下載派網APP、開始出入金與交易了！</p>
      <h2 id={slug("Step 6：HOYA BIT 入金教學")}>Step 6：HOYA BIT 入金教學</h2>
      <p>為什麼需要透過 HOYA BIT 入金？</p>
      <p>派網等國際交易所無法直接用台幣入金。幣圈最常見、最划算的做法是：先在 HOYA BIT 台幣交易所以台幣購買 USDT，再透過鏈上轉幣充值到派網。</p>
      <p>⚠️ 雖然信用卡購幣也是一個選項，但手續費遠高於鏈上轉帳，僅建議急需少量資金時使用，不建議作為主要入金方式。</p>
      <p>為什麼每個人都應該擁有一間台幣交易所帳戶？</p>
      <p>不管是要入金到派網進行交易，還是未來想把加密貨幣獲利換回台幣存回銀行，這些流程都必須透過台幣交易所才能完成。因此，在初期就開立一間台幣交易所帳戶，是最基本也最建議的做法。</p>
      <p>▶ 延伸閱讀：HOYA BIT 台灣交易所開戶教學（開戶 + 台幣入金完整流程）</p>
      <p><a href="https://hoyabit.com/signup?refCode=CwS4bxVU" target="_blank" rel="noreferrer">https://hoyabit.com/signup?refCode=CwS4bxVU</a></p>
      <p>邀請碼：CwS4bxVU</p>
      <p>新用戶優惠：完成 KYC 並購買 3,000 台幣等值加密貨幣，即可獲得 6 USDT</p>
      <p>以下將示範完整的 HOYA BIT 入金 → 派網充幣流程，按照圖示一步一步操作就可以完成：</p>
      <h3>Step1：HOYA BIT 入金</h3>
      <p>1. 在 HOYA BIT 以入金台幣，以先前綁定的銀行帳戶，轉帳至「專屬信託帳戶」</p>
      <Images name="group18" alt={"?? Pionex"} />
      <p>2. 在台幣入金後，請輸入你想用多少台幣來購買 USDT</p>
      <Images name="group19" alt={"?? Pionex"} />
      <h3>Step2：HOYA BIT 準備提幣</h3>
      <p>回到 HOYA BIT APP，點選右下角進入首頁，點選「提幣」，選擇「USDT」，並開始選擇主網</p>
      <Images name="group20" alt={"?? Pionex"} />
      <p>此時注意，選擇哪一個主網，需要依我們要「提領到哪個交易所」而定，「提領」與「充值」必須同主網，比如我們剛才選擇的 BSC。</p>
      <p>另外，單就手續費而言，BSC ≒ AVAX-C &lt; TRC20，其中 TRC20 通用性最廣，但手續費相對高一點點。</p>
      <Images name="group21" alt={"?? Pionex"} />
      <h3>Step 3：在派網取得入金地址</h3>
      <p>進入派網 APP 首頁，點擊上方的「充幣」，此時選擇 USDT 這個幣種（最主流的美元穩定幣），並選擇充幣的主網（主鏈）。</p>
      <Images name="group22" alt={"?? Pionex"} />
      <p>請依以下優先順序選擇：</p>
      <p>‧ 優先選擇 BNB Smart Chain（BEP20 或稱 BSC），手續費最低</p>
      <p>‧ 次選 TRC20（TRON），此為最通用的鏈，幾乎所有交易所都支援，手續費也低</p>
      <p>⚠️ 請記下你選擇的網路，之後在 HOYA BIT 提幣時，必須選擇完全相同的網路，否則資金將無法找回！</p>
      <p>接下來，複製派網提供的充幣地址（一長串英數字組合）。</p>
      <Images name="group23" alt={"?? Pionex"} />
      <h3>Step 4：前往 HOYA BIT 發送 USDT</h3>
      <p>將從派網複製的地址貼入「接收地址」欄位，最後點選「儲存並下一步」。此處的接收者名稱可自行填入，例如：小明；而接收錢包／平台名稱，可填入交易所名稱，比如派網。</p>
      <Images name="group24" alt={"?? Pionex"} />
      <p>輸入要提領的 USDT 數量，確認後點「確認」完成，填入手機驗證碼、Google 驗證器提供的即時驗證碼，即可完成派網入金。</p>
      <Images name="group25" alt={"?? Pionex"} />
      <p>⚠️ 重要：HOYA BIT 和派網選擇的網路必須完全一致，不同網路轉帳可能導致資金損失。</p>
      <p>等待鏈上確認（通常 5–15 分鐘），到帳後即可開始交易。</p>
      <p>延伸閱讀</p>
      <p>‧ HOYA BIT 開戶教學｜台灣交易所 + 台幣入金完整流程</p>
      <p>‧ 幣安 Binance 開戶教學</p>
      <p>‧ OKX 開戶教學</p>
      <p>‧ Bybit 開戶教學</p>
      <p>‧ Bitget 開戶教學</p>
      <p>‧ MEXC 開戶教學</p>
      <p>‧ 加密貨幣交易所完整比較推薦</p>
      <p>【各文章連結請填入】</p>
    </ArticleLayout>
  );
}
