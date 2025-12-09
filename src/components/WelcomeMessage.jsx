import React from 'react';

const WelcomeMessage = () => {
    const guidelines = [
        "Please set mobile phones appropriately not to disturb the program",
        "Avoid throwing of confetti, powder, water, handkerchief etc… over the couple",
        "Avoid blocking other people from witnessing the scenes"
    ];

    return (
        <section className="welcome">
            <div className="container">
                <div className="welcome__header">
                    <h2 className="welcome__title">Welcome</h2>
                    <div className="welcome__ornament">❧</div>
                </div>

                <div className="welcome__content">
                    <p className="welcome__text">
                        With hearts full of joy and gratitude, we welcome you to celebrate this special day
                        with us, the beginning of our forever journey together. Today is not just about two
                        people coming together, but about the celebration of love, faith, and friendship
                        that have guided us to this beautiful moment.
                    </p>
                    <p className="welcome__text">
                        We are deeply thankful for the family, friends, and loved ones who have supported,
                        prayed for, and shared in our story. Your presence means the world to us and makes
                        this day even more memorable.
                    </p>
                </div>

                <div className="welcome__guidelines">
                    <p className="welcome__guidelines-intro">As you support us, kindly observe the following:</p>
                    <div className="welcome__guidelines-grid">
                        {guidelines.map((guideline, index) => (
                            <div key={index} className="welcome__guideline-card">
                                <span className="welcome__guideline-number">{index + 1}</span>
                                <p className="welcome__guideline-text">{guideline}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="welcome__closing">
                    <p className="welcome__closing-text">
                        As we exchange our vows and begin this new chapter, we invite you to join us in
                        rejoicing, dancing, and creating unforgettable memories together.
                    </p>
                    <div className="welcome__signature">
                        <p className="welcome__signature-text">With love,</p>
                        <p className="welcome__signature-names">Emmanuel & Adelaide</p>
                        <p className="welcome__hashtag">#ADEPA '25</p>
                    </div>
                </div>
            </div>

            <style>{`
        .welcome {
          padding: var(--section-padding) 0;
          background-color: var(--color-surface);
        }

        .welcome__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .welcome__title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .welcome__ornament {
          font-size: 2rem;
          color: var(--color-secondary);
        }

        .welcome__content {
          max-width: 800px;
          margin: 0 auto 3rem;
          text-align: center;
        }

        .welcome__text {
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 1.5vw, 1.35rem);
          color: var(--color-text);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .welcome__guidelines {
          max-width: 1000px;
          margin: 0 auto 3rem;
        }

        .welcome__guidelines-intro {
          text-align: center;
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-style: italic;
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
        }

        .welcome__guidelines-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .welcome__guideline-card {
          background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-alt) 100%);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          border: 1px solid rgba(45, 90, 39, 0.1);
          transition: transform var(--transition-base), box-shadow var(--transition-base);
        }

        .welcome__guideline-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .welcome__guideline-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: var(--color-primary);
          color: var(--color-text-inverse);
          font-family: var(--font-heading);
          font-size: 1rem;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .welcome__guideline-text {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text);
          line-height: 1.6;
          margin: 0;
        }

        .welcome__closing {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .welcome__closing-text {
          font-family: var(--font-body);
          font-size: clamp(1.1rem, 1.5vw, 1.35rem);
          color: var(--color-text);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .welcome__signature {
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-secondary);
        }

        .welcome__signature-text {
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-style: italic;
          color: var(--color-text-light);
          margin-bottom: 0.5rem;
        }

        .welcome__signature-names {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .welcome__hashtag {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-accent);
          font-weight: 500;
          letter-spacing: 0.1em;
        }

        @media (max-width: 768px) {
          .welcome__guidelines-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default WelcomeMessage;
