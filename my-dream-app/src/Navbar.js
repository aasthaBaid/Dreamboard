import React from 'react';
// 1. Import { Link } from react-router-dom
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            {/* 2. Change the logo 'a' tag to a 'Link' tag pointing to "/" (homepage) */}
            <Link to="/" className="navbar-logo">
                My Dream Board.
            </Link>
            {/* <h5>~ Dream. ~ Plan. ~Do.</h5> */}
            <ul className="navbar-links">
                {/* 3. Change all 'a' tags to 'Link' tags pointing to the correct paths */}
                <li><Link to="/motivation">Motivation</Link></li>
                <li><Link to="/energy">Energy</Link></li>
                <li><Link to="/clock">Clock</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;