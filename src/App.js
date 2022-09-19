import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';





const App = () => {
  return (
    <div className="wrapper">
     <HashRouter>
       
         
       <Header />
       <Sidebar />
       <Content />
       <Footer />
      
    
   </HashRouter>
    </div>
    
    
  );
}

export default App;
