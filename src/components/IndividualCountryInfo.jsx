import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {initCountries} from '../features/countries/countriesSlice';
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
    const [description, setDescription] = useState('')

    const api_key = process.env.REACT_APP_API_KEY;

    const getWeather = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country?.capital}&appid=${api_key}&units=metric`
      );
      setTemperature(response.data.main.temp);
      setWind(response.data.wind.speed);
      setIcon(response.data.weather[0].icon);
      setDescription(response.data.weather[0].description)
      setLoading(false);
    };

    useEffect(() => {
      // we only care about getting weather if country exists. Therefore country used as dependency.
      if (country) {
      getWeather();
      }
    },[country]);

    const allLocalNames = Object.values(country?.name?.nativeName || {}).map((name) => name.common).join(', ');

    const borderCountries =
      country.borders?.map((countryCode) => {
       const country = countryData.find(country => country.cca3 === countryCode) 
       return country;
      })

    if (loading) return (
      <p>loading...</p>
    )
    return (
        <>
        <Nav/>
        <Container className="sm justify-content-center bg-light rounded p-3">
            <Row className="text-center p-2"><h1>{country?.name.common} {country?.flag}</h1></Row>
            {country?.capital &&
            <Row className="m-3 justify-content-center">Current weather in {country?.capital}: {description}</Row>}
           <Row className="align-items-center">
            <Col className='bg-info'>
            {icon ? <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weathericon"
      />  : <p>loading...</p>} </Col>
            <Col className="border border-info p-2" xs={7}><p><i className="bi bi-thermometer-half"></i>{temperature.toFixed(0)} °C</p>
          <p><i className="bi bi-wind"></i> {wind} m/s</p> 
          </Col>
          </Row>
          {/* BORDERING COUNTRIES */}
        <Row className="m-2 h2">Bordering countries</Row>
        <Row className="justify-content-center">
        {borderCountries === undefined ? <Row>{country?.name.common} has no land borders</Row> : borderCountries.map((countryName) => <Col key={countryName.name.common} xs={2}  className="text-center shadow-sm m-2 p-1 rounded">
          <Link className="text-decoration-none" key={countryName.name.common} to={`/countries/${countryName.cca3}`}>
      {countryName.name.common}</Link>
      </Col>)} 
      </Row>
      {/* INFO */}
      <Row className="m-2 h2">Info</Row>
      <Row className="m-1">
      Region: {country.subregion}
      </Row>
      <Row className="m-1">In this country they drive on the {country?.car.side}</Row>

      <Row className="m-1">Name of this country in local language(s) is {allLocalNames}. </Row>
        </Container>
        </>
    )

}

export default IndividualCountry;