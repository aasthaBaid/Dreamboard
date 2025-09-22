import React from 'react';
// We'll move the Animation component import from App.js to here
import Animation from '../Animation';

function Home() {
    return (
        <div className="home-page">
            {/* The Home page just shows the animation component */}
            <Animation />
        </div>
    );
}

export default Home;