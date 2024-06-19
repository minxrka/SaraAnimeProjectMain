import React from "react";
import AnimePreview from "../../img/bg-anime-card/small/anime1.jpg";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import BgMain from "../../img/other-content/BgCyberpunkMainPage.png";
import InformationAnime from "./mainInfoAnimeRandom.json";
import GeneralPerson from "./generalPersonRandom.json";
import PlayerSeriaAnimeRandom from "./PlayerSeriaAnimeRandom.json";
// Import Swiper React components
import "./RandomAnime.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Footer } from "../../components/footer/footer";

import { Header } from "../../components/header/header";
import SliderAnimePreview from "../../components/SliderAnimePreview/SliderAnimePreview";

/* Скрытие и показ описания */
const useTruncatedElement = ({ ref }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {};

    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, [ref]);

  const toggleIsShowingMore = () => setIsShowingMore((prev) => !prev);

  return {
    isTruncated,
    isShowingMore,
    toggleIsShowingMore,
  };
};
/* Скрытие и показ описания */

function RandomAnime() {
  const [isShowingMore, setIsShowingMore] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isShowingMore) {
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    } else {
      ref.current.style.height = "6.25rem"; // about 100px
    }
  }, [isShowingMore]);
  const [arrowDirection, setArrowDirection] = useState("down");

  function toggleIsShowingMore() {
    setIsShowingMore(!isShowingMore);
  }
  const myref = useRef(null);

  const handleClick = () => {
    myref.current?.scrollIntoView({
      behavior: "smooth",
      timeout: "10000",
    });
  };
  /* Свич эпизодов */
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const currentSerie = PlayerSeriaAnimeRandom.filter(
    (result) => result.id === currentEpisode
  )[0];
  /* Свич эпизодов */

  useEffect(() => {
    const title = InformationAnime.map((anime) => anime.titleAnime).join(", ");
    document.title = `Anime with Sara - ${title}`;
  }, [InformationAnime]);
  return (
    <>
      <main>
        <Header />
        <Swiper
          slidesPerView={1}
          mousewheel={true}
          modules={[Pagination]}
          style={{ position: "absolute", zIndex: 1, top: 0, left: 0 }}
          className="mySwiper w-full"
        >
          <SwiperSlide className="">
            <section className="w-full h-[100vh] GradientWatchAnime">
              <img src={BgMain} className="w-full h-full object-cover"></img>
            </section>
          </SwiperSlide>
        </Swiper>

        {/* Бекграунд береться из 1 картинки слайдера!!!!!!! */}

        <main
          className="relative z-2 content-container"
          style={{ position: "relative", zIndex: 2 }}
        >
          <section className="px-[300px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
            {/* огр.контента */}
            <div className="max-w-[1300px] mx-auto">
              {/* огр.контента */}
              <section className="containerGrid md:grid-cols-1">
                <aside className="flex flex-col gap-[15px] max-w-[300px] h-auto mt-[80px] md:max-w-full md:h-full">
                  <img
                    className="w-full object-cover rounded-[10px] h-[420px] md:h-[600px] sm:h-[500px]"
                    src={AnimePreview}
                    alt=""
                  />
                  <button
                    onClick={handleClick}
                    className="mybutton text-center border-solid border border-cyberpunk text-white font-GothamPro text-[20px] font-light"
                  >
                    Смотреть онлайн
                  </button>
                  <button className="flex gap-[5px] justify-center flex-wrap bg-[#5662D578] border-solid border border-Blue600 rounded-[10px] py-[20px] text-center text-white font-GothamPro text-[20px] font-light active:scale-95 transition-transform">
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
                  <button className="flex gap-[5px] justify-center bg-[#5662D578] border-solid border border-Blue600 rounded-[10px] py-[20px] text-center text-white font-GothamPro text-[20px] font-light active:scale-95 transition-transform">
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
                {InformationAnime.map((result) => (
                  <aside className="flex flex-col mt-[80px] ml-[44px] md:ml-[0px]">
                    <div>
                      <h1 className="text-white font-GothamPro text-[36px] font-light">
                        {result.titleAnime}
                      </h1>
                      <div className="flex mt-[12px] items-center gap-[10px]">
                        <p className="py-[4px] px-[6px] text-center border-solid border border-Blue600 rounded-[5px] text-[16px] text-white font-GothamPro font-light">
                          {result.yearOfIssue}
                        </p>
                        <span className="border-solid border border-Blue600 rounded-[50%] w-[10px] h-[10px]"></span>
                        <p className="text-[16px] text-white font-GothamPro font-light">
                          {result.yearOfRelease}
                        </p>
                        <span className="border-solid border border-Blue600 rounded-[50%] w-[10px] h-[10px]"></span>
                        <p className="text-[16px] text-white font-GothamPro font-light">
                          {result.country}
                        </p>
                        <span className="border-solid border border-Blue600 rounded-[50%] w-[10px] h-[10px]"></span>
                        <p className="text-[16px] text-white font-GothamPro font-light">
                          {result.format}
                        </p>
                      </div>
                    </div>
                    <div className="mt-[29px] mb-[16px]">
                      <h1 className="text-white font-GothamPro text-[16px]">
                        О сериале:
                      </h1>
                    </div>

                    <section class="gridcols2 items-center gap-[16px]">
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px] lg:text-[15px]">
                          Кол-во серий
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          {result.episodesReleased} / {result.totalEpisodes}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px]">
                          Жанры
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          {result.genres}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px]">
                          Длительность
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          {result.durationSeries}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px]">
                          Статус
                        </h1>
                      </div>
                      <div>
                        <p className="text-white font-GothamPro max-w-[100px] bg-lime-600 border-solid border border-lime-800 rounded-[10px] px-[7px] text-center py-[4px] text-[16px] font-extralight">
                          {result.status}
                        </p>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px]">
                          Автор оригинала
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          {result.author}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px]">
                          Режисёр
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          {result.producer}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px]">
                          Основа
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          {result.basedOn}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px]">
                          Снято по манге
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          {result.basedOnManga}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-white font-GothamPro text-[16px]">
                          Озвучка
                        </h1>
                      </div>
                      <div className="flex gap-[30px] flex-wrap">
                        <a
                          href="#"
                          className="bg-[#5662D578] rounded-[5px] px-[15px] py-[2px] border-solid border border-Blue600 text-white text-[16px] font-GothamPro font-extralight"
                        >
                          {result.voiceActing}
                        </a>
                        <a
                          href="#"
                          className="bg-[#5662D578] rounded-[5px] px-[15px] py-[2px] border-solid border border-Blue600 text-white text-[16px] font-GothamPro font-extralight"
                        >
                          AnimeVost
                        </a>
                        <a
                          href="#"
                          className="bg-[#5662D578] rounded-[5px] px-[15px] py-[2px] border-solid border border-Blue600 text-white text-[16px] font-GothamPro font-extralight"
                        >
                          AniLibria
                        </a>
                      </div>
                    </section>
                    <div className="block max-w-[971px] mt-[16px] h-auto">
                      <h1 className="text-white font-GothamPro text-[16px]">
                        {" "}
                        Описание{" "}
                      </h1>
                      <p
                        ref={ref}
                        className={`break-words text-white leading-6 font-GothamPro text-[16px] font-extralight text-justify mt-[16px] transition-all duration-500 ${
                          !isShowingMore ? "line-clamp-6" : ""
                        }`}
                        style={{
                          maxHeight: isShowingMore
                            ? `${ref.current.scrollHeight}px`
                            : "6.25rem",
                          overflow: "hidden",
                        }}
                      >
                        {result.description}
                      </p>
                      <button
                        onClick={toggleIsShowingMore}
                        className="text-[#cd5c5c] mt-[7px] hoverBtnShowMore flex items-center gap-[5px] hover:text-[#F6615B] transition-colors font-GothamPro text-[16px]"
                      >
                        <p className="textBtnReadMore">
                          {isShowingMore ? "Скрыть" : "Читать далее"}
                        </p>
                      </button>
                    </div>
                  </aside>
                ))}
              </section>

              <section className="">
                <div className="mt-[40px] w-full h-[1px] bg-Blue600"></div>
                <SliderAnimePreview />
                <div className="w-full h-[1px] bg-Blue600"></div>
              </section>
            </div>
          </section>

          <main className="mt-[40px] px-[300px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
            <section className="max-w-[1300px] mx-auto">
              <div ref={myref}>
                <h1 className="text-white font-GothamPro text-[21px]">
                  Смотреть аниме онлайн
                </h1>
              </div>
              <section className="grid grid-cols-[70%_minmax(auto,_1fr)] duration-500 items-center mt-[10px] gap-[120px] lg:gap-[70px] h-[550px] md:h-[700px] gridAdaptiveBlockPlayer md:gap-[30px]">
                <div className="h-full items-start w-full">
                  <iframe
                    className="magn"
                    src={currentSerie.video}
                    width="100%"
                    height="100%"
                    frameborder="0"
                    AllowFullScreen
                    allow="autoplay *; fullscreen *"
                  ></iframe>
                </div>
                <div className="flex flex-col gap-[4px] overflow-auto h-full">
                  {PlayerSeriaAnimeRandom.map((result) => (
                    <button
                      onClick={() => setCurrentEpisode(result.id)}
                      key={result.id}
                      className="buttonWatch text-left text-white font-GothamPro text-[16px] font-light"
                    >
                      {result.episod}
                    </button>
                  ))}
                </div>
              </section>

              <div className="mt-[40px] w-full h-[1px] bg-Blue600"></div>
              <div className="mt-[40px]">
                <h1 className="text-white font-GothamPro text-[21px]">
                  Главные персонажи
                </h1>
              </div>
              <aside className="mt-[20px] flex flex-wrap gap-[35px] md:justify-between sm:justify-center">
                {GeneralPerson.map((result) => (
                  <section className="block w-[180px] cursor-pointer hoverGeneralPerson transition-colors">
                    <div className="">
                      <img
                        className="w-full object-cover rounded-[10px] h-[250px]"
                        src={result.img}
                        alt=""
                      />
                    </div>
                    <div className="mt-[15px]">
                      <h1 className="text-[16px] font-GothamPro font-light text-white textwrap lineclampone">
                        {result.name}
                      </h1>
                    </div>
                  </section>
                ))}
              </aside>
              <div className="mt-[40px] w-full h-[1px] bg-Blue600 mb-[110px]"></div>
            </section>
          </main>
        </main>
        <Footer />
      </main>
    </>
  );
}
export default RandomAnime;
