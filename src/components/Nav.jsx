import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <>
        <div className="nav-links">
        <nav>
            <ul>
                <li>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            </li>
            <li>
            <Link to="countries">
                <h1>Countries</h1>
            </Link>
            </li>
            </ul>
        </nav>
        </div>
        
        </>
    )
}

export default Nav;