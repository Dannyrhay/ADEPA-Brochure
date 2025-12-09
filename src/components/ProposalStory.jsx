import React from 'react';

const ProposalStory = () => {
    return (
        <section className="proposal">
            <div className="container">
                <div className="proposal__header">
                    <span className="proposal__label">Chapter Two</span>
                    <h2 className="proposal__title">The Proposal</h2>
                    <div className="proposal__divider"></div>
                </div>

                <div className="proposal__content">
                    <div className="proposal__date-badge">
                        <span className="proposal__date-day">1</span>
                        <span className="proposal__date-month">November</span>
                        <span className="proposal__date-year">2025</span>
                    </div>

                    <div className="proposal__story">
                        <p>
                            On the morning of November 1, 2025, what was meant to be a simple birthday breakfast
                            celebration for Esi turned into one of the most beautiful surprises of our lives.
                        </p>
                        <p>
                            Adelaide, dressed elegantly and full of excitement, was convinced by her friends to
                            be the first to step outside the room to take pictures. As she opened the door at
                            around <strong>10:30 a.m.</strong>, she was stunned to see Emmanuel standing at the
                            gate holding flowers and a ring.
                        </p>

                        <blockquote className="proposal__quote">
                            <span className="proposal__quote-mark">"</span>
                            You mentioned you were going to work this morning. You told me you wouldn't lie to
                            me— why did you lie?
                            <span className="proposal__quote-mark">"</span>
                        </blockquote>

                        <p>
                            Amid laughter and happy tears, Emmanuel went down on one knee and asked her to be
                            his forever. With joy overflowing in her heart, <strong>she said yes</strong>, marking
                            the beginning of their beautiful journey to forever.
                        </p>
                    </div>
                </div>

                <div className="proposal__ring">
                    <svg className="proposal__ring-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="60" r="25" stroke="currentColor" strokeWidth="3" fill="none" />
                        <path d="M50 35 L40 20 L50 5 L60 20 Z" fill="currentColor" />
                        <circle cx="50" cy="15" r="8" fill="var(--color-secondary)" />
                    </svg>
                </div>
            </div>

            <style>{`
        .proposal {
          padding: var(--section-padding) 0;
          background: var(--color-surface);
          position: relative;
          overflow: hidden;
        }

        .proposal__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .proposal__label {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-style: italic;
          color: var(--color-accent);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .proposal__title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .proposal__divider {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          margin: 0 auto;
        }

        .proposal__content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .proposal__date-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-text-inverse);
          padding: 1.5rem 2.5rem;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(45, 90, 39, 0.2);
        }

        .proposal__date-day {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 500;
          line-height: 1;
        }

        .proposal__date-month {
          font-family: var(--font-body);
          font-size: 1.2rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .proposal__date-year {
          font-family: var(--font-body);
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .proposal__story {
          text-align: center;
        }

        .proposal__story p {
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 1.4vw, 1.3rem);
          color: var(--color-text);
          line-height: 1.9;
          margin-bottom: 1.5rem;
        }

        .proposal__story strong {
          color: var(--color-primary);
        }

        .proposal__quote {
          background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-alt) 100%);
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
          position: relative;
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          font-style: italic;
          color: var(--color-text);
          text-align: center;
        }

        .proposal__quote-mark {
          color: var(--color-secondary);
          font-size: 2em;
          line-height: 0;
          vertical-align: middle;
        }

        .proposal__ring {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .proposal__ring-icon {
          width: 80px;
          height: 80px;
          color: var(--color-accent);
          opacity: 0.3;
        }

        @media (max-width: 768px) {
          .proposal__date-badge {
            padding: 1rem 2rem;
          }

          .proposal__date-day {
            font-size: 2.5rem;
          }

          .proposal__quote {
            padding: 1.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default ProposalStory;
