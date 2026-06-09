import React from 'react';

export default function ImageGallery({ images, basePath, alt }) {
  return (
    <div className={`article-images count-${images.length}`}>
      {images.map((name) => {
        const src = `${basePath}/${name}.png`;
        return (
          <figure className="article-image" key={name}>
            <button
              className="image-button"
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src, alt: `${alt} ${name}` } }))}
            >
              <img src={src} alt={`${alt} ${name}`} loading="lazy" />
            </button>
          </figure>
        );
      })}
    </div>
  );
}
