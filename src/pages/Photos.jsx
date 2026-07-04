import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../data/siteContent.js';

export function Photos() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef(null);
  const activePhoto = activeIndex === null ? null : siteContent.photos[activeIndex];

  const goToPhoto = (direction) => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex + direction + siteContent.photos.length) % siteContent.photos.length;
    });
  };

  const resetDrag = () => {
    dragStartRef.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleDragStart = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartRef.current = event.clientX;
    setIsDragging(true);
  };

  const handleDragMove = (event) => {
    if (dragStartRef.current === null) {
      return;
    }

    const nextOffset = event.clientX - dragStartRef.current;
    setDragOffset(Math.max(-180, Math.min(180, nextOffset)));
  };

  const handleDragEnd = () => {
    if (dragStartRef.current === null) {
      return;
    }

    if (dragOffset <= -80) {
      goToPhoto(1);
    }

    if (dragOffset >= 80) {
      goToPhoto(-1);
    }

    resetDrag();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }

      if (event.key === 'ArrowRight' && activeIndex !== null) {
        goToPhoto(1);
      }

      if (event.key === 'ArrowLeft' && activeIndex !== null) {
        goToPhoto(-1);
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
            onClick={() => goToPhoto(-1)}
            type="button"
          >
            ‹
          </button>
          <figure
            className={isDragging ? 'lightbox-content lightbox-content-dragging' : 'lightbox-content'}
            onPointerCancel={resetDrag}
            onPointerDown={handleDragStart}
            onPointerMove={handleDragMove}
            onPointerUp={handleDragEnd}
            style={{
              '--drag-offset': `${dragOffset}px`,
              '--drag-opacity': `${1 - Math.min(Math.abs(dragOffset) / 360, 0.28)}`,
            }}
          >
            <img src={activePhoto.src} alt={activePhoto.alt} draggable="false" />
            <figcaption>
              <strong>{activePhoto.title}</strong>
              <span>{activePhoto.caption}</span>
            </figcaption>
          </figure>
          <button
            className="lightbox-nav lightbox-next"
            onClick={() => goToPhoto(1)}
            type="button"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
