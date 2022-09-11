import {useEffect} from "react";
import CountryCard from "./CountryCard";
import Nav from "./Nav";
import ScrolltoTopButton from "./ScrolltoTopButton";

import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";
import {initCountries, search} from '../features/countries/countriesSlice';

const CountryList = (props) => {
  
    const dispatch = useDispatch();

    const countryData = useSelector((state) => state.countries.countries);
    const loading = useSelector((state) => state.countries.isLoading);
    const searchInput = useSelector((state) => state.countries.search);

    useEffect(() => {
      dispatch(initCountries())
    }, [dispatch]);

   // const searchUpdateHandler = (e) => {
       // setSearch(e.target.value);
    //}

    const searchFilter = countryData.filter((country) => {
        return country.name.common.toLowerCase().includes(searchInput.toLowerCase());
    })

    if (loading) {
        return (
            <Col className="text-center m-5">
            <Spinner
              animation="border"
              role="status"
              className="center"
              variant="info"
            >
        {/* Note to self: Important - visually hidden is a helper which hides elements but keeps them accessible to assistive technologies */}
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        ) 
        
    }

    return (
        <>
        <Nav/>
        <div className="country-search-container">
            <Form>
        <Form.Control onChange={(e) => dispatch(search(e.target.value))}
        type="search"
        className="me-2"
        placeholder="Search countries.."
        />
        </Form>
        </div>
        <div className="countries-list">
            {searchFilter.map((c) => (
                <CountryCard 
                name={c.name.common}
                officialname={c.name.official}
                key={c.name.common}
                languages={c.languages}
                currencies={c.currencies}
                population={c.population}
                flag={c.flags.png}
                />
            ))}

        </div>
        <ScrolltoTopButton/>
        </>
    )

};

export default CountryList;