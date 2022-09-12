import Form from 'react-bootstrap/Form';

const Search = () => {


return (
 <>
<div className="country-search-container">
<Form>
<Form.Control 
type="search"
className="me-2"
placeholder="Search countries.."
/>
</Form>
</div>
</>
)

}

export default Search;