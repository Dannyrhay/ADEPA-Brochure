import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__thankyou">
                    <span className="footer__thankyou-text">THANK YOU</span>
                </div>

                <div className="footer__ornament">✦ ✦ ✦</div>

                <div className="footer__couple">
                    <span className="footer__initials">E</span>
                    <span className="footer__heart">♥</span>
                    <span className="footer__initials">A</span>
                </div>

                <div className="footer__hashtag">#ADEPA '25</div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Emmanuel & Adelaide Wedding
                    </p>
                    <p className="footer__blessing">Forever starts here ♥</p>
                </div>
            </div>

            <style>{`
        .footer {
          background: linear-gradient(180deg, var(--color-primary-dark) 0%, #1a2e18 100%);
          color: var(--color-text-inverse);
          padding: 4rem 1rem 2rem;
          text-align: center;
        }

        .footer__container {
          max-width: 600px;
          margin: 0 auto;
        }

        .footer__thankyou {
          margin-bottom: 2rem;
        }

        .footer__thankyou-text {
          font-family: var(--font-heading);
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 400;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, 
            var(--color-secondary) 0%, 
            var(--color-accent) 50%,
            var(--color-secondary) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer__ornament {
          font-size: 1rem;
          color: var(--color-secondary);
          letter-spacing: 1rem;
          margin-bottom: 2rem;
          opacity: 0.7;
        }

        .footer__couple {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .footer__initials {
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--color-text-inverse);
          opacity: 0.9;
        }

        .footer__heart {
          font-size: 1.5rem;
          color: var(--color-secondary);
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .footer__hashtag {
          font-family: var(--font-body);
          font-size: 1.25rem;
          color: var(--color-accent);
          letter-spacing: 0.15em;
          margin-bottom: 3rem;
        }

        .footer__bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer__copyright {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 0.5rem;
        }

        .footer__blessing {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-secondary);
          font-style: italic;
        }

        @media (max-width: 600px) {
          .footer__thankyou-text {
            font-size: 2.5rem;
            letter-spacing: 0.05em;
          }

          .footer__initials {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
