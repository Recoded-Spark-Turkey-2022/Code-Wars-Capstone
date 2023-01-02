import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './components/Signup';
// import Login from './components/Login';
// import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
    // <BrowserRouter>
    // <div className="App">
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route  path="/" element={<Login />} />
    //     <Route  path="/signup" element={<Signup />} />
    //   </Routes>
    // </div>
    // </BrowserRouter>
  );
}

export default App;
