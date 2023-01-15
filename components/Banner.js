import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {BANNERS} from '../db/banner-image'

const banners = BANNERS

console.log(banners)

// import required modules
import { Pagination, Navigation, Thumbs } from "swiper";
import Image from 'next/image';

function Banner() {
  return (
    <div className=' w-full xl:w-[1024px] flex justify-center m-auto '>
    <Swiper
    //   slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Pagination, Thumbs]}
      className="mySwiper"
    >
        {banners.map(banner => (
        <SwiperSlide key={banner.id} >
            <div className='h-[30vh] w-[95%] m-auto rounded-md'>
        <img src={banner.image} className='w-full h-full rounded-md object-cover ' />
            </div>
      </SwiperSlide>
        ))}
    </Swiper>

  </div>
  )
}

export default Banner