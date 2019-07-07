import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import ListArticles from './Components/ListArticles/ListArticles';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
     <Menu />
     <Route path='/login' exact component={Login} />
     <Route path='/Register' exact component={Register} />
     <Route path='/' exact component={ListArticles} />
    </div>
  );
}

export default App;
