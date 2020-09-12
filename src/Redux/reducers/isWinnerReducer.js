import { CHANGE_WINNER } from '../actions/actionTypes';

const lastVisited = (state = '', action) => {
    if (action.type === CHANGE_WINNER) return action.payload;
    return state;
};

export default lastVisited;