import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CountryList from './components/CountryList';
import IndividualCountry from "./components/IndividualCountry";
import { useParams } from "react-router-dom";


const RouterWrapper = (props) => {
  const params = useParams();
  return <IndividualCountry params={params} {...props} />
}

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="countries" element={<CountryList/>}/>
      <Route path="countries/:name" element={<RouterWrapper/>} />
    </Routes>
    </BrowserRouter>

    </>
   
    
  );
}

export default App;
