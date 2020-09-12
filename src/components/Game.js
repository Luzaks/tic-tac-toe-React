import React from 'react';
import Board from './Board/Board';
import ParticlesBg from 'particles-bg';

class Game extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="game">
                    <div className="game-board">
                        <Board />
                    </div>
                    <div className="game-info">
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
            <ParticlesBg type="circle" bg={true} />
        </React.Fragment>
        );
    }
}

export default Game;