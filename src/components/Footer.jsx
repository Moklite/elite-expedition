import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/eliteicon.jpeg" alt="Elite Expedition Services" />
                            <h3>Elite Expedition</h3>
                        </div>
                        <p className="footer-description">
                            Your trusted partner for School Admission Assistance, Study Permits, Work Visas, and Tourism services worldwide.
                        </p>
                        <div className="footer-social">
                            <a href="https://wa.me/2348126482846" target="_blank" rel="noopener noreferrer" className="social-link">
                                💬 WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</a></li>
                            <li><a onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About Us</a></li>
                            <li><a onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}>Destinations</a></li>
                            <li><a onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-icon">📧</span>
                                <a href="mailto:serviceseliteexpedition@gmail.com">serviceseliteexpedition@gmail.com</a>
                            </li>
                            <li>
                                <span className="contact-icon">📱</span>
                                <a href="https://wa.me/2348126482846" target="_blank" rel="noopener noreferrer">
                                    +234 812 648 2846
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Elite Expedition Services. All rights reserved.</p>
                    <p className="footer-credit">Crafted with ❤️ for travelers worldwide</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
