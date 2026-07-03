import { useEffect, useState } from 'react';
import { siteContent } from '../data/siteContent.js';

export function Photos() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activePhoto = activeIndex === null ? null : siteContent.photos[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }

      if (event.key === 'ArrowRight' && activeIndex !== null) {
        setActiveIndex((activeIndex + 1) % siteContent.photos.length);
      }

      if (event.key === 'ArrowLeft' && activeIndex !== null) {
        setActiveIndex((activeIndex - 1 + siteContent.photos.length) % siteContent.photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <section className="gallery-page">
      <div className="section-inner">
        <div className="section-title reveal-up">
          <p className="figma-kicker">Registros do momento</p>
          <h1>Fotos</h1>
        </div>

        <div className="masonry-gallery">
          {siteContent.photos.map((photo, index) => (
            <button
              className="masonry-card reveal-up"
              key={photo.src}
              onClick={() => setActiveIndex(index)}
              style={{ animationDelay: `${index * 80}ms` }}
              type="button"
            >
              <span className="masonry-image-wrap">
                <img src={photo.thumb ?? photo.src} alt={photo.alt} loading="lazy" />
                <span className="masonry-overlay">
                  <strong>{photo.title}</strong>
                  <em>{photo.caption}</em>
                </span>
              </span>
              <span className="masonry-caption">{photo.title}</span>
            </button>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activePhoto.title}>
          <button className="lightbox-backdrop" onClick={() => setActiveIndex(null)} type="button">
            <span className="sr-only">Fechar galeria</span>
          </button>
          <button className="lightbox-close" onClick={() => setActiveIndex(null)} type="button">
            ×
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={() =>
              setActiveIndex((activeIndex - 1 + siteContent.photos.length) % siteContent.photos.length)
            }
            type="button"
          >
            ‹
          </button>
          <figure className="lightbox-content">
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <figcaption>
              <strong>{activePhoto.title}</strong>
              <span>{activePhoto.caption}</span>
            </figcaption>
          </figure>
          <button
            className="lightbox-nav lightbox-next"
            onClick={() => setActiveIndex((activeIndex + 1) % siteContent.photos.length)}
            type="button"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
