import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {favourite, unfavourite} from '../features/countries/countriesSlice'
import {useDispatch, useSelector} from 'react-redux'

const CountryCard = (props) => {
    const {name, officialname, languages, currencies, population, flag, data, code, favourited} = props;
   

    const dispatch = useDispatch();

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



// add filtering to dispatch to toggle favourites
console.log(favourited, name);
    return (
        <>
        <Card className="mb-3" style={{ width: '15rem'}}>
            <Card.Img variant="top" src={flag}
            />
            <Card.Body>
            <Card.Title className="p-2">{name}</Card.Title>
            <Form>
                <p>Been to this country?</p>
                <Form.Check checked={favourited} variant="success" type="checkbox" inline="true" onChange={favourited ? () => dispatch(unfavourite(data)) : () => dispatch(favourite(data)) }>
                </Form.Check>
            </Form>
            <Card.Subtitle className="p-2"> Official name: {officialname}</Card.Subtitle>
            <Card.Subtitle className="p-2"> Languages: {Object.values(languages || {}).join(', ')
                    }</Card.Subtitle>
            <Card.Subtitle className="p-2">
                Currencies: {Object.values(currencies|| {}).map((currency) => currency.name).join(', ')}
                </Card.Subtitle>
            <Card.Subtitle className="p-2">Population: {formatPopulation(population)}</Card.Subtitle>
            {/* <Button variant="outline-danger" onClick={() => dispatch(favourite(data))}><i className="bi bi-heart"></i></Button> */}
            </Card.Body>
            <Button variant="outline-info" href={`/countries/${props.code}`}>See more</Button>               
               
          </Card>
        </>
    )
}

export default CountryCard;