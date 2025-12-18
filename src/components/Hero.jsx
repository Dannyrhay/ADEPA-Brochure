import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__ornament">✦</div>
        <p className="hero__pretext">Together with their families</p>
        <h1 className="hero__names">
          <span className="hero__name">Paintsil</span>
          <span className="hero__ampersand">&</span>
          <span className="hero__name">Adelaide</span>
        </h1>
        <p className="hero__posttext">Request the pleasure of your company</p>
        <div className="hero__date-container">
          <div className="hero__line"></div>
          <p className="hero__date">December 2025</p>
          <div className="hero__line"></div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, var(--color-background) 0%, var(--color-background-alt) 100%);
          padding: var(--section-padding) 1rem;
          position: relative;
          overflow: hidden;
        }

        .hero::before,
        .hero::after {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          opacity: 0.1;
        }

        .hero::before {
          top: -100px;
          left: -100px;
          background: var(--color-secondary);
        }

        .hero::after {
          bottom: -100px;
          right: -100px;
          background: var(--color-accent);
        }

        .hero__container {
          text-align: center;
          position: relative;
          z-index: 1;
          animation: fadeInUp 1s ease forwards;
        }

        .hero__ornament {
          font-size: 2rem;
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
        }

        .hero__pretext {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          font-style: italic;
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
          letter-spacing: 0.1em;
        }

        .hero__names {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .hero__name {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 400;
          color: var(--color-primary);
          line-height: 1.1;
        }

        .hero__ampersand {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          font-style: italic;
          color: var(--color-accent);
        }

        .hero__posttext {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          color: var(--color-text-light);
          margin-bottom: 2rem;
          letter-spacing: 0.05em;
        }

        .hero__date-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .hero__line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
        }

        .hero__date {
          font-family: var(--font-heading);
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          color: var(--color-text);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 50vh;
            padding: 4rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
