import React from 'react';
import html2pdf from 'html2pdf.js';

const DownloadPDF = ({ onClose }) => {
    const handleDownload = () => {
        // Close the menu first
        if (onClose) onClose();

        // Wait for the menu closing animation
        setTimeout(() => {
            const element = document.body;

            // Configuration for html2pdf
            const opt = {
                margin: [0.1, 0.1, 0.1, 0.1], // Minimal margin
                filename: 'adepa-brochure.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    logging: false, // Turn off logging
                    scrollY: 0,
                    windowWidth: 1440, // Force desktop width for landscape layout
                    // Ensure backgrounds are captured
                    backgroundColor: '#FDF8F5' // Matches --color-background, prevents black backgrounds if transparent
                },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
                pagebreak: {
                    mode: ['avoid-all', 'css', 'legacy'],
                    // Ensure clean breaks
                    before: [
                        '#welcome',
                        '#lovestory',
                        '#proposal',
                        '#functionaries',
                        '#order-of-service',
                        '#photography',
                        '#pre-wedding',
                        '#reception',
                        '#appreciation'
                    ]
                }
            };

            // Start the PDF generation
            html2pdf().set(opt).from(element).save();
        }, 800); // Increased wait time slightly to ensure menu is fully gone
    };

    return (
        <button
            onClick={handleDownload}
            className="nav-drawer__link"
            style={{
                width: '100%',
                textAlign: 'left',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--color-primary)',
                fontWeight: '600'
            }}
        >
            Download PDF
        </button>
    );
};

export default DownloadPDF;
