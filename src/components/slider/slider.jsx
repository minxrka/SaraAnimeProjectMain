import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import BgVideo from "../../img/BgVideoAuth/клинок.mp4";
import BgVideo1 from "../../img/BgVideoAuth/tghoul.mp4";
import "./slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import SoundOff from "../../img/icons/sound-off.svg";
import SoundOn from "../../img/icons/sound-on.svg";

export const Slider = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [imageShowing, setImageShowing] = useState(false);
  const [videoShouldPlay, setVideoShouldPlay] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoShouldPlay) {
      setVideoPlaying(true);
    }
  }, [videoShouldPlay]);

  /*   КНОПКА MUTE/UNMUTE ВИДЕО и еще громкость устанавливается в 0.045 */
  const handleMuteClick = () => {
    videoRef.current.volume = 0.045;
    setVideoMuted(!videoMuted);
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
    opacity: animationRunning ? 0 : 1,
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
  const handleVideoEnd = () => {
    setVideoPlaying(false);
    setAnimationRunning(false);
    setImageShowing(true);
    setTimeout(() => {
      setAnimationRunning(true);
      setImageShowing(false);
      setTimeout(() => {
        setVideoPlaying(true);
        setVideoMuted(true);
      }, 250); // 2.5 милисекунды
    }, 15000); // 15 секунд
  };
  /*   ПРИ КОНЦОВКЕ ВИДЕО ПЛЕЕР НЕ ОТОБРАЖАЕТСЯ ОТОБРАЖАЕТСЯ КАРТИНКА НА 15 СЕКУНД ПОТОМ ОПЯТЬ АНИМАЦИЯ И ОПЯТЬ ВИДЕО */
  const { opacity, transform } = useSpring({
    opacity: !videoMuted ? 1 : 0,
    transform: !videoMuted ? "translateY(0)" : "translateY(100%)",
    config: { duration: 300 },
  });

  /*   const { opacityOut, transformOut } = useSpring({
    opacity: videoMuted ? 0 : 1,
    transform: videoMuted ? "translateY(0)" : "translateY(-150%)",
    config: { duration: 400 },
  }); */
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <main className="h-[85vh]">
      <Swiper
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
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.activeIndex); // Update current index
        }}
      >
        <SwiperSlide>
          <main
            style={{ position: "relative", zIndex: 2 }}
            className="h-full w-full"
          >
            <section className="w-full h-full">
              <section className="w-full h-full flex flex-col justify-center items-center relative z-10 text-center">
                <h1 className="text-white text-[100px] font-WiGuru uppercase z-20">
                  Клинок, рассекающий демонов: Тренировка столпов
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
                      9.5
                    </p>
                    <span className="h-[20px] bg-white w-[1px] ml-[10px] opacity-50"></span>
                    <h1 className="text-white text-[18px] font-GothamPro ml-[7px] font-light">
                      2024г.
                    </h1>
                    <span className="h-[20px] bg-white w-[1px] ml-[10px] opacity-50"></span>
                    <h1 className="text-white text-[18px] font-GothamPro ml-[7px] font-light">
                      18+
                    </h1>
                    <span className="h-[20px] bg-white w-[1px] ml-[10px] opacity-50"></span>
                    <h1 className="text-white text-[18px] font-GothamPro ml-[7px] font-light">
                      Сериал
                    </h1>
                  </div>
                  <div className="flex gap-[30px] items-center mt-[15px]">
                    <button className="watchNow text-center border-solid border border-cyberpunk text-white font-GothamPro text-[16px] font-light">
                      Смотреть онлайн
                    </button>
                    <button className="showMoreSwiper text-left text-white font-GothamPro text-[16px] font-light">
                      Подробнее
                    </button>
                  </div>
                </section>
              </section>
              {videoPlaying ? (
                <animated.video
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
                  src={BgVideo}
                  muted={videoMuted}
                  autoPlay={videoShouldPlay}
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
                  src="https://animego.org/upload/anime/images/6646155076ba0758274644.jpg"
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
                  src="https://animego.org/upload/anime/images/6646155076ba0758274644.jpg"
                  className="w-full h-full object-cover absolute top-0"
                ></animated.img>
              )}
              {videoPlaying && (
                <button
                  style={{ zIndex: 29 }}
                  className="absolute active:scale-105 bottom-[130px] right-[100px] px-[12px] py-[12px] rounded-[50%] text-white bg-mainRedJapan hover:bg-[#C03346] transition-all"
                  onClick={handleMuteClick}
                >
                  {videoMuted ? (
                    <img className="h-[30px]" src={SoundOn} alt="Volume up" />
                  ) : (
                    <img
                      className="h-[30px]"
                      src={SoundOff} // Fix: changed ssrc to src
                      alt="Volume mute"
                    />
                  )}
                </button>
              )}
              {!videoMuted && (
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
                  class="absolute bottom-[100px] w-full flex justify-center items-center"
                >
                  <section className="flex items-center glassEffect pr-[30px]">
                    <div className="px-[12px] pip py-[12px] rounded-[50%] w-[50px] h-[50px] flex justify-center">
                      <img
                        className="absolute top-0 w-full h-full object-cover rounded-[50%] z-2 opacity-50 rotate-180"
                        src="https://i.ytimg.com/vi/pFXL_MjGes8/maxresdefault.jpg"
                      ></img>
                      <div style={{ zIndex: 19 }} class="loading">
                        <span class="load"></span>
                        <span class="load"></span>
                        <span class="load"></span>
                        <span class="load"></span>
                      </div>
                    </div>
                    <article>
                      <h1 className="text-white text-[18px] font-GothamPro ml-[7px] font-light mb-[3px]">
                        COLLAR!
                      </h1>
                      <p className="text-mainVanilla text-[14px] font-GothamPro ml-[7px] font-light">
                        CHASHKAKEFIRA, DJ PXRPLE
                      </p>
                    </article>
                  </section>
                </animated.section>
              )}
            </section>
          </main>
        </SwiperSlide>
        <SwiperSlide>
          <main
            style={{ position: "relative", zIndex: 2 }}
            className="h-full w-full"
          >
            <section className="w-full h-full">
              <section className="w-full h-full flex flex-col justify-center items-center relative z-10 text-center">
                <h1 className="text-white text-[100px] font-WiGuru uppercase z-20">
                  Токийский гуль
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
                      8.3
                    </p>
                    <span className="h-[20px] bg-white w-[1px] ml-[10px] opacity-50"></span>
                    <h1 className="text-white text-[18px] font-GothamPro ml-[7px] font-light">
                      2014г.
                    </h1>
                    <span className="h-[20px] bg-white w-[1px] ml-[10px] opacity-50"></span>
                    <h1 className="text-white text-[18px] font-GothamPro ml-[7px] font-light">
                      18+
                    </h1>
                    <span className="h-[20px] bg-white w-[1px] ml-[10px] opacity-50"></span>
                    <h1 className="text-white text-[18px] font-GothamPro ml-[7px] font-light">
                      Сериал
                    </h1>
                  </div>
                  <div className="flex gap-[30px] items-center mt-[15px]">
                    <button className="watchNow text-center border-solid border border-cyberpunk text-white font-GothamPro text-[16px] font-light">
                      Смотреть онлайн
                    </button>
                    <button className="showMoreSwiper text-left text-white font-GothamPro text-[16px] font-light">
                      Подробнее
                    </button>
                  </div>
                </section>
              </section>
              {videoPlaying ? (
                <animated.video
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
                  src={BgVideo1}
                  muted={videoMuted}
                  autoPlay={videoShouldPlay}
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
                  src="https://i.pinimg.com/originals/10/8a/25/108a25122b98f4916dddc5c6e9061fb8.jpg"
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
                  src="https://i.pinimg.com/originals/10/8a/25/108a25122b98f4916dddc5c6e9061fb8.jpg"
                  className="w-full h-full object-cover absolute top-0"
                ></animated.img>
              )}
              {videoPlaying && (
                <button
                  style={{ zIndex: 29 }}
                  className="absolute active:scale-105 bottom-[130px] right-[100px] px-[12px] py-[12px] rounded-[50%] text-white bg-mainRedJapan hover:bg-[#C03346] transition-all"
                  onClick={handleMuteClick}
                >
                  {videoMuted ? (
                    <img className="h-[30px]" src={SoundOn} alt="Volume up" />
                  ) : (
                    <img
                      className="h-[30px]"
                      src={SoundOff} // Fix: changed ssrc to src
                      alt="Volume mute"
                    />
                  )}
                </button>
              )}
              {!videoMuted && (
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
                  class="absolute bottom-[100px] w-full flex justify-center items-center"
                >
                  <section className="flex items-center glassEffect pr-[30px]">
                    <div className="px-[12px] pip py-[12px] rounded-[50%] w-[50px] h-[50px] flex justify-center">
                      <img
                        className="absolute top-0 w-full h-full object-cover rounded-[50%] z-2 opacity-50 rotate-180"
                        src="https://pictures.pibig.info/uploads/posts/2023-04/thumbs/1681470586_pictures-pibig-info-p-prekrasnoe-daleko-risunok-vkontakte-24.jpg"
                      ></img>
                      <div style={{ zIndex: 19 }} class="loading">
                        <span class="load"></span>
                        <span class="load"></span>
                        <span class="load"></span>
                        <span class="load"></span>
                      </div>
                    </div>
                    <article>
                      <h1 className="text-white uppercase text-[18px] font-GothamPro ml-[7px] font-light mb-[3px]">
                        Прекрасное Далёко
                      </h1>
                      <p className="text-mainVanilla uppercase text-[14px] font-GothamPro ml-[7px] font-light">
                        phonk edition
                      </p>
                    </article>
                  </section>
                </animated.section>
              )}
            </section>
          </main>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};
