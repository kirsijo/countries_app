import {Link} from "react-router-dom";

const CountryCard = (props) => {({
    name, official, capital, languages, currencies})

    return (
        <>
        <div className="country-card">
            <div className="blue-name-card">
            <h3>{props.name}</h3>
            <h4>{props.official}</h4>
            </div>
            <div className="country-information">
                <ul>
                    {Object.values(languages || {}).map((value,i) => (
                        <span key={i}>{(i ? ', ' : '') + value} </span>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default CountryCard;