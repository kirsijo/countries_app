import React from "react";
import Nav from "./Nav"
import {useSelector} from "react-redux"
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

const Favourites = () => {

    const favourites = useSelector((state) => state.countries.favourites);

    if (favourites.length === 0)
        return (
            <>
        <Nav/>
        <Container className="overlay-div">
            <h6>Looks like you haven't chosen any favourites yet... Go back to browse to pick some favourites.</h6>
        </Container>
        </>
        )
    
    return (
    <>
    <Nav/>
    <Carousel className="mt-10">
            {favourites.map((country) => (
             <Carousel.Item key={country.name.common}>
            <img className="d-block w-100 h-300"
            src={`https://source.unsplash.com/featured/1600x900?${country.name.common}`} alt={country.name.common}></img>
            <div className="overlay-div">
            <Carousel.Caption className="overlay-div">{country.name.common}</Carousel.Caption></div>
        </Carousel.Item>))}
    </Carousel>
    </>
    )
}

export default Favourites;