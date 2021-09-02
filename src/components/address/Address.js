import React from "react";
import "./adress.scss"
import Logo from "../logo/logo.png"

const Address = () => {
    return (
        <div>
        <div className="address">
        <img src={Logo} alt='PBInvest' className="address__img" />
        <div className="address__main">
        <div>
           <h2>Patryk Bartosiewicz</h2>
           <a href="mailto: pbinvestremont@gmail.com">pbinvestremont@gmail.com</a>
           <h1>668 667 370</h1>
        </div>
        </div>
  </div>
  </div>)
};

export default Address;