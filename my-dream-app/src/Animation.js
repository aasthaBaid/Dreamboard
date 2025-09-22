import React, { useState, useEffect } from 'react';
import './Animation.css';


import img1 from './images/image1.jpeg';
import img2 from './images/image2.jpeg';
import img3 from './images/image3.jpeg';
import img4 from './images/image4.jpeg';
import img5 from './images/image5.jpeg';
import img6 from './images/image6.jpeg';
import img7 from './images/image7.jpeg';
import img8 from './images/image8.jpeg';
import img9 from './images/image9.jpeg';
import img10 from './images/image10.jpeg';
import img11 from './images/image11.jpeg';
import img12 from './images/image12.jpeg';
import img13 from './images/image3.jpeg';
import img14 from './images/image14.jpeg';
import img15 from './images/image5.jpeg';
import img16 from './images/image16.jpeg';
import img17 from './images/image7.jpeg';
import img18 from './images/image18.jpeg';
import img19 from './images/image19.jpeg';

// (The 'quotes' array is unchanged)
const quotes = [
    { "quote": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney" },
    { "quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt" },
    { "quote": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius" },
    { "quote": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
    { "quote": "Your time is limited, don't waste it living someone else's life.", "author": "Steve Jobs" },
    { "quote": "The only person you are destined to become is the person you decide to be.", "author": "Ralph Waldo Emerson" },
    { "quote": "Go confidently in the direction of your dreams! Live the life you've imagined.", "author": "Henry David Thoreau" },
    { "quote": "The two most important days in your life are the day you are born and the day you find out why.", "author": "Mark Twain" },
    { "quote": "The best way to predict the future is to create it.", "author": "Peter Drucker" },
    { "quote": "You miss 100% of the shots you don't take.", "author": "Wayne Gretzky" },
    { "quote": "I have not failed. I've just found 10,000 ways that won't work.", "author": "Thomas A. Edison" },
    { "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.", "author": "Zig Ziglar" },
    { "quote": "Act as if what you do makes a difference. It does.", "author": "William James" },
    { "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill" },
    { "quote": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis" },
    { "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "author": "Ralph Waldo Emerson" },
    { "quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt" },
    { "quote": "It is our choices that show what we truly are, far more than our abilities.", "author": "J.K. Rowling" },
    { "quote": "The journey of a thousand miles begins with one step.", "author": "Lao Tzu" },
    { "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein" }
];


const localImages = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16,
    img17, img18, img19
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function Animation() {
    const [quote, setQuote] = useState(null);
    const [collageImages, setCollageImages] = useState([]);

    useEffect(() => {
        // 1. Pick a random quote (unchanged)
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);

        // 2. Shuffle and set your images
        // We'll shuffle all of them and use them all!
        setCollageImages(shuffleArray([...localImages]));

    }, []);

    // --- 3. NEW JSX STRUCTURE ---
    return (
        // This is now a standard page, not a full-screen grid
        <div className="animation-container masonry-page">

            {/* --- 1. The Center Text (now at the top) --- */}
            <div className="hero-content-box">
                <h1 className="hero-title">Achieve Your Dreams</h1>
                {quote && (
                    <>
                        <p className="hero-quote">"{quote.quote}"</p>
                        <h3 className="hero-author">- {quote.author}</h3>
                    </>
                )}
            </div>

            {/* --- 2. The Masonry Image Grid --- */}
            <div className="masonry-layout">
                {collageImages.map((imgSrc, index) => (
                    <div key={index} className="masonry-item">
                        <img
                            src={imgSrc}
                            alt={`Vision board ${index + 1}`}
                            className="collage-img"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Animation;