import { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Mousewheel } from "swiper/modules";
import { Anime } from "../animeItem/anime";

export const SliderAnime = () => {
  return (
    <div className="xl:hidden mt-[170px] border-solid border border-mainBlue px-[20px] py-[20px] rounded-[20px]">
      <div className="flex justify-between mb-[40px] items-center">
        <h1 className="text-white text-[40px] font-Bowler xl:text-[35px] lg:text-[30px] textwrap">
          Популярное за всё время
        </h1>
        <a
          className="hoverBtnShowMore pt-[12px] pb-[12px] pr-[13px] pl-[18px] border border-solid border-[#3474DC] rounded-[50px] text-base font-GothamPro font-extralight text-white"
          href=""
        >
          <p className="textBtnShowMore">Смотреть все</p>
        </a>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        mousewheel={true}
        scrollbar={{
          el: ".swiper-scrollbar",
          hide: true,
        }}
        modules={[Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-between mb-[30px]">
            <Anime />
            <Anime />
            <Anime />
            <Anime />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between mb-[30px]">
            <Anime />
            <Anime />
            <Anime />
            <Anime />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between mb-[30px]">
            <Anime />
            <Anime />
            <Anime />
            <Anime />
          </div>
        </SwiperSlide>
        <div class="swiper-scrollbar"></div>
      </Swiper>
    </div>
  );
};
