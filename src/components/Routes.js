import React from "react";
import { Switch, Route } from "react-router-dom";
import Address from "./address/Address";
import MyGallery from "./gallery/MyGallery";
import Home from "./home/Home";
import Services from "./services/services";

const Routes = () => {
    return (
        <Switch>
            <Route path="/services">
                <Services />
            </Route>
            <Route path="/gallery">
                <MyGallery />
            </Route>
            <Route path="/contact">
                <Address />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
};

export default Routes;