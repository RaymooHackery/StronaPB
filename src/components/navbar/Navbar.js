import React from "react";
import "./Navbar.scss"
import NavbarItem from "./NavbarItem";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavbarItem pathTo="/"> O nas</NavbarItem>
            <NavbarItem pathTo="/services" > Usługi</NavbarItem >
            <NavbarItem pathTo="/gallery" > Galeria</NavbarItem >
            <NavbarItem pathTo="/contact" > Kontakt</NavbarItem >
        </nav >)
}

export default Navbar;