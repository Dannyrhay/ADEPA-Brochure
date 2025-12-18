import React from 'react';
import imgGS from '../assets/GS.jpg';
import imgGS18 from '../assets/GS _18.jpg';
import imgGS10 from '../assets/GS _10.jpg';
import imgGS4 from '../assets/GS _4.jpg';
import imgGS7 from '../assets/GS _7.jpg';

const PreWeddingGallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Actual pre-wedding photos
  const images = [
    { id: 1, src: imgGS, aspect: 'square', alt: 'Pre-wedding photo 1' },
    { id: 2, src: imgGS18, aspect: 'square', alt: 'Pre-wedding photo 2' },
    { id: 3, src: imgGS10, aspect: 'square', alt: 'Pre-wedding photo 3' },
    { id: 4, src: imgGS4, aspect: 'wide', alt: 'Pre-wedding photo 4' },
    { id: 5, src: imgGS7, aspect: 'wide', alt: 'Pre-wedding photo 5' },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section className="prewedding-gallery" id="prewedding">
      <div className="prewedding-gallery__header">
        <div className="prewedding-gallery__header-content">
          <h2 className="prewedding-gallery__title">Pre-Wedding Photos</h2>
          <p className="prewedding-gallery__subtitle">
            A glimpse into our love story — the moments leading up to our forever.
          </p>
        </div>
      </div>

      <div className="prewedding-gallery__grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`prewedding-gallery__item prewedding-gallery__item--${image.aspect}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="prewedding-gallery__image"
              loading="lazy"
            />
            <div className="prewedding-gallery__overlay">
              <span className="prewedding-gallery__zoom-icon">+</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={closeLightbox}>&times;</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox__image" />
          </div>
        </div>
      )}

      <style>{`
        .prewedding-gallery {
          background: linear-gradient(180deg, var(--color-surface-dark) 0%, #252525 100%);
          padding: var(--section-padding) clamp(1rem, 4vw, 2rem);
        }

        .prewedding-gallery__header {
          max-width: 1200px;
          margin: 0 auto 3rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
        }

        .prewedding-gallery__header-content {
          flex: 1;
        }

        .prewedding-gallery__title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--color-text-inverse);
          margin-bottom: 0.5rem;
          font-style: italic;
        }

        .prewedding-gallery__subtitle {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          color: rgba(255, 255, 255, 0.7);
          max-width: 400px;
          line-height: 1.6;
        }

        .prewedding-gallery__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .prewedding-gallery__item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
          transition: transform var(--transition-base), box-shadow var(--transition-base);
        }

        .prewedding-gallery__item--square {
          aspect-ratio: 1;
        }

        .prewedding-gallery__item--wide {
          grid-column: span 1;
          aspect-ratio: 4/3;
        }

        .prewedding-gallery__item:nth-child(4) {
          grid-column: span 2;
        }

        .prewedding-gallery__item:nth-child(5) {
          grid-column: span 1;
        }

        .prewedding-gallery__image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          transition: transform var(--transition-slow);
          background: #000;
        }

        .prewedding-gallery__item:hover .prewedding-gallery__image {
          transform: scale(1.1);
        }

        .prewedding-gallery__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            rgba(232, 160, 191, 0.4) 0%,
            rgba(45, 90, 39, 0.4) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all var(--transition-base);
        }

        .prewedding-gallery__item:hover .prewedding-gallery__overlay {
          opacity: 1;
        }

        .prewedding-gallery__item:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .prewedding-gallery__zoom-icon {
          width: 50px;
          height: 50px;
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          transform: scale(0.8);
          transition: transform var(--transition-base);
        }

        .prewedding-gallery__item:hover .prewedding-gallery__zoom-icon {
          transform: scale(1);
        }

        /* Lightbox Styles */
        .lightbox {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            animation: fadeIn 0.3s ease-out;
            backdrop-filter: blur(5px);
        }

        .lightbox__content {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
        }

        .lightbox__image {
            max-width: 100%;
            max-height: 90vh;
            border-radius: 8px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            animation: scaleIn 0.3s ease-out;
        }

        .lightbox__close {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0.5rem;
            line-height: 1;
            transition: color 0.3s;
        }

        .lightbox__close:hover {
            color: var(--color-secondary);
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 900px) {
          .prewedding-gallery__grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .prewedding-gallery__item:nth-child(3) {
            grid-column: span 2;
          }

          .prewedding-gallery__item:nth-child(4) {
            grid-column: span 1;
          }

          .prewedding-gallery__item:nth-child(5) {
            grid-column: span 1;
          }
        }

        @media (max-width: 600px) {
          .prewedding-gallery__grid {
            grid-template-columns: 1fr;
          }

          .prewedding-gallery__item:nth-child(3),
          .prewedding-gallery__item:nth-child(4) {
            grid-column: span 1;
          }

          .prewedding-gallery__item--wide {
            aspect-ratio: 16/9;
          }
        }
      `}</style>
    </section>
  );
};

export default PreWeddingGallery;
