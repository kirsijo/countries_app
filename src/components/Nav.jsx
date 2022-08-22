import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <>
        <div className="nav-links">
        <nav>
            <ul>
                <li>
            <NavLink to="/">
                <h1>HOME</h1>
            </NavLink>
            </li>
            <li>
            <NavLink to="/countries">
                <h1>COUNTRIES</h1>
            </NavLink>
            </li>
            </ul>
        </nav>
        </div>
        
        </>
    )
}

export default Nav;