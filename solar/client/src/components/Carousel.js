import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import port1 from '../img/portfolio-1.jpg'
import port2 from '../img/portfolio-2.jpg'
import port3 from '../img/portfolio-3.jpg'
import port4 from '../img/portfolio-4.jpg'
import ParticleBackground from './particleBackground';


import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
    return (

        <MDBCarousel className='carousel' showControls showIndicators dark fade>

            <MDBCarouselItem
                className='carouselimg w-100 d-block'
                itemId={1}
                src={port1}
                alt='...'
            >
                <ParticleBackground />

            </MDBCarouselItem>
            <MDBCarouselItem
                className='carouselimg w-100 d-block'
                itemId={2}
                src={port2}
                alt='...'
            >
                <ParticleBackground />
            </MDBCarouselItem>

            <MDBCarouselItem
                className='carouselimg w-100 d-block'
                itemId={3}
                src={port3}
                alt='...'
            >
                <ParticleBackground />
            </MDBCarouselItem>

            <MDBCarouselItem
                className='carouselimg w-100 d-block'
                itemId={3}
                src={port4}
                alt='...'
            >
                <ParticleBackground />
            </MDBCarouselItem>
        </MDBCarousel>
    );
}

