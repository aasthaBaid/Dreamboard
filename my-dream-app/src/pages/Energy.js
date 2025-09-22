import React, { useState } from 'react';
import './Energy.css'; // We'll create this new CSS file next

// --- Our Database of Content ---
// We define this outside the component so it doesn't get recreated on every render.
const content = {
    // Content for when energy is low
    low: {
        title: "It's perfectly okay to feel low. Here are a few things to help.",
        items: [
            { type: 'Song', title: 'Here Comes The Sun - The Beatles', desc: 'A classic, gentle song about better times coming.', emoji: '☀️' },
            { type: 'Song', title: 'Three Little Birds - Bob Marley', desc: 'A reminder that "every little thing is gonna be alright".', emoji: '🐦' },
            { type: 'Movie', title: 'My Neighbor Totoro', desc: 'A gentle, magical, and heartwarming Studio Ghibli classic.', emoji: '🌳' },
            { type: 'Movie', title: 'Paddington 2', desc: 'Widely considered one of the most wholesome and happy films ever made.', emoji: '🐻' },
            { type: 'Anime', title: 'Yuru Camp (Laid-Back Camp)', desc: 'The coziest anime about camping and friendship. Pure comfort.', emoji: '🏕️' },
            { type: 'Anime', title: 'K-On!', desc: 'A very relaxing and cute "slice of life" anime about friends in a music club.', emoji: '🎸' },
            { type: 'Activity', title: 'Go for a 5-minute walk', desc: 'Just a little movement and fresh air can make a big difference.', emoji: '🚶‍♀️' },
            { type: 'Activity', title: 'Drink a glass of water', desc: 'Sometimes you\'re just dehydrated. Take a sip!', emoji: '💧' },
        ]
    },
    // Content for when energy is in the middle
    medium: {
        title: "You're doing great. Let's keep that momentum going!",
        items: [
            { type: 'Quote', text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs', emoji: '❤️' },
            { type: 'Image', url: 'https://picsum.photos/seed/motivation1/600/400', alt: 'Inspiring landscape' },
            { type: 'Thought', text: 'What is one small thing I can do today that my future self will thank me for?', emoji: '🌱' },
            { type: 'Quote', text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill', emoji: '💪' },
        ]
    },
    // Content for when energy is high
    high: {
        title: "You're on fire! 🔥 Let's channel that amazing energy!",
        items: [
            { type: 'Image', url: 'https://picsum.photos/seed/energy2/600/400', alt: 'Person achieving a goal' },
            { type: 'Thought', text: 'Use this high energy to tackle that one important thing you\'ve been putting off.', emoji: '🚀' },
            { type: 'Quote', text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb', emoji: '🌳' },
            { type: 'Thought', text: 'Channel this momentum. What\'s the *next* big dream you can take a step towards?', emoji: '✨' },
        ]
    }
};
// --- End of Content Database ---


function Energy() {
    // State to hold the slider's value. Default to 50 (medium).
    const [energy, setEnergy] = useState(50);

    // This function is called every time the slider moves
    const handleEnergyChange = (event) => {
        setEnergy(event.target.value);
    };

    // This function determines which content to show
    const renderContent = () => {
        let contentData;

        // We use 'Number(energy)' because slider values are strings
        if (Number(energy) < 33) {
            contentData = content.low;
        } else if (Number(energy) < 66) {
            contentData = content.medium;
        } else {
            contentData = content.high;
        }

        // Now we render that content
        return (
            <div className="energy-content">
                <h2>{contentData.title}</h2>
                <div className="content-grid">
                    {contentData.items.map((item, index) => (
                        // We create a "card" for each item
                        <div className="content-card" key={index}>
                            {item.type === 'Image' ? (
                                <img src={item.url} alt={item.alt} className="card-image" />
                            ) : (
                                <div className="card-text-content">
                                    {/* Show emoji if it exists */}
                                    {item.emoji && <span className="card-emoji">{item.emoji}</span>}

                                    {/* Format based on type */}
                                    {item.type === 'Quote' && (
                                        <blockquote className="card-quote">
                                            "{item.text}"
                                            <span>- {item.author}</span>
                                        </blockquote>
                                    )}

                                    {item.type === 'Thought' && <p className="card-thought">{item.text}</p>}

                                    {(item.type === 'Song' || item.type === 'Movie' || item.type === 'Anime' || item.type === 'Activity') && (
                                        <>
                                            <strong className="card-title">{item.type}: {item.title}</strong>
                                            {item.desc && <p className="card-desc">{item.desc}</p>}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="page-container energy-page">
            <h1>Set Your Energy Level</h1>
            <p>Slide the bar to where you're at, and we'll find the right vibe for you.</p>

            {/* --- The Energy Slider --- */}
            <div className="energy-slider-container">
                <span className="slider-label">Low 🙁</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={energy}
                    onChange={handleEnergyChange}
                    className="energy-slider"
                />
                <span className="slider-label">High 😄</span>
            </div>
            <div className="current-energy-display">
                Energy: <strong>{energy}</strong>
            </div>

            <hr className="divider" />

            {/* --- The Dynamic Content --- */}
            {renderContent()}
        </div>
    );
}

export default Energy;