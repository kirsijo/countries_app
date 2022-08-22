import {NavLink} from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
        <Navbar expand="lg">
            <Navbar.Brand className="m-3"href="/">Countries app</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Item>
           <Nav.Link href="/">Home</Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link href="/countries"> Countries </Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        
        </>
    )
}

export default Navigation;