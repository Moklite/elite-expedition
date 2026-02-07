import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <img src="/eliteicon.jpeg" alt="Elite Expedition Services" />
                        <span className="navbar-brand">Elite Expedition</span>
                    </div>

                    <button
                        className="navbar-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-open' : ''}`}>
                        <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                        <li><a onClick={() => scrollToSection('about')}>About</a></li>
                        <li><a onClick={() => scrollToSection('destinations')}>Destinations</a></li>
                        <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                        {/* <li><a onClick={() => scrollToSection('testimonials')}>Testimonials</a></li> */}
                        <li>
                            <a
                                href="https://wa.me/2348126482846"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-contact"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
