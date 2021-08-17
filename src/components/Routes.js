import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route path="/services">
                <Services />
            </Route>
            <Route path="/gallery">
                <Gallery />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
};
function Home() {
    return <h2>Home</h2>;
}

function Services() {
    return <h2>Services</h2>;
}

function Gallery() {
    return <h2>Gallery</h2>;
}

function Contact() {
    return <h2>Contact</h2>
}

export default Routes;