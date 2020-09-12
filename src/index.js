import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>  ,
    document.getElementById('root')
);


