import React from 'react';
import About from '../ABOUT/About';
import Contact from '../CONTACT/Contact';
import Footer from '../FOOTER/Footer';
import Header from '../HEADER/Header';
import Service from '../SERVICE/Service';
import Testimonial from '../TESTIMONIALS/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <About></About>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;