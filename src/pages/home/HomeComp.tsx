// import React from 'react'

import CountUpSection from "./CountUp"
import Hero from "./Hero"
import Offer from "./Offer"
import Testimonies from "./Testimonies"
import Works from "./Works"

const HomeComp = () => {
  return (
    <div>
        <Hero />
        <Offer />
        <CountUpSection />
        <Works />
        <Testimonies />
    </div>
  )
}

export default HomeComp