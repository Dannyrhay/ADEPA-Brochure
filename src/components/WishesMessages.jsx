import React from 'react';

const WishesMessages = () => {
  return (
    <section className="wishes-section">
      <div className="container">
        <div className="wishes-header">
          <span className="wishes-label">Share Your Love</span>
          <h2 className="wishes-title">Wishes & Messages</h2>
          <div className="wishes-divider"></div>
        </div>

        <div className="wishes-content">
          <div className="form-card">
            <p className="wishes-intro">
              We would love to hear from you! Please leave your wishes, advice, and messages for us below.
            </p>
            <div className="iframe-container">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScD2pm4Azrgn6-KL2iN6YKtBnm8yM5ZRj6rRv7FQfDYsKUuSA/viewform?embedded=true"
                width="640"
                height="900"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Wishes and Messages Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .wishes-section {
          padding: var(--section-padding) 0;
          background-color: var(--color-background-alt);
          position: relative;
        }

        .wishes-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .wishes-label {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-style: italic;
          color: var(--color-accent);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .wishes-title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .wishes-divider {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          margin: 0 auto;
        }

        .wishes-content {
          display: flex;
          justify-content: center;
          padding: 0 1rem;
        }

        .form-card {
          background-color: var(--color-surface);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
          width: 100%;
          max-width: 800px;
        }

        .wishes-intro {
          text-align: center;
          margin-bottom: 2rem;
          font-family: var(--font-body);
          font-size: 1.2rem;
          color: var(--color-text-light);
        }

        .iframe-container {
          width: 100%;
          display: flex;
          justify-content: center;
          overflow: hidden;
          /* Optional: Add a subtle border or styling around the form area itself */
        }

        iframe {
          max-width: 100%;
          /* We don't force height here to allow the iframe attribute to control it, 
             but we ensure width is responsive */
        }

        @media (max-width: 768px) {
          .form-card {
            padding: 1.5rem 1rem;
            border-radius: 15px;
          }
          
          /* On mobile, we might want to let the form take more width */
          .wishes-content {
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default WishesMessages;
