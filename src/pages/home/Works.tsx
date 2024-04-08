// import React from 'react'

import WorksCard from "../../components/static/WorksCard";
import lyfecare from "../../assets/jobs/lyfecare.png";
import w2h from "../../assets/jobs/w2h.png";
import dan from "../../assets/jobs/danWilliamsSite.png";
import ui from "../../assets/jobs/ui-ux-design.png";

const Works = () => {
  return (
    <div id="" className="w-full h-[70vh py-[40px]  flex flex-col gap-4 justify-center bg-opac items-center">
      <div className="w-[90%] flex flex-col">

        {/* <h5 className="text-[21px] font-bold md:text-[26px] text-center mb-[15px] text-blue-40">
          Our Recent Works
        </h5> */}

        <h5 className="text-[14px] font-bold md:text-lef animate-bounce text-orange-500 text-center">OUR RECENT WORKS</h5>

        <h3 className="text-[20px] md:text-[23px] lg:text-[28px] md:text-lef text-center mb-[10px] md:mb-[30px]">What We Did for Other Businesses</h3>

        <div className="flex flex-co lg:flex-ro flex-wrap items-center gap-5 w-full lg:justify-between">

          <div className="flex flex-col gap-4 items-start shadow-md pb-4 rounded-md overflow-hidden w-full lg:w-[48%] ">
            <WorksCard 
              image={lyfecare}
              title="LyfeCare Health Tech"
              details="LyfeCare is an app that allows users save daily or weekly, based on their financial comfortability, towards medical emergencies and also helps users buy insurance at the end of the month from little saved money everyday."
            />

            <a className="p-2 bg-blue-400 text-white px-5 hover:px-7 hover:text-white rounded-md transition-all duration-300 ease-in-out ml-3" href="https://lyfecare.netlify.app">Overview</a>
          </div>

          <div className="flex flex-col gap-4 items-start shadow-md pb-4 rounded-md overflow-hidden  w-full lg:w-[48%] ">
            <WorksCard 
              image={w2h}
              title="Walking2Health"
              details="'Wlaking is the best possible exercise'. Walking not only makes you fit, it also help you live healthy by improves and prevents coronary heart disease and stroke, improves and prevents breast & prostate cancer, reduces stress, anxiety and fatigue etc. "
            />

            <a className="p-2 bg-blue-400 text-white px-5 hover:px-7 hover:text-white rounded-md transition-all duration-300 ease-in-out ml-3" href="https://walking2health.com">Overview</a>
          </div>

          <div className="flex flex-col gap-4 items-start shadow-md pb-4 rounded-md overflow-hidden w-full lg:w-[48%] ">
            <WorksCard 
              image={dan}
              title="DanWilliams Consult"
              details="Danwilliams Consult is a social-preneur firm, with a working vision to drive societal change through business peculiarities, professionalism and efficiency. We provide unique services that cut across Business Formation, Branding & Printing, and  Professional Advisory.."
            />

            <a className="p-2 bg-blue-400 text-white px-5 hover:px-7 hover:text-white rounded-md transition-all duration-300 ease-in-out ml-3" href="https://danwilliams.com.ng">Overview</a>
          </div>

          <div className="flex flex-col gap-4 items-start shadow-md pb-4 rounded-md overflow-hidden w-full lg:w-[48%] ">
            <WorksCard 
              image={ui}
              title="UI/UX Design"
              details="With design and interface softwares like Figma, AdobeXD, we have mastered creating beautiful and catchy user interfaces which allows a good user experience and flow."
            />

            <a className="p-2 bg-blue-400 text-white px-5 hover:px-7 hover:text-white rounded-md transition-all duration-300 ease-in-out ml-3" href="https://www.figma.com/file/Adgt5Kgi8ZZyNFH1xpUmKC/firstClass?type=design&node-id=0-1&mode=design&t=io6P6w3dF5gRsRui-0">Overview</a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Works