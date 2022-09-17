import React from "react";
import Nav from "./Nav"
import {favourites} from "../features/countries/countriesSlice"
import {useSelector} from "react-redux"
import Carousel from "react-bootstrap/Carousel";

const Favourites = () => {

    const favourites = useSelector((state) => state.countries.favourites);

    return (
    <>
    <Nav/>
    <Carousel className="mt-10">
            {favourites.map((country) => (
             <Carousel.Item key={country.name.common}>

            <img className="d-block w-100"
            src={`https://source.unsplash.com/featured/1600x900?${country.name.common}`}></img>
            <Carousel.Caption>{country.name.common}</Carousel.Caption>
        </Carousel.Item>))}
    </Carousel>
    </>
    )
}

export default Favourites;