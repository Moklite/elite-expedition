import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="container">
                    <div className="hero-text animate-fadeInUp">
                        <h1 className="hero-title">
                            Discover Your Next <span className="text-gradient">Adventure</span>
                        </h1>
                        <p className="hero-subtitle">
                            Elite Expedition Services - Your gateway to unforgettable journeys around the world.
                            Experience luxury travel with personalized service and expert guidance.
                        </p>
                        <div className="hero-buttons">
                            <a
                                href="https://wa.me/2348126482846"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                <span>📱</span>
                                Start Your Journey
                            </a>
                            <a
                                href="#destinations"
                                className="btn btn-secondary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <span>🌍</span>
                                Explore Destinations
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Hero;
