import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import {BANNERS} from '../db/banner-image'
const banners = BANNERS

// import required modules
import { Pagination, Navigation, Thumbs } from "swiper";
import Image from 'next/image';

function Banner() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);
  return (
    <div className='w-full xl:w-[1024px] flex justify-center m-auto  mt-1 transition-all duration-700 ease-out'>
    {loading ?
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
            <div className='relative h-[35vh] w-[95%] m-auto rounded-md'>
        <img src={banner.image} className='w-full h-full rounded-md object-cover ' />

            </div>
      </SwiperSlide>
        ))}
    </Swiper>

  : 
  <div className='relative h-[35vh] w-[95%] m-auto rounded-md bg-gray-400 overflow-hidden animate-pulse transition-all duration-500 linear'>
  <div className='absolute h-full w-10  bg-white pulse overflow-hidden z-[40]'></div>
          <div className="flex  justify-center  space-x-3 mt-[25vh] m-auto bottom-[10px] ">
            <p className="w-[8px] h-[8px]  rounded-full bg-gray-500"></p>
            <p className="w-[8px] h-[8px]  rounded-full bg-gray-500"></p>
            <p className="w-[8px] h-[8px]  rounded-full bg-gray-500"></p>
            <p className="w-[8px] h-[8px]  rounded-full bg-gray-500"></p>
            <p className="w-[8px] h-[8px]  rounded-full bg-gray-500"></p>
          </div>
      </div> 
  }
  </div>
  )
}

export default Banner