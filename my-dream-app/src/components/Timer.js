import React, { useState, useEffect } from 'react';

// Put an alarm sound in your `public` folder
const alarmSound = '/alarm.mp3';

function Timer() {
    // --- New state for durations ---
    const [studyDuration, setStudyDuration] = useState(25);
    const [breakDuration, setBreakDuration] = useState(5);

    // --- Timer state ---
    const [minutes, setMinutes] = useState(studyDuration); // Use state for default
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState('study'); // 'study' or 'break'

    // --- Timer Engine ---
    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    // Timer reached zero
                    playAlarm();
                    if (mode === 'study') {
                        // Switch to break
                        setMode('break');
                        alert(`Study session over! Time for a ${breakDuration}-minute break.`);
                        setMinutes(breakDuration);
                    } else {
                        // Switch to study
                        setMode('study');
                        alert(`Break is over! Time for your ${studyDuration}-minute study session.`);
                        setMinutes(studyDuration);
                    }
                    setIsActive(false); // Stop the timer
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        // Cleanup function
        return () => clearInterval(interval);
    }, [isActive, seconds, minutes, mode, studyDuration, breakDuration]);

    const playAlarm = () => {
        new Audio(alarmSound).play();
    };

    // --- Control Functions ---
    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    // This function applies any settings (preset or custom)
    const applySettings = (studyMins, breakMins) => {
        setStudyDuration(studyMins);
        setBreakDuration(breakMins);

        setIsActive(false); // Stop timer
        setMode('study');    // Reset to study mode
        setMinutes(studyMins); // Set timer to new study time
        setSeconds(0);
    };

    // Format time to 00:00
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return (
        <div className="feature-container timer-container">
            <h2>{mode === 'study' ? 'Study Timer' : 'Break Time!'}</h2>
            <div className="timer-display">{formattedTime}</div>
            <div className="timer-controls">
                <button onClick={toggleTimer} className="timer-start-stop">
                    {isActive ? 'Pause' : 'Start'}
                </button>
                {/* This button resets the timer with the current custom values */}
                <button onClick={() => applySettings(studyDuration, breakDuration)} className="timer-reset">
                    Reset
                </button>
            </div>

            {/* --- NEW: Custom Inputs --- */}
            <div className="timer-custom-inputs">
                <div className="form-group">
                    <label>Study (mins):</label>
                    <input
                        type="number"
                        value={studyDuration}
                        onChange={(e) => setStudyDuration(Number(e.target.value))}
                        min="1"
                    />
                </div>
                <div className="form-group">
                    <label>Break (mins):</label>
                    <input
                        type="number"
                        value={breakDuration}
                        onChange={(e) => setBreakDuration(Number(e.target.value))}
                        min="1"
                    />
                </div>
            </div>

            <div className="timer-presets">
                <p>Or use presets:</p>
                <button onClick={() => applySettings(25, 5)}>25 / 5</button>
                <button onClick={() => applySettings(60, 10)}>60 / 10</button>
            </div>
        </div>
    );
}

export default Timer;