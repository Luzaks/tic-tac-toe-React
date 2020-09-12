import { CHANGE_WINNER } from './actionTypes';


function winnerCreator(isWinner) {
    return {
        type: CHANGE_WINNER,
        payload: isWinner,
    };
};

export {
    winnerCreator
};
