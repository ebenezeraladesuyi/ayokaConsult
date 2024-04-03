// import React from 'react';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroCard } from "../../components";

const Hero = () => {
    
    
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        // responsive: [
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 770,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidestoShow: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 475,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ]
    }

  return (
    <div className="w-full overflow-hidden">
        <Slider {...settings}>

            <div className="bg-hero-bg bg-center bg-cover w-full h-full">
                <HeroCard 
                    content1="WE ARE THE BEST"
                    content2="We Innovate Tech Solutions Empowering Businesses To Excel."
                    content3="Innovative tech solutions empowering businesses to thrive. Simplifying complexity, maximizing efficiency, driving growth."
                />
            </div>

            <div className="bg-hero-bg2 bg-center bg-cover w-full h-full">
                <HeroCard 
                    content1="WE ARE DEDICATED"
                    content2="Revolutionize Your Tech Solutions With Us"
                    content3="Streamlined processes. Enhanced productivity. Elevate your business with our expertise."
                 />
            </div>

        </Slider>
        
    </div>
  )
}

export default Hero