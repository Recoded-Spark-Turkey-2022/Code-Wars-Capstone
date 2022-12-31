import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navebar from './Component/Home/NavBar/Navbar';
import BookAppointment from "./Component/Home/Book an Appointment/bookAppointment"
import Login from "./Component/login/Login";
import CommuncicationCard  from './Component/Home/communication/CommuncicationCard';

 
function App() {
  return (
    <>
    
    <Navebar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookAppointment />} />
        <Route path="/login" element ={<Login/>}/>
        <Route path="/comm" element ={<CommuncicationCard/>}/>

        
      </Routes>
    </BrowserRouter>
    
    </>
    
  )
}

export default App;
