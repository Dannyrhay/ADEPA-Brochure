import React from 'react';

const LoveStory = () => {
    return (
        <section className="love-story">
            <div className="container">
                <div className="love-story__header">
                    <span className="love-story__label">Chapter One</span>
                    <h2 className="love-story__title">Our Love Story</h2>
                    <div className="love-story__divider"></div>
                </div>

                <div className="love-story__content">
                    <div className="love-story__text">
                        <p>
                            Our journey began at the <strong>University of Media, Arts and Communication</strong>,
                            where we met as course mates during our master's program. Adelaide was the very first
                            friend Emmanuel made in class, and what started as a simple friendship quickly
                            blossomed into a special bond.
                        </p>
                        <p>
                            Along with two other colleagues, we became an inseparable group known as
                            <span className="love-story__highlight"> AAYALOLO</span>. We sat close in class,
                            studied together for exams, and were often paired in the same work groups.
                        </p>
                        <p>
                            Beyond academics, our connection deepened as we shared the same faith and attended
                            prayer meetings together. Through these moments of laughter, learning, and fellowship,
                            our friendship quietly grew into something beautiful.
                        </p>
                        <p className="love-story__closing">
                            Little did we know, God was weaving a love story far greater than we ever imagined.
                        </p>
                    </div>
                    <div className="love-story__decoration">
                        <div className="love-story__frame">
                            <div className="love-story__icon">♥</div>
                            <span className="love-story__year">2023</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .love-story {
          padding: var(--section-padding) 0;
          background: linear-gradient(180deg, var(--color-background-alt) 0%, var(--color-background) 100%);
        }

        .love-story__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .love-story__label {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-style: italic;
          color: var(--color-accent);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .love-story__title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .love-story__divider {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          margin: 0 auto;
        }

        .love-story__content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 4rem;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .love-story__text p {
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 1.4vw, 1.3rem);
          color: var(--color-text);
          line-height: 1.9;
          margin-bottom: 1.5rem;
        }

        .love-story__text strong {
          color: var(--color-primary);
        }

        .love-story__highlight {
          display: inline-block;
          background: linear-gradient(120deg, var(--color-secondary-light) 0%, var(--color-secondary-light) 100%);
          background-size: 100% 40%;
          background-repeat: no-repeat;
          background-position: 0 90%;
          font-weight: 600;
          color: var(--color-text);
        }

        .love-story__closing {
          font-style: italic;
          color: var(--color-text-light) !important;
          border-left: 3px solid var(--color-secondary);
          padding-left: 1.5rem;
          margin-top: 2rem;
        }

        .love-story__decoration {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .love-story__frame {
          width: 200px;
          height: 200px;
          border: 2px solid var(--color-secondary);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--color-surface);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .love-story__frame::before {
          content: '';
          position: absolute;
          inset: -15px;
          border: 1px dashed var(--color-secondary-light);
          border-radius: 50%;
        }

        .love-story__icon {
          font-size: 3rem;
          color: var(--color-secondary);
          margin-bottom: 0.5rem;
        }

        .love-story__year {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--color-primary);
        }

        @media (max-width: 900px) {
          .love-story__content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .love-story__decoration {
            order: -1;
          }

          .love-story__frame {
            width: 150px;
            height: 150px;
          }

          .love-story__icon {
            font-size: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default LoveStory;
