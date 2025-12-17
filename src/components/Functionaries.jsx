import React from 'react';

const Functionaries = () => {
  const clergy = [
    { name: 'Very Rev. Dr. Abraham Boateng', title: 'Counselor and Lecturer, Trinity Theological Seminary' },
    { name: 'Rev. Patrick Darko', title: 'Gen. Superintendent ETBM' },
    { name: 'Prophet Stephen ASK Ackrong', title: 'Focus Outreach Ministry' },
    { name: 'Apostle Stephen Gyan', title: 'Kings Love Chapel International' },
    { name: 'Pastor Nathaniel Osei Appiah', title: 'Elaia City Church' },
    { name: 'Rev. Kofi Asante', title: 'Elaia City Church' },
    { name: 'Rev. Amponsah Baah', title: 'Elaia City Church' },
    { name: 'Rev. Prof. Benjamin Abuaku', title: 'Elaia City Church' },
    { name: 'Rev. Degraft Donkor', title: 'GPCC Mataheko Zone Chairman and Head Pas. Assemblies Of God' },
    { name: 'Pastor John Eduful', title: '' },
    { name: 'Pastor Felix Godson Addo', title: '' },
    { name: 'Pastor George Nkansah', title: '' },
    { name: 'Pastor Samuel Otabil', title: 'Seventh Day Adventist, Swedru' },
  ];

  const choirs = ['Youth Choir', 'TM Cube', 'Angelic Voices'];

  const bridalTeam = ['Portia Darko', 'Priscilla Sangbey', 'Eunice Pera Amobire', 'Amanda Otuwa'];

  const groomsmen = ['Erasmus Sam', 'Cephas Patrick Darko', 'Ebenezer Paintsil', 'Deborah Naa Norley Adom'];

  const champagnePoppers = [
    'Yohannes Dorgbazi', 'Barbara Armah', 'Selasie Atani', 'Abraham Ofori Henaku',
    'Benjamin Degraft Donkor', 'Kwaku Sarpong Debrah', 'Erasmus Sam', 'Baaba Daniels',
    'Enoch Zoli', 'Derrick Opoku', 'Neil Armstrong Mortagbe'
  ];

  const mcs = ['Tracy Amo Nyarko', 'Grace Baah Buckman (BuckmanVoicedIt)'];

  const giftTable = ['Nancy Benine', 'Rejoice Adobea Addo'];

  return (
    <section className="functionaries">
      <div className="container">
        <div className="functionaries__header">
          <h2 className="functionaries__title">Functionaries</h2>
          <div className="functionaries__divider"></div>
        </div>

        {/* Couple Section */}
        <div className="functionaries__couple">
          <div className="functionaries__couple-card functionaries__couple-card--groom">
            <span className="functionaries__role-label">Groom</span>
            <h3 className="functionaries__couple-name">Emmanuel Paintsil</h3>
          </div>
          <div className="functionaries__couple-heart">♥</div>
          <div className="functionaries__couple-card functionaries__couple-card--bride">
            <span className="functionaries__role-label">Bride</span>
            <h3 className="functionaries__couple-name">Adelaide M. S. Darko</h3>
          </div>
        </div>

        {/* Best Man & Maid of Honor */}
        <div className="functionaries__honor">
          <div className="functionaries__honor-card">
            <span className="functionaries__role-badge">Best Man</span>
            <p className="functionaries__honor-name">Eric Annor Nyinaku</p>
          </div>
          <div className="functionaries__honor-card">
            <span className="functionaries__role-badge">Maid of Honor</span>
            <p className="functionaries__honor-name">Hannah Amoako Attah</p>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="functionaries__grid">
          <div className="functionaries__card">
            <h4 className="functionaries__card-title">Bridal Team</h4>
            <ul className="functionaries__list">
              {bridalTeam.map((name, i) => (
                <li key={i} className="functionaries__list-item">{name}</li>
              ))}
            </ul>
          </div>

          <div className="functionaries__card">
            <h4 className="functionaries__card-title">Groomsmen</h4>
            <ul className="functionaries__list">
              {groomsmen.map((name, i) => (
                <li key={i} className="functionaries__list-item">{name}</li>
              ))}
            </ul>
          </div>

          <div className="functionaries__card">
            <h4 className="functionaries__card-title">Choirs</h4>
            <ul className="functionaries__list">
              {choirs.map((name, i) => (
                <li key={i} className="functionaries__list-item">{name}</li>
              ))}
            </ul>
          </div>

          <div className="functionaries__card">
            <h4 className="functionaries__card-title">MC</h4>
            <ul className="functionaries__list">
              {mcs.map((name, i) => (
                <li key={i} className="functionaries__list-item">{name}</li>
              ))}
            </ul>
          </div>

          <div className="functionaries__card">
            <h4 className="functionaries__card-title">Gift Table</h4>
            <ul className="functionaries__list">
              {giftTable.map((name, i) => (
                <li key={i} className="functionaries__list-item">{name}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Champagne Poppers */}
        <div className="functionaries__poppers">
          <h4 className="functionaries__section-title">Champagne Poppers</h4>
          <div className="functionaries__poppers-grid">
            {champagnePoppers.map((name, i) => (
              <span key={i} className="functionaries__popper-tag">{name}</span>
            ))}
          </div>
        </div>

        {/* Officiating Clergy */}
        <div className="functionaries__clergy">
          <h4 className="functionaries__section-title">Officiating Clergy</h4>
          <div className="functionaries__clergy-list">
            {clergy.map((person, i) => (
              <div key={i} className="functionaries__clergy-item">
                <span className="functionaries__clergy-name">{person.name}</span>
                {person.title && <span className="functionaries__clergy-title">{person.title}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Cake Cutting */}
        <div className="functionaries__special">
          <div className="functionaries__special-card">
            <span className="functionaries__special-label">Cutting of Cake</span>
            <p className="functionaries__special-names">Mrs. Kate Nkrumah & Mrs. Dorcas Ackrong</p>
          </div>
        </div>
      </div>

      <style>{`
        .functionaries {
          padding: var(--section-padding) 0;
          background: linear-gradient(180deg, var(--color-background) 0%, var(--color-background-alt) 100%);
        }

        .functionaries__header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .functionaries__title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .functionaries__divider {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
          margin: 0 auto;
        }

        /* Couple Section */
        .functionaries__couple {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .functionaries__couple-card {
          text-align: center;
          padding: 2rem 3rem;
          background: var(--color-surface);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(45, 90, 39, 0.1);
        }

        .functionaries__role-label {
          font-family: var(--font-body);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-accent);
        }

        .functionaries__couple-name {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--color-primary);
          margin-top: 0.5rem;
        }

        .functionaries__couple-heart {
          font-size: 2rem;
          color: var(--color-secondary);
        }

        /* Honor Section */
        .functionaries__honor {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .functionaries__honor-card {
          text-align: center;
          padding: 1.5rem 2.5rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          border-radius: 12px;
          color: var(--color-text-inverse);
        }

        .functionaries__role-badge {
          font-family: var(--font-body);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          opacity: 0.8;
        }

        .functionaries__honor-name {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          margin-top: 0.3rem;
        }

        /* Grid Cards */
        .functionaries__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .functionaries__card {
          background: var(--color-surface);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(45, 90, 39, 0.1);
        }

        .functionaries__card-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-secondary-light);
        }

        .functionaries__list {
          list-style: none;
        }

        .functionaries__list-item {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text);
          padding: 0.4rem 0;
          padding-left: 1rem;
          position: relative;
        }

        .functionaries__list-item::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--color-secondary);
          font-size: 0.6rem;
        }

        /* Section Title */
        .functionaries__section-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--color-primary);
          text-align: center;
          margin-bottom: 1.5rem;
        }

        /* Champagne Poppers */
        .functionaries__poppers {
          margin-bottom: 3rem;
        }

        .functionaries__poppers-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
        }

        .functionaries__popper-tag {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text);
          background: var(--color-surface);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--color-secondary-light);
          transition: all var(--transition-fast);
        }

        .functionaries__popper-tag:hover {
          background: var(--color-secondary-light);
          transform: translateY(-2px);
        }

        /* Clergy */
        .functionaries__clergy {
          margin-bottom: 3rem;
        }

        .functionaries__clergy-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        .functionaries__clergy-item {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          background: var(--color-surface);
          border-radius: 8px;
          border-left: 3px solid var(--color-primary);
        }

        .functionaries__clergy-name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          color: var(--color-text);
        }

        .functionaries__clergy-title {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-style: italic;
        }

        /* Special Section */
        .functionaries__special {
          display: flex;
          justify-content: center;
        }

        .functionaries__special-card {
          text-align: center;
          padding: 1.5rem 2.5rem;
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
          border-radius: 12px;
          color: var(--color-text-inverse);
        }

        .functionaries__special-label {
          font-family: var(--font-body);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          opacity: 0.9;
        }

        .functionaries__special-names {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          margin-top: 0.3rem;
        }

        @media (max-width: 768px) {
          .functionaries__couple {
            flex-direction: column;
            gap: 1rem;
          }

          .functionaries__couple-heart {
            transform: rotate(90deg);
          }

          .functionaries__honor {
            flex-direction: column;
            align-items: center;
          }

          .functionaries__clergy-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Functionaries;
