import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const IndividualCountry = (props) => {
    const {code} = useParams();

    const [currentCountry, setCurrentCountry] = useState(code);
    const [countryName, setcountryName] = useState('');
    const [flagIcon, setFlagIcon] = useState('');
    const [capital, setCapital] = useState('');
    const [loading, setLoading] = useState(false);
    const [temperature, setTemperature] = useState(0);
    const [wind, setWind] = useState('');
    const [icon, setIcon] = useState("");
    const [borders, setBorders] = useState([]);


    const getWeather = async (capital) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
      );
      console.log(response);
      setTemperature(response.data.main.temp);
      setWind(response.data.wind.speed);
      setIcon(response.data.weather[0].icon);
    };

    useEffect(() => {
        setLoading(true);
        const getTheData = async () => {
        try {
       const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
            console.log(response);
            setcountryName(response.data[0].name.common);
            setFlagIcon(response.data[0].flag);
            setCapital(response.data[0].capital);
            setBorders(response.data[0].borders);
            await getWeather(response.data[0].capital);
            setLoading(false);
        } catch(error) {
            console.log(error);
        }}
        getTheData();
    },[])

    const api_key = process.env.REACT_APP_API_KEY;

    console.log(borders);

    return (
        <>
        <Nav/>
        <Container className="sm justify-content-center bg-info rounded">
            <Row className="text-center p-2"><h1>{countryName}{flagIcon}</h1></Row>
            <Col>
            {capital &&
            <Row className="m-3">Current weather in {capital}</Row>}
           <Row>
            <Col>
            {icon ? <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weathericon"
      /> : <p>loading...</p>} </Col>
            <Col><p><i className="bi bi-thermometer-half"></i>{temperature.toFixed(0)} °C</p>
          <p><i className="bi bi-wind"></i> {wind} m/s</p> </Col></Row>
          </Col>
          <Row>

          </Row>
          
        <h2>Bordering countries</h2>
        <Row className="justify-content-center">
        {borders === undefined ? <Row>{countryName} has no land borders</Row> : borders.map((ccode) => <Col xs={2}  className="text-center m-2 p-2 bg-light rounded"><Link reloadDocument key={ccode} to={`/countries/${ccode}`}>
      <p>{ccode}</p></Link></Col>)} 
      </Row>
        </Container>
        </>
    )

}

export default IndividualCountry;