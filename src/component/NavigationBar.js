import { Link } from "react-router-dom"

import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/user" className="nav-link">User</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar;