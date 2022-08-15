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
                <div>
                    <h5>Languages</h5>
                    {Object.values(languages || {}).map((value,i) => (
                        <span key={i}>{(i ? ', ' : '') + value} </span>
                    ))}
                </div>
                <div>
                    <h5>Currencies</h5>
                    {Object.values(currencies || {}).map((value,i) => {
                        console.log(value)
                        return(
                        <span key={i}>{(i ? ', ' : '') + value.name} </span>)
                        
})}
                </div>
            </div>
        </div>
        </>
    )
}

export default CountryCard;