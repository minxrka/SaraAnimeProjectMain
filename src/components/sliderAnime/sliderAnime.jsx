import { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Mousewheel } from "swiper/modules";
import { Anime } from "../animeItem/anime";

import Anime1 from "../../img/bg-anime-card/small/Mob Psycho 100.jpg";
import Anime2 from "../../img/bg-anime-card/small/64a44110252fe851868925.jpg";
import Anime3 from "../../img/bg-anime-card/small/Yakusoku no Neverland.jpg";
import Anime4 from "../../img/bg-anime-card/small/One Piece.jpg";
import Anime5 from "../../img/bg-anime-card/small/anime1.jpg";
import Anime6 from "../../img/bg-anime-card/small/anime1.jpg";
import Anime7 from "../../img/bg-anime-card/small/anime1.jpg";
import Anime8 from "../../img/bg-anime-card/small/anime1.jpg";
import Anime9 from "../../img/bg-anime-card/small/anime1.jpg";

export const SliderAnime = () => {
  return (
    <div className="xl:hidden mt-[170px] border-solid border border-mainBlue px-[20px] py-[20px] rounded-[20px] max-w-[1500px] mx-auto">
      <div className="flex justify-between mb-[40px] items-center">
        <h1 className="text-white text-[40px] uppercase font-Bluecurve xl:text-[35px] lg:text-[30px] textwrap">
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
          <section className="flex justify-between">
            <Anime />
            {/* //////////////////////////// */}
            <Anime />
            {/* //////////////////////////// */}
            <Anime />
            {/* //////////////////////////// */}
            <Anime />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex justify-between mb-[30px]">
            <Anime />
            {/* //////////////////////////// */}
            <Anime />
            {/* //////////////////////////// */}
            <Anime />
            {/* //////////////////////////// */}
            <Anime />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex justify-between mb-[30px]">
            <Anime />
            {/* //////////////////////////// */}
            <Anime />
            {/* //////////////////////////// */}
            <Anime />
            {/* //////////////////////////// */}
            <Anime />
          </section>
        </SwiperSlide>
        <div class="swiper-scrollbar"></div>
      </Swiper>
    </div>
  );
};
