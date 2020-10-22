import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

import Logo from './../Logo/Logo';

function Footer() {
    return (
        <div className="footer-wrap">
            <div className="footer-top">
                <div className="footer-top-logo">
                    <Logo />
                </div>
                <div className="footer-top-mail">
                    <h2>Contact us:</h2>
                    <a href="mailto:have@nicecoding.io">have@nicecoding.io</a>
                </div>
                <Link to="/whitepaper" className="footer-top-button">Read Whitepaper</Link>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-item">
                    <Link to="/copiwriters">&#169; Copywriters 2020</Link>
                </div>
                <div className="footer-bottom-item">
                    <Link to="/faq">FAQ</Link>
                </div>
                <div className="footer-bottom-item">
                    <Link to="/terms_of_use">Terms of Use</Link>
                </div>
                <div className="footer-bottom-item">
                    <Link to="/privacy_policy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;