import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

//REDUCERS
import cartReducer from './Reducers/cartReducer';

const store = createStore ( cartReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());





ReactDOM.render( 
  <Provider store ={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));
