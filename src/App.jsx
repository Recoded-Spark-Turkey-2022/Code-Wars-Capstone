import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navebar from './Components/Home/NavBar/Navbar';
import Login from "./Components/login/Login";

import Home from "./Components/Home/Home"

 
function App() {
  return (
    
    
   
    <BrowserRouter>
     <Navebar/>
      <Routes>
        
        <Route path="/login" element ={<Login/>}/>
       
      </Routes>
      <Home/>
    </BrowserRouter>
    
    
    
  )
}

export default App;
