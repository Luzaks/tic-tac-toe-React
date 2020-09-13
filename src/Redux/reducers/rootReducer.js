
import { combineReducers } from 'redux';
import isWinner from './isWinnerReducer';

const rootReducer = combineReducers({
    isWinner,
});

export default rootReducer;