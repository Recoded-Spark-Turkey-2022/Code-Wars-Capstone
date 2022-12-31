import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navebar from './Component/Home/NavBar/Navbar';
import BookAppointment from "./Component/Home/Book an Appointment/bookAppointment"
import Login from "./Component/login/Login";

 
function App() {
  return (
    <>
    
    <Navebar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookAppointment />} />
        <Route path="/login" element ={<Login/>}/>
        
      </Routes>
    </BrowserRouter>
    
    </>
    
  )
}

export default App;
