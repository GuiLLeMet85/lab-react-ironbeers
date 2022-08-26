import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import RandomBeer from "./views/RandomBeer"
import ErrorPage from './views/ErrorPage';
import NewBeer from "./views/NewBeer";
import Beers from "./views/Beers";



function App() {
  return (
    <div className="App">
    
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
