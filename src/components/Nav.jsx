import {Nav, Navbar} from 'react-bootstrap';


const Navigation = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" opacity="65">
        <Navbar.Brand className="m-3"href="/">Countries app</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav">
        <Nav className="mr-auto">
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