import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for hamburger button visibility/contrast if needed
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent body scroll when menu is open
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const navLinks = [
        { title: "Home", href: "#home" },
        { title: "Welcome", href: "#welcome" },
        { title: "Love Story", href: "#lovestory" },
        { title: "Proposal", href: "#proposal" },
        { title: "Our Journey", href: "#journey" },
        { title: "Functionaries", href: "#functionaries" },
        { title: "Order of Service", href: "#order-of-service" },
        { title: "Photography", href: "#photography" },
        { title: "Pre-Wedding", href: "#pre-wedding" },
        { title: "Reception", href: "#reception" },
        { title: "Appreciation", href: "#appreciation" },
    ];

    return (
        <>
            {/* Hamburger Button */}
            <button
                className={`nav-toggle ${isOpen ? 'nav-toggle--open' : ''} ${scrolled ? 'nav-toggle--scrolled' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                <span className="nav-toggle__bar"></span>
                <span className="nav-toggle__bar"></span>
                <span className="nav-toggle__bar"></span>
            </button>

            {/* Overlay */}
            <div
                className={`nav-overlay ${isOpen ? 'nav-overlay--visible' : ''}`}
                onClick={closeMenu}
            ></div>

            {/* Side Drawer */}
            <nav className={`nav-drawer ${isOpen ? 'nav-drawer--open' : ''}`}>
                <div className="nav-drawer__header">
                    <span className="nav-drawer__title">Menu</span>
                    <button className="nav-drawer__close" onClick={closeMenu}>✕</button>
                </div>

                <ul className="nav-drawer__list">
                    {navLinks.map((link, index) => (
                        <li key={index} className="nav-drawer__item">
                            <a
                                href={link.href}
                                className="nav-drawer__link"
                                onClick={closeMenu}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-drawer__footer">
                    <span className="nav-drawer__hashtag">#ADEPA '25</span>
                </div>
            </nav>

            <style>{`
        /* Only visible on mobile/tablet (up to roughly 1024px or typical tablet landscape) */
        @media (min-width: 1025px) {
          .nav-toggle, .nav-overlay, .nav-drawer {
            display: none;
          }
        }

        /* Toggle Button */
        .nav-toggle {
            position: fixed;
            top: 1.5rem;
            right: 1.5rem;
            z-index: 10000;
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .nav-toggle--scrolled {
            background: var(--color-surface);
            border-color: var(--color-secondary-light);
        }

        .nav-toggle__bar {
            width: 24px;
            height: 2px;
            background-color: var(--color-primary);
            transition: all 0.3s ease;
            border-radius: 2px;
        }

        /* Toggle Animation */
        .nav-toggle--open .nav-toggle__bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        .nav-toggle--open .nav-toggle__bar:nth-child(2) {
            opacity: 0;
        }
        .nav-toggle--open .nav-toggle__bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }

        /* Overlay */
        .nav-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 9998;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.4s ease, visibility 0.4s;
            backdrop-filter: blur(3px);
        }

        .nav-overlay--visible {
            opacity: 1;
            visibility: visible;
        }

        /* Drawer */
        .nav-drawer {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 80%; /* Takes up most of mobile screen */
            max-width: 320px;
            background: var(--color-surface);
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: -5px 0 30px rgba(0,0,0,0.15);
            display: flex;
            flex-direction: column;
        }

        .nav-drawer--open {
            transform: translateX(0);
        }

        .nav-drawer__header {
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--color-background-alt);
        }

        .nav-drawer__title {
            font-family: var(--font-heading);
            font-size: 1.5rem;
            color: var(--color-primary);
        }

        .nav-drawer__close {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--color-text-light);
            cursor: pointer;
            padding: 0.5rem;
        }

        .nav-drawer__list {
            flex: 1;
            padding: 1rem 0;
            list-style: none;
            overflow-y: auto;
        }

        .nav-drawer__item {
            border-bottom: 1px solid rgba(0,0,0,0.03);
        }

        .nav-drawer__link {
            display: block;
            padding: 1rem 2rem;
            font-family: var(--font-heading);
            font-size: 1.25rem;
            color: var(--color-text);
            text-decoration: none;
            transition: background 0.2s, color 0.2s;
        }

        .nav-drawer__link:active {
            background: var(--color-background-alt);
            color: var(--color-primary);
        }

        .nav-drawer__footer {
            padding: 2rem;
            text-align: center;
            background: var(--color-background-alt);
        }

        .nav-drawer__hashtag {
            font-family: var(--font-body);
            color: var(--color-accent);
            letter-spacing: 0.1em;
            font-weight: 600;
        }
      `}</style>
        </>
    );
};

export default Navigation;
