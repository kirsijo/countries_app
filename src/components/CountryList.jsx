import axios from "axios";
import {useEffect, useState} from "react";
import CountryCard from "./CountryCard";
import Nav from "./Nav";
import ScrolltoTopButton from "./ScrolltoTopButton";
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Form from "react-bootstrap/Form";


const CountryList = (props) => {
    const [countryData, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            console.log(res);
            setCountries(res.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const searchUpdateHandler = (e) => {
        setSearch(e.target.value);
    }

    const searchFilter = countryData.filter((country) => {
        return country.name.common.toLowerCase().includes(search.toLowerCase());
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
            <Form onChange={searchUpdateHandler}>
        <input
        className="country-search"
        type="text"
        placeholder="Search countries.."
        />
        </Form>
        </div>
        <div className="countries-list">
            {searchFilter.map((c) => (
                <CountryCard 
                data={c}
                name={c.name.common}
                officialname={c.name.official}
                key={c.name.common}
                languages={c.languages}
                currencies={c.currencies}
                population={c.population}
                flag={c.flags.png}
                code={c.cca3}
                
                />
            ))}

        </div>
        <ScrolltoTopButton/>
        </>
    )

};

export default CountryList;