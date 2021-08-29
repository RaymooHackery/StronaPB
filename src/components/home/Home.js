import React from "react";
import "./Home.scss"
import "./../../styles/layout.scss"
// import Carousel from "../carousel/carousel";
// import Images from "../carousel/carouselImages";
import { SliderData } from "../carousel/carouselImages2";
import Description from "../description/description";

// const images = [1,2,3,4,5];

const Home = () => {
    console.log(SliderData)
    return (
        <div>
        <div>
            <img src={SliderData.image} alt="helo" />
        </div>
        <Description />
        </div>
    ) 
}

export default Home;