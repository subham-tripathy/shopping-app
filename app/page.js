import React from 'react'
import Carousel from './Components/Carousel'
import AllCategory from './Components/AllCategory'
import TodayDeal from './Components/TodayDeal'

const page = () => {
  return (
    <main className='mt-16'>
      <Carousel/>
      <AllCategory/>
      <TodayDeal/>
    </main>
  )
}

export default page