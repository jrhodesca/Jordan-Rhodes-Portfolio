/** React */
import React from 'react';
import {Link} from 'react-router-dom';

/** Styles */
import './NavBar.css';

function NavBar() {
    return (
        <nav data-testid="nav-bar">
            <ul>
                <li><Link to="/" className="nav-link">Work</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;