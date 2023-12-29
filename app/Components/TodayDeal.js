'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';


import BrandedFootwearAndClothings from '../pics/TodayDeal/BrandedFootwearAndClothings.webp'
import Chargers from '../pics/TodayDeal/Chargers.webp'
import Cookware from '../pics/TodayDeal/Cookware.webp'
import Dinnerware from '../pics/TodayDeal/Dinnerware.webp'
import ExtensionCords from '../pics/TodayDeal/ExtensionCords.webp'
import GardeningEquipments from '../pics/TodayDeal/GardeningEquipments.webp'
import bathHardwareAccessories from '../pics/TodayDeal/hardwareAccessories.webp'
import healthPills from '../pics/TodayDeal/healthPills.webp'
import mensFootwear from '../pics/TodayDeal/mensFootwear.webp'
import Wallpapers from '../pics/TodayDeal/Wallpapers.webp'
import WomenFootwear from '../pics/TodayDeal/WomenFootwear.webp'



const TodayDeal = () => {
const [SlidesPerView, setSlidesPerView] = useState(5);
useEffect(()=>{
    if(window.screen.width <= 640){
        setSlidesPerView(1);
    }
    if(window.screen.width > 640 && window.screen.width <= 1024){
        setSlidesPerView(3);
    }
});
  return (
    <div className='bg-cyan-200 border-t border-blue-400 pt-5 pb-14 shadow-lg shadow-slate-500'>
        <h1 className='text-3xl font-bold m-5'>Deal Of The Day</h1>
      <Swiper
        slidesPerView={SlidesPerView}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper">
            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={BrandedFootwearAndClothings} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-1 rounded'>Upto 33% off</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Branded Footwear and Clothings</p>
                </Link>
            </SwiperSlide>


            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={Chargers} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-2 rounded'>Upto 65% off</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Chargers, Adapters and more</p>
                </Link>
            </SwiperSlide>


            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={Cookware} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-2 rounded'>Upto 35% off</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Cookware, Pots and Pans from Top Brands</p>
                </Link>
            </SwiperSlide>


            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={Dinnerware} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-2 rounded'>Upto 66% off</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Dinnerware & Serveware from Top Brands</p>
                </Link>
            </SwiperSlide>


            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={ExtensionCords} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-2 rounded'>Upto 69% off</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Extension Cords</p>
                </Link>
            </SwiperSlide>


            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={GardeningEquipments} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-2 rounded'>Upto 80% off</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Best Offers on Gardening Equipments</p>
                </Link>
            </SwiperSlide>


            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={bathHardwareAccessories} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-2 rounded'>Upto 56% off</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Bath Hardware Accessories from Top Brands</p>
                </Link>
            </SwiperSlide>


            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={healthPills} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-2 rounded'>Upto 51% of</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Great Deals on Health and Sports Suppliments</p>
                </Link>
            </SwiperSlide>


            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={mensFootwear} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-2 rounded'>Upto 33% off</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Best Offers from Men's Footwear</p>
                </Link>
            </SwiperSlide>


            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={Wallpapers} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-2 rounded'>Upto 78% off</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Best Wallpapers from Top Brands</p>
                </Link>
            </SwiperSlide>


            <SwiperSlide>
                <Link href={''} className='rounded-md bg-slate-200 border border-slate-400 flex flex-col mx-1 p-2 gap-2'>
                    <div className='rounded-lg py-2 bg-white shadow-md shadow-slate-400 w-full flex justify-center'>
                        <Image src={WomenFootwear} className='h-44 w-auto'/>
                    </div>
                    <span className='flex justify-between text-md font-semibold text-red-500'>
                        <h3 className='text-white bg-red-500 px-2 rounded'>Upto 77% off</h3>
                        <h3 className=''>Deal of the Day</h3>
                    </span>
                    <p className='text-sm font-semibold truncate'>Best Offers from Women's Footwear</p>
                </Link>
            </SwiperSlide>


      </Swiper>
    </div>
  )
}

export default TodayDeal