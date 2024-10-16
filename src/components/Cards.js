import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import port from './images/ChristyPortfolio.jpg';
import dun from './images/DungeonDijkstra.jpg';
import cal from './images/Calculator.jpg';
import note from './images/NoteTaking.jpg';
import tic from './images/TicTacToe.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Come check out my GitHub Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={port} 
              text="Explore the code behind this page to see how it's structured and functions"
              label='Portfolio'
              path='https://github.com/ChristyYuen/ChristyCreates'
            />
            <CardItem
              src= {cal}
              text='Explore advanced large integer computations in my GitHub project'
              label='Efficient BigInteger Arithmetic'
              path='https://github.com/ChristyYuen/BigInteger-Arithmetic'
            />
          </ul>
          <ul className='cards__items'>
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
              text='User friendly note-taking app with sleek, intuitive design'
              label='Note Taking Application'
              path='https://github.com/ChristyYuen/Note-Taking-Application'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
