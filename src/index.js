import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App';
import * as serviceWorker from './serviceWorker';
import './bootstrap.min.css'
import Finalcomp from './Component/Finalcomp';

ReactDOM.render(
  <React.StrictMode>
    <Finalcomp></Finalcomp>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
