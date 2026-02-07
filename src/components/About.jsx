import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-content">
                    <div className="about-image animate-slideInLeft">
                        <div className="about-image-wrapper">
                            <img src="/eliteicon.jpeg" alt="Elite Expedition Services" />
                        </div>
                    </div>

                    <div className="about-text animate-slideInRight">
                        <h2 className="section-title">
                            About <span className="text-gradient">Elite Expedition</span>
                        </h2>
                        <p className="section-description">
                            We are a premier travel agency specializing in School Admission Assistance,
                            Study Permits, Work Visas, and Tourism services. With over a decade of expertise
                            in the travel industry, we help you navigate your journey to education, work,
                            and leisure destinations worldwide.
                        </p>
                        <div className="about-features">
                            <div className="feature-item">
                                <div className="feature-icon">✈️</div>
                                <div className="feature-content">
                                    <h3>Expert Planning</h3>
                                    <p>Customized itineraries tailored to your preferences and budget</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🌟</div>
                                <div className="feature-content">
                                    <h3>Premium Service</h3>
                                    <p>24/7 support and dedicated travel consultants for your journey</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">💎</div>
                                <div className="feature-content">
                                    <h3>Best Value</h3>
                                    <p>Competitive pricing with exclusive deals and packages</p>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://wa.me/2348126482846"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
