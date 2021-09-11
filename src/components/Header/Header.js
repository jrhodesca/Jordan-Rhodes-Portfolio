/** React */
import React from 'react';
import {Link} from 'react-router-dom';

/** Components */
import NavBar from '../NavBar/NavBar';
import symbol from '../../assets/images/logo.svg';

/** Styles */
import './Header.css';

function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                <img src={symbol} alt="JR logo"/>
                <h3 data-testid="logo-text">Jordan Rhodes</h3>
            </Link>
            <NavBar />
        </header>
    )
}

export default Header;