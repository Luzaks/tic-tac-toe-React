import { CHANGE_PLAYER } from '../actions/actionTypes';

const xIsNext = (state = {}, action) => {
    if (action.type === CHANGE_PLAYER) return action.payload;
    return state;
};

export default xIsNext;