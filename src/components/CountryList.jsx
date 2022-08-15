import axios from "axios";
import {useEffect, useState} from "react";
import CountryCard from "./CountryCard";
import Nav from "./Nav";


const CountryList = (props) => {
    const [countryData, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
            setCountries(res.data);
            console.log(res)
            console.log(countryData);
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
                flag={c.flags.png}
                
                />
            ))}

        </div>
        </>
    )

};

export default CountryList;