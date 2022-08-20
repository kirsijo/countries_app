import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const IndividualCountry = (props) => {
    const {name} = useParams();

    const [countryData, setcountryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [temperature, setTemperature] = useState("loading..");
    const [icon, setIcon] = useState("loading..");

    useEffect(() => {
        setLoading(true);
        axios.get(`https://restcountries.com/v3.1/name/${name}`).then((response) => {
            console.log(response);
            setcountryData(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        })
    },[])

    const capital = countryData[0].capital;
    const api_key = process.env.REACT_APP_API_KEY;
    
    useEffect(() => {
        const getWeather = async () => {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${props.capital}&appid=${api_key}&units=metric`
          );
          console.log(response);
          setTemperature(response.data.main.temp);
          setIcon(response.data.weather[0].icon);
        };
        getWeather();
      }, []);


    return (
        <>
        <Nav/>
        <div className="country-info-container">
            <h1>{name}</h1>
            <h2>Current weather in {capital}</h2>
            <p>temperature {temperature}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weathericon"
      />
        </div>
        </>
    )

}

export default IndividualCountry;