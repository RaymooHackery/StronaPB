import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const NavbarItem = (props) => {
    return (
        <div className="navbar__item">
            <Link to={props.waclaw}>
                <div className="navbar__item-text">
                    {props.children}
                </div>
            </Link>
        </div>
    )
}

export default NavbarItem;