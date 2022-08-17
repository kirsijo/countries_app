import {Link} from "react-router-dom";

const CountryCard = (props) => {
    const {name, officialname, languages, currencies, population} = props;

    const formatPopulation = (population) => {
        if(population>=1000000) {
           const populationInMillions = population / 1000000;
           return `${populationInMillions.toFixed(2)} M`
        } if(population>=100000) {
            const populationInHundredsThousands = population / 100000;
            return `${populationInHundredsThousands.toFixed(2)} K` 
        } if(population>=10000) {
            const populationInTensOfThousands = population/10000;
            return `${populationInTensOfThousands.toFixed(2)} K`
        } if(population<10000) {
            const populationInThousands = population/10000;
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
                        console.log(value)
                        return(
                        <span key={i}>{(i ? ', ' : '') + value.name} </span>)
                        
})}
                </div>
                <div>
                    <h5>Population</h5>
                    {formatPopulation(population)}

                </div>
            </div>
        </div>
        </>
    )
}

export default CountryCard;