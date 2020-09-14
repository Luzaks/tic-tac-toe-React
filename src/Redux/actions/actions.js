import {
  CHANGE_WINNER,
  CHANGE_SQUARES,
  CHANGE_PLAYER,
} from './actionTypes';


function winnerCreator(isWinner) {
    return {
        type: CHANGE_WINNER,
        payload: isWinner,
    };
};

function squaresCreator(isWinner) {
    return {
        type: CHANGE_SQUARES,
        payload: isWinner,
    };
};

function playersCreator(isWinner) {
    return {
        type: CHANGE_PLAYER,
        payload: isWinner,
    };
};

export {
  winnerCreator,
  squaresCreator,
  playersCreator,
};
