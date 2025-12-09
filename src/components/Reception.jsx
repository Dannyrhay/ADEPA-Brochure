import React from 'react';

const Reception = () => {
    const receptionItems = [
        { event: 'Arrival of Guests', icon: '👋' },
        { event: 'Musical Interlude', icon: '🎵' },
        { event: 'Opening Prayer', person: 'Pastor Samuel Otabil', icon: '🙏' },
        { event: 'Arrival of Bridal Party', icon: '💐', highlight: true },
        { event: 'Introduction of Chairman', icon: '🎤' },
        { event: 'Lunch', icon: '🍽️' },
        { event: 'Cutting of Cake', person: 'Mrs. Kate Nkrumah & Mrs. Dorcas Ackrong', icon: '🎂', special: true },
        { event: 'Popping of Champagne', icon: '🍾', special: true },
        { event: 'Proposal of Toast', icon: '🥂' },
        { event: "Couple's First Dance", icon: '💃', highlight: true },
        { event: 'Vote of Thanks', icon: '🙌' },
        { event: 'Closing Prayer', icon: '🙏' },
        { event: 'After Party', icon: '🎉', special: true },
    ];

    return (
        <section className="reception">
            <div className="container">
                <div className="reception__header">
                    <h2 className="reception__title">Reception</h2>
                    <div className="reception__divider"></div>
                </div>

                <div className="reception__timeline">
                    {receptionItems.map((item, index) => (
                        <div
                            key={index}
                            className={`reception__item 
                ${item.highlight ? 'reception__item--highlight' : ''} 
                ${item.special ? 'reception__item--special' : ''}`}
                        >
                            <div className="reception__icon">{item.icon}</div>
                            <div className="reception__content">
                                <h4 className="reception__event">{item.event}</h4>
                                {item.person && (
                                    <p className="reception__person">{item.person}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .reception {
          padding: var(--section-padding) 0;
          background: var(--color-surface);
        }

        .reception__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .reception__title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .reception__divider {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          margin: 0 auto;
        }

        .reception__timeline {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .reception__item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: var(--color-background);
          border-radius: 12px;
          border: 1px solid rgba(45, 90, 39, 0.08);
          transition: all var(--transition-base);
        }

        .reception__item:hover {
          transform: translateX(10px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
        }

        .reception__icon {
          font-size: 1.5rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-surface);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .reception__content {
          flex: 1;
        }

        .reception__event {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: var(--color-text);
          margin-bottom: 0.15rem;
        }

        .reception__person {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text-muted);
          font-style: italic;
        }

        /* Highlight */
        .reception__item--highlight {
          background: linear-gradient(135deg, 
            rgba(45, 90, 39, 0.08) 0%, 
            rgba(232, 160, 191, 0.08) 100%
          );
          border-color: var(--color-secondary-light);
        }

        .reception__item--highlight .reception__event {
          color: var(--color-primary);
          font-size: 1.25rem;
        }

        .reception__item--highlight .reception__icon {
          background: var(--color-primary);
          color: white;
        }

        /* Special */
        .reception__item--special {
          background: linear-gradient(135deg, 
            rgba(242, 153, 74, 0.08) 0%, 
            rgba(232, 160, 191, 0.08) 100%
          );
          border-color: var(--color-accent-light);
        }

        .reception__item--special .reception__icon {
          background: linear-gradient(135deg, var(--color-accent), var(--color-secondary));
        }

        @media (max-width: 600px) {
          .reception__item {
            padding: 0.75rem 1rem;
          }

          .reception__icon {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Reception;
