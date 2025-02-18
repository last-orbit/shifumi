import React, { use } from 'react';
import { useState } from 'react';
import heart from '../assets/Sprite_heart.png';
import rock from '../assets/BgObject_Rock.png';
import scissors from '../assets/F0XOKY4KPR7VNM1.png';
import paper from '../assets/FU5DSZMKPR7VNLZ.png';

const Gamepg = () => {
  const choices = ['rock', 'paper', 'scissors'];

  // Use States
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [gameOver, setGameOver] = useState(false);

  // Funcctions

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computer);
    determineWinner(choice, computer);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult('Tie!');
    } else if (user === 'rock') {
      if (computer === 'scissors') {
        setResult('Rock smashes scissors! You win!');
        updateScore();
      } else {
        setResult('Paper covers rock! You lose.');
        loseLife();
      }
    } else if (user === 'paper') {
      if (computer === 'rock') {
        setResult('Paper covers rock! You win!');
        updateScore();
      } else {
        setResult('Scissors cuts paper! You lose.');
        loseLife();
      }
    } else if (user === 'scissors') {
      if (computer === 'paper') {
        setResult('Scissors cuts paper! You win!');
        updateScore();
      } else {
        setResult('Rock smashes scissors! You lose.');
        loseLife();
      }
    }
  };

  const loseLife = () => {
    setLives(lives - 1);
    if (lives - 1 === 0) {
      setGameOver(true);
    }
  };
  const updateScore = () => {
    setScore(score + 1);
    if (score + 1 > highScore) {
      setHighScore(score + 1);
    }
  };

  const resetGame = () => {
    setLives(3);
    setScore(0);
    setGameOver(false);
    setUserChoice('');
    setComputerChoice('');
    setResult('');
  };
  return (
    <>
      {/* Game Over Section */}
      {gameOver ? (
        <div className='flex justify-center items-center min-h-screen bg-amber-800'>
          <div className='font-game p-8 text-lg md:text-xl'>
            <h1 className='text-2xl md:text-4xl'>Game Over!</h1>
            <p>You lost all your lives.</p>
            <p>Your score was {score}</p>
            <p>High Score: {highScore}</p>
            <button
              className='mt-3 font-bold px-3.5 py-3 bg-[#767676] text-shadow-[-1px_-1px_black,1px_1px_white]  rounded-lg shadow-[0_0.2em_gray] cursor-pointer'
              onClick={resetGame}
            >
              Play Again?
            </button>
          </div>
        </div>
      ) : (
        // Game Section
        <div className='min-h-screen bg-amber-800 p-4'>
          <h1 className='text-xl md:text-3xl py-5 font-game uppercase text-center'>
            Shifumi
          </h1>
          <div className='flex flex-col md:flex-row items-center justify-between px-4'>
            <h2 className='font-game text-left pb-4 flex items-center'>
              Lives:{' '}
              {Array.from({ length: lives }, (_, index) => (
                <img
                  key={index}
                  src={heart}
                  alt='heart'
                  className='w-6 h-6 ml-1'
                />
              ))}{' '}
            </h2>
            <h2 className='font-game text-left pb-4 flex items-center'>
              Score : {score}
            </h2>
          </div>
          {/* Here is the form Section Include buttons */}
          <div className='flex justify-around px-10 m-auto'>
            {/* Rock Button */}
            <button
              type='button'
              className={`bg-gray-300 hover:bg-blue-100 font-game font-bold rounded-xl shadow-xl p-4 w-full md:w-72 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ${
                userChoice === 'rock' ? 'bg-violet-500' : ''
              }`}
              onClick={() => handleUserChoice('rock')}
            >
              <img className='h-20 m-auto mt-3' src={rock} alt='rock icon' />
              <h2 className='mt-7 text-center'>Choose Rock</h2>
            </button>
            {/* Scissors Button */}
            <button
              type='button'
              className={`bg-gray-300 hover:bg-blue-100 font-game font-bold rounded-xl shadow-xl p-4 w-full md:w-72 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ${
                userChoice === 'scissors' ? 'bg-violet-500' : ''
              }`}
              onClick={() => handleUserChoice('scissors')}
            >
              <img
                className='h-24 m-auto rotate-180'
                src={scissors}
                alt='scissors logo'
              />
              <h2 className='mt-6 text-center'>Choose Scissors</h2>
            </button>
            {/* Paper Button */}
            <button
              type='button'
              className={`bg-gray-300 hover:bg-blue-100 font-game font-bold rounded-xl shadow-xl p-4 w-full md:w-72 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ${
                userChoice === 'paper' ? 'bg-violet-500' : ''
              }`}
              onClick={() => handleUserChoice('paper')}
            >
              <img
                className='h-24 m-auto rotate-5'
                src={paper}
                alt='paper icon'
              />
              <h2 className='mt-6 text-center'>Choose Paper</h2>
            </button>
          </div>
          <div className='flex-column justify-center py-6 m-auto text-sm leading-10'>
            <p className='font-game'>You chose: {userChoice}</p>
            <p className='font-game'>Computer chose: {computerChoice}</p>
            <p className='font-game'>Result: {result}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gamepg;
