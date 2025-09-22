import React, { useState } from 'react';
import './clock.css';

// We'll create these components in the next steps
import Timer from '../components/Timer';
import DigitalClock from '../components/DigitalClock';
import Stopwatch from '../components/Stopwatch';
// --- REMOVED: import Reminder from '../components/Reminder'; ---

function Clock() {
    const [activeTab, setActiveTab] = useState('timer');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'timer':
                return <Timer />;
            case 'clock':
                return <DigitalClock />;
            case 'stopwatch':
                return <Stopwatch />;
            // --- REMOVED: case 'reminder': ---
            default:
                return <Timer />;
        }
    };

    return (
        <div className="page-container clock-page">
            <div className="clock-container">
                {/* --- Tab Navigation --- */}
                <nav className="clock-tabs">
                    <button
                        onClick={() => setActiveTab('timer')}
                        className={activeTab === 'timer' ? 'active' : ''}
                    >
                        Timer
                    </button>
                    <button
                        onClick={() => setActiveTab('clock')}
                        className={activeTab === 'clock' ? 'active' : ''}
                    >
                        Clock
                    </button>
                    <button
                        onClick={() => setActiveTab('stopwatch')}
                        className={activeTab === 'stopwatch' ? 'active' : ''}
                    >
                        Stopwatch
                    </button>
                    {/* --- REMOVED: Reminder Button --- */}
                </nav>

                {/* --- Tab Content --- */}
                <main className="clock-content">
                    {renderTabContent()}
                </main>
            </div>
        </div>
    );
}

export default Clock;