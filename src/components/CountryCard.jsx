import {Link} from "react-router-dom";

const CountryCard = (props) => {
    const {name, officialname, languages, currencies, population, flag} = props;

    const formatPopulation = (population) => {
        if (population > 1000000000) {
            const populationInBillions = population / 1000000000;
           return `${populationInBillions.toFixed(2)} B`
        }
        else if(population>=1000000) {
           const populationInMillions = population / 1000000;
           return `${populationInMillions.toFixed(2)} M`
        } else {
            const populationInThousands = population / 1000;
            return `${populationInThousands.toFixed(2)} K` 
    }
}

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
                        return(
                        <span key={i}>{(i ? ', ' : '') + value.name} </span>)
                        
})}
                </div>
                <div>
                    <h5>Population</h5>
                    {formatPopulation(population)}

                </div>
                <div className="flag-container">
                    <img src={flag}></img>

                </div>
            </div>
        </div>
        </>
    )
}

export default CountryCard;