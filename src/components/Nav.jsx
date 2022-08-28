import {Nav, Navbar} from 'react-bootstrap';


const Navigation = () => {
    return (
        <>
        <style type="text/css">
            {`.navbar-glass {
                 background-color: transparent;
                 background: rgba(28, 18, 18, 0.727);
                 box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
                 backdrop-filter: blur(8px);
                 -webkit-backdrop-filter: blur(6px);
                 border: 1px solid rgba(61, 48, 48, 0.3);
            }
            .navbar-glass a {
                color:white;
            }

            .navbar-glass a {
                display: inline-block;
                position: relative;
                color:#26d9f7
              }

              .navbar-glass a:hover {
                color: white;
              }
              
              .navbar-glass a:after {
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: #0087ca;
                transform-origin: bottom right;
                transition: transform 0.25s ease-out;
              }
              
              .navbar-glass a:hover:after {
                transform: scaleX(1);
                transform-origin: bottom left;
              }
            .navbar-glass button {
                color:white;
                background: white;
            }
            `}
        </style>
        <Navbar className="p-3 mb-4" variant="glass" collapseOnSelect expand="sm" opacity="65" >
        <Navbar.Brand className="m-3" variant="" href="/">Countries</Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav">
        <Nav className="mb-auto">
            <Nav.Item>
           <Nav.Link href="/">Home</Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link href="/countries"> Browse </Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        
        </>
    )
}

export default Navigation;