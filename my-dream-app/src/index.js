// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- Is this imported?
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Is your App wrapped like this? */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);