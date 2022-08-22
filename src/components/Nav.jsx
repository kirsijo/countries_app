import {NavLink} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <>
        <Nav>
            <Nav.Item>
           <Nav.Link href="/">Home</Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link href="/countries"> Countries </Nav.Link>
            </Nav.Item>

            
        
        </Nav>
        
        </>
    )
}

export default Navigation;