import React from 'react';  
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Blog from './components/blogs/Blog';
import Blog1 from './components/blogs/Blog1';
import Blog2 from './components/blogs/Blog2';

function App() {
  return (
    <div className="App">
<BrowserRouter>

<Routes>
<Route path="/blog" element={<Blog />}/>
<Route path="/blog1" element={<Blog1 />}/>
<Route path="/blog2" element={<Blog2 />}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;