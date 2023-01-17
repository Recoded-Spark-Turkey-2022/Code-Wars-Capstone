import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navebar from './Components/Home/NavBar/Navbar';
import Footer from "./Components/Home/footer/footer";
import Login from "./Components/login/Login";
import Home from "./Components/Home/Home";
import Signup from './Components/Signup';
import Purchasetickets from './Components/Home/Purchasetickets/Purchasetickets';
import ThankYouPage from './Components/blogs/Thankyoupage';
import Blogarticle from './Components/blogs/Blogarticle';

 
function App() {
  return (
    <BrowserRouter>
     <Navebar/>
      <Routes>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/" element ={<Home/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/pur" element ={<Purchasetickets/>}/>
        <Route path="/blog/:id" element={<Blogarticle/>}/>
        <Route path="/Thank-you" element={<ThankYouPage path="/Thank-you" header="Thank you!" text=" Your email has been added to the mailing list successfully!"/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )

}

export default App;