import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='text-center'>
            <div className="">
                <h1 className='About background'>
                    About us
                </h1>
            </div>
            <div className='container pt-5 about-us'>
                <h3>WHO WE ARE</h3>
                <hr />
                <p>
                    Established in 1962, Landscaping WP Company proudly serves all major markets, as one of the leading full-service providers for high-end residential estates and commercial landscaping. Landscaping WP is made up of nearly 200 highly skilled landscape experts, including a permanent team of professional turf grass and horticulture managers, landscape designers, chemical technicians, and floriculturists.
                </p>
            </div>
            
        </div>
    );
};

export default About;