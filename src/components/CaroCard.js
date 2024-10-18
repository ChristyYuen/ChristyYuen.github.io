import React from 'react';
import './Cards.css';
import './CaroCard.css';
import CardItem from './CardItem';
import port from './images/ChristyPortfolio.jpg';
import dun from './images/DungeonDijkstra.jpg';
import cal from './images/Calculator.jpg';
import note from './images/NoteTaking.jpg';
import tic from './images/TicTacToe.jpg';
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
      <h1 className='caro-header'>Come check out my GitHub Projects!</h1>
        <Carousel 
        responsive={responsive} 
        infinite={true} 
        // containerClass="carousel-container"
        // itemClass="carousel-item-padding"
        >
            <CardItem
            src={port}
            text="Explore the code behind this page to see how it's structured and functions"
            label='Portfolio'
            path='https://christyyuen.github.io/'
            />
            <CardItem
            src={cal}
            text='Explore advanced large integer computations in my GitHub project'
            label='Efficient BigInteger Arithmetic'
            path='https://github.com/ChristyYuen/BigInteger-Arithmetic'
            />
            <CardItem
            src={dun}
            text="Efficient pathfinding for game AI with Dijkstra's algorithm"
            label='Algorithms: Dungeon Dijkstra'
            path='https://github.com/ChristyYuen/Dungeon-Dijkstra'
            />
            <CardItem
            src={tic}
            text='AI-powered Tic-Tac-Toe: Strategic, Smarter, Unbeatable'
            label='Ultimate Tic Tac Toe AI'
            path='https://github.com/ChristyYuen/Ultimate-Tic-Tac-Toe-AI'
            />
            <CardItem
            src={note}
            text='User-friendly note-taking app with sleek, intuitive design'
            label='Note Taking Application'
            path='https://github.com/ChristyYuen/Note-Taking-Application'
            />
        </Carousel>
    </div>
  );
}

export default CaroCard;