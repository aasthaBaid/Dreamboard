import React, { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    const [theme, setTheme] = useState('theme-light'); // 'theme-light', 'theme-dark', 'theme-gradient'

    // Update the time every second
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup
        return () => clearInterval(timerId);
    }, []); // Empty array means this runs only once on mount

    // Format the time
    const formattedTime = time.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return (
        <div className={`feature-container digital-clock-container ${theme}`}>
            <h2>Current Time</h2>
            <div className="digital-clock-display">
                {formattedTime}
            </div>
            <div className="clock-themes">
                <p>Themes:</p>
                <button onClick={() => setTheme('theme-light')}>Light</button>
                <button onClick={() => setTheme('theme-dark')}>Dark</button>
                <button onClick={() => setTheme('theme-gradient')}>Gradient</button>
            </div>
        </div>
    );
}

export default DigitalClock;