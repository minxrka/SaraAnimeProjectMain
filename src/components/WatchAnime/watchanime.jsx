import React from "react";
import AnimePreview from "../../img/bg-anime-card/small/64a44110252fe851868925.jpg";
import AnimeBgSlider1 from "../../img/trailer-photo/kensin/64a70ec4d2ceb025626775.jpg";
import AnimeBgSlider2 from "../../img/trailer-photo/kensin/64a70ec4d0dc5879791949.jpg";
import AnimeBgSlider3 from "../../img/trailer-photo/kensin/83feb2cbe64d30e1d7d584205bdd4e5afc8b408b.jpg";
import AnimeBgSlider4 from "../../img/trailer-photo/kensin/64a70ec4d1ed9530852142.jpg";
import AnimeBgSlider5 from "../../img/trailer-photo/kensin/64a70ec4d26fb632702244.jpg";
import AnimeBgSlider6 from "../../img/trailer-photo/kensin/64a70ec4dc11d750919818.jpg";
import AnimePerson from "../../img/trailer-photo/kensin/Himura_Kenshin_default.jpg";
import AnimePerson2 from "../../img/trailer-photo/kensin/Kaoru_default.jpg";
import AnimePerson3 from "../../img/trailer-photo/kensin/640px-Yahiko12.jpg";
import AnimePerson4 from "../../img/trailer-photo/kensin/Sagara_Sanosuke_default.jpg";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export const WatchAnime = () => {
  return (
    <main>
      <section className="content bg-WatchAnimeBg w-full h-full bg-cover bg-center">
        <div className="GradientWatchAnime h-full w-full">
          <section className="px-[300px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
            {/* огр.контента */}
            <div className="max-w-[1300px] mx-auto">
              {/* огр.контента */}
              <section className="containerGrid">
                <aside className="flex flex-col gap-[15px] max-w-[300px] h-auto mt-[80px]">
                  <img
                    className="w-full object-cover rounded-[20px] h-[420px]"
                    src={AnimePreview}
                    alt=""
                  />
                  <button className="bgbuttonWatchAnime border-solid border border-cyberpunk rounded-[10px] py-[20px] text-center text-white font-GothamPro text-[20px] font-light active:scale-95 transition-transform">
                    Смотреть онлайн
                  </button>
                  <button className="flex gap-[5px] justify-center flex-wrap bgbuttonSearchAnime border-solid border border-mainBlue rounded-[10px] py-[20px] text-center text-white font-GothamPro text-[20px] font-light active:scale-95 transition-transform">
                    Добавить в избранное
                    <div>
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0785 2.65625C12.4176 2.65625 10.9734 3.39609 10.1239 4.63594C9.27449 3.39609 7.83027 2.65625 6.16934 2.65625C4.9112 2.6577 3.70501 3.15202 2.81538 4.03079C1.92574 4.90955 1.42529 6.10099 1.42383 7.34375C1.42383 9.625 2.8633 11.9992 5.7027 14.3992C7.0038 15.4943 8.40924 16.4624 9.89932 17.2898C9.96837 17.3265 10.0455 17.3457 10.1239 17.3457C10.2023 17.3457 10.2795 17.3265 10.3486 17.2898C11.8386 16.4624 13.2441 15.4943 14.5452 14.3992C17.3846 11.9992 18.824 9.625 18.824 7.34375C18.8226 6.10099 18.3221 4.90955 17.4325 4.03079C16.5429 3.15202 15.3367 2.6577 14.0785 2.65625ZM10.1239 16.3367C8.82604 15.5969 2.37293 11.6969 2.37293 7.34375C2.37398 6.34951 2.77429 5.39628 3.48603 4.69324C4.19777 3.9902 5.16279 3.59478 6.16934 3.59375C7.77333 3.59375 9.12026 4.43984 9.68498 5.80234C9.72073 5.88832 9.78155 5.96185 9.85971 6.0136C9.93787 6.06535 10.0298 6.09298 10.1239 6.09298C10.218 6.09298 10.31 6.06535 10.3882 6.0136C10.4663 5.96185 10.5271 5.88832 10.5629 5.80234C11.1276 4.43984 12.4745 3.59375 14.0785 3.59375C15.0851 3.59478 16.0501 3.9902 16.7618 4.69324C17.4736 5.39628 17.8739 6.34951 17.8749 7.34375C17.8749 11.6969 11.4218 15.5969 10.1239 16.3367Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                  <button className="flex gap-[5px] justify-center bgbuttonSearchAnime border-solid border border-mainBlue rounded-[10px] py-[20px] text-center text-white font-GothamPro text-[20px] font-light active:scale-95 transition-transform">
                    Написать коментарий
                    <div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5383 5.95312L14.0469 2.46172C13.9598 2.37432 13.8563 2.30497 13.7423 2.25765C13.6284 2.21034 13.5062 2.18598 13.3828 2.18598C13.2594 2.18598 13.1372 2.21034 13.0233 2.25765C12.9093 2.30497 12.8058 2.37432 12.7188 2.46172L3.08672 12.0961C2.91114 12.2719 2.81251 12.5101 2.8125 12.7586V16.25C2.8125 16.4986 2.91127 16.7371 3.08709 16.9129C3.2629 17.0887 3.50136 17.1875 3.75 17.1875H7.24141C7.36447 17.1878 7.48637 17.1637 7.60008 17.1166C7.71379 17.0696 7.81705 17.0005 7.90391 16.9133L14.8312 9.98594L15.2789 11.7828L12.2797 14.7828C12.2494 14.8115 12.2252 14.846 12.2085 14.8842C12.1917 14.9224 12.1828 14.9636 12.1823 15.0053C12.1817 15.047 12.1895 15.0884 12.2052 15.127C12.2208 15.1657 12.2441 15.2008 12.2736 15.2303C12.303 15.2598 12.3381 15.2832 12.3767 15.2989C12.4154 15.3147 12.4567 15.3225 12.4985 15.322C12.5402 15.3215 12.5813 15.3127 12.6196 15.296C12.6578 15.2794 12.6923 15.2552 12.7211 15.225L15.8461 12.1C15.8844 12.0619 15.9121 12.0145 15.9266 11.9625C15.9412 11.9104 15.9419 11.8555 15.9289 11.8031L15.3461 9.475L17.5383 7.28281C17.6259 7.19569 17.6955 7.09209 17.7429 6.978C17.7904 6.8639 17.8148 6.74154 17.8148 6.61797C17.8148 6.49439 17.7904 6.37204 17.7429 6.25794C17.6955 6.14384 17.6259 6.04025 17.5383 5.95312ZM3.4375 16.25V13.2547L6.74609 16.5625H3.75C3.66712 16.5625 3.58763 16.5296 3.52903 16.471C3.47042 16.4124 3.4375 16.3329 3.4375 16.25ZM7.5 16.4328L3.56719 12.5L10.625 5.44219L14.5586 9.375L7.5 16.4328ZM17.0961 6.83672L15 8.93281L11.0672 5L13.1633 2.9039C13.1923 2.87485 13.2268 2.8518 13.2647 2.83607C13.3026 2.82035 13.3433 2.81225 13.3844 2.81225C13.4254 2.81225 13.4661 2.82035 13.504 2.83607C13.542 2.8518 13.5764 2.87485 13.6055 2.9039L17.0961 6.39531C17.1545 6.45389 17.1874 6.53326 17.1874 6.61601C17.1874 6.69876 17.1545 6.77813 17.0961 6.83672Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                </aside>
                <aside className="flex flex-col mt-[80px] ml-[44px]">
                  <div>
                    <h1 className="text-white font-GothamPro text-[36px] font-light">
                      Бродяга Кэнсин
                    </h1>
                    <div className="flex mt-[12px] items-center gap-[10px]">
                      <p className="py-[4px] px-[6px] text-center border-solid border border-mainBlue rounded-[5px] text-[16px] text-white font-GothamPro font-light">
                        18+
                      </p>
                      <span className="border-solid border border-mainBlue rounded-[50%] w-[10px] h-[10px]"></span>
                      <p className="text-[16px] text-white font-GothamPro font-light">
                        2023г
                      </p>
                      <span className="border-solid border border-mainBlue rounded-[50%] w-[10px] h-[10px]"></span>
                      <p className="text-[16px] text-white font-GothamPro font-light">
                        Япония
                      </p>
                      <span className="border-solid border border-mainBlue rounded-[50%] w-[10px] h-[10px]"></span>
                      <p className="text-[16px] text-white font-GothamPro font-light">
                        TV-сериал
                      </p>
                    </div>
                  </div>

                  <section className="mt-[29px] flex">
                    <div className="flex w-full">
                      <h1 className="text-white font-GothamPro text-[16px]">
                        О сериале:
                      </h1>
                    </div>
                  </section>
                  <section className="flex mt-[16px] gap-[54px]">
                    <div className="flex flex-col gap-[16px]">
                      <h1 className="text-white font-GothamPro text-[16px]">
                        Кол-во серий
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px]">
                        Жанры
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px]">
                        Длительность
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px]">
                        Статус
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px]">
                        Автор оригинала
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px]">
                        Режисер
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px]">
                        Основа
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px]">
                        Снято по манге
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px]">
                        Озвучка
                      </h1>
                    </div>
                    <div className="flex flex-col gap-[16px] mt-[1px]">
                      <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                        3 / 12
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                        Romance, Action
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                        22 мин. ~ серия
                      </h1>
                      <div className="">
                        <a className="text-white font-GothamPro bg-green-500 border-solid border border-green-400 rounded-[10px] px-[7px] text-center py-[4px] text-[16px] font-extralight">
                          Онгоинг
                        </a>
                      </div>
                      <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                        Нобухиро Вацуки
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                        Фурухаси Кадзухиро
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                        манга
                      </h1>
                      <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                        Бродяга Кэнсин
                      </h1>
                      <div className="flex gap-[30px] max-w-[700px] flex-wrap">
                        <a
                          href="#"
                          className="bgbuttonSearchAnime rounded-[5px] px-[15px] py-[2px] border-solid border border-mainBlue text-white text-[16px] font-GothamPro font-extralight"
                        >
                          AnimeVost
                        </a>
                        <a
                          href="#"
                          className="bgbuttonSearchAnime rounded-[5px] px-[15px] py-[2px] border-solid border border-mainBlue text-white text-[16px] font-GothamPro font-extralight"
                        >
                          AniDUB
                        </a>
                        <a
                          href="#"
                          className="bgbuttonSearchAnime rounded-[5px] px-[15px] py-[2px] border-solid border border-mainBlue text-white text-[16px] font-GothamPro font-extralight"
                        >
                          AniLibria
                        </a>
                        <a
                          href="#"
                          className="bgbuttonSearchAnime rounded-[5px] px-[15px] py-[2px] border-solid border border-mainBlue text-white text-[16px] font-GothamPro font-extralight"
                        >
                          Ещё (5)
                        </a>
                      </div>
                    </div>
                  </section>
                  <div className="block max-w-[971px] mt-[16px] h-auto">
                    <h1 className="text-white font-GothamPro text-[16px]">
                      Описание
                    </h1>
                    <p className="text-white lineclamp7 leading-6 font-GothamPro text-[16px] font-extralight text-justify mt-[16px]">
                      История странствующего мечника эпохи Мэйдзи по имени
                      Кэнсин – классика жанра аниме. Фанаты дождались
                      современной адаптации любимой истории в отличной
                      прорисовке. Зрителя ждет судьбоносная встреча хозяйки
                      додзе Каору с загадочным странником, чье мужественное лицо
                      покрыто шрамами. Женщина не подозревает, что перед ней не
                      просто воин-ветеран, а элитный киллер с совершенными
                      навыками мечника. Кэнсин устал нести смерть, поэтому
                      заменил привычную катану на незаточенную, чтобы случайно
                      не отнять чью-то жизнь. При этом Кэнсин не отказался от
                      сражений, а лишь перенаправил свои умения на защиту
                      угнетенных.Благодаря Каору суровый воин обретает дом и
                      друзей. Горе тому, кто нарушит покой Кэнсина и его
                      близких. Но удастся ли защитнику справедливости избежать
                      новых смертей? Ведь щупальца прошлых кровопролитий не
                      хотят отпускать умелого ликвидатора.
                    </p>
                    <button className="text-cyberpunk flex items-center gap-[5px] hover:text-[#C8EA57] transition-colors font-GothamPro text-[16px] border-b-[1px] border-cybe font-extralight">
                      Читать далее
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="#D6FE50"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </aside>
              </section>
              <section className="">
                <div className="mt-[40px] w-full h-[1px] bg-[#4990E8]"></div>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper mt-[20px] mb-[20px] max-w-[1400px] overflow-hidden"
                >
                  <SwiperSlide className="overflow-hidden">
                    <div className="hoverbgSliderEffect ZoomSearch w-[300px] sm:w-full">
                      <a href="">
                        <div className="relative rounded-[10px] ObjfitSlider">
                          <img
                            className="rounded-[10px] w-full h-full object-cover"
                            src={AnimeBgSlider1}
                            alt=""
                          />
                          <div className="bgSliderEffect sliderbg absolute top-0 rounded-[10px] w-full h-full opacity-0 transition-all">
                            <span className="">
                              <svg
                                className="max-w-[50px] h-full mx-auto SvgSearch"
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
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="overflow-hidden">
                    <div className="hoverbgSliderEffect ZoomSearch w-[300px] sm:w-full">
                      <a href="">
                        <div className="relative rounded-[10px] ObjfitSlider">
                          <img
                            className="rounded-[10px] w-full h-full object-cover"
                            src={AnimeBgSlider2}
                            alt=""
                          />
                          <div className="bgSliderEffect sliderbg absolute top-0 rounded-[10px] w-full h-full opacity-0 transition-all">
                            <span className="">
                              <svg
                                className="max-w-[50px] h-full mx-auto SvgSearch"
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
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="overflow-hidden">
                    <div className="hoverbgSliderEffect ZoomSearch w-[300px] sm:w-full">
                      <a href="">
                        <div className="relative rounded-[10px] ObjfitSlider">
                          <img
                            className="rounded-[10px] w-full h-full object-cover"
                            src={AnimeBgSlider3}
                            alt=""
                          />
                          <div className="bgSliderEffect sliderbg absolute top-0 rounded-[10px] w-full h-full opacity-0 transition-all">
                            <span className="">
                              <svg
                                className="max-w-[50px] h-full mx-auto SvgSearch"
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
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="overflow-hidden">
                    <div className="hoverbgSliderEffect ZoomSearch w-[300px] sm:w-full">
                      <a href="">
                        <div className="relative rounded-[10px] ObjfitSlider">
                          <img
                            className="rounded-[10px] w-full h-full object-cover"
                            src={AnimeBgSlider4}
                            alt=""
                          />
                          <div className="bgSliderEffect sliderbg absolute top-0 rounded-[10px] w-full h-full opacity-0 transition-all">
                            <span className="">
                              <svg
                                className="max-w-[50px] h-full mx-auto SvgSearch"
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
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="overflow-hidden">
                    <div className="hoverbgSliderEffect ZoomSearch w-[300px] sm:w-full">
                      <a href="">
                        <div className="relative rounded-[10px] ObjfitSlider">
                          <img
                            className="rounded-[10px] w-full h-full object-cover"
                            src={AnimeBgSlider5}
                            alt=""
                          />
                          <div className="bgSliderEffect sliderbg absolute top-0 rounded-[10px] w-full h-full opacity-0 transition-all">
                            <span className="">
                              <svg
                                className="max-w-[50px] h-full mx-auto SvgSearch"
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
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="overflow-hidden">
                    <div className="hoverbgSliderEffect ZoomSearch w-[300px] sm:w-full">
                      <a href="">
                        <div className="relative rounded-[10px] ObjfitSlider">
                          <img
                            className="rounded-[10px] w-full h-full object-cover"
                            src={AnimeBgSlider6}
                            alt=""
                          />
                          <div className="bgSliderEffect sliderbg absolute top-0 rounded-[10px] w-full h-full opacity-0 transition-all">
                            <span className="">
                              <svg
                                className="max-w-[50px] h-full mx-auto SvgSearch"
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
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="w-full h-[1px] bg-[#4990E8]"></div>
              </section>
            </div>
          </section>
        </div>
      </section>
      <main className="mt-[40px] px-[300px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
        <section className="max-w-[1300px] mx-auto">
          <div>
            <h1 className="text-white font-GothamPro text-[21px]">
              Смотреть аниме онлайн
            </h1>
          </div>
          <div className="mt-[20px] max-w-[1000px] h-[600px] md:max-w-[600px] md:h-[400px]">
            <iframe
              src="//kodik.info/seria/1170509/c7c42fb5de1730cc86dbdf294c638d68/720p"
              width="100%"
              height="100%"
              frameborder="0"
              AllowFullScreen
              allow="autoplay *; fullscreen *"
            ></iframe>
          </div>
          <div className="mt-[40px] w-full h-[1px] bg-[#4990E8]"></div>
          <div className="mt-[40px]">
            <h1 className="text-white font-GothamPro text-[21px]">
              Смотреть аниме онлайн
            </h1>
          </div>
          <aside className="mt-[20px] flex flex-wrap gap-[40px]">
            <section className="block w-[180px] cursor-pointer hoverGeneralPerson transition-colors">
              <div className="">
                <img
                  className="w-full object-cover rounded-[10px] h-[250px]"
                  src={AnimePerson}
                  alt=""
                />
              </div>
              <div className="mt-[15px]">
                <h1 className="text-[16px] font-GothamPro font-light text-white textwrap lineclampone">
                  Химура Кэнсин
                </h1>
              </div>
            </section>
            <section className="block w-[180px] cursor-pointer hoverGeneralPerson transition-colors">
              <div className="">
                <img
                  className="w-full object-cover rounded-[10px] h-[250px]"
                  src={AnimePerson2}
                  alt=""
                />
              </div>
              <div className="mt-[15px]">
                <h1 className="text-[16px] font-GothamPro font-light text-white textwrap lineclampone">
                  Камия Каору
                </h1>
              </div>
            </section>
            <section className="block w-[180px] cursor-pointer hoverGeneralPerson transition-colors">
              <div className="">
                <img
                  className="w-full object-cover rounded-[10px] h-[250px]"
                  src={AnimePerson3}
                  alt=""
                />
              </div>
              <div className="mt-[15px]">
                <h1 className="text-[16px] font-GothamPro font-light text-white textwrap lineclampone">
                  Мёдзин Яхико
                </h1>
              </div>
            </section>
            <section className="block w-[180px] cursor-pointer hoverGeneralPerson transition-colors">
              <div className="">
                <img
                  className="w-full object-cover rounded-[10px] h-[250px]"
                  src={AnimePerson4}
                  alt=""
                />
              </div>
              <div className="mt-[15px]">
                <h1 className="text-[16px] font-GothamPro font-light text-white textwrap lineclampone">
                  Сагара Саносукэ
                </h1>
              </div>
            </section>
          </aside>
          <div className="mt-[40px] w-full h-[1px] bg-[#4990E8] mb-[110px]"></div>
        </section>
      </main>
    </main>
  );
};
