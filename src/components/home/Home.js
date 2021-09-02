import React from "react";
import "./Home.scss"
import "./../../styles/layout.scss"
// import Carousel from "../carousel/carousel";
import Images from "../carousel/carouselImages";
import Description from "../description/description";

// const images = [1,2,3,4,5];

const Home = () => {
    console.log(Images[0].image)
    console.log(Images)
    return (
        <div>
        <div>
            <img src={Images[0].path} alt="helo" />
        </div>
        <Description />
        </div>
    ) 
}

export default Home;