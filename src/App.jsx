import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navebar from './Components/Home/NavBar/Navbar';
import Footer from "./Components/Home/footer/footer";
import Login from "./Components/login/Login";
import Home from "./Components/Home/Home";
import Signup from './Components/Signup';
import Purchasetickets from './Components/Home/Purchasetickets/Purchasetickets';
 
function App() {
  return (
    <BrowserRouter>
     <Navebar/>
      <Routes>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/" element ={<Home/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/pur" element ={<Purchasetickets/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
