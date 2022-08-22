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
        <Card style={{ width: '15rem'}}>
            <Card.Img variant="top" src={flag}/>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle> Official name: {officialname}</Card.Subtitle>
            <Card.Subtitle> Languages: {Object.values(languages || {}).map((value,i) => (
                        <span key={i}>{(i ? ', ' : '') + value} </span>
                    ))}</Card.Subtitle>
            <Card.Subtitle>
                Currencies: {Object.values(currencies || {}).map((value,i) => {
                        return(
                        <span key={i}>{(i ? ', ' : '') + value.name} </span>)
                    })}
            <Card.Subtitle>Population: {formatPopulation(population)}</Card.Subtitle>
            </Card.Subtitle>
            <Button variant="outline-info" href={`${props.code}`}>See more</Button>               
                </Card.Body>
          </Card>
        </>
    )
}

export default CountryCard;