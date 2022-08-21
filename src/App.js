import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CountryList from './components/CountryList';
import IndividualCountryInfo from "./components/IndividualCountryInfo";
import { useParams } from "react-router-dom";


const RouterWrapper = (props) => {
  const params = useParams();
  return <IndividualCountryInfo params={params} {...props} />
}

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="countries" element={<CountryList/>}/>
      <Route path="countries/:code" element={<RouterWrapper/>} />
    </Routes>
    </BrowserRouter>

    </>
   
    
  );
}

export default App;
