// import React from 'react'

import { IoIosCall, IoIosMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="w-full py-[40px] flex items-center justify-center relative font-pop">
        <div className="w-[90%] mt-[70px] flex flex-col items-center">

            <h4 className="text-[25px] font-bold mb-[10px] animate-pulse">Contact Us</h4>

            <h5 className="text-[14px] mb-[30px] md:mb-[45px]">We are here for YOU..</h5>

            <div className="flex flex-col md:flex-row gap-5 items-center">
                
                <div className="w-[250px] h-[150px] bg-gray-300 rounded-md relative p-[20px] pt-[30px] font-bold">
                    <div className="absolute left-[40%] top-[-17px] md:top-[-25px] p-2 text-[20px] md:text-[30px] bg-black text-white rounded-full">
                        <IoIosCall />
                    </div>
                    <h5  className="text-[13px]">Call Us</h5>
                    <h5>+353 863 571 889</h5>
                </div>
                
                <div className="w-[250px]  h-[150px] bg-gray-300 rounded-md relative p-[20px] pt-[30px] font-bold">
                    <div className="absolute left-[40%] top-[-17px] md:top-[-25px] p-2 text-[20px] md:text-[30px] bg-black text-white rounded-full">
                        <IoIosMail />
                    </div>
                    <h5 className="text-[13px]">Send Us A Direct Mail</h5>
                    <h5>info@ayokaconsult.com</h5>
                </div>

            </div>

        {/* contact us form */}
            <form action="" className="w-full md:w-[60%] lg:w-[46%] flex flex-col gap-4 items-center mt-[40px]">

                <h5 className="text-[18px] font-bold md:text-[22px] lg:text-[20px] text-[#000000] animate-bounce text-center md:text-left">or FILL THE FORM BELOW</h5>

                <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#000000]" type="text" name="" id="" placeholder="Name" />

                <input className="w-full h-[43px] px-3 rounded-md outline-none text-[12px] lg:text-[15px] border-[1px] border-[#000000]" type="email" name="" id="" placeholder="Email" />

                <textarea className="w-full h-[130px] py-3 px-3 text-[12px] md:text-[15px] rounded-md border-[1px] border-[#000000]" name="" id="" placeholder="Enter your message" />

                <button type="submit" className="bg-black hover:bg-transparent text-white rounded-md font-bold w-full hover:border-[1px] hover:border-black hover:text-black">
                    Submit
                </button>

                <h5 className="text-[14px] font-bold mt-[40px]">
                Chat with us directly on <a className="text-black border-[1px] border-black font-bold animate-pulse p-2 rounded-md hover:text-black" href="">Whatsapp</a>
                </h5>

            </form>

        </div>
    </div>
  )
}

export default ContactUs