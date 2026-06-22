import React, { useEffect, useState } from 'react';
import Topbar from './components/Topbar.jsx';
import Lightbox from './components/Lightbox.jsx';
import HomePage from './pages/HomePage.jsx';
import HoyaBitPage from './pages/HoyaBitPage.jsx';
import MexcPage from './pages/MexcPage.jsx';
import BingXPage from './pages/BingXPage.jsx';
import BinancePage from './pages/BinancePage.jsx';
import GatePage from './pages/GatePage.jsx';
import OkxPage from './pages/OkxPage.jsx';
import BitgetPage from './pages/BitgetPage.jsx';
import PionexPage from './pages/PionexPage.jsx';
import BybitPage from './pages/BybitPage.jsx';

const articles = {
  '/': HomePage,
  '/hoya-bit': HoyaBitPage,
  '/mexc': MexcPage,
  '/bingx': BingXPage,
  '/binance': BinancePage,
  '/gate': GatePage,
  '/okx': OkxPage,
  '/bitget': BitgetPage,
  '/pionex': PionexPage,
  '/bybit': BybitPage,
};

export default function App() {
  const [lightbox, setLightbox] = useState(null);
  const Page = articles[window.location.pathname] || HomePage;

  useEffect(() => {
    const open = (event) => setLightbox(event.detail);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(null);
    };

    window.addEventListener('open-lightbox', open);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('open-lightbox', open);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <>
      <Topbar />
      <Page />
      <footer className="site-footer">
        <p>Carry Labs 專注於加密市場套利研究，提供量化訊號、套利工具與相關教學內容。本網站內容僅供參考，不構成投資建議、交易建議或收益保證。加密資產交易具有高度風險，使用者應自行評估並承擔相關風險。</p>
        <p>© 2025 Carry Labs. All rights reserved.</p>
      </footer>
      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}
