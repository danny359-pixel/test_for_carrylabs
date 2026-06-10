import React, { useEffect } from 'react';

const exchanges = [
  { name: 'HOYA BIT', href: '/hoya-bit', available: true },
  { name: '幣安', available: false },
  { name: '派網', available: false },
  { name: 'OKX', available: false },
  { name: 'Bitget', available: false },
  { name: 'Bybit', available: false },
  { name: 'BingX', available: false },
  { name: 'Gate', available: false },
  { name: 'MEXC', available: false },
];

export default function HomePage() {
  useEffect(() => {
    document.title = '交易所註冊教學｜Carry Labs';
  }, []);

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-content">
          <p className="home-kicker">Carry Labs 教學目錄</p>
          <h1 id="home-title">交易所註冊教學</h1>
          <p className="home-intro">選擇你要查看的交易所教學。目前 HOYA BIT 已完成，其它教學會陸續補上。</p>
        </div>
      </section>

      <section className="exchange-section" aria-label="交易所文章列表">
        <div className="exchange-grid">
          {exchanges.map((exchange) => (
            <article className={`exchange-card${exchange.available ? ' is-available' : ''}`} key={exchange.name}>
              <div>
                <p className="exchange-type">交易所註冊教學</p>
                <h2>{exchange.name}</h2>
              </div>
              {exchange.available ? (
                <a className="exchange-link" href={exchange.href}>查看教學</a>
              ) : (
                <span className="exchange-pending">即將推出</span>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
