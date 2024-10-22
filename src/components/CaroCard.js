import React from 'react';
import './Cards.css';
import './CaroCard.css';
import CardItem from './CardItem';
import iceland from './images/iceland.jpg';
import grad from './images/Grad.JPG';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CaroCard() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    middle: {
        breakpoint: { max: 700, min: 464 },
        items: 1
      },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='cards'>
      <h1 className='caro-header'>More About Me</h1>
        <Carousel 
        responsive={responsive} 
        infinite={true} 
        >
            <CardItem
            src={iceland}
            text="Travel Lover: Been to Iceland & Australia"
            label='Location: Iceland'
            path="/about"
            />
            <CardItem
            src={grad}
            text='Majored in Computer Science, Minor in Technology and Information Management'
            label='UCSC Graduate'
            path="/about"
            />
            <CardItem
            src={iceland}
            text="Travel Lover: Been to Iceland & Australia"
            label='Card 3'
            path="/about"
            />
            <CardItem
            src={grad}
            text='Majored in Computer Science, Minor in Technology and Information Management'
            label='Card h'
            path="/about"
            />
            <CardItem
            src={iceland}
            text="Travel Lover: Been to Iceland & Australia"
            label='Card 5'
            path="/about"
            />
        </Carousel>
    </div>
  );
}

export default CaroCard;