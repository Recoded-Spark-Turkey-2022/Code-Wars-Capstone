import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navebar from './Components/Home/NavBar/Navbar';
import Login from "./Components/login/Login";
import Home from "./Components/Home/Home";
import Signup from './Components/Signup';
 
function App() {
  return (
    <BrowserRouter>
     <Navebar/>
      <Routes>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/" element ={<Home/>}/>
        <Route path="/signup" element ={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
