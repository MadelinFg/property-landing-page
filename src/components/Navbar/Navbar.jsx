import "./Navbar.css";

import logo from "../../assets/svg/logo-white.svg";

const Navbar = () => {
    return <div className="navbar">
        <img src={logo} alt="PropDown logo" />

        <ul className="menu-list">
            <li>
                <a className="menu-link" href="/">Home</a>
            </li>
            <li>
                <a className="menu-link" href="#categories">Categories</a>
            </li>
            <li>
                <a className="menu-link" href="#recommendations">Recommendations</a>
            </li>
            <li>
                <a className="menu-link" href="#blog">Blog</a>
            </li>
        </ul>
    </div>;
};

export default Navbar;