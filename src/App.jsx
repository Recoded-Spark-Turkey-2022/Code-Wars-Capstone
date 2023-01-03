import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
