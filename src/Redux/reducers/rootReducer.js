import { combineReducers } from 'redux';
import isWinner from './isWinnerReducer';
import squares from './squaresReducer';

const rootReducer = combineReducers({
  isWinner,
  squares,
});

export default rootReducer;