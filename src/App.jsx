import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route  path="/" element={<Login />} />
        <Route  path="/" element={<Signup />} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
