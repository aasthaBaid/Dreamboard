import React from 'react';
// 1. Import Routes and Route
import { Routes, Route } from 'react-router-dom';

// 2. Import your components
import Navbar from './Navbar';
import Home from './pages/Home';
import Motivation from './pages/Motivation';
import Energy from './pages/Energy';
import Clock from './pages/clock';
import ScrollButtons from './components/ScrollButtons';

// 3. We still need the CSS files
import './App.css';
import './Navbar.css';
import './pages/Energy.css';
import './pages/Motivation.css';
import './pages/clock.css'
import './components/Post.css';
import './Animation.css';
import './components/ScrollButtons.css';
// (We keep Animation.css here because Home.js uses Animation.js)


function App() {
  return (
    <div className="App">
      {/* The Navbar is outside of <Routes>, so it will be on EVERY page */}
      <Navbar />
      <ScrollButtons />
      {/* page-content will hold the content that changes */}
      <main className="page-content">
        {/* 4. <Routes> defines where your pages will be swapped */}
        <Routes>
          {/* A <Route> maps a URL path to a specific component */}
          <Route path="/" element={<Home />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;