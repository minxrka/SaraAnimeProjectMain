import React from "react";
import AnimePreview from "../../img/bg-anime-card/small/c6cdd36ef0e3ca592e08e062436e3d2d.jpg";
import AnimeBgSlider1 from "../../img/trailer-photo/death note/2914841108.jpg";
import AnimeBgSlider2 from "../../img/trailer-photo/death note/M1LqmrHafNc.jpg";
import AnimeBgSlider3 from "../../img/trailer-photo/death note/1625692191_49-phonoteka-org-p-ryuk-i-lait-art-krasivo-49.jpg";
import AnimeBgSlider4 from "../../img/trailer-photo/death note/1626799300_24-kartinkin-com-p-anime-tetrad-smerti-lait-i-misa-anime-kras-27.jpg";
import AnimeBgSlider5 from "../../img/trailer-photo/death note/L-Lawliet-quotes.jpg";
import AnimeBgSlider6 from "../../img/trailer-photo/death note/SoG_jsJHnR4.jpg";
import AnimePerson from "../../img/trailer-photo/death note/79e1c247e1b703aed98a013e87c1ac79.jpg";
import AnimePerson2 from "../../img/trailer-photo/death note/63436b6d049deef692464a6ef6870035.jpg";
import AnimePerson3 from "../../img/trailer-photo/death note/fa23614ee667be7b03531c843aa8c5a1.jpg";
import AnimePerson4 from "../../img/trailer-photo/death note/e7ab0e2194557b30ed70dd8be4fb5487.jpg";
import AnimePerson5 from "../../img/trailer-photo/death note/d1e84d59d906025480a081e6b2ac244b.jpg";
import AnimePerson6 from "../../img/trailer-photo/death note/cbrDGfUbrZo.jpg";
import { useRef, useState, useLayoutEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Footer } from "../../components/footer/footer";

import { Modal } from "@mui/material";
import { Header } from "../../components/header/header";

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

export const RandomAnime = () => {
  /*   Реф ссылка для описания */
  const ref = React.useRef(null);
  const { isTruncated, isShowingMore, toggleIsShowingMore } =
    useTruncatedElement({
      ref,
    });
  /*   Реф ссылка для описания */

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
    <>
      <main className="h-[2900px]">
        <Header />
        {/* Бекграунд береться из 1 картинки слайдера!!!!!!! */}
        <section className="bg-RandomAnimeBg w-full h-[100vh] bg-cover bg-center bg-no-repeat">
          {/* Бекграунд береться из 1 картинки слайдера!!!!!!! */}
          <div className="GradientWatchAnime h-[100vh] w-full">
            <section className="px-[300px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
              {/* огр.контента */}
              <div className="max-w-[1300px] mx-auto">
                {/* огр.контента */}
                <section className="containerGrid md:grid-cols-1">
                  <aside className="flex flex-col gap-[15px] max-w-[300px] h-auto mt-[80px] md:max-w-full md:h-full">
                    <img
                      className="w-full object-cover rounded-[20px] h-[420px] md:h-[600px] sm:h-[500px]"
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
                  <aside className="flex flex-col mt-[80px] ml-[44px] md:ml-[0px]">
                    <div>
                      <h1 className="text-white font-GothamPro text-[36px] font-light">
                        Тетрадь смерти
                      </h1>
                      <div className="flex mt-[12px] items-center gap-[10px]">
                        <p className="py-[4px] px-[6px] text-center border-solid border border-mainBlue rounded-[5px] text-[16px] text-white font-GothamPro font-light">
                          16+
                        </p>
                        <span className="border-solid border border-mainBlue rounded-[50%] w-[10px] h-[10px]"></span>
                        <p className="text-[16px] text-white font-GothamPro font-light">
                          2006г
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
                        <h1 className="text-white font-GothamPro text-[16px] lg:text-[15px]">
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
                      <div className="flex flex-col gap-[16px] mt-[1px] lg:gap-[18px] md:gap-[16px] sm:gap-[18px]">
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          37 / 37
                        </h1>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          Mystery, Thriller, Detectiven
                        </h1>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          22 мин. ~ серия
                        </h1>
                        <div className="">
                          <a className="text-white font-GothamPro bg-fuchsia-400 border-solid border border-fuchsia-300 rounded-[10px] px-[7px] text-center py-[4px] text-[16px] font-extralight">
                            Завершен
                          </a>
                        </div>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          Оба Цугуми
                        </h1>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          Араки Тэцуро
                        </h1>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          манга
                        </h1>
                        <h1 className="text-white font-GothamPro text-[16px] font-extralight">
                          Тетрадь смерти
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
                        </div>
                      </div>
                    </section>
                    <div className="block max-w-[971px] mt-[16px] h-auto">
                      <h1 className="text-white font-GothamPro text-[16px]">
                        Описание
                      </h1>
                      <p
                        ref={ref}
                        className={`break-words text-white leading-6 font-GothamPro text-[16px] font-extralight text-justify mt-[16px] duration-300 transition-all ${
                          !isShowingMore && "lineclamp7"
                        }`}
                      >
                        У старшеклассника Лайта Ягами в жизни есть всё: успехи в
                        школе, популярность среди сверстниц, замечательные
                        родители, блестящее будущее. Но однажды юноша находит
                        странную чёрную тетрадку и знакомится с её владельцем –
                        синигами Рюком. Возможности «Тетради смерти» позволяют
                        Лайту стать Кирой – загадочным и всеведущим убийцей,
                        карающим преступников. Никто не может его поймать. У
                        таинственного «L» никогда не было поражений: сохраняя
                        инкогнито, он успешно распутывал самые трудные дела и
                        помогал полиции. Появление Киры стало вызовом для его
                        экстраординарных способностей. Итак, два весьма умных и
                        одарённых молодых человека сталкиваются в смертельном
                        противостоянии, и теперь каждая мелочь, каждая
                        случайность может склонить весы на ту или другую
                        сторону. И никто не собирается проигрывать или
                        сдаваться…
                      </p>
                      <button
                        onClick={toggleIsShowingMore}
                        className="text-cyberpunk hover:animate-pulse-slow flex items-center gap-[5px] hover:text-[#C8EA57] transition-colors font-GothamPro text-[16px] border-b-[1px] border-cyberpunk font-extralight"
                      >
                        {isShowingMore ? "Скрыть" : "Читать далее"}
                        {/* <svg
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
                      </svg> */}
                        <svg
                          className=""
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          fill="#D6FE50"
                          width="20"
                          height="30"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 33.25 2 C 32.667 2 31.36871 2.3341787 30.490234 3.7695312 C 29.611759 5.204884 29 7.5997204 29 11.927734 C 29 16.635937 30.289063 21.029297 30.289062 21.029297 L 30.554688 21.939453 L 31.476562 21.724609 C 31.476562 21.724609 34.113941 21.114486 36.949219 19.818359 C 38.787224 18.97859 40.737839 17.819982 42.283203 16.328125 C 43.828568 14.836268 45 12.951814 45 10.75 C 45 9.6302455 44.81028 8.2968922 44.128906 7.1269531 C 43.447532 5.9570141 42.132732 5 40.375 5 C 39.359509 5 38.576392 5.3864285 37.996094 5.7714844 C 37.729384 5.3667994 37.414802 4.901244 37.011719 4.4082031 C 36.100291 3.2933674 34.939048 2 33.25 2 z M 33.09375 3.9980469 C 33.156598 3.9932342 33.20825 4 33.25 4 C 33.660952 4 34.682819 4.7196639 35.462891 5.6738281 C 35.852927 6.1509103 36.195495 6.646372 36.445312 7.0332031 C 36.69513 7.4200343 36.819018 7.6407049 36.892578 7.7636719 L 37.630859 9 L 38.53125 7.875 C 38.53125 7.875 39.262821 7 40.375 7 C 41.492268 7 41.989968 7.4247515 42.402344 8.1328125 C 42.81472 8.8408735 43 9.8817545 43 10.75 C 43 12.240186 42.201167 13.629232 40.894531 14.890625 C 39.587896 16.152018 37.805182 17.226816 36.117188 17.998047 C 33.983508 18.973443 32.661766 19.266397 31.976562 19.443359 C 31.671347 18.251234 31 15.424722 31 11.927734 C 31 7.7967492 31.638241 5.7258974 32.197266 4.8125 C 32.616534 4.127452 32.905205 4.012485 33.09375 3.9980469 z M 11.851562 4 C 10.344192 4 8.9197164 4.350012 7.8144531 5.1816406 C 6.7091899 6.0132692 6 7.3702083 6 8.984375 C 6 9.9840801 6.3691784 10.710858 6.7851562 11.298828 C 6.3796266 11.552561 5.9215729 11.844851 5.4316406 12.240234 C 4.2917313 13.160159 3 14.458133 3 16.25 C 3 16.768404 3.2347759 18.152998 4.6601562 19.195312 C 6.0855366 20.237627 8.5296353 21 12.943359 21 C 18.112926 21 22.0625 19.699219 22.0625 19.699219 L 22.902344 19.423828 L 22.732422 18.558594 C 22.732422 18.558594 21.731625 13.355404 18.980469 8.65625 C 18.57124 7.9569741 17.754365 6.8664974 16.554688 5.8769531 C 15.35501 4.8874089 13.750777 4 11.851562 4 z M 11.851562 6 C 13.116348 6 14.309131 6.6164661 15.283203 7.4199219 C 16.257276 8.2233776 16.992088 9.2152915 17.255859 9.6660156 C 19.402273 13.33223 20.258963 16.85858 20.523438 18.025391 C 19.477373 18.322905 16.870504 19 12.943359 19 C 8.7660843 19 6.7382134 18.238967 5.8398438 17.582031 C 4.9414741 16.925095 5 16.434596 5 16.25 C 5 15.541867 5.7391594 14.562201 6.6875 13.796875 C 7.1616703 13.414212 7.656758 13.089939 8.0429688 12.855469 C 8.236074 12.738234 8.4022734 12.641976 8.5273438 12.572266 C 8.6524139 12.502555 8.68461 12.490797 8.8027344 12.419922 L 9.9238281 11.748047 L 8.9824219 10.841797 C 8.5214355 10.39754 8 9.8327868 8 8.984375 C 8 7.9035417 8.3688883 7.2678714 9.015625 6.78125 C 9.6623617 6.2946286 10.662934 6 11.851562 6 z M 20.074219 28.056641 L 19.236328 28.285156 C 18.405984 28.512539 16.201592 29.235956 13.900391 30.621094 C 12.260773 31.607773 10.585102 32.93499 9.2792969 34.46875 C 7.973142 36.002921 7 37.766935 7 39.667969 C 7 43.743365 9.4256701 46 11.615234 46 C 12.88574 46 13.794091 45.54061 14.425781 45.087891 C 15.26883 46.166446 16.815262 48 19.316406 48 C 20.259422 48 21.043589 47.441638 21.523438 46.792969 C 22.003286 46.1443 22.289205 45.383955 22.498047 44.621094 C 22.91573 43.095371 23 41.576387 23 40.957031 C 23 34.75169 20.417969 28.853516 20.417969 28.853516 L 20.074219 28.056641 z M 36.742188 29 C 31.456888 29 27.962891 30.042969 27.962891 30.042969 L 27.132812 30.291016 L 27.261719 31.146484 C 27.261719 31.146484 27.75039 34.493572 29.142578 37.773438 C 29.992091 39.776525 31.094276 41.768061 32.511719 43.316406 C 33.929162 44.864751 35.730232 46 37.84375 46 C 40.075181 46 41.646363 45.378315 42.638672 44.460938 C 43.630981 43.543559 44 42.401985 44 41.484375 C 44 40.347135 43.599582 39.450041 43.199219 38.826172 C 43.631081 38.543301 43.86041 38.437563 44.529297 37.873047 C 45.662793 36.916416 47 35.713913 47 33.984375 C 47 32.927119 46.409713 32.030036 45.652344 31.404297 C 44.894975 30.778557 43.946999 30.337168 42.921875 29.990234 C 40.871627 29.296366 38.501756 29 36.742188 29 z M 18.904297 30.591797 C 19.389076 31.815284 21 36.067811 21 40.957031 C 21 41.344676 20.90893 42.847769 20.568359 44.091797 C 20.398076 44.713811 20.157948 45.276466 19.916016 45.603516 C 19.674083 45.930565 19.539891 46 19.316406 46 C 17.745198 46 15.978068 43.87994 15.306641 43.0625 L 14.525391 42.113281 L 13.753906 43.070312 C 13.753906 43.070312 13.01696 44 11.615234 44 C 11.006799 44 9 42.938573 9 39.667969 C 9 38.480003 9.6786396 37.085954 10.802734 35.765625 C 11.92683 34.445296 13.458678 33.220222 14.931641 32.333984 L 14.933594 32.333984 C 16.639255 31.307314 17.986471 30.888874 18.904297 30.591797 z M 36.742188 31 C 38.263618 31 40.522748 31.289634 42.28125 31.884766 C 43.160501 32.182332 43.911104 32.560427 44.376953 32.945312 C 44.842803 33.330199 45 33.635631 45 33.984375 C 45 34.395837 44.221285 35.51413 43.238281 36.34375 C 42.255278 37.17337 41.257812 37.765625 41.257812 37.765625 L 40.080078 38.462891 L 41.101562 39.373047 C 41.101562 39.373047 42 40.195218 42 41.484375 C 42 41.856765 41.841691 42.474066 41.28125 42.992188 C 40.720809 43.510309 39.713319 44 37.84375 44 C 36.441268 44 35.172338 43.260202 33.988281 41.966797 C 32.804224 40.673392 31.774862 38.856099 30.984375 36.992188 C 30.014381 34.706971 29.60816 32.75701 29.423828 31.765625 C 30.398292 31.520405 32.720826 31 36.742188 31 z"></path>
                        </svg>
                      </button>
                    </div>
                  </aside>
                </section>
                <section className="">
                  <div className="mt-[40px] w-full h-[1px] bg-[#4990E8]"></div>
                  <Swiper
                    slidesPerView={4}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        spaceBetween: 50,
                        slidesPerView: 2,
                      },
                      880: {
                        spaceBetween: 130,
                        slidesPerView: 2,
                      },
                      884: {
                        spaceBetween: 130,
                        slidesPerView: 2,
                      },
                      944: {
                        spaceBetween: 190,
                        slidesPerView: 2,
                      },
                      988: {
                        spaceBetween: 320,
                        slidesPerView: 2,
                      },
                      1000: {
                        spaceBetween: 250,
                        slidesPerView: 2,
                      },
                      1048: {
                        spaceBetween: 290,
                        slidesPerView: 2,
                      },
                      1072: {
                        spaceBetween: 10,
                        slidesPerView: 3,
                      },
                      1228: {
                        spaceBetween: 80,
                        slidesPerView: 3,
                      },
                      1240: {
                        spaceBetween: 90,
                        slidesPerView: 3,
                      },
                      1252: {
                        spaceBetween: 100,
                        slidesPerView: 3,
                      },
                      1276: {
                        spaceBetween: 100,
                        slidesPerView: 3,
                      },
                      1300: {
                        spaceBetween: 150,
                        slidesPerView: 3,
                      },
                      1324: {
                        spaceBetween: 150,
                        slidesPerView: 3,
                      },

                      1332: {
                        spaceBetween: 160,
                        slidesPerView: 3,
                      },
                      1336: {
                        spaceBetween: 160,
                        slidesPerView: 3,
                      },

                      1360: {
                        spaceBetween: 170,
                        slidesPerView: 3,
                      },
                      1515: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                      },
                      1543: {
                        spaceBetween: 25,
                        slidesPerView: 3,
                      },
                      1615: {
                        spaceBetween: 130,
                        slidesPerView: 3,
                      },
                      1630: {
                        spaceBetween: 60,
                        slidesPerView: 3,
                      },
                      1647: {
                        spaceBetween: 70,
                        slidesPerView: 3,
                      },
                      1716: {
                        spaceBetween: 100,
                        slidesPerView: 3,
                      },
                      1779: {
                        spaceBetween: 130,
                        slidesPerView: 3,
                      },
                      1799: {
                        spaceBetween: 140,
                        slidesPerView: 3,
                      },
                      1835: {
                        spaceBetween: 160,
                        slidesPerView: 3,
                      },
                      1847: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                      },
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mt-[20px] mb-[20px] max-w-full"
                  >
                    <SwiperSlide className="" onClick={handleClickOpen}>
                      <div className="hoverbgSliderEffect ZoomSearch w-[300px] md:w-full cursor-pointer">
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
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="" onClick={handleClickOpen}>
                      <div className="hoverbgSliderEffect ZoomSearch w-[300px] md:w-full cursor-pointer">
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
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="" onClick={handleClickOpen}>
                      <div className="hoverbgSliderEffect ZoomSearch w-[300px] md:w-full cursor-pointer">
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
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="" onClick={handleClickOpen}>
                      <div className="hoverbgSliderEffect ZoomSearch w-[300px] md:w-full cursor-pointer">
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
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      className="overflow-hidden"
                      onClick={handleClickOpen}
                    >
                      <div className="hoverbgSliderEffect ZoomSearch w-[300px] md:w-full cursor-pointer">
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
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      className="overflow-hidden"
                      onClick={handleClickOpen}
                    >
                      <div className="hoverbgSliderEffect ZoomSearch w-[300px] md:w-full cursor-pointer">
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
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="w-full h-[1px] bg-[#4990E8]"></div>
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
                    src="//kodik.info/seria/208036/30e0debac887bfa80643c54b25ba6e21/720p"
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
                    Главные персонажи
                  </h1>
                </div>
                <aside className="mt-[20px] flex flex-wrap gap-[40px] md:justify-between sm:justify-center">
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
                        Лайт Ягами
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
                        Эл
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
                        Рюк
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
                        Миса Аманэ
                      </h1>
                    </div>
                  </section>
                  <section className="block w-[180px] cursor-pointer hoverGeneralPerson transition-colors">
                    <div className="">
                      <img
                        className="w-full object-cover rounded-[10px] h-[250px]"
                        src={AnimePerson5}
                        alt=""
                      />
                    </div>
                    <div className="mt-[15px]">
                      <h1 className="text-[16px] font-GothamPro font-light text-white textwrap lineclampone">
                        Мэлло
                      </h1>
                    </div>
                  </section>
                  <section className="block w-[180px] cursor-pointer hoverGeneralPerson transition-colors">
                    <div className="">
                      <img
                        className="w-full object-cover rounded-[10px] h-[250px]"
                        src={AnimePerson6}
                        alt=""
                      />
                    </div>
                    <div className="mt-[15px]">
                      <h1 className="text-[16px] font-GothamPro font-light text-white textwrap lineclampone">
                        Ниа
                      </h1>
                    </div>
                  </section>
                </aside>
                <div className="mt-[40px] w-full h-[1px] bg-[#4990E8] mb-[110px]"></div>
              </section>
            </main>
            <Footer />
          </div>
        </section>

        {/* DIALOG BG ANIME */}
        <Modal
          open={open}
          onClose={handleClose}
          className="max-w-[1300px] mx-auto items-center flex"
        >
          <Swiper
            open={open}
            onClose={handleClose}
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className=""
          >
            <SwiperSlide className="w-[1300px] h-auto">
              <img
                className="w-[1300px] max-h-[700px] object-cover"
                src={AnimeBgSlider1}
                alt="bgAnime"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[1300px] h-auto">
              <img
                className="w-[1300px] max-h-[700px] object-cover"
                src={AnimeBgSlider2}
                alt="bgAnime"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[1300px] h-auto">
              <img
                className="w-[1300px] max-h-[700px] object-cover"
                src={AnimeBgSlider3}
                alt="bgAnime"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[1300px] h-auto">
              <img
                className="w-[1300px] max-h-[700px] object-cover"
                src={AnimeBgSlider4}
                alt="bgAnime"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[1300px] h-auto">
              <img
                className="w-[1300px] max-h-[700px] object-cover"
                src={AnimeBgSlider5}
                alt="bgAnime"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[1300px] h-auto">
              <img
                className="w-[1300px] max-h-[700px] object-cover"
                src={AnimeBgSlider6}
                alt="bgAnime"
              />
            </SwiperSlide>
          </Swiper>
        </Modal>
        {/* DIALOG BG ANIME */}
      </main>
    </>
  );
};
