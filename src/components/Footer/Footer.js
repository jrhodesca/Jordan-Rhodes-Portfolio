/** React */
import React from "react";

/** Assets */
import symbol from '../../assets/images/logo.svg';

/** Styles */
import './Footer.css';

function Footer({footerColor}) {
    return (
        <footer style={{height: "150px", width: "100%", backgroundColor: footerColor}}>
            <img src={symbol} alt="JR Logo" className="footer-symbol"/>
        </footer>
    );
}

export default Footer;