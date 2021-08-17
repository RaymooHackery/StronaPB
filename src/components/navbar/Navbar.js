import React from "react";
import "./Navbar.scss"
import NavbarItem from "./NavbarItem";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavbarItem waclaw="/">Home</NavbarItem>
            <NavbarItem waclaw="/services" > Services</NavbarItem >
            <NavbarItem waclaw="/gallery" > Gallery</NavbarItem >
            <NavbarItem waclaw="/contact" > Contact</NavbarItem >
        </nav >)
}

export default Navbar;