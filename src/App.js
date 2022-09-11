import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CountryList from './components/CountryList';
import IndividualCountryInfo from "./components/IndividualCountryInfo";
import Favourites from "./components/Favourites";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="countries" element={<CountryList/>}/>
      <Route path="countries/:code" element={<IndividualCountryInfo/>} />
      <Route path="favourites" element={<Favourites/>}/>
    </Routes>
    </BrowserRouter>

    </>
   
    
  );
}

export default App;
