import React, { useState, useEffect } from 'react';
import './ScrollButtons.css'; // We'll create this next

function ScrollButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showScrollBottom, setShowScrollBottom] = useState(true);

    // This effect adds a 'scroll' listener to the window
    useEffect(() => {
        const checkScroll = () => {
            // Check if user has scrolled down (e.g., 300px)
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }

            // Check if user is near the bottom of the page
            // (window.innerHeight + window.scrollY) is the user's current position at the bottom of the screen
            // document.documentElement.scrollHeight is the total height of the page
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 5) {
                setShowScrollBottom(false);
            } else {
                setShowScrollBottom(true);
            }
        };

        // Add the listener
        window.addEventListener('scroll', checkScroll);

        // Cleanup: remove the listener when the component unmounts
        return () => window.removeEventListener('scroll', checkScroll);
    }, []); // Empty array means this effect runs only once

    // --- Button Click Handlers ---

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This makes it scroll smoothly
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="scroll-buttons-container">
            {/* Only show the "Scroll to Bottom" button if not at the bottom */}
            {showScrollBottom && (
                <button onClick={scrollToBottom} className="scroll-btn scroll-down" title="Scroll to Bottom">
                    &darr;
                </button>
            )}
            {/* Only show the "Scroll to Top" button if scrolled down */}
            {showScrollTop && (
                <button onClick={scrollToTop} className="scroll-btn scroll-top" title="Scroll to Top">
                    &uarr;
                </button>
            )}
        </div>
    );
}

export default ScrollButtons;