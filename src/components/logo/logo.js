import React from "react";
import image from "./../../img/logo3.png";
import { Link } from "react-router-dom";
import "./logo.scss"

const Logo = () => {
  return (
    <div className="logo">
        <Link to={"/"}>            
            <img className={"logo__image"} src={image} alt="pbinv"/>
        </Link>
    </div>
  );
};

export default Logo;
