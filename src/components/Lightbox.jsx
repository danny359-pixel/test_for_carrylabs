import React from 'react';

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" type="button" aria-label="關閉圖片" onClick={onClose}>×</button>
      <img src={image.src} alt={image.alt} onClick={(event) => event.stopPropagation()} />
    </div>
  );
}
