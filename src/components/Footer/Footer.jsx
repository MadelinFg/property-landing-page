import "./Footer.css";

import logo from "../../assets/svg/logo-black.svg";

import x from "../../assets/svg/social-media/x.svg"
import facebook from "../../assets/svg/social-media/facebook.svg"
import instagram from "../../assets/svg/social-media/instagram.svg"
import linkedin from "../../assets/svg/social-media/linkedin.svg"

const Footer = () => {
    const date = new Date()

    return <footer className="footer">
        <h3 className="title">Discover the Comfort of Your Life</h3>

        <div className="inner-footer-container">
            <div className="row">
                <div className="column">
                    <img src={logo} alt="PropDown logo" />
                </div>
                <div className="column">
                    <a href="/" className="footer-secc footer-txt">Home</a>
                    <a href="#categories" className="footer-secc footer-txt">Categories</a>
                </div>
                <div className="column">
                    <a href="#recommendations" className="footer-secc footer-txt">Recommendations</a>
                    <a href="#blog" className="footer-secc footer-txt">Blog</a>
                </div>
                <div className="column">
                    <a href="mailto:madelinfg@gmail.com" className="footer-secc footer-txt">Contact</a>
                </div>
                
                <hr className="hr-orange" />

                <div className="column">
                    <a href="#categories" className="footer-txt">House</a>
                    <a href="#categories" className="footer-txt">Apartment</a>
                </div>
                <div className="column">
                    <a href="#categories" className="footer-txt">Office</a>
                    <a href="#categories" className="footer-txt">Warehouse</a>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <p className="copyright-txt__1">Copyright © {date.getFullYear()}</p>
                    <p className="copyright-txt__2">Developed by Madelin Flores</p>
                </div>
                <ul className="column social-media">
                    <li>
                        <a target="_blank" href="https://www.x.com"><img src={x} alt="X" /></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.facebook.com"><img src={facebook} alt="Facebook" /></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com"><img src={instagram} alt="Instagram" /></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/madelin-flores-1890191a9/"><img src={linkedin} alt="Linkedin" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>;
};

export default Footer;