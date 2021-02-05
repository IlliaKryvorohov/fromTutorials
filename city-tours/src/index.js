import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import WebFont from 'webfontloader';
import fontawesome from "@fortawesome/fontawesome";
import {faCaretSquareDown, faCaretSquareUp, faWindowClose} from "@fortawesome/free-solid-svg-icons";

fontawesome.library.add(faWindowClose, faCaretSquareDown, faCaretSquareUp);

WebFont.load({
  google: {
    families: ['Open Sans:400']
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
