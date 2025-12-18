import React, { useEffect, useState } from 'react';

const Loader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(onLoaded, 800); // Wait for fade out animation
          return 100;
        }
        return prev + 1; // Slower progress
      });
    }, 30); // 30ms * 100 = 3000ms total duration

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <div className={`loader ${isFading ? 'loader--fading' : ''}`}>
      <div className="loader__content">
        <div className="loader__heart">♥</div>
        <h1 className="loader__title">ADEPA '25</h1>
        <p className="loader__subtitle">Paintsil & Adelaide</p>

        <div className="loader__progress-container">
          <div className="loader__progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <p className="loader__percentage">{progress}%</p>
      </div>

      <style>{`
        .loader {
          position: fixed;
          inset: 0;
          background: var(--color-primary-dark);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.8s ease-in-out, visibility 0.8s;
        }

        .loader--fading {
          opacity: 0;
          visibility: hidden;
        }

        .loader__content {
          text-align: center;
          color: var(--color-surface);
        }

        .loader__heart {
          font-size: 3rem;
          color: var(--color-secondary);
          margin-bottom: 1rem;
          animation: heartBeat 1.2s infinite ease-in-out;
        }

        .loader__title {
          font-family: var(--font-heading);
          font-size: clamp(3rem, 5vw, 5rem);
          margin-bottom: 0.5rem;
          letter-spacing: 0.1em;
          color: var(--color-surface);
        }

        .loader__subtitle {
          font-family: var(--font-body);
          font-size: 1.2rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 3rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .loader__progress-container {
          width: 300px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          margin: 0 auto 1rem;
          overflow: hidden;
          position: relative;
        }

        .loader__progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          transition: width 0.1s linear;
          position: relative;
        }

        .loader__progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 1s infinite;
        }

        .loader__percentage {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-accent);
          font-feature-settings: "tnum";
          font-variant-numeric: tabular-nums;
        }

        @keyframes heartBeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 600px) {
          .loader__progress-container {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
