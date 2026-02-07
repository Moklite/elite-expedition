import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '🎓',
            title: 'School Admission Assistance',
            description: 'Expert guidance for school and university admissions worldwide. We help you navigate the application process.'
        },
        {
            icon: '📝',
            title: 'Study Permits',
            description: 'Complete support for study permit applications, ensuring all documentation is properly prepared and submitted.'
        },
        {
            icon: '💼',
            title: 'Work Visas',
            description: 'Professional assistance with work visa applications for various countries and employment opportunities.'
        },
        {
            icon: '🌍',
            title: 'Tourism Services',
            description: 'Comprehensive tourism packages including sightseeing, activities, and unforgettable travel experiences.'
        },
        {
            icon: '✈️',
            title: 'Flight Booking',
            description: 'Access to the best flight deals with major airlines worldwide. We handle all your booking needs.'
        },
        {
            icon: '🏨',
            title: 'Hotel Reservations',
            description: 'From luxury resorts to budget-friendly stays, we find the perfect accommodation for you.'
        }
    ];

    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="section-description">
                        Comprehensive travel solutions tailored to make your journey seamless and memorable
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="card-icon">{service.icon}</div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-text">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <h3>Ready to plan your perfect trip?</h3>
                    <p>Contact us today and let our experts create your dream vacation</p>
                    <a
                        href="https://wa.me/2348126482846"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <span>💬</span>
                        Chat with Us on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
