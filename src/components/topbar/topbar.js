import React from "react";
import Navbar from "./../navbar/Navbar";
import Contact from "./../contact/contact";
import Logo from "../logo/logo";

const Topbar = () => {
    return (
    <div className="row">
        <div className="column">
            <Logo/>
        </div>
        <div className="column column--grow">            
          <Contact />
          <Navbar />
        </div>        
    </div>
    )
}

export default Topbar;