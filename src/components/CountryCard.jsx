import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CountryCard = (props) => {
    const {name, officialname, languages, currencies, population, flag, data, code} = props;

    console.log(props);

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
        <Card className="mb-3" style={{ width: '15rem'}}>
            <Card.Img variant="top" src={flag}
            />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle> Official name: {officialname}</Card.Subtitle>
            <Card.Subtitle> Languages: {Object.values(languages || {}).join(', ')
                    }</Card.Subtitle>
            <Card.Subtitle>
                Currencies: {Object.values(currencies|| {}).map((currency) => currency.name).join(', ')}
            <Card.Subtitle>Population: {formatPopulation(population)}</Card.Subtitle>
            </Card.Subtitle>
            </Card.Body>
            <Button variant="outline-info" href={`/countries/${props.code}`}>See more</Button>               
               
          </Card>
        </>
    )
}

export default CountryCard;