import React, { useState } from 'react';

function Reminder() {
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [whatsAppLink, setWhatsAppLink] = useState('');

    const generateLink = (e) => {
        e.preventDefault();

        if (!phone || !message) {
            alert('Please enter a phone number and a message.');
            return;
        }

        // Basic formatting for phone (remove +, spaces)
        // Assumes user includes country code
        const formattedPhone = phone.replace(/\D/g, '');

        // Encode the message for a URL
        const encodedMessage = encodeURIComponent(message);

        const url = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
        setWhatsAppLink(url);
    };

    return (
        <div className="feature-container reminder-container">
            <h2>WhatsApp Reminder</h2>
            <p>Create a "Click-to-Chat" link. This will open WhatsApp, ready to send.</p>

            <form onSubmit={generateLink} className="reminder-form">
                <div className="form-group">
                    <label htmlFor="phone">Phone Number (with country code, e.g., 919876543210)</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="919876543210"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Reminder Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Don't forget to..."
                        rows="4"
                    />
                </div>
                <button type="submit" className="generate-link-btn">Generate Link</button>
            </form>

            {/* Show the generated link */}
            {whatsAppLink && (
                <div className="reminder-link-container">
                    <strong>Your link is ready!</strong>
                    <p>Click the link to open WhatsApp and send your reminder.</p>
                    <a
                        href={whatsAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-link-btn"
                    >
                        Open WhatsApp
                    </a>
                </div>
            )}
        </div>
    );
}

export default Reminder;