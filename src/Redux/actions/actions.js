import {
  CHANGE_WINNER,
  CHANGE_SQUARES,
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

export {
  winnerCreator,
  squaresCreator,
};
