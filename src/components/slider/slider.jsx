import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import "./slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import SliderData from "./SliderData.json";
import { useSwiper } from "swiper/react";
export const Slider = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoShouldPlay, setVideoShouldPlay] = useState(false);

  useEffect(() => {
    if (videoShouldPlay) {
      setVideoPlaying(true);
    }
  }, [videoShouldPlay]);

  /*   КНОПКА MUTE/UNMUTE ВИДЕО и еще громкость устанавливается в 0.02 */
  const videoRef = useRef(null);
  const [videoMuted, setVideoMuted] = useState(true);
  const handleMuteClick = () => {
    videoRef.current.volume = 0.02;
    setVideoMuted(!videoMuted);
  };
  /*   КНОПКА MUTE/UNMUTE ВИДЕО и еще громкость устанавливается в 0.02 */
  const [realSlideIndex, setRealSlideIndex] = useState(0);
  const [imageShowing, setImageShowing] = useState(true);
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setRealSlideIndex(realIndex);

    // Reset animation and video playback when slide changes
    setVideoPlaying(false);
    setImageShowing(true);
    setVideoShouldPlay(false);

    // Wait for the animation to finish before playing the video again
    setTimeout(() => {
      setAnimationRunning(true);
      setImageShowing(false);
      setTimeout(() => {
        setVideoPlaying(true);
        setVideoMuted(true);
      }, 250); // 2.5 милисекунды
    }, 6000); // 15 секунд
  };

  /*   КНОПКА MUTE/UNMUTE ВИДЕО и еще громкость устанавливается в 0.045 */

  /* АНИМАЦИЯ FADEIN ПОЯВЛЕНИЯ ВИДЕО */
  const animation = useSpring({
    opacity: videoPlaying ? 1 : 0,
    config: { duration: 500 },
  });
  /* АНИМАЦИЯ FADEIN ПОЯВЛЕНИЯ ВИДЕО */

  /* АНИМАЦИЯ FADEOUT ИЗОБРАЖЕНИЯ */
  const [animationRunning, setAnimationRunning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationRunning(true);
    }, 6000); // wait for 6 seconds before running animation
  }, []);

  useEffect(() => {
    if (animationRunning) {
      setTimeout(() => {
        setImageShowing(false);
        setVideoShouldPlay(true);
      }, 200); // animation runs for 0.2 second
    }
  }, [animationRunning]);

  const animationImage = useSpring({
    opacity: animationRunning ? 0.5 : 1,
  });
  /* АНИМАЦИЯ FADEOUT ИЗОБРАЖЕНИЯ */

  /* ПРИ ПРОКРУТКЕ СВАЙПЕРА НА 900PX ВИДЕО МУТИТСЯ */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900 && videoMuted === false) {
        setVideoMuted(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoMuted]);
  /* ПРИ ПРОКРУТКЕ СВАЙПЕРА НА 900PX ВИДЕО МУТИТСЯ */

  /* ПРИ КОНЦОВКЕ ВИДЕО ПЛЕЕР НЕ ОТОБРАЖАЕТСЯ ОТОБРАЖАЕТСЯ КАРТИНКА НА 15 СЕКУНД ПОТОМ ОПЯТЬ АНИМАЦИЯ И ОПЯТЬ ВИДЕО */
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance.current = swiperRef.current.swiper;
    }
  }, [swiperRef]);

  const handleVideoEnd = () => {
    setImageShowing(true);
    setVideoPlaying(false);
    setAnimationRunning(false);
    setTimeout(() => {
      if (swiperInstance.current) {
        swiperInstance.current.slideNext();
      }
    }, 5000);
  };

  /*   ПРИ КОНЦОВКЕ ВИДЕО ПЛЕЕР НЕ ОТОБРАЖАЕТСЯ ОТОБРАЖАЕТСЯ КАРТИНКА НА 15 СЕКУНД ПОТОМ ОПЯТЬ АНИМАЦИЯ И ОПЯТЬ ВИДЕО */
  const { opacity, transform } = useSpring({
    opacity: !videoMuted ? 1 : 0,
    transform: !videoMuted ? "translateY(0)" : "translateY(100%)",
    config: { duration: 300 },
  });
  const [hover, setHover] = useState(false);

  const sectionAnimation = useSpring({
    width: hover ? "210px" : "50px",
    config: { duration: 400 },
  });
  const articleAnimation = useSpring({
    opacity: hover ? 1 : 0,
    config: { duration: 800 },
  });

  useEffect(() => {
    if (imageShowing) {
      setAnimationRunning(false);
      setVideoMuted(true);
    }
  }, [imageShowing]);
  useEffect(() => {
    if (videoPlaying) {
      setAnimationRunning(true);
    }
  }, [videoPlaying]);

  return (
    <main className="h-[85vh]">
      <Swiper
        ref={swiperRef}
        speed={2600}
        className="mySwiper h-[80vh] w-full"
        style={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
          /* maskImage: `linear-gradient(to left, rgba(30, 20, 66, 1) 5%, rgba(30, 20, 66, 0) 100%)`,
          maskSize: "100% 100%",
          maskPosition: "0 0",
          maskRepeat: "no-repeat", */
        }}
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={false}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Mousewheel, Pagination]}
        onSlideChange={handleSlideChange}
      >
        {SliderData.map((result, index) => (
          <SwiperSlide key={index}>
            <main
              style={{ position: "relative", zIndex: 2 }}
              className="h-full w-full"
            >
              <section className="w-full h-full">
                <section className="w-full h-full flex flex-col justify-center items-center relative z-10 text-center">
                  <h1 className="text-white text-[100px] font-WiGuru uppercase z-20">
                    {result.title}
                  </h1>
                  <section className="">
                    <div className="flex items-center justify-center mt-[10px]">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 23 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.7168 21.0007C17.5589 21.0013 17.4049 20.9521 17.2766 20.8601L11.248 16.4895L5.21944 20.8601C5.09064 20.9535 4.93547 21.0035 4.77636 21.003C4.61726 21.0024 4.46246 20.9512 4.33434 20.8569C4.20623 20.7625 4.11144 20.6299 4.06368 20.4781C4.01592 20.3263 4.01766 20.1633 4.06865 20.0126L6.4199 13.0484L0.326154 8.86947C0.194159 8.77905 0.0945374 8.64879 0.0418439 8.49772C-0.0108497 8.34666 -0.0138533 8.1827 0.033272 8.0298C0.0803973 7.87691 0.175182 7.74309 0.303776 7.6479C0.432371 7.55271 0.588037 7.50114 0.748029 7.50072H8.26584L10.5346 0.518684C10.5835 0.367945 10.6788 0.236559 10.807 0.143376C10.9352 0.0501921 11.0896 0 11.248 0C11.4065 0 11.5609 0.0501921 11.6891 0.143376C11.8172 0.236559 11.9126 0.367945 11.9615 0.518684L14.2302 7.50306H21.748C21.9082 7.50298 22.0642 7.55419 22.1932 7.6492C22.3222 7.74421 22.4174 7.87802 22.4648 8.03103C22.5122 8.18404 22.5094 8.34822 22.4567 8.49952C22.4041 8.65081 22.3044 8.78128 22.1722 8.87181L16.0762 13.0484L18.426 20.0107C18.4641 20.1234 18.4748 20.2436 18.4572 20.3613C18.4397 20.479 18.3944 20.5908 18.3251 20.6875C18.2558 20.7842 18.1645 20.8631 18.0588 20.9175C17.953 20.972 17.8358 21.0005 17.7168 21.0007Z"
                          fill="#FFE64F"
                        />
                      </svg>
                      <p className="text-white text-[18px] font-GothamPro ml-[7px] font-light">
                        {result.rating}
                      </p>
                      <span className="h-[20px] bg-white w-[1px] ml-[10px] opacity-50"></span>
                      <h1 className="text-white text-[18px] font-GothamPro ml-[7px] font-light">
                        {result.yearOfRelease}
                      </h1>
                      <span className="h-[20px] bg-white w-[1px] ml-[10px] opacity-50"></span>
                      <h1 className="text-white text-[18px] font-GothamPro ml-[7px] font-light">
                        {result.yearOfIssue}
                      </h1>
                      <span className="h-[20px] bg-white w-[1px] ml-[10px] opacity-50"></span>
                      <h1 className="text-primary-50 text-[18px] font-GothamPro ml-[7px] font-light">
                        {result.format}
                      </h1>
                    </div>
                    <div className="flex items-center mt-[30px] justify-center gap-[30px]">
                      <button class="button x flex items-center text-center text-white font-GothamPro font-light will-change-transform">
                        Подробнее
                        <svg
                          className="ml-[6px]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          width={20}
                          hanging={20}
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </section>
                </section>
                {videoPlaying && index === realSlideIndex ? (
                  <animated.video
                    preload="auto"
                    ref={videoRef}
                    style={{
                      maskImage: `linear-gradient(to bottom, rgba(30, 20, 66, 1), rgba(30, 20, 66, 0))`,
                      maskSize: "100% 100%",
                      maskPosition: "0 100%",
                      maskRepeat: "no-repeat",
                      opacity: animation.opacity,
                      zIndex: 1,
                    }}
                    playsInline
                    className="w-full h-full object-cover absolute top-0"
                    src={result.videoPreviewAnime}
                    muted={videoMuted}
                    autoPlay={videoShouldPlay && index === realSlideIndex}
                    loop={false}
                    onEnded={handleVideoEnd}
                  ></animated.video>
                ) : imageShowing ? (
                  <animated.img
                    style={{
                      maskImage: `linear-gradient(to bottom, rgba(30, 20, 66, 1), rgba(30, 20, 66, 0))`,
                      maskSize: "100% 100%",
                      maskPosition: "0 100%",
                      maskRepeat: "no-repeat",
                      opacity: animationImage.opacity,
                    }}
                    src={result.imagePreviewAnime}
                    className="w-full h-full object-cover absolute top-0"
                  ></animated.img>
                ) : (
                  <animated.img
                    style={{
                      maskImage: `linear-gradient(to bottom, rgba(30, 20, 66, 1), rgba(30, 20, 66, 0))`,
                      maskSize: "100% 100%",
                      maskPosition: "0 100%",
                      maskRepeat: "no-repeat",
                      opacity: animationImage.opacity,
                    }}
                    src={result.imagePreviewAnime}
                    className="w-full h-full object-cover absolute top-0"
                  ></animated.img>
                )}
                {videoPlaying && index === realSlideIndex && (
                  <button
                    style={{ zIndex: 29 }}
                    className="absolute active:scale-105 bottom-[51px] right-[80px] px-[12px] py-[12px] rounded-[50%] text-white bg-secondary-600 hover:bg-secondary-500 transition-all"
                    onClick={handleMuteClick}
                  >
                    {videoMuted ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        alt="Volume off"
                        fill="white"
                      >
                        <path d="m7.727 6.313-4.02-4.02-1.414 1.414 18 18 1.414-1.414-2.02-2.02A9.578 9.578 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.13 8.13 0 0 1-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V2.132L7.727 6.313zM4 17h2.697L14 21.868v-3.747L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        alt="Volume on"
                        fill="white"
                      >
                        <path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"></path>
                        <path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z"></path>
                      </svg>
                    )}
                  </button>
                )}
                {!videoMuted && !imageShowing && index === realSlideIndex && (
                  <animated.section
                    style={{
                      opacity,
                      transform,
                      zIndex: 19,
                      position: "absolute",
                      bottom: 100,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    class="absolute w-full flex justify-center items-center"
                  >
                    <NavLink to={result.LinkOnSong} target="blank">
                      <section className="flex items-center glassEffectSwiper pr-[30px]">
                        <div className="px-[12px] pip py-[12px] rounded-[50%] w-[50px] h-[50px] flex justify-center">
                          <img
                            className="absolute top-0 w-full h-full object-cover rounded-[50%] z-2 opacity-50 rotate-180"
                            src={result.ImageSong}
                          ></img>
                          <div style={{ zIndex: 19 }} class="loading">
                            <span class="load"></span>
                            <span class="load"></span>
                            <span class="load"></span>
                            <span class="load"></span>
                          </div>
                        </div>
                        <article>
                          <h1 className="text-white text-[18px] uppercase font-GothamPro ml-[7px] font-light mb-[3px]">
                            {result.SongName}
                          </h1>
                          <p className="text-mainVanilla uppercase text-[14px] max-w-[215px] line-clamp-1 font-GothamPro ml-[7px] font-light">
                            {result.AuthorSong}
                          </p>
                        </article>
                      </section>
                    </NavLink>
                  </animated.section>
                )}
                {!imageShowing && index === realSlideIndex && (
                  <main class="absolute left-[100px] bottom-[50px] z-40">
                    <animated.section
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      className="flex items-center bg-primary-500/30 rounded-[40px] cursor-pointer hoverEffectArticle"
                    >
                      <img
                        className="absolute top-0 w-[50px] h-[50px] object-cover rounded-[50%]"
                        src="https://sun9-42.userapi.com/impg/JFAEz-im4x2LIgQONrQPwoJPW3SqLOhsNqxN0A/N2cNQoY9SUU.jpg?size=320x406&quality=95&sign=9a8b09cf9691d8fbba0e68d8c58a7a73&c_uniq_tag=txhdH_tdmtCPWG2ifc-yH6fGBWSOFk_N1f8fCQvWxuE&type=album"
                      ></img>
                      <animated.div
                        style={sectionAnimation}
                        className="py-[12px] rounded-[50%] h-[50px] items-center justify-center text-center"
                      >
                        <animated.div
                          style={articleAnimation}
                          className="acticleProfileEditor hidden text-center ml-[30px] flex justify-between flex-col"
                        >
                          <h1 className="text-white uppercase text-[14px] font-GothamPro font-light mb-[3px] w-[115px] line-clamp-1 mx-auto">
                            snovvy
                          </h1>
                          <p className="text-mainVanilla uppercase text-[12px] font-GothamPro font-light whitespace-nowrap">
                            Автор эдита
                          </p>
                        </animated.div>
                      </animated.div>
                    </animated.section>
                  </main>
                )}
              </section>
            </main>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};
