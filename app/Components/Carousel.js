'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import pic1 from '../pics/caraouselPics/1.webp'
import pic2 from '../pics/caraouselPics/2.webp'
import mobilePic1 from '../pics/caraouselPics/mobile/1.jpg'
import mobilePic2 from '../pics/caraouselPics/mobile/2.jpg'
import mobilePic3 from '../pics/caraouselPics/mobile/3.jpg'
import Link from 'next/link';


const Carousel = () => {
  return (
    <div className='pt-7'>

    <div className='hidden md:block'>
      <Swiper 
        autoplay={{
          delay:3000,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper hidden md:block">
        <SwiperSlide><Link href={''}><Image src={pic1}/></Link></SwiperSlide>
        <SwiperSlide><Link href={''}><Image src={pic2}/></Link></SwiperSlide>
      </Swiper>
    </div>




      <div className='md:hidden pt-10'>

        <Swiper 
          autoplay={{
            delay:3000,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide><Link href={''}><Image src={mobilePic1}/></Link></SwiperSlide>
          <SwiperSlide><Link href={''}><Image src={mobilePic2}/></Link></SwiperSlide>
          <SwiperSlide><Link href={''}><Image src={mobilePic3}/></Link></SwiperSlide>
        </Swiper>
      </div>


    </div>
  );
}

export default Carousel
