import React from 'react';
import { useSelector } from 'react-redux';
import Board from './Board/Board';
import ParticlesBg from 'particles-bg';

const Game = () => {
  const isWinner = useSelector(state => state.isWinner);
  const allSquares = useSelector(state => state.squares );
  const checkWinner = (winner) => {
    if(winner) return 'Hi!';
    else return '';
  };
  return (
    <React.Fragment>
      {console.log(allSquares)}
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{checkWinner(isWinner)}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
      <ParticlesBg type="circle" bg={true} />
    </React.Fragment>
  );
}

export default Game;