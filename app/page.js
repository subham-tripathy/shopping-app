import React from 'react'
import Carousel from './Components/Carousel'
import AllCategory from './Components/AllCategory'
import TodayDeal from './Components/TodayDeal'
import Footer from './Components/Footer'

const page = () => {
  return (
    <main>
      <Carousel/>
      <AllCategory/>
      <TodayDeal/>
    </main>
  )
}

export default page