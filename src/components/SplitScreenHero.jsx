import React from 'react';
import heroImage from '../assets/hero-image.jpg';

const SplitScreenHero = () => {
  return (
    <section className="split-hero">
      <div className="split-hero__left">
        <div className="split-hero__image-container"></div>
      </div>
      <div className="split-hero__right">
        <div className="split-hero__content">
          <span className="split-hero__subtitle">Join us in celebrating</span>
          <h1 className="split-hero__title">ADEPA</h1>
          <span className="split-hero__year">'25</span>
          <div className="split-hero__line"></div>
          <p className="split-hero__tagline">A Love Story Worth Celebrating</p>
        </div>
      </div>

      <style>{`
        .split-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          width: 100%;
        }

        .split-hero__left {
          position: relative;
          background-color: var(--color-primary-dark);
          overflow: hidden;
        }

        .split-hero__image-container {
          position: absolute;
          inset: 0;
          background-image: url(${heroImage});
          background-size: cover;
          background-position: center;
          /* Add a subtle overlay to ensure text contrast if needed, 
             though text is on the right side. 
             This overlay adds a bit of warmth/theme color binding */
          box-shadow: inset 0 0 0 1000px rgba(45, 90, 39, 0.1); 
          transition: transform 10s ease;
        }
        
        .split-hero:hover .split-hero__image-container {
          transform: scale(1.05);
        }

        .split-hero__right {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-background);
          padding: 2rem;
        }

        .split-hero__content {
          text-align: center;
          animation: fadeInUp 1s ease forwards;
        }

        .split-hero__subtitle {
          display: block;
          font-family: var(--font-body);
          font-size: clamp(0.9rem, 1.5vw, 1.2rem);
          font-style: italic;
          color: var(--color-text-light);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .split-hero__title {
          font-family: var(--font-heading);
          font-size: clamp(4rem, 12vw, 10rem);
          font-weight: 400;
          color: var(--color-primary);
          line-height: 0.9;
          letter-spacing: 0.05em;
          margin: 0;
        }

        .split-hero__year {
          display: block;
          font-family: var(--font-heading);
          font-size: clamp(2rem, 6vw, 5rem);
          font-weight: 300;
          color: var(--color-accent);
          margin-top: -0.5rem;
        }

        .split-hero__line {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          margin: 2rem auto;
        }

        .split-hero__tagline {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          color: var(--color-text-muted);
          font-style: italic;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .split-hero {
            grid-template-columns: 1fr;
            /* Give more height to the image on mobile as requested */
            grid-template-rows: 60vh auto;
          }

          .split-hero__right {
            padding: 3rem 1.5rem;
          }

          .split-hero__title {
            font-size: 5rem;
          }

          .split-hero__year {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SplitScreenHero;
