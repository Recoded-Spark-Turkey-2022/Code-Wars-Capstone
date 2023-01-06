import React from 'react';  
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Blogarticle from './components/blogs/Blogarticle';
import ThankYouPage from './components/blogs/Thankyoupage';
import ImageCarousel from './components/blogs/Recentblogssilder';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<ImageCarousel/>}/>
<Route path="/blog/:id" element={<Blogarticle/>}/>
<Route path="/Thank-you" element={<ThankYouPage />}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;