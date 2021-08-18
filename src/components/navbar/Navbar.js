import React from "react";
import "./Navbar.scss"
import NavbarItem from "./NavbarItem";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavbarItem pathTo="/">Home</NavbarItem>
            <NavbarItem pathTo="/services" > Services</NavbarItem >
            <NavbarItem pathTo="/gallery" > Gallery</NavbarItem >
            <NavbarItem pathTo="/contact" > Contact</NavbarItem >
        </nav >)
}

export default Navbar;