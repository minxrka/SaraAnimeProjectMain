import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

export const Slider = () => {
  return (
    <Swiper
      className="lg:max-w-[900px] lg:max-h-[400px] md:max-h-[300px] sm:max-h-[200px] max-w-[1500px] mySwiper max-h-[479px] rounded-[25px] bg-cover bg-center mt-[60px] bg-no-repeat"
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Mousewheel, Pagination]}
    >
      <SwiperSlide>
        <main className="bg-slide1 w-full h-full rounded-[25px] bg-cover bg-center">
          {/* DESKTOP VERSION */}
          <section className="px-[120px] py-[160px] xl:px-[70px] lg:hidden">
            <h1 className="text-[64px] font-Akira text-white">Bleach</h1>
            <p className="max-w-[471px] mt-[9px] font-GothamPro text-white text-[14px] font-extralight lineclamp text-justify">
              Куросаки Ичиго — не простой пятнадцатилетний парень, потому как,
              сколько он себя помнит, всегда мог запросто общаться с духами и
              призраками, невидимыми для обычных людей. В один судьбоносный день
              ему является сама синигами (богиня смерти) Кучики Рукия,
              охотящаяся за Пустым (злым духом, пожирающим души людей). Во время
              битвы с этим чудовищем Ичиго и Рукия получили серьёзные ранения, и
              богине пришлось передать парню свои силы, чтобы помочь ему
              одержать победу над монстром, в результате чего Ичиго сам стал
              синигами! Но сделав это, Рукия теряет всю свою мощь, и теперь
              ожидает, что новоявленный синигами продолжит её миссию по отлову и
              уничтожению Пустых. Так начинаются увлекательные приключения Ичиго
              и Рукии.
            </p>
            <div className="flex gap-[36px] mt-[17px] items-center">
              <NavLink to={"watch"}>
                <a
                  href="#"
                  className="py-[12px] px-[9px] bg-Blue600 rounded-[25px] text-white font-GothamPro text-[16px] font-extralight hover:bg-Blue700 transition-colors"
                >
                  К просмотру
                </a>
              </NavLink>
              <div
                href="#"
                className="py-[12px] px-[27px] rounded-[25px] text-white font-GothamPro text-[16px] font-extralight border-solid border border-mainLightRed hover:bg-mainLightRed"
              >
                Трейлер
              </div>
              <a
                href="#"
                className="py-[9px] px-[13px] border-solid border border-mainVanilla rounded-[25px] active:bg-[#FF9494] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M14.2393 2.65625C12.5784 2.65625 11.1342 3.39609 10.2847 4.63594C9.43526 3.39609 7.99104 2.65625 6.33011 2.65625C5.07197 2.6577 3.86578 3.15202 2.97614 4.03079C2.0865 4.90955 1.58606 6.10099 1.58459 7.34375C1.58459 9.625 3.02407 11.9992 5.86347 14.3992C7.16457 15.4943 8.57 16.4624 10.0601 17.2898C10.1291 17.3265 10.2063 17.3457 10.2847 17.3457C10.3631 17.3457 10.4403 17.3265 10.5093 17.2898C11.9994 16.4624 13.4048 15.4943 14.7059 14.3992C17.5453 11.9992 18.9848 9.625 18.9848 7.34375C18.9833 6.10099 18.4829 4.90955 17.5933 4.03079C16.7036 3.15202 15.4974 2.6577 14.2393 2.65625ZM10.2847 16.3367C8.98681 15.5969 2.5337 11.6969 2.5337 7.34375C2.53474 6.34951 2.93506 5.39628 3.6468 4.69324C4.35854 3.9902 5.32356 3.59478 6.33011 3.59375C7.93409 3.59375 9.28103 4.43984 9.84574 5.80234C9.8815 5.88832 9.94232 5.96185 10.0205 6.0136C10.0986 6.06535 10.1906 6.09298 10.2847 6.09298C10.3788 6.09298 10.4708 6.06535 10.5489 6.0136C10.6271 5.96185 10.6879 5.88832 10.7237 5.80234C11.2884 4.43984 12.6353 3.59375 14.2393 3.59375C15.2458 3.59478 16.2109 3.9902 16.9226 4.69324C17.6343 5.39628 18.0347 6.34951 18.0357 7.34375C18.0357 11.6969 11.5826 15.5969 10.2847 16.3367Z"
                    fill="#E8DFD8"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* MOBILE VERSION */}
          <section className="lg:max-w-auto lg:h-full lg:my-auto flex flex-col justify-center">
            <h1 className="lg:text-[60px] text-center font-Akira text-white lg:flex lg:justify-center md:text-[30px]">
              Bleach
            </h1>
            <div className="lg:flex lg:gap-[36px] lg:mt-[17px] lg:items-center lg:justify-center">
              <a
                href="#"
                className="py-[12px] px-[9px] bg-Blue600 rounded-[25px] text-white font-GothamPro text-[16px] font-extralight hover:bg-Blue700 transition-colors"
              >
                К просмотру
              </a>
              <a
                href="#"
                className="py-[12px] sm:hidden px-[27px] rounded-[25px] text-white font-GothamPro text-[16px] font-extralight border-solid border border-mainLightRed hover:bg-mainLightRed"
              >
                Трейлер
              </a>
              <a
                href="#"
                className="py-[9px] sm:hidden px-[13px] border-solid border border-mainVanilla rounded-[25px] active:bg-[#FF9494] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M14.2393 2.65625C12.5784 2.65625 11.1342 3.39609 10.2847 4.63594C9.43526 3.39609 7.99104 2.65625 6.33011 2.65625C5.07197 2.6577 3.86578 3.15202 2.97614 4.03079C2.0865 4.90955 1.58606 6.10099 1.58459 7.34375C1.58459 9.625 3.02407 11.9992 5.86347 14.3992C7.16457 15.4943 8.57 16.4624 10.0601 17.2898C10.1291 17.3265 10.2063 17.3457 10.2847 17.3457C10.3631 17.3457 10.4403 17.3265 10.5093 17.2898C11.9994 16.4624 13.4048 15.4943 14.7059 14.3992C17.5453 11.9992 18.9848 9.625 18.9848 7.34375C18.9833 6.10099 18.4829 4.90955 17.5933 4.03079C16.7036 3.15202 15.4974 2.6577 14.2393 2.65625ZM10.2847 16.3367C8.98681 15.5969 2.5337 11.6969 2.5337 7.34375C2.53474 6.34951 2.93506 5.39628 3.6468 4.69324C4.35854 3.9902 5.32356 3.59478 6.33011 3.59375C7.93409 3.59375 9.28103 4.43984 9.84574 5.80234C9.8815 5.88832 9.94232 5.96185 10.0205 6.0136C10.0986 6.06535 10.1906 6.09298 10.2847 6.09298C10.3788 6.09298 10.4708 6.06535 10.5489 6.0136C10.6271 5.96185 10.6879 5.88832 10.7237 5.80234C11.2884 4.43984 12.6353 3.59375 14.2393 3.59375C15.2458 3.59478 16.2109 3.9902 16.9226 4.69324C17.6343 5.39628 18.0347 6.34951 18.0357 7.34375C18.0357 11.6969 11.5826 15.5969 10.2847 16.3367Z"
                    fill="#E8DFD8"
                  />
                </svg>
              </a>
            </div>
          </section>
        </main>
      </SwiperSlide>
      <SwiperSlide>
        <main className="bg-slide2 w-full h-full rounded-[25px] bg-cover bg-center">
          {/* DESKTOP VERSION */}
          <section className="px-[120px] py-[120px] xl:px-[80px] lg:px-[50px] lg:hidden">
            <h1 className="text-[64px] font-Akira text-white w-[511px]">
              Rurouni Kenshin
            </h1>
            <p className="max-w-[471px] mt-[9px] font-GothamPro text-white text-[14px] font-extralight lineclamp text-justify">
              Молодой воин Кэнсин Химура по верой и правдой служил императору,
              но ему надоело убивать, и он покинул государственную службу.
              Теперь он носит меч с заточкой на обратной стороне клинка и живет
              в школе Каору Камии — девушки-преподавателя боевых искусств. Но
              тени прошедшей войны не оставляют Кэнсина в покое.
            </p>
            <div className="flex gap-[36px] mt-[17px] items-center">
              <a
                href="#"
                className="py-[12px] px-[9px] bg-Blue600 rounded-[25px] text-white font-GothamPro text-[16px] font-extralight hover:bg-Blue700 transition-colors"
              >
                К просмотру
              </a>
              <a
                href="#"
                className="py-[12px] px-[27px] rounded-[25px] text-white font-GothamPro text-[16px] font-extralight border-solid border border-mainLightRed hover:bg-mainLightRed"
              >
                Трейлер
              </a>
              <a
                href="#"
                className="py-[9px] px-[13px] border-solid border border-mainVanilla rounded-[25px] active:bg-[#FF9494] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M14.2393 2.65625C12.5784 2.65625 11.1342 3.39609 10.2847 4.63594C9.43526 3.39609 7.99104 2.65625 6.33011 2.65625C5.07197 2.6577 3.86578 3.15202 2.97614 4.03079C2.0865 4.90955 1.58606 6.10099 1.58459 7.34375C1.58459 9.625 3.02407 11.9992 5.86347 14.3992C7.16457 15.4943 8.57 16.4624 10.0601 17.2898C10.1291 17.3265 10.2063 17.3457 10.2847 17.3457C10.3631 17.3457 10.4403 17.3265 10.5093 17.2898C11.9994 16.4624 13.4048 15.4943 14.7059 14.3992C17.5453 11.9992 18.9848 9.625 18.9848 7.34375C18.9833 6.10099 18.4829 4.90955 17.5933 4.03079C16.7036 3.15202 15.4974 2.6577 14.2393 2.65625ZM10.2847 16.3367C8.98681 15.5969 2.5337 11.6969 2.5337 7.34375C2.53474 6.34951 2.93506 5.39628 3.6468 4.69324C4.35854 3.9902 5.32356 3.59478 6.33011 3.59375C7.93409 3.59375 9.28103 4.43984 9.84574 5.80234C9.8815 5.88832 9.94232 5.96185 10.0205 6.0136C10.0986 6.06535 10.1906 6.09298 10.2847 6.09298C10.3788 6.09298 10.4708 6.06535 10.5489 6.0136C10.6271 5.96185 10.6879 5.88832 10.7237 5.80234C11.2884 4.43984 12.6353 3.59375 14.2393 3.59375C15.2458 3.59478 16.2109 3.9902 16.9226 4.69324C17.6343 5.39628 18.0347 6.34951 18.0357 7.34375C18.0357 11.6969 11.5826 15.5969 10.2847 16.3367Z"
                    fill="#E8DFD8"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* MOBILE VERSION */}
          <section className="lg:max-w-auto lg:h-full lg:my-auto flex flex-col justify-center">
            <h1 className="lg:text-[48px] text-center font-Akira text-white lg:flex lg:justify-center md:text-[30px]">
              Rurouni Kenshin
            </h1>
            <div className="lg:flex lg:gap-[36px] lg:mt-[17px] lg:items-center lg:justify-center">
              <a
                href="#"
                className="py-[12px] px-[9px] bg-Blue600 rounded-[25px] text-white font-GothamPro text-[16px] font-extralight hover:bg-Blue700 transition-colors"
              >
                К просмотру
              </a>
              <a
                href="#"
                className="py-[12px] sm:hidden px-[27px] rounded-[25px] text-white font-GothamPro text-[16px] font-extralight border-solid border border-mainLightRed hover:bg-mainLightRed"
              >
                Трейлер
              </a>
              <a
                href="#"
                className="py-[9px] sm:hidden px-[13px] border-solid border border-mainVanilla rounded-[25px] active:bg-[#FF9494] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M14.2393 2.65625C12.5784 2.65625 11.1342 3.39609 10.2847 4.63594C9.43526 3.39609 7.99104 2.65625 6.33011 2.65625C5.07197 2.6577 3.86578 3.15202 2.97614 4.03079C2.0865 4.90955 1.58606 6.10099 1.58459 7.34375C1.58459 9.625 3.02407 11.9992 5.86347 14.3992C7.16457 15.4943 8.57 16.4624 10.0601 17.2898C10.1291 17.3265 10.2063 17.3457 10.2847 17.3457C10.3631 17.3457 10.4403 17.3265 10.5093 17.2898C11.9994 16.4624 13.4048 15.4943 14.7059 14.3992C17.5453 11.9992 18.9848 9.625 18.9848 7.34375C18.9833 6.10099 18.4829 4.90955 17.5933 4.03079C16.7036 3.15202 15.4974 2.6577 14.2393 2.65625ZM10.2847 16.3367C8.98681 15.5969 2.5337 11.6969 2.5337 7.34375C2.53474 6.34951 2.93506 5.39628 3.6468 4.69324C4.35854 3.9902 5.32356 3.59478 6.33011 3.59375C7.93409 3.59375 9.28103 4.43984 9.84574 5.80234C9.8815 5.88832 9.94232 5.96185 10.0205 6.0136C10.0986 6.06535 10.1906 6.09298 10.2847 6.09298C10.3788 6.09298 10.4708 6.06535 10.5489 6.0136C10.6271 5.96185 10.6879 5.88832 10.7237 5.80234C11.2884 4.43984 12.6353 3.59375 14.2393 3.59375C15.2458 3.59478 16.2109 3.9902 16.9226 4.69324C17.6343 5.39628 18.0347 6.34951 18.0357 7.34375C18.0357 11.6969 11.5826 15.5969 10.2847 16.3367Z"
                    fill="#E8DFD8"
                  />
                </svg>
              </a>
            </div>
          </section>
        </main>
      </SwiperSlide>
      <SwiperSlide>
        <main className="bg-slide3 w-full h-full rounded-[25px] bg-cover bg-center">
          {/* DESKTOP VERSION */}
          <section className="px-[120px] py-[160px] xl:px-[70px] lg:px-[50px] xxl:px-[100px] lg:hidden">
            <h1 className="text-[64px] font-Akira text-white">Claymore</h1>
            <p className="max-w-[471px] mt-[9px] font-GothamPro text-white text-[14px] font-extralight lineclamp text-justify">
              Йомы – это людоеды, зловещие монстры, способные принимать
              человеческий облик. Самые сильные и безудержно голодные Йомы
              открыто нападают на деревни, прочие проникают в людские общины
              тайком, под видом кого-либо из селян.Клеймор – это наполовину
              Йомы, наполовину люди. У них светлые волосы и серебряные глаза.
              Клеймор способны распознавать и истреблять Йом. Все Клеймор –
              женского пола.
            </p>
            <div className="flex gap-[36px] mt-[17px] items-center">
              <a
                href="#"
                className="py-[12px] px-[9px] bg-Blue600 rounded-[25px] text-white font-GothamPro text-[16px] font-extralight hover:bg-Blue700 transition-colors"
              >
                К просмотру
              </a>
              <a
                href="#"
                className="py-[12px] px-[27px] rounded-[25px] text-white font-GothamPro text-[16px] font-extralight border-solid border border-mainLightRed hover:bg-mainLightRed"
              >
                Трейлер
              </a>
              <a
                href="#"
                className="py-[9px] px-[13px] border-solid border border-mainVanilla rounded-[25px] active:bg-[#FF9494] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M14.2393 2.65625C12.5784 2.65625 11.1342 3.39609 10.2847 4.63594C9.43526 3.39609 7.99104 2.65625 6.33011 2.65625C5.07197 2.6577 3.86578 3.15202 2.97614 4.03079C2.0865 4.90955 1.58606 6.10099 1.58459 7.34375C1.58459 9.625 3.02407 11.9992 5.86347 14.3992C7.16457 15.4943 8.57 16.4624 10.0601 17.2898C10.1291 17.3265 10.2063 17.3457 10.2847 17.3457C10.3631 17.3457 10.4403 17.3265 10.5093 17.2898C11.9994 16.4624 13.4048 15.4943 14.7059 14.3992C17.5453 11.9992 18.9848 9.625 18.9848 7.34375C18.9833 6.10099 18.4829 4.90955 17.5933 4.03079C16.7036 3.15202 15.4974 2.6577 14.2393 2.65625ZM10.2847 16.3367C8.98681 15.5969 2.5337 11.6969 2.5337 7.34375C2.53474 6.34951 2.93506 5.39628 3.6468 4.69324C4.35854 3.9902 5.32356 3.59478 6.33011 3.59375C7.93409 3.59375 9.28103 4.43984 9.84574 5.80234C9.8815 5.88832 9.94232 5.96185 10.0205 6.0136C10.0986 6.06535 10.1906 6.09298 10.2847 6.09298C10.3788 6.09298 10.4708 6.06535 10.5489 6.0136C10.6271 5.96185 10.6879 5.88832 10.7237 5.80234C11.2884 4.43984 12.6353 3.59375 14.2393 3.59375C15.2458 3.59478 16.2109 3.9902 16.9226 4.69324C17.6343 5.39628 18.0347 6.34951 18.0357 7.34375C18.0357 11.6969 11.5826 15.5969 10.2847 16.3367Z"
                    fill="#E8DFD8"
                  />
                </svg>
              </a>
            </div>
          </section>
          {/* MOBILE VERSION */}
          <section className="lg:max-w-auto lg:h-full lg:my-auto flex flex-col justify-center">
            <h1 className="lg:text-[60px] text-center font-Akira text-white lg:flex lg:justify-center md:text-[30px]">
              Claymore
            </h1>
            <div className="lg:flex lg:gap-[36px] lg:mt-[17px] lg:items-center lg:justify-center">
              <a
                href="#"
                className="py-[12px] px-[9px] bg-Blue600 rounded-[25px] text-white font-GothamPro text-[16px] font-extralight hover:bg-Blue700 transition-colors"
              >
                К просмотру
              </a>
              <a
                href="#"
                className="py-[12px] sm:hidden px-[27px] rounded-[25px] text-white font-GothamPro text-[16px] font-extralight border-solid border border-mainLightRed hover:bg-mainLightRed"
              >
                Трейлер
              </a>
              <a
                href="#"
                className="py-[9px] sm:hidden px-[13px] border-solid border border-mainVanilla rounded-[25px] active:bg-[#FF9494] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M14.2393 2.65625C12.5784 2.65625 11.1342 3.39609 10.2847 4.63594C9.43526 3.39609 7.99104 2.65625 6.33011 2.65625C5.07197 2.6577 3.86578 3.15202 2.97614 4.03079C2.0865 4.90955 1.58606 6.10099 1.58459 7.34375C1.58459 9.625 3.02407 11.9992 5.86347 14.3992C7.16457 15.4943 8.57 16.4624 10.0601 17.2898C10.1291 17.3265 10.2063 17.3457 10.2847 17.3457C10.3631 17.3457 10.4403 17.3265 10.5093 17.2898C11.9994 16.4624 13.4048 15.4943 14.7059 14.3992C17.5453 11.9992 18.9848 9.625 18.9848 7.34375C18.9833 6.10099 18.4829 4.90955 17.5933 4.03079C16.7036 3.15202 15.4974 2.6577 14.2393 2.65625ZM10.2847 16.3367C8.98681 15.5969 2.5337 11.6969 2.5337 7.34375C2.53474 6.34951 2.93506 5.39628 3.6468 4.69324C4.35854 3.9902 5.32356 3.59478 6.33011 3.59375C7.93409 3.59375 9.28103 4.43984 9.84574 5.80234C9.8815 5.88832 9.94232 5.96185 10.0205 6.0136C10.0986 6.06535 10.1906 6.09298 10.2847 6.09298C10.3788 6.09298 10.4708 6.06535 10.5489 6.0136C10.6271 5.96185 10.6879 5.88832 10.7237 5.80234C11.2884 4.43984 12.6353 3.59375 14.2393 3.59375C15.2458 3.59478 16.2109 3.9902 16.9226 4.69324C17.6343 5.39628 18.0347 6.34951 18.0357 7.34375C18.0357 11.6969 11.5826 15.5969 10.2847 16.3367Z"
                    fill="#E8DFD8"
                  />
                </svg>
              </a>
            </div>
          </section>
        </main>
      </SwiperSlide>
      <SwiperSlide>
        <main className="bg-slide4 w-full h-full rounded-[25px] bg-cover bg-center">
          {/* DESKTOP VERSION */}
          <section className="px-[120px] py-[120px] xl:px-[70px] lg:px-[50px] xxl:px-[100px] lg:hidden">
            <h1 className="text-[64px] font-Akira text-white w-[511px]">
              Hell's Paradise
            </h1>
            <p className="max-w-[471px] mt-[9px] font-GothamPro text-white text-[14px] font-extralight lineclamp text-justify">
              Человеческая жизнь так хрупка и мимолётна. Ах, если бы её продлить
              - думал сёгун Нариёси Токугава.И, на удивление, способ нашёлся.Сие
              чудо надёжно запрятано на сказочном острове, откуда не так-то
              легко вернуться живым.Много лет сёгун бился за свою мечту:
              отправлял бравых воинов на поиски загадочного эликсира жизни. Но
              тщетно. Отчаянье родило в голове правителя мысль не растрачивать
              жизни верных слуг попусту и перевернуть игру. Был издан приказ!
            </p>
            <div className="flex gap-[36px] mt-[17px] items-center">
              <a
                href="#"
                className="py-[12px] px-[9px] bg-Blue600 rounded-[25px] text-white font-GothamPro text-[16px] font-extralight hover:bg-Blue700 transition-colors"
              >
                К просмотру
              </a>
              <a
                href="#"
                className="py-[12px] px-[27px] rounded-[25px] text-white font-GothamPro text-[16px] font-extralight border-solid border border-mainLightRed hover:bg-mainLightRed"
              >
                Трейлер
              </a>
              <a
                href="#"
                className="py-[9px] px-[13px] border-solid border border-mainVanilla rounded-[25px] active:bg-[#FF9494] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M14.2393 2.65625C12.5784 2.65625 11.1342 3.39609 10.2847 4.63594C9.43526 3.39609 7.99104 2.65625 6.33011 2.65625C5.07197 2.6577 3.86578 3.15202 2.97614 4.03079C2.0865 4.90955 1.58606 6.10099 1.58459 7.34375C1.58459 9.625 3.02407 11.9992 5.86347 14.3992C7.16457 15.4943 8.57 16.4624 10.0601 17.2898C10.1291 17.3265 10.2063 17.3457 10.2847 17.3457C10.3631 17.3457 10.4403 17.3265 10.5093 17.2898C11.9994 16.4624 13.4048 15.4943 14.7059 14.3992C17.5453 11.9992 18.9848 9.625 18.9848 7.34375C18.9833 6.10099 18.4829 4.90955 17.5933 4.03079C16.7036 3.15202 15.4974 2.6577 14.2393 2.65625ZM10.2847 16.3367C8.98681 15.5969 2.5337 11.6969 2.5337 7.34375C2.53474 6.34951 2.93506 5.39628 3.6468 4.69324C4.35854 3.9902 5.32356 3.59478 6.33011 3.59375C7.93409 3.59375 9.28103 4.43984 9.84574 5.80234C9.8815 5.88832 9.94232 5.96185 10.0205 6.0136C10.0986 6.06535 10.1906 6.09298 10.2847 6.09298C10.3788 6.09298 10.4708 6.06535 10.5489 6.0136C10.6271 5.96185 10.6879 5.88832 10.7237 5.80234C11.2884 4.43984 12.6353 3.59375 14.2393 3.59375C15.2458 3.59478 16.2109 3.9902 16.9226 4.69324C17.6343 5.39628 18.0347 6.34951 18.0357 7.34375C18.0357 11.6969 11.5826 15.5969 10.2847 16.3367Z"
                    fill="#E8DFD8"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* MOBILE VERSION */}
          <section className="lg:max-w-auto lg:h-full lg:my-auto flex flex-col justify-center">
            <h1 className="lg:text-[48px] text-center font-Akira text-white lg:flex lg:justify-center md:text-[30px]">
              Hell's Paradise
            </h1>
            <div className="lg:flex lg:gap-[36px] lg:mt-[17px] lg:items-center lg:justify-center">
              <a
                href="#"
                className="py-[12px] px-[9px] bg-Blue600 rounded-[25px] text-white font-GothamPro text-[16px] font-extralight hover:bg-Blue700 transition-colors"
              >
                К просмотру
              </a>
              <a
                href="#"
                className="py-[12px] sm:hidden px-[27px] rounded-[25px] text-white font-GothamPro text-[16px] font-extralight border-solid border border-mainLightRed hover:bg-mainLightRed"
              >
                Трейлер
              </a>
              <a
                href="#"
                className="py-[9px] sm:hidden px-[13px] border-solid border border-mainVanilla rounded-[25px] active:bg-[#FF9494] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M14.2393 2.65625C12.5784 2.65625 11.1342 3.39609 10.2847 4.63594C9.43526 3.39609 7.99104 2.65625 6.33011 2.65625C5.07197 2.6577 3.86578 3.15202 2.97614 4.03079C2.0865 4.90955 1.58606 6.10099 1.58459 7.34375C1.58459 9.625 3.02407 11.9992 5.86347 14.3992C7.16457 15.4943 8.57 16.4624 10.0601 17.2898C10.1291 17.3265 10.2063 17.3457 10.2847 17.3457C10.3631 17.3457 10.4403 17.3265 10.5093 17.2898C11.9994 16.4624 13.4048 15.4943 14.7059 14.3992C17.5453 11.9992 18.9848 9.625 18.9848 7.34375C18.9833 6.10099 18.4829 4.90955 17.5933 4.03079C16.7036 3.15202 15.4974 2.6577 14.2393 2.65625ZM10.2847 16.3367C8.98681 15.5969 2.5337 11.6969 2.5337 7.34375C2.53474 6.34951 2.93506 5.39628 3.6468 4.69324C4.35854 3.9902 5.32356 3.59478 6.33011 3.59375C7.93409 3.59375 9.28103 4.43984 9.84574 5.80234C9.8815 5.88832 9.94232 5.96185 10.0205 6.0136C10.0986 6.06535 10.1906 6.09298 10.2847 6.09298C10.3788 6.09298 10.4708 6.06535 10.5489 6.0136C10.6271 5.96185 10.6879 5.88832 10.7237 5.80234C11.2884 4.43984 12.6353 3.59375 14.2393 3.59375C15.2458 3.59478 16.2109 3.9902 16.9226 4.69324C17.6343 5.39628 18.0347 6.34951 18.0357 7.34375C18.0357 11.6969 11.5826 15.5969 10.2847 16.3367Z"
                    fill="#E8DFD8"
                  />
                </svg>
              </a>
            </div>
          </section>
        </main>
      </SwiperSlide>
      <SwiperSlide>
        <main className="bg-slide5 w-full h-full rounded-[25px] bg-cover bg-center">
          {/* DESKTOP VERSION */}
          <section className="px-[120px] py-[120px] xl:px-[70px] lg:px-[50px] xxl:px-[100px] lg:hidden">
            <h1 className="text-[64px] font-Akira text-white w-[511px]">
              Magic and Muscles
            </h1>
            <p className="max-w-[471px] mt-[9px] font-GothamPro text-white text-[14px] font-extralight lineclamp text-justify">
              Это мир, где каждый может использовать магию как должное. В
              глубине леса в волшебном мире живет юноша, который усердно
              тренирует свои мускулы. Его зовут Мэтью Бандид, и его секрет в
              том, что он не может использовать магию. Он хотел жить мирной
              жизнью со своей семьей, но однажды его жизнь внезапно стала
              мишенью, и его заставили поступить в магическую школу с целью
              стать лучшим учеником «Пробужденного Бога». Может ли пригодиться
              перед элитными магами его отточенная временем мускулатура? !
              Сокруши все волшебство силой упорного труда, грандиозное открытие
              необычной волшебной фэнтезийной истории! !
            </p>
            <div className="flex gap-[36px] mt-[17px] items-center">
              <a
                href="#"
                className="py-[12px] px-[9px] bg-Blue600 rounded-[25px] text-white font-GothamPro text-[16px] font-extralight hover:bg-Blue700 transition-colors"
              >
                К просмотру
              </a>
              <a
                href="#"
                className="py-[12px] px-[27px] rounded-[25px] text-white font-GothamPro text-[16px] font-extralight border-solid border border-mainLightRed hover:bg-mainLightRed"
              >
                Трейлер
              </a>
              <a
                href="#"
                className="py-[9px] px-[13px] border-solid border border-mainVanilla rounded-[25px] active:bg-[#FF9494] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M14.2393 2.65625C12.5784 2.65625 11.1342 3.39609 10.2847 4.63594C9.43526 3.39609 7.99104 2.65625 6.33011 2.65625C5.07197 2.6577 3.86578 3.15202 2.97614 4.03079C2.0865 4.90955 1.58606 6.10099 1.58459 7.34375C1.58459 9.625 3.02407 11.9992 5.86347 14.3992C7.16457 15.4943 8.57 16.4624 10.0601 17.2898C10.1291 17.3265 10.2063 17.3457 10.2847 17.3457C10.3631 17.3457 10.4403 17.3265 10.5093 17.2898C11.9994 16.4624 13.4048 15.4943 14.7059 14.3992C17.5453 11.9992 18.9848 9.625 18.9848 7.34375C18.9833 6.10099 18.4829 4.90955 17.5933 4.03079C16.7036 3.15202 15.4974 2.6577 14.2393 2.65625ZM10.2847 16.3367C8.98681 15.5969 2.5337 11.6969 2.5337 7.34375C2.53474 6.34951 2.93506 5.39628 3.6468 4.69324C4.35854 3.9902 5.32356 3.59478 6.33011 3.59375C7.93409 3.59375 9.28103 4.43984 9.84574 5.80234C9.8815 5.88832 9.94232 5.96185 10.0205 6.0136C10.0986 6.06535 10.1906 6.09298 10.2847 6.09298C10.3788 6.09298 10.4708 6.06535 10.5489 6.0136C10.6271 5.96185 10.6879 5.88832 10.7237 5.80234C11.2884 4.43984 12.6353 3.59375 14.2393 3.59375C15.2458 3.59478 16.2109 3.9902 16.9226 4.69324C17.6343 5.39628 18.0347 6.34951 18.0357 7.34375C18.0357 11.6969 11.5826 15.5969 10.2847 16.3367Z"
                    fill="#E8DFD8"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* MOBILE VERSION */}
          <section className="lg:max-w-auto lg:h-full lg:my-auto flex flex-col justify-center">
            <h1 className="lg:text-[48px] font-Akira text-white lg:flex lg:justify-center text-center md:text-[30px]">
              Magic and Muscles
            </h1>
            <div className="lg:flex lg:gap-[36px] lg:mt-[17px] lg:items-center lg:justify-center">
              <a
                href="#"
                className="py-[12px] px-[9px] bg-Blue600 rounded-[25px] text-white font-GothamPro text-[16px] font-extralight hover:bg-Blue700 transition-colors"
              >
                К просмотру
              </a>
              <a
                href="#"
                className="py-[12px] sm:hidden px-[27px] rounded-[25px] text-white font-GothamPro text-[16px] font-extralight border-solid border border-mainLightRed hover:bg-mainLightRed"
              >
                Трейлер
              </a>
              <a
                href="#"
                className="py-[9px] sm:hidden px-[13px] border-solid border border-mainVanilla rounded-[25px] active:bg-[#FF9494] transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M14.2393 2.65625C12.5784 2.65625 11.1342 3.39609 10.2847 4.63594C9.43526 3.39609 7.99104 2.65625 6.33011 2.65625C5.07197 2.6577 3.86578 3.15202 2.97614 4.03079C2.0865 4.90955 1.58606 6.10099 1.58459 7.34375C1.58459 9.625 3.02407 11.9992 5.86347 14.3992C7.16457 15.4943 8.57 16.4624 10.0601 17.2898C10.1291 17.3265 10.2063 17.3457 10.2847 17.3457C10.3631 17.3457 10.4403 17.3265 10.5093 17.2898C11.9994 16.4624 13.4048 15.4943 14.7059 14.3992C17.5453 11.9992 18.9848 9.625 18.9848 7.34375C18.9833 6.10099 18.4829 4.90955 17.5933 4.03079C16.7036 3.15202 15.4974 2.6577 14.2393 2.65625ZM10.2847 16.3367C8.98681 15.5969 2.5337 11.6969 2.5337 7.34375C2.53474 6.34951 2.93506 5.39628 3.6468 4.69324C4.35854 3.9902 5.32356 3.59478 6.33011 3.59375C7.93409 3.59375 9.28103 4.43984 9.84574 5.80234C9.8815 5.88832 9.94232 5.96185 10.0205 6.0136C10.0986 6.06535 10.1906 6.09298 10.2847 6.09298C10.3788 6.09298 10.4708 6.06535 10.5489 6.0136C10.6271 5.96185 10.6879 5.88832 10.7237 5.80234C11.2884 4.43984 12.6353 3.59375 14.2393 3.59375C15.2458 3.59478 16.2109 3.9902 16.9226 4.69324C17.6343 5.39628 18.0347 6.34951 18.0357 7.34375C18.0357 11.6969 11.5826 15.5969 10.2847 16.3367Z"
                    fill="#E8DFD8"
                  />
                </svg>
              </a>
            </div>
          </section>
        </main>
      </SwiperSlide>
    </Swiper>
  );
};
