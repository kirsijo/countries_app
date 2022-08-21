import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react'

const IndividualCountry = (props) => {
    const {code} = useParams();

    const [countryData, setcountryData] = useState([]);
    const [capital, setCapital] = useState('');
    const [loading, setLoading] = useState(false);
    const [temperature, setTemperature] = useState("loading..");
    const [icon, setIcon] = useState("loading..");


    const getWeather = async (capital) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
      );
      setTemperature(response.data.main.temp);
      setIcon(response.data.weather[0].icon);
    };

    useEffect(() => {
        setLoading(true);
        const getTheData = async () => {
        try {
       const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
            console.log(response);
            setcountryData(response.data);
            setCapital(response.data[0].capital);
            await getWeather(response.data[0].capital);
            setLoading(false);
        } catch(error) {
            console.log(error);
        }}
        getTheData();
    },[])

    const api_key = process.env.REACT_APP_API_KEY;
    

    return (
        <>
        <Nav/>
        <div className="country-info-container">
            <h1>{countryData.name}</h1>
            <h2>Current weather in {capital}</h2>
            <p>temperature {temperature}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weathericon"
      />
        </div>
        <div className="bordering-countries-div"><h3>Bordering countries</h3>
        </div>
        </>
    )

}

export default IndividualCountry;