import React from "react";
import Data from "./DummyDataImages.json";
import { useSpring, animated } from "react-spring";
// Import Swiper React components
import "./SliderAnimePreview.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const SliderAnimePreview = () => {
  /* ОТКРЫТИE/ЗАКРЫТИЕ ДИАЛОГ ОКНА */
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  /* ОТКРЫТИE/ЗАКРЫТИЕ ДИАЛОГ ОКНА */

  return (
    <div>
      <Swiper
        slidesPerView={4}
        navigation={true}
        spaceBetween={20}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1220: {
            slidesPerView: 3,
          },
          1230: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper mt-[20px] mb-[20px]"
      >
        {Data.map((result, index) => (
          <SwiperSlide key={index} onClick={handleClickOpen} className="">
            <div className="hoverbgSliderEffect ZoomSearch cursor-pointer">
              <div className="rounded-[10px] adaptiveImageSlider">
                <img
                  className="rounded-[10px] absolute top-0 left-0 w-full h-full object-cover"
                  src={result.img}
                  alt=""
                />
                <div className="bgSliderEffect sliderbg absolute top-0 rounded-[10px] w-full h-full opacity-0 transition-all">
                  <span className="">
                    <svg
                      className="max-w-[45px] h-full mx-auto SvgSearch"
                      width="59"
                      height="59"
                      viewBox="0 0 59 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_661_288)">
                        <path
                          d="M24.1752 0C37.5299 0 48.3535 10.679 48.3535 23.8478C48.3576 29.5628 46.285 35.0847 42.5213 39.3854L58.4159 55.5308C58.6054 55.7221 58.7547 55.9494 58.8552 56.1992C58.9557 56.449 59.0054 56.7164 59.0013 56.9856C58.9972 57.2548 58.9394 57.5206 58.8312 57.7672C58.7231 58.0138 58.5669 58.2363 58.3717 58.4218C57.9749 58.7992 57.4461 59.0062 56.8986 58.9985C56.351 58.9908 55.8283 58.769 55.4423 58.3805L39.5625 42.244C35.2168 45.7838 29.7802 47.711 24.1752 47.6986C10.8265 47.6986 0 37.0196 0 23.8478C0 10.679 10.8265 0 24.1752 0ZM24.1752 4.0887C13.1127 4.0887 4.14475 12.9357 4.14475 23.8478C4.14475 34.7628 13.1127 43.6099 24.1752 43.6099C35.2378 43.6099 44.2087 34.7598 44.2087 23.8478C44.2087 12.9328 35.2407 4.0887 24.1782 4.0887H24.1752Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_661_288">
                          <rect width="59" height="59" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DIALOG BG ANIME */}
      <Modal
        open={open}
        onClose={handleClose}
        className="max-w-[1400px] mx-auto items-center flex"
      >
        <Swiper
          open={open}
          onClose={handleClose}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-[1400px] h-auto"
        >
          {Data.map((result, index) => (
            <SwiperSlide key={index}>
              <img
                className="w-full max-h-[700px] object-cover"
                src={result.img}
                alt="bgAnime"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
      {/* DIALOG BG ANIME */}
    </div>
  );
};

export default SliderAnimePreview;
