'use client'
import React from 'react';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import TodayDealLink from './TodayDealLink';


import BrandedFootwearAndClothings from '../pics/TodayDeal/BrandedFootwearAndClothings.webp'
import Chargers from '../pics/TodayDeal/Chargers.webp'
import Cookware from '../pics/TodayDeal/Cookware.webp'
import Dinnerware from '../pics/TodayDeal/Dinnerware.webp'
import ExtensionCords from '../pics/TodayDeal/ExtensionCords.webp'
import GardeningEquipments from '../pics/TodayDeal/GardeningEquipments.webp'
import hardwareAccessories from '../pics/TodayDeal/hardwareAccessories.webp'
import healthPills from '../pics/TodayDeal/healthPills.webp'
import mensFootwear from '../pics/TodayDeal/mensFootwear.webp'
import Wallpapers from '../pics/TodayDeal/Wallpapers.webp'
import WomenFootwear from '../pics/TodayDeal/WomenFootwear.webp'

const TodayDealItems =[
    {
        image: BrandedFootwearAndClothings,
        discount: 33,
        text: "",
    },
    {
        image: Chargers,
        discount: 33,
        text: "",
    },
    {
        image: Cookware,
        discount: 33,
        text: "",
    },
    {
        image: Dinnerware,
        discount: 33,
        text: "",
    },
    {
        image: ExtensionCords,
        discount: 33,
        text: "",
    },
    {
        image: GardeningEquipments,
        discount: 33,
        text: "",
    },
    {
        image: hardwareAccessories,
        discount: 33,
        text: "",
    },
    {
        image: healthPills,
        discount: 33,
        text: "",
    },
    {
        image: mensFootwear,
        discount: 33,
        text: "",
    },
    {
        image: Wallpapers,
        discount: 33,
        text: "",
    },
    {
        image: WomenFootwear,
        discount: 33,
        text: "",
    },
];



const TodayDeal = () => {
  return (
    <div className='bg-cyan-100 my-20'>
      <Swiper
        slidesPerView={5}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper grid grid-cols-5">
        {
            TodayDealItems.map((item, index)=>(
                <TodayDealLink image={item.image}/>
            ))
        }
      </Swiper>
    </div>
  )
}

export default TodayDeal