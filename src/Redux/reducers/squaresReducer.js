import { CHANGE_SQUARES } from '../actions/actionTypes';

const squares = (state = {}, action) => {
    if (action.type === CHANGE_SQUARES) return action.payload;
    return state;
};

export default squares;