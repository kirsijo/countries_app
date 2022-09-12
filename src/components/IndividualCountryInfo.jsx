import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {initCountries, search} from '../features/countries/countriesSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const IndividualCountry = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initCountries())
  }, [dispatch]);

    const {code} = useParams();
    const countryData = useSelector((state) => state.countries.countries);
    const country = countryData.find(country => country.cca3 === code)

    const [loading, setLoading] = useState(true);
    const [temperature, setTemperature] = useState(0);
    const [wind, setWind] = useState('');
    const [icon, setIcon] = useState(""); 

    const getWeather = async (capital) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country?.capital}&appid=${api_key}&units=metric`
      );
      setTemperature(response.data.main.temp);
      setWind(response.data.wind.speed);
      setIcon(response.data.weather[0].icon);
      setLoading(false);
    };

    useEffect(() => {
      // we only care about getting weather if country exists. Therefore, country used as dependency.
      if (country) {
      getWeather();
      }
    },[country]);

    const api_key = process.env.REACT_APP_API_KEY;

    const allLocalNames = Object.values(country?.name?.nativeName || {}).map((name) => name.common).join(', ');

    if (loading) return (
      <p>loading...</p>
    )
    return (
        <>
        <Nav/>

        <Container className="sm justify-content-center bg-light rounded p-3">
            <Row className="text-center p-2"><h1>{country?.name.common} {country?.flag}</h1></Row>
            {country?.capital &&
            <Row className="m-3 justify-content-center">Current weather in {country?.capital}</Row>}
           <Row className="align-items-center">
            <Col className='bg-info'>
            {icon ? <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weathericon"
      /> : <p>loading...</p>} </Col>
            <Col className="border border-info p-2" xs={7}><p><i className="bi bi-thermometer-half"></i>{temperature.toFixed(0)} °C</p>
          <p><i className="bi bi-wind"></i> {wind} m/s</p> </Col></Row>
        <Row className="m-2 h2">Bordering countries</Row>
        <Row className="justify-content-center">
        {country.borders === undefined ? <Row>{country?.name.common} has no land borders</Row> : country.borders.map((countryName) => <Col key={countryName} xs={2}  className="text-center shadow-sm m-2 p-2 rounded"><Link className="text-decoration-none" key={countryName} to={`/countries/${countryName}`}>
      <p>{countryName}</p></Link></Col>)} 
      </Row>
      <Row className="m-2 h2">Info</Row>
      <Row>
        <Col>Region: {country.subregion}</Col>
      </Row>
      <Row>In this country they drive on the {country?.car.side}</Row>

      <Row>Name of this country in local language(s) is {allLocalNames}. </Row>
        </Container>
        </>
    )

}

export default IndividualCountry;