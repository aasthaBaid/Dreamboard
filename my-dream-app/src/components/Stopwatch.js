import React, { useState, useEffect } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0); // Time in milliseconds
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10); // Update every 10ms
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    // Format the time
    const formatTime = () => {
        const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
        const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
        const minutes = `0${Math.floor(time / 60000)}`.slice(-2);
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <div className="feature-container stopwatch-container">
            <h2>Stopwatch</h2>
            <div className="stopwatch-display">{formatTime()}</div>
            <div className="stopwatch-controls">
                {!isActive && time === 0 && <button onClick={handleStart}>Start</button>}
                {isActive && <button onClick={handleStop}>Stop</button>}
                {!isActive && time > 0 && <button onClick={handleStart}>Resume</button>}
                {!isActive && time > 0 && <button onClick={handleReset}>Reset</button>}
            </div>
        </div>
    );
}

export default Stopwatch;