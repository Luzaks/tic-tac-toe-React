
import { combineReducers } from 'redux';
import isWinner from './';

const rootReducer = combineReducers({
    isWinner,
});

export default rootReducer;