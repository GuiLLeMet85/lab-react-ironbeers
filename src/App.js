import './App.css';
import React, {useState} from 'react';
import { Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import RandomBeer from "./views/RandomBeer"
import ErrorPage from './views/ErrorPage';
import NewBeer from "./views/NewBeer";
import Beers from "./views/Beers";
import Header from "./components/Header";
import { useLocation } from 'react-router-dom';



function App(props) {
 
  const location = useLocation();

  const isCurrentURL = (url) => {
      return location.pathname.toLowerCase() === url.toLowerCase();
  }
  

  return (

  
    <div className="App">
      
      { isCurrentURL('/') ? null: <Header /> }
     
      <Routes>
 
        <Route path="/" element={<Home />} />
        <Route path="/beers"  element={<Beers /> } />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer'element={<NewBeer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
