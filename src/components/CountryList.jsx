import axios from "axios";
import {useEffect, useState} from "react";
import CountryCard from "./CountryCard";
import Nav from "./Nav";
import ScrolltoTopButton from "./ScrolltoTopButton";


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
        return <p className="loading">Loading...</p>
    }

    return (
        <>
        <Nav/>
        <div className="country-search-container">
            <form onChange={searchUpdateHandler}>
        <input
        className="country-search"
        type="text"
        placeholder="Search countries.."
        />
        </form>
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