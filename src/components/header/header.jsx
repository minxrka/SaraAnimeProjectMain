import React from "react";
import MainLogo from "../../img/logo/main-logo.svg";
import MainLogoSmall from "../../img/logo/MainLogoSmall.svg";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import my from "../../img/bg-anime-card/small/bleach.jpg";
import notFound from "../../img/other-content/unnamed.png";
import Dialog from "@mui/material/Dialog";
import { NavLink } from "react-router-dom";

export const Header = () => {
  /* ОТКРЫТИЕ МОДАЛЬНОГО ОКНА */
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /* ОТКРЫТИЕ МОДАЛЬНОГО ОКНА */

  /*  СКРЫТИЕ И ПОКАЗ НАВБАРА ПРИ СКРОЛЕ  */
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }
  const scrollDirection = useScrollDirection();
  /*  СКРЫТИЕ И ПОКАЗ НАВБАРА ПРИ СКРОЛЕ  */

  /* \\\\\ */
  /*   АДАПТИВНОЕ СОБСТВЕННОЕ МОДАЛЬНОЕ ОКНО НАВБАРА */
  const navRef = useRef();
  const Burger = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("hidden");
    navRef.current.classList.toggle("flex");
    Burger.current.classList.toggle("active");

    /*     ПРИ РАЗРЕШЕНИИ ЭКРАНА БОЛЬШЕ 1124 ПИКСЕЛЯ МОДАЛКА СКРЫВАЕТСЯ */
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1124) {
        navRef.current.classList.add("hidden");
        navRef.current.classList.remove("flex");
        Burger.current.classList.remove("active");
      }
    });
  };
  /*   АДАПТИВНОЕ СОБСТВЕННОЕ МОДАЛЬНОЕ ОКНО НАВБАРА */

  /*   БЛОК СКРОЛА ПРИ ОТКРЫТИИ МОДАЛЬНОГО ОКНА */
  const ModalScroll = () => {
    // 👇️ Изменения в бади если модальное окно открыто
    document.body.classList.toggle("modalIsOpened");

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1124) {
        document.body.classList.remove("modalIsOpened");
      }
    });
  };
  /*   БЛОК СКРОЛА ПРИ ОТКРЫТИИ МОДАЛЬНОГО ОКНА */

  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 bg-mainViolet transition-all duration-500 z-index-header xl:px-[80px] big:px-[150px] sm:px-[25px] lg:px-[73px] items-center flex justify-between px-[200px] py-[10px] after:absolute after:h-[.0625rem] after:w-full after:left-0 after:bottom-[0.1px] after:bg-[#4990E8]`}
    >
      <nav className="items-center lg:hidden">
        <ul className="flex items-center gap-[68px] xl:gap-[34px]">
          <li>
            <NavLink to="/">
              <a href="#">
                <img src={MainLogo} alt="" />
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <a
                href="#"
                className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors"
              >
                Главная
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink to="/anime">
              <a
                href="#"
                className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors"
              >
                Аниме
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="random">
              <a
                href="#"
                className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors"
              >
                Случайное
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="films">
              <a
                href="#"
                className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors"
              >
                Фильмы
              </a>
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="items-center lg:hidden">
        <ul className="flex items-center gap-[123px] big:gap-[50px] xl:gap-[35px]">
          <button
            className="px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors items-center cursor-pointer"
            onClick={handleClickOpen}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.654 17.595L21.5835 20.523C21.7201 20.6644 21.7957 20.8539 21.794 21.0505C21.7923 21.2472 21.7134 21.4353 21.5744 21.5744C21.4353 21.7134 21.2472 21.7923 21.0505 21.794C20.8539 21.7957 20.6644 21.7201 20.523 21.5835L17.5935 18.654C15.6791 20.2942 13.2039 21.1291 10.6872 20.9836C8.17053 20.8382 5.808 19.7236 4.09537 17.8737C2.38275 16.0239 1.45317 13.5827 1.50169 11.0622C1.5502 8.54181 2.57305 6.13813 4.35559 4.35559C6.13813 2.57305 8.54181 1.5502 11.0622 1.50169C13.5827 1.45317 16.0239 2.38275 17.8737 4.09537C19.7236 5.808 20.8382 8.17053 20.9836 10.6872C21.1291 13.2039 20.2942 15.6791 18.654 17.5935V17.595ZM11.25 19.5C13.438 19.5 15.5365 18.6308 17.0836 17.0836C18.6308 15.5365 19.5 13.438 19.5 11.25C19.5 9.06196 18.6308 6.96354 17.0836 5.41637C15.5365 3.86919 13.438 3 11.25 3C9.06196 3 6.96354 3.86919 5.41637 5.41637C3.86919 6.96354 3 9.06196 3 11.25C3 13.438 3.86919 15.5365 5.41637 17.0836C6.96354 18.6308 9.06196 19.5 11.25 19.5Z"
                fill="white"
              />
            </svg>
          </button>

          <li>
            <a
              href="#"
              className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors"
            >
              Вход
            </a>
          </li>
        </ul>
      </nav>
      <Dialog open={open} onClose={handleClose} className="backdrop-blur-[5px]">
        <div className="border-solid border-2 border-cyberpunk w-[577px] sm:w-full">
          <div className="bg-mainViolet h-[52px] relative gap-[18px] items-center flex px-[20px] py-[14px] justify-between after:absolute after:h-[.0625rem] after:w-full after:left-0 after:-bottom-[0.1px] after:bg-cyberpunk after:opacity-[0.60]">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6541 17.595L21.5836 20.523C21.7202 20.6644 21.7958 20.8539 21.7941 21.0505C21.7924 21.2472 21.7135 21.4353 21.5745 21.5744C21.4354 21.7134 21.2473 21.7923 21.0507 21.794C20.854 21.7957 20.6646 21.7201 20.5231 21.5835L17.5936 18.654C15.6793 20.2942 13.204 21.1291 10.6873 20.9836C8.17065 20.8382 5.80812 19.7236 4.0955 17.8737C2.38287 16.0239 1.45329 13.5827 1.50181 11.0622C1.55032 8.54181 2.57317 6.13813 4.35571 4.35559C6.13825 2.57305 8.54193 1.5502 11.0624 1.50169C13.5828 1.45317 16.024 2.38275 17.8739 4.09537C19.7237 5.808 20.8383 8.17053 20.9838 10.6872C21.1292 13.2039 20.2943 15.6791 18.6541 17.5935V17.595ZM11.2501 19.5C13.4382 19.5 15.5366 18.6308 17.0838 17.0836C18.6309 15.5365 19.5001 13.438 19.5001 11.25C19.5001 9.06196 18.6309 6.96354 17.0838 5.41637C15.5366 3.86919 13.4382 3 11.2501 3C9.06209 3 6.96367 3.86919 5.41649 5.41637C3.86932 6.96354 3.00012 9.06196 3.00012 11.25C3.00012 13.438 3.86932 15.5365 5.41649 17.0836C6.96367 18.6308 9.06209 19.5 11.2501 19.5Z"
                  fill="white"
                />
              </svg>
            </div>

            <input
              type="text"
              className="w-full h-[22px] bg-transparent text-white font-GothamPro text-[16px] font-light outline-none placeholder:text-white"
              placeholder="Поиск аниме..."
            />
            <button
              onClick={handleClose}
              className="ClosedModal transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <section className="bg-mainViolet overflow-auto max-w-[577px] max-h-[600px]">
            {/* <div className="h-[100px] w-full"></div> */}

            {/*           ПРИ НАХОЖДЕНИИ ОТСУТСВИИ ИНФОРМАЦИИ В ПОИСКЕ МОДАЛЬНОГО ОКНА */}
            <main>
              <NavLink to="/watch" onClick={handleClose}>
                <div className="cursor-pointer flex max-w-full h-auto hoveringbg px-[20px] py-[15px] transition-colors">
                  <div>
                    <img
                      className="rounded-[5px] max-w-[65px] h-auto object-cover"
                      src={my}
                      alt=""
                    />
                  </div>
                  <div className="ml-[11px] flex flex-col justify-around items-start">
                    <p className="font-GothamPro text-[13px] text-whiteGray">
                      Завершен
                    </p>
                    <h1 className="font-GothamPro text-[15px] text-white font-light">
                      Блич
                    </h1>
                    <p className="font-GothamPro text-[13px] text-white font-extralight">
                      2004 Осень
                    </p>
                  </div>
                </div>
              </NavLink>
            </main>

            {/* <div className="mt-[1px] max-w-full h-auto px-[20px] py-[25px] flex flex-col justify-center items-center">
              <h1 className="text-white font-GothamPro">Ничего не найдено</h1>
              <img
                className="max-w-[100px] rounded-b-[120px] mt-[20px]"
                src={notFound}
                alt=""
              />
            </div> 

            {/*           ПРИ НАХОЖДЕНИИ ОТСУТСВИИ ИНФОРМАЦИИ В ПОИСКЕ МОДАЛЬНОГО ОКНА */}
          </section>
        </div>
      </Dialog>

      {/* MOBILE */}
      <nav
        class="fixed hidden top-0 left-0 right-0 bottom-0 bg-mainViolet opacity-[0.95] justify-center items-center z-20"
        ref={navRef}
      >
        <ul class="flex flex-col gap-10 items-center">
          <li>
            <a
              href="#"
              className="font-GothamPro font-extralight text-white text-[19px]"
            >
              Главная
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-GothamPro font-extralight text-white text-[19px]"
            >
              Аниме
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-GothamPro font-extralight text-white text-[19px]"
            >
              Случайное
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-GothamPro font-extralight text-white text-[19px]"
            >
              Фильмы
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-GothamPro font-extralight text-white text-[19px]"
            >
              Вход
            </a>
          </li>
        </ul>
      </nav>

      <button
        ref={Burger}
        class="hidden group relative h-5 w-[1.875rem] lg:block z-30"
        onClick={() => {
          showNavBar();
          ModalScroll();
        }}
      >
        <span class="bg-white left-0 h-[.0625rem] w-full absolute top-0 group-[.active]:translate-y-2 group-[.active]:rotate-45 transition-transform"></span>
        <span class="bg-white left-0 h-[.0625rem] w-full absolute top-1/2 group-[.active]:opacity-0 transition-opacity"></span>
        <span class="bg-white left-0 h-[.0625rem] w-full absolute bottom-0 group-[.active]:-translate-y-[11px] group-[.active]:-rotate-45 transition-transform"></span>
      </button>

      <a href="" class="hidden lg:flex items-center z-30">
        <img src={MainLogo} alt="logo" />
      </a>

      <button
        href="#"
        class="hidden lg:flex items-center"
        onClick={handleClickOpen}
        /* onClick={() => setVisible(!visible)} */
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.0901 29.3242L35.9726 34.2042C36.2003 34.44 36.3263 34.7557 36.3234 35.0835C36.3206 35.4112 36.1891 35.7247 35.9573 35.9565C35.7256 36.1883 35.4121 36.3197 35.0843 36.3226C34.7566 36.3254 34.4408 36.1994 34.2051 35.9717L29.3226 31.0892C26.132 33.8228 22.0066 35.2144 17.8121 34.9719C13.6176 34.7295 9.68007 32.8718 6.8257 29.7888C3.97134 26.7058 2.42203 22.637 2.50289 18.4363C2.58375 14.2356 4.28849 10.2294 7.2594 7.25854C10.2303 4.28764 14.2364 2.5829 18.4371 2.50204C22.6378 2.42118 26.7066 3.97048 29.7896 6.82485C32.8727 9.67922 34.7303 13.6168 34.9728 17.8113C35.2153 22.0057 33.8237 26.1311 31.0901 29.3217V29.3242ZM18.7501 32.4992C22.3968 32.4992 25.8942 31.0506 28.4728 28.4719C31.0514 25.8933 32.5001 22.3959 32.5001 18.7492C32.5001 15.1025 31.0514 11.6051 28.4728 9.02651C25.8942 6.44788 22.3968 4.99923 18.7501 4.99923C15.1034 4.99923 11.606 6.44788 9.02736 9.02651C6.44874 11.6051 5.00008 15.1025 5.00008 18.7492C5.00008 22.3959 6.44874 25.8933 9.02736 28.4719C11.606 31.0506 15.1034 32.4992 18.7501 32.4992Z"
            fill="white"
          />
        </svg>
      </button>
    </header>
  );
};
