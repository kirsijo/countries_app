import {Link} from "react-router-dom";

const CountryCard = (props) => {
    const {name, officialname, languages, currencies} = props;
    


    return (
        <>
        <div className="country-card">
            <div className="blue-name-card">
            <h3>{name}</h3>
            <h4>{officialname}</h4>
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