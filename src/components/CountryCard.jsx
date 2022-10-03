import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {favourite, unfavourite} from '../features/countries/countriesSlice'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
    const {name, officialname, languages, currencies, population, flag, data, favourited} = props;
   
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


    return (
        <>
        <Card className="mb-3" style={{ width: '15rem'}}>
            <Card.Img variant="top" src={flag}
            />
            <Card.Body>
            <Card.Title className="p-2">{name}</Card.Title>
            <Form>
                Been to this country?
                <Form.Check checked={favourited} variant="success" type="checkbox" onChange={favourited ? () => dispatch(unfavourite(data)) : () => dispatch(favourite(data)) }>
                </Form.Check>
            </Form>
            <Card.Subtitle className="p-2"> Official name: {officialname}</Card.Subtitle>
            <Card.Subtitle className="p-2"> Languages: {Object.values(languages || {}).join(', ')
                    }</Card.Subtitle>
            <Card.Subtitle className="p-2">
                Currencies: {Object.values(currencies|| {}).map((currency) => currency.name).join(', ')}
                </Card.Subtitle>
            <Card.Subtitle className="p-2">Population: {formatPopulation(population)}</Card.Subtitle>
            </Card.Body>
            <Button as={Link} variant="outline-info" to={`/countries/${props.code}`}>See more</Button>               
               
          </Card>
        </>
    )
}

export default CountryCard;