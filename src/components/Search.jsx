import Form from 'react-bootstrap/Form';
import {search} from '../features/countries/countriesSlice';
import {useSelector, useDispatch} from 'react-redux';


const Search = () => {

    const dispatch = useDispatch();

    const countryData = useSelector((state) => state.countries.countries);
   
return (
 <>
<Form onChange={(e) => dispatch(search(e.target.value))}>
<Form.Control 
type="search"
className="me-2"
placeholder="Search countries.."
/>
</Form>
</>
)

}

export default Search;