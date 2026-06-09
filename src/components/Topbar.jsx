import React from 'react';

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="topbar-logo" href="/">
          <img src="/carry-labs-logo.png" alt="Carry Labs" />
        </a>
        <nav className="topbar-nav">
          <a href="#">首頁</a>
          <a href="#">產品介紹</a>
          <a href="#">陪跑營</a>
          <a href="#">開通會員</a>
          <a href="#">加入社群</a>
          <a href="#">教學文章⌄</a>
        </nav>
        <div className="topbar-actions">
          <a className="cta-button" href="#">套利訊號</a>
          <span className="user-circle">◎</span>
          <a className="admin-link" href="#">後台管理</a>
        </div>
      </div>
    </header>
  );
}
