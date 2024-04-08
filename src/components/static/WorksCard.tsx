/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

// import lyfecare from "../../assets/jobs/lyfecare.png"

interface iWorksCard {
    image: any;
    title : string;
    details: string;
}

const WorksCard:React.FC<iWorksCard> = ({image, title, details}) => {
  return (
    <div className="w-full lg:w-[40% relativ ">
        <div className="w-full lg:h-[300px]">
            <img className="w-full h-full" src={image} alt="" />
        </div>

        <div className="flex flex-col gap-2 mt-[15px] items-st">
            <h5 className="text-[18px] font-bold md:text-[22px] text-blue-400 px-3">
                {/* LyfeCare Health Tech */}
                {title}
            </h5>

            <h5 className="text-justify text-[12px] md:text-[15px] px-3">
                {/* LyfeCare is an app that allows users save daily or weekly, based on their financial comfortability, towards medical emergencies and also helps users buy insurance at the end of the month from little saved money everyday */}
                {details}
            </h5>
        </div>
    </div>
  )
}

export default WorksCard