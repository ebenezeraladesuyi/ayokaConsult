// import React from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/partners/Artboard 14 copy-80 - Copy.jpg"
import img2 from "../../assets/partners/ekiti-logo.jpg"
// import img3 from "../../assets/partners/iStand-Logo.png"
// import img4 from "../../assets/partners/swys-logo.png"
// import img5 from "../../assets/images/5.svg"
// import img6 from "../../assets/partners/3.svg"
import img8 from "../../assets/partners/DWC-Logo.png"
import PartnersCard from "../../components/static/onScroll/PartnersCard";
import vol from "../../assets/partners/vola2.png";
import lyfe from "../../assets/partners/lyfeCareLogo.jpg";


const Partners = () => {
    
    
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidestoShow: 3,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }


  return (
    <div className="w-full h-[30vh] py-[50px] flex flex-col items-center justify-center bg-blac font-pop shadow-md overflow-hidden">
        <div className="w-[90%] h-[80%] flex flex-col justify-center items-center">

            {/* <h5 className="text-[17px] font-bold animate-bounce md:text-[25px] mb-[30px]">OUR PARTNERS</h5> */}

            <div className="w-full h-full text-white ">
                <Slider {...settings}>

                    <PartnersCard 
                        imag={img1}
                    />

                    <PartnersCard 
                        imag={img2}
                    />
                    <PartnersCard 
                        imag={vol}
                    />
                    {/* <PartnersCard 
                        imag={img6}
                    /> */}
                    <PartnersCard 
                        imag={img8}
                    />
                    <PartnersCard 
                        imag={lyfe}
                    />


                </Slider>
            </div>

        </div>
    </div>
  )
}

export default Partners