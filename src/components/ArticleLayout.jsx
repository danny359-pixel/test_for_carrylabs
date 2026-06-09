import React from 'react';
import { slug } from '../utils/slug.js';

export default function ArticleLayout({ meta, title, coverImage, coverTitle, coverSubtitle, updatedAt, tocItems, children }) {
  return (
    <main className="article-page">
      <div className="article-layout">
        <article className="article">
          <a className="back-link" href="#">← 返回教學列表</a>

          <div className="meta-row">
            <span className="unit-chip">{meta.unit}</span>
            <span>·</span>
            <span>{meta.category}</span>
            <span>·</span>
            <span>{meta.readingTime}</span>
          </div>

          <h1>{title}</h1>
          {coverImage ? (
            <img className="cover-image" src={coverImage} alt={title} />
          ) : (
            <div className="cover-placeholder">
              <div>
                <strong>{coverTitle}</strong>
                <span>{coverSubtitle}</span>
              </div>
            </div>
          )}
          <p className="date">{updatedAt}</p>

          {children}
        </article>

        <aside className="article-sidebar">
          <div className="side-card">
            <p className="side-title"># 本文目錄</p>
            <nav className="toc">
              {tocItems.map((item, index) => (
                <a className={index === 0 ? 'active' : ''} href={`#${slug(item)}`} key={item}>
                  <span></span>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="side-card series-card">
            <p className="side-title">關於本系列</p>
            <a href="#">← 查看完整教學目錄</a>
          </div>
        </aside>
      </div>
    </main>
  );
}
