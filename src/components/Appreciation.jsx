import React from 'react';

const Appreciation = () => {
    return (
        <section className="appreciation">
            <div className="container">
                <div className="appreciation__content">
                    <div className="appreciation__icon">❤️</div>
                    <h2 className="appreciation__title">Appreciation</h2>
                    <div className="appreciation__divider"></div>

                    <div className="appreciation__text">
                        <p>
                            With hearts overflowing with gratitude, we extend our deepest thanks to everyone
                            who shared in the joy of our special day. Your love, prayers, presence, and kind
                            wishes made our wedding truly unforgettable.
                        </p>
                        <p>
                            From the laughter and tears of joy to the dancing and celebration, every moment
                            was made more meaningful because you were part of it.
                        </p>
                        <p>
                            We are especially thankful to our families, friends, and all who supported us in
                            countless ways — through your time, efforts, gifts, and words of encouragement.
                            Your love has been a beautiful reminder of how richly blessed we are.
                        </p>
                        <p>
                            As we begin this new chapter of our lives, we carry with us the warmth and memories
                            of this day, forever grateful for the people who made it so special.
                        </p>
                        <p className="appreciation__blessing">
                            May God bless you all abundantly for your love and support.
                        </p>
                    </div>

                    <div className="appreciation__signature">
                        <span className="appreciation__regards">With love and appreciation,</span>
                        <span className="appreciation__names">Mr. & Mrs. Paintsil</span>
                    </div>
                </div>
            </div>

            <style>{`
        .appreciation {
          padding: var(--section-padding) 0;
          background: linear-gradient(180deg, 
            var(--color-background) 0%, 
            var(--color-secondary-light) 50%,
            var(--color-background) 100%
          );
        }

        .appreciation__content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 3rem;
          background: var(--color-surface);
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        .appreciation__icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .appreciation__title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .appreciation__divider {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          margin: 0 auto 2rem;
        }

        .appreciation__text {
          margin-bottom: 2.5rem;
        }

        .appreciation__text p {
          font-family: var(--font-body);
          font-size: clamp(1.05rem, 1.3vw, 1.2rem);
          color: var(--color-text);
          line-height: 1.9;
          margin-bottom: 1.25rem;
        }

        .appreciation__blessing {
          font-style: italic;
          color: var(--color-primary) !important;
          font-weight: 500;
        }

        .appreciation__signature {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-secondary-light);
        }

        .appreciation__regards {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text-light);
          font-style: italic;
        }

        .appreciation__names {
          font-family: var(--font-heading);
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          color: var(--color-primary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .appreciation__content {
            padding: 2rem 1.5rem;
            border-radius: 16px;
          }
        }
      `}</style>
        </section>
    );
};

export default Appreciation;
