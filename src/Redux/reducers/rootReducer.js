import { combineReducers } from 'redux';
import isWinner from './isWinnerReducer';
import squares from './squaresReducer';
import xIsNext from './xIsNext';

const rootReducer = combineReducers({
  isWinner,
  squares,
  xIsNext,
});

export default rootReducer;