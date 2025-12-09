import React from 'react';

const OrderOfService = () => {
    const serviceItems = [
        { time: '', event: 'Opening Prayer', person: 'Pastor Eric Fiifi Frimpong' },
        { time: '', event: 'Bridal Procession', person: '' },
        { time: '', event: 'Praise and Worship', person: 'Sis Dorothy Nelson' },
        { time: '', event: 'Offering for Church', person: 'Praise Team' },
        { time: '', event: 'Song Ministration', person: 'Youth Choir', special: true },
        { time: '', event: 'Song Ministration', person: 'Angelic Voices', special: true },
        { time: '', event: 'Dedication and Exchange of Vows', person: '', highlight: true },
        { time: '', event: 'Blessing of Marriage', person: '', highlight: true },
        { time: '', event: 'Song Ministration', person: 'Mabel Nelson', special: true },
        { time: '', event: 'Song Ministration', person: 'Min. Evans', special: true },
        { time: '', event: 'Word Ministration', person: '' },
        { time: '', event: 'Special Offering for Couple / Signing of Certificate', person: '' },
        { time: '', event: 'Song Ministration', person: 'TM Cube', special: true },
        { time: '', event: 'Presentation of Certificate', person: "Women's Ministry Leadership" },
        { time: '', event: 'Announcement', person: 'Church Secretary' },
        { time: '', event: 'Closing Prayer', person: '' },
        { time: '', event: 'Benediction', person: '' },
        { time: '', event: 'Photography', person: '' },
    ];

    return (
        <section className="order-service">
            <div className="container">
                <div className="order-service__header">
                    <h2 className="order-service__title">Order of Service</h2>
                    <div className="order-service__divider"></div>
                </div>

                <div className="order-service__timeline">
                    {serviceItems.map((item, index) => (
                        <div
                            key={index}
                            className={`order-service__item 
                ${item.highlight ? 'order-service__item--highlight' : ''} 
                ${item.special ? 'order-service__item--special' : ''}`}
                        >
                            <div className="order-service__marker">
                                <span className="order-service__number">{index + 1}</span>
                            </div>
                            <div className="order-service__content">
                                <h4 className="order-service__event">{item.event}</h4>
                                {item.person && (
                                    <p className="order-service__person">{item.person}</p>
                                )}
                            </div>
                            {item.special && <span className="order-service__music-icon">♪</span>}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .order-service {
          padding: var(--section-padding) 0;
          background: var(--color-surface);
        }

        .order-service__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .order-service__title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .order-service__divider {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          margin: 0 auto;
        }

        .order-service__timeline {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
        }

        .order-service__timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, 
            var(--color-secondary) 0%, 
            var(--color-primary) 50%, 
            var(--color-accent) 100%
          );
        }

        .order-service__item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 1rem 0;
          position: relative;
        }

        .order-service__marker {
          width: 40px;
          height: 40px;
          background: var(--color-surface);
          border: 2px solid var(--color-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 1;
          transition: all var(--transition-base);
        }

        .order-service__item:hover .order-service__marker {
          background: var(--color-secondary);
          transform: scale(1.1);
        }

        .order-service__item:hover .order-service__number {
          color: var(--color-text-inverse);
        }

        .order-service__number {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          color: var(--color-primary);
          transition: color var(--transition-base);
        }

        .order-service__content {
          flex: 1;
          padding-top: 0.5rem;
        }

        .order-service__event {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color:var(--color-text);
          margin-bottom: 0.25rem;
        }

        .order-service__person {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--color-text-muted);
          font-style: italic;
        }

        .order-service__music-icon {
          font-size: 1.2rem;
          color: var(--color-accent);
          align-self: center;
        }

        /* Highlight (Vows, Blessing) */
        .order-service__item--highlight .order-service__marker {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }

        .order-service__item--highlight .order-service__number {
          color: var(--color-text-inverse);
        }

        .order-service__item--highlight .order-service__event {
          color: var(--color-primary);
          font-size: 1.3rem;
        }

        /* Special (Music) */
        .order-service__item--special .order-service__marker {
          border-color: var(--color-accent);
        }

        .order-service__item--special .order-service__content {
          background: linear-gradient(135deg, 
            rgba(242, 153, 74, 0.05) 0%, 
            rgba(232, 160, 191, 0.05) 100%
          );
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin: -0.25rem;
        }

        @media (max-width: 600px) {
          .order-service__timeline::before {
            left: 15px;
          }

          .order-service__marker {
            width: 32px;
            height: 32px;
          }

          .order-service__number {
            font-size: 0.8rem;
          }

          .order-service__item {
            gap: 1rem;
          }
        }
      `}</style>
        </section>
    );
};

export default OrderOfService;
