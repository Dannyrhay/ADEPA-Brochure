import React from 'react';

const PhotographyOrder = () => {
    const photoSessions = [
        'Ministers and spouses',
        'Parents of the bride',
        'Both parents',
        'Parents of the groom',
        "Groom's family",
        'Both families',
        "Bride's family",
        'Siblings of bride and groom',
        'Evangelist Temple',
        'Elaia City Church/Lighthouse',
        'Focus Outreach Movement',
        'TM Cube',
        'Staff of Food & Drugs Authority',
        'Staff of Aayalolo',
        'Old students of Crown Prince',
        'Old students of Wesley Girls Senior High School',
        'Old students of University of Media, Arts & Communication',
        'Friends of the bride',
        'Friends of the Groom',
        'Bridesmaids',
        'Groomsmen/woman',
        'Exclusives',
    ];

    return (
        <section className="photography">
            <div className="container">
                <div className="photography__header">
                    <h2 className="photography__title">Order of Photography</h2>
                    <p className="photography__subtitle">Bride & Groom with:</p>
                    <div className="photography__divider"></div>
                </div>

                <div className="photography__grid">
                    {photoSessions.map((session, index) => (
                        <div key={index} className="photography__item">
                            <span className="photography__number">{String(index + 1).padStart(2, '0')}</span>
                            <span className="photography__text">{session}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .photography {
          padding: var(--section-padding) 0;
          background: linear-gradient(180deg, var(--color-background-alt) 0%, var(--color-background) 100%);
        }

        .photography__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .photography__title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .photography__subtitle {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--color-text-light);
          font-style: italic;
          margin-bottom: 1rem;
        }

        .photography__divider {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          margin: 0 auto;
        }

        .photography__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 0.75rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .photography__item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: var(--color-surface);
          border-radius: 8px;
          border: 1px solid rgba(45, 90, 39, 0.08);
          transition: all var(--transition-base);
        }

        .photography__item:hover {
          transform: translateX(5px);
          border-color: var(--color-secondary);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .photography__number {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          color: var(--color-secondary);
          font-weight: 600;
          min-width: 24px;
        }

        .photography__text {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text);
        }

        @media (max-width: 600px) {
          .photography__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default PhotographyOrder;
