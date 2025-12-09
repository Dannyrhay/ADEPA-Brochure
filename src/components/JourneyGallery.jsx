import React from 'react';

const JourneyGallery = () => {
    // Placeholder images - will be replaced with actual photos
    const images = [
        { id: 1, aspect: 'square' },
        { id: 2, aspect: 'square' },
        { id: 3, aspect: 'square' },
        { id: 4, aspect: 'wide' },
        { id: 5, aspect: 'wide' },
    ];

    return (
        <section className="journey-gallery">
            <div className="journey-gallery__header">
                <div className="journey-gallery__header-content">
                    <h2 className="journey-gallery__title">Our Journey in Photos</h2>
                    <p className="journey-gallery__subtitle">
                        Moments that tell our story — from friendship to forever, captured in time.
                    </p>
                </div>
            </div>

            <div className="journey-gallery__grid">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`journey-gallery__item journey-gallery__item--${image.aspect}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="journey-gallery__placeholder">
                            <span className="journey-gallery__placeholder-icon">📸</span>
                            <span className="journey-gallery__placeholder-text">Photo {image.id}</span>
                        </div>
                        <div className="journey-gallery__overlay">
                            <span className="journey-gallery__zoom-icon">+</span>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .journey-gallery {
          background: var(--color-surface-dark);
          padding: var(--section-padding) clamp(1rem, 4vw, 2rem);
        }

        .journey-gallery__header {
          max-width: 1200px;
          margin: 0 auto 3rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
        }

        .journey-gallery__header-content {
          flex: 1;
        }

        .journey-gallery__title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--color-text-inverse);
          margin-bottom: 0.5rem;
          font-style: italic;
        }

        .journey-gallery__subtitle {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          color: rgba(255, 255, 255, 0.7);
          max-width: 400px;
          line-height: 1.6;
        }

        .journey-gallery__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .journey-gallery__item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .journey-gallery__item--square {
          aspect-ratio: 1;
        }

        .journey-gallery__item--wide {
          grid-column: span 1;
          aspect-ratio: 4/3;
        }

        .journey-gallery__item:nth-child(4) {
          grid-column: span 1;
        }

        .journey-gallery__item:nth-child(5) {
          grid-column: span 2;
        }

        .journey-gallery__placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(45, 90, 39, 0.3) 0%, 
            rgba(232, 160, 191, 0.2) 50%,
            rgba(242, 153, 74, 0.3) 100%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .journey-gallery__placeholder-icon {
          font-size: 2.5rem;
          opacity: 0.5;
        }

        .journey-gallery__placeholder-text {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .journey-gallery__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all var(--transition-base);
        }

        .journey-gallery__item:hover .journey-gallery__overlay {
          opacity: 1;
        }

        .journey-gallery__item:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .journey-gallery__zoom-icon {
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

        .journey-gallery__item:hover .journey-gallery__zoom-icon {
          transform: scale(1);
        }

        @media (max-width: 900px) {
          .journey-gallery__grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .journey-gallery__item:nth-child(3) {
            grid-column: span 2;
          }

          .journey-gallery__item:nth-child(4) {
            grid-column: span 1;
          }

          .journey-gallery__item:nth-child(5) {
            grid-column: span 1;
          }
        }

        @media (max-width: 600px) {
          .journey-gallery__grid {
            grid-template-columns: 1fr;
          }

          .journey-gallery__item:nth-child(3),
          .journey-gallery__item:nth-child(5) {
            grid-column: span 1;
          }

          .journey-gallery__item--wide {
            aspect-ratio: 16/9;
          }
        }
      `}</style>
        </section>
    );
};

export default JourneyGallery;
