import './App.css';
import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import RandomBeer from "./views/RandomBeer"
import ErrorPage from './views/ErrorPage';
import NewBeer from "./views/NewBeer";
import Beers from "./views/Beers";
import Header from "./components/Header";

function App() {
  const [showHeader, setShowHeader]= useState(true);
  

  return (

  
    <div className="App">
    
  
      <Header />

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer'element={<NewBeer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
