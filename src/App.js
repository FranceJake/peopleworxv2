import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';





const App = () => {
  return (
    <div className="wrapper">
     <BrowserRouter>
       
         
       <Header />
       <Sidebar />
       <Content />
       <Footer />
      
    
   </BrowserRouter>
    </div>
    
    
  );
}

export default App;
