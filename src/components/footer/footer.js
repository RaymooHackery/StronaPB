import React from "react";
import "./footer.scss"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <ul className="footer-nav">
                    <li className="footer-it">
                        <a className="footer-link" href="./">O nas</a>
                    </li>
                    <li className="footer-it">
                    <a className="footer-link" href="./services">Oferta</a>
                    </li>
                    <li className="footer-it">
                    <a className="footer-link" href="./gallery">Galeria</a>
                    </li>
                    <li className="footer-it">
                    <a className="footer-link" href="./contact">Kontakt</a>
                    </li>
                </ul>
            <p className="footer-copyr">
                Patryk Bartosiewicz @2021
            </p>
            </footer>
        </div>
    )
};

export default Footer;