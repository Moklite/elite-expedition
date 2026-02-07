import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            location: 'New York, USA',
            rating: 5,
            text: 'Elite Expedition made our honeymoon in Maldives absolutely perfect! Every detail was handled with care and professionalism.',
            avatar: '👩'
        },
        {
            name: 'Michael Chen',
            location: 'Singapore',
            rating: 5,
            text: 'Best travel agency I\'ve ever worked with. They found us amazing deals and the customer service was exceptional.',
            avatar: '👨'
        },
        {
            name: 'Emma Williams',
            location: 'London, UK',
            rating: 5,
            text: 'Our family trip to Japan was flawlessly organized. The itinerary was perfect and we made memories to last a lifetime!',
            avatar: '👩‍🦰'
        }
    ];

    return (
        <section id="testimonials" className="testimonials section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="section-description">
                        Don't just take our word for it - hear from our satisfied travelers
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="star">⭐</span>
                                ))}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-location">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
