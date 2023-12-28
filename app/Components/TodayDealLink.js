import React from 'react'
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';




const TodayDealLink = ({image}) => {
  return (
        <Link href={''} className='bg-red-500 mx-1 flex flex-col'>
            <div className='bg-white flex justify-center py-10 my-1 mx-2 rounded-md border-1 border-black'>
                <Image  className='h-full' src={image}/>
            </div>
        </Link>
  )
}

export default TodayDealLink