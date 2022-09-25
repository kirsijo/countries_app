import Nav from "./Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
    return (
        <>
        <Nav/>
        <Container fluid>
            <Col>
            <Row>

            </Row>
            </Col>

        </Container>
        <div className="overlay-div"><h6>Country app is a project I made in React classes at Business College Helsinki.<br/>
        Built using https://restcountries.com and https://api.openweathermap.org .<br/>
        Images courtesy of unsplash.com</h6></div>
        </>
    )
}

export default Home;