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
    const [region, setRegion] = useState('');
    const [drivingSide, setDrivingSide] = useState('');


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
            setRegion(response.data[0].subregion)
            setDrivingSide(response.data[0].car.side);
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
        <Container className="sm justify-content-center bg-light rounded p-3">
            <Row className="text-center p-2"><h1>{countryName} {flagIcon}</h1></Row>
            {capital &&
            <Row className="m-3 justify-content-center">Current weather in {capital}</Row>}
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
        {borders === undefined ? <Row>{countryName} has no land borders</Row> : borders.map((ccode) => <Col key={ccode} xs={2}  className="text-center shadow-sm m-2 p-2 rounded"><Link className="text-decoration-none"reloadDocument key={ccode} to={`/countries/${ccode}`}>
      <p>{ccode}</p></Link></Col>)} 
      </Row>
      <Row className="m-2 h2">Info</Row>
      <Row>
        <Col>Region: {region}</Col>
      </Row>
      <Row>In this country they drive on the {drivingSide}</Row>
        </Container>
        </>
    )

}

export default IndividualCountry;