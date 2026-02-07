import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import Services from './components/Services';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Destinations />
            <Services />
            {/* <Testimonials /> */}
            <Footer />
        </div>
    );
}

export default App;
