import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

import "./Header.css";

const Header = () => {
    return <header className="header">
        <Navbar />

        <div className="inner-header">
            <h5 className="txt-header text">Greetings, you're now in PropDown</h5>
            <h1 className="txt-header title">Bringing Your Dream Home Vision to Life.</h1>
            <h5 className="txt-header text">Lorem ipsum dolor sit amet consectetur. Est quisque elementum aliquam a.</h5>
            <Button text="Publish a Property" customStyle="orange" />
        </div>
    </header>;
};

export default Header;