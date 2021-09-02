import React from "react";
import "./Home.scss"
import "./../../styles/layout.scss"
import Images from "../carousel/carouselImages";
import Description from "../description/description";
import Carousel from "../carousel/carousel";

const Home = () => {
    return (
        <div>
            <div>
                <Carousel images={Images} />
            </div>
        <Description />
        </div>
    ) 
}

export default Home;