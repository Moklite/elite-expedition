import React from 'react';
import './Destinations.css';

const Destinations = () => {
    const destinations = [
        {
            name: 'Paris, France',
            emoji: '🗼',
            description: 'Experience the city of love with iconic landmarks and world-class cuisine'
        },
        {
            name: 'Dubai, UAE',
            emoji: '🏙️',
            description: 'Luxury shopping, ultramodern architecture, and desert adventures'
        },
        {
            name: 'Maldives',
            emoji: '🏝️',
            description: 'Paradise islands with crystal-clear waters and overwater bungalows'
        },
        {
            name: 'Ireland',
            emoji: '🍀',
            description: 'Emerald landscapes, rich history, and world-renowned hospitality'
        },
        {
            name: 'Canada',
            emoji: '🍁',
            description: 'Stunning natural beauty, multicultural cities, and excellent education opportunities'
        },
        {
            name: 'United Kingdom',
            emoji: '🇬🇧',
            description: 'Historic landmarks, prestigious universities, and vibrant cultural scene'
        },
        {
            name: 'Other European Countries',
            emoji: '🇪🇺',
            description: 'Explore diverse cultures, world-class education, and career opportunities across Europe'
        }
    ];

    return (
        <section id="destinations" className="destinations section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">
                        Popular <span className="text-gradient">Destinations</span>
                    </h2>
                    <p className="section-description">
                        Explore our handpicked selection of breathtaking destinations around the world
                    </p>
                </div>

                <div className="destinations-grid">
                    {destinations.map((destination, index) => (
                        <div
                            key={index}
                            className="destination-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="destination-emoji">{destination.emoji}</div>
                            <h3 className="destination-name">{destination.name}</h3>
                            <p className="destination-description">{destination.description}</p>
                            <div className="destination-footer">
                                <a
                                    href="https://wa.me/2348126482846"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-explore"
                                >
                                    Book Now →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
