import React from 'react';  
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Blog from './components/blogs/Blog';
import Blog2 from './components/blogs/Blog2';
import Blog3 from './components/blogs/Blog3';
import ThankYouPage from './components/blogs/Thankyoupage';


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path="/blog" element={<Blog />}/>
<Route path="/blog3" element={<Blog3 />}/>
<Route path="/blog2" element={<Blog2 />}/>
<Route path="/Thank-you" element={<ThankYouPage />}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;