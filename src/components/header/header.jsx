import React from "react";
import MainLogo from "../../img/logo/newLogo.png";
import SmallLogo from "../../img/logo/miniLogo.png";
import ProfileUser from "../../img/other-content/avatarProf.jpg";
import MainLogoSmall from "../../img/logo/MainLogoSmall.svg";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import my from "../../img/bg-anime-card/small/bleach.jpg";
import notFound from "../../img/other-content/unnamed.png";
import Dialog from "@mui/material/Dialog";
import { NavLink } from "react-router-dom";
import "./header.css";
import NavPorfilePop from "../NavPorfilePop/NavPorfilePop";
import LogOut from "../../img/other-content/svg-profile/logout.svg";
import sasuke3tomoelogoanime from "../../img/other-content/sasuke3tomoe.png";

import Drawer from "@mui/material/Drawer";

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
  /* const navRef = useRef();
  const Burger = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("hidden");
    navRef.current.classList.toggle("flex");
    Burger.current.classList.toggle("active"); */

  /*     ПРИ РАЗРЕШЕНИИ ЭКРАНА БОЛЬШЕ 1124 ПИКСЕЛЯ МОДАЛКА СКРЫВАЕТСЯ */
  /*   window.addEventListener("resize", () => {
      if (window.innerWidth > 1124) {
        navRef.current.classList.add("hidden");
        navRef.current.classList.remove("flex");
        Burger.current.classList.remove("active");
      }
    });
  }; */
  /*   АДАПТИВНОЕ СОБСТВЕННОЕ МОДАЛЬНОЕ ОКНО НАВБАРА */

  /*   БЛОК СКРОЛА ПРИ ОТКРЫТИИ МОДАЛЬНОГО ОКНА */
  /*   const ModalScroll = () => {
    // 👇️ Изменения в бади если модальное окно открыто
    document.body.classList.toggle("modalIsOpened");

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1124) {
        document.body.classList.remove("modalIsOpened");
      }
    });
  }; */
  /*   БЛОК СКРОЛА ПРИ ОТКРЫТИИ МОДАЛЬНОГО ОКНА */

  const [visible, setVisible] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setVisible(newOpen);
  };

  const DrawerList = (
    <nav
      class=" bg-mainBlue justify-around h-full items-center z-20 flex flex-col w-[320px]"
      /* ref={navRef} */
    >
      <main class="flex flex-col justify-between">
        <section className="cursor-pointer flex justify-start hover:bg-darkBlue transition-colors gap-[8px] py-[15px] px-[15px] rounded-[7px]">
          <svg
            className="w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            fill="white"
            height="100"
            viewBox="0 0 48 48"
          >
            <path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"></path>
          </svg>
          <h1 className="text-white font-GothamPro font-light text-[20px] ">
            Главная
          </h1>
        </section>
        <section className="cursor-pointer flex justify-start hover:bg-darkBlue transition-colors gap-[8px] py-[15px] px-[15px] rounded-[7px]">
          <img className="w-[22px] h-[22px]" src={sasuke3tomoelogoanime}></img>

          <h1 className="text-white font-GothamPro font-light text-[20px] ">
            Аниме
          </h1>
        </section>
        <section className="cursor-pointer flex justify-start hover:bg-darkBlue transition-colors gap-[8px] py-[15px] px-[15px] rounded-[7px]">
          <svg
            className="w-[20px] h-[20px]"
            version="1.1"
            fill="white"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 192.792 192.792"
          >
            <g>
              <g>
                <path d="M183.256,53.241c0.299-1.404-0.165-2.849-1.056-3.914c0.386-1.118,0.268-2.47-0.57-3.545 c-9.473-12.159-29.402-20.312-42.699-27.655c-12.354-6.821-25.73-13.76-39.819-16.185c-1.101-1.688-3.201-2.666-5.437-1.288 c-26.49,16.316-50.511,35.587-78.922,48.72c-2.021,0.934-1.968,3.206-0.886,4.71c-1.487,0.413-2.732,1.594-2.76,3.603 c-0.411,29.125-3.774,58.373-2.162,87.488c-1.974,0.503-3.25,3.155-1.459,4.938c19.778,19.691,51.791,35.74,79.501,40.135 c0.67,1.562,2.219,2.827,4.346,2.488c30.645-4.88,59.934-21.491,84.167-40.298c1.009-0.781,1.409-1.707,1.451-2.624 c1.288,1.963,5.134,0.911,5.19-1.782C182.768,117.674,190.114,83.25,183.256,53.241z M90.955,181.294 c-0.071,0.495-0.022,0.948,0.068,1.379c-0.306-0.127-0.566-0.293-0.949-0.351c-27.737-4.194-50.93-20.26-74.557-34.223 c0.003-0.024,0.016-0.042,0.018-0.067c2.276-28.371,3.314-57.01,3.401-85.49c5.447,5.067,14.858,7.961,20.603,10.234 c17.148,6.787,35.475,10.42,51.524,19.822c0.441,0.259,0.87,0.359,1.294,0.443C89.189,122.245,95.183,151.849,90.955,181.294z M95.072,85.741C83.24,78.83,70.182,74.77,57.199,70.603c-8.579-2.753-17.085-5.61-25.258-9.433 c-4.024-1.883-7.53-5.109-11.553-6.812c28.215-9.378,51.826-29.898,76.587-45.776c14.4,5.76,28.332,11.964,41.927,19.561 c11.446,6.395,23.458,17.264,35.994,21.916C151.005,65.986,125.31,82.886,96.484,87.21C96.188,86.655,95.757,86.142,95.072,85.741 z M169.425,146.362c-20.983,16.327-45.663,29.978-71.564,36.979c0.012-0.052,0.047-0.075,0.058-0.129 c5.471-28.552,5.145-60.462,1.454-89.428c27.865-1.848,53.795-19.043,76.765-34.374c0.182,29.376-3.822,59.604,0.338,88.5 C175.25,145.745,172.027,144.337,169.425,146.362z" />
                <path d="M73.405,36.568c-1.324-0.274-2.67-0.438-4.012-0.61c-0.595-0.27-1.248-0.307-1.873-0.044 c-1.054,0.218-1.911,0.957-2.49,1.874c-0.878,0.702-1.792,1.36-2.609,2.15c-1.51,1.461-2.291,2.379-3.014,3.815 c-1.214,2.409-1.717,5.24-0.27,7.678c2.568,4.329,8.746,3.753,12.89,2.744c3.732-0.908,8.973-2.948,10.715-6.713 C85.768,40.92,78.605,37.643,73.405,36.568z" />
                <path d="M139.102,42.233c-2.7-1.584-6.179-1.815-9.211-2.055c-0.865-0.068-1.733-0.106-2.601-0.14 c-1.982-0.078-3.325,1.276-3.737,2.925c-4.186,2.834-8.447,7.906-4.801,12.388c2.741,3.37,9.115,1.84,12.569,0.829 c4.127-1.207,8.969-3.17,10.698-7.416C143.062,46.198,141.234,43.486,139.102,42.233z" />
                <path d="M61.691,110.435c-0.701-0.472-1.531-0.876-2.415-1.233c-0.903-1.849-3.505-2.23-5.176-1.197 c-4.343-0.328-8.709,1.019-9.981,5.341c-1.09,3.704,0.756,7.178,3.587,9.357c0.935,2.263,3.38,3.52,6.165,3.128 c2.017-0.283,3.929-1.412,5.624-2.479c1.9-1.194,3.73-2.233,5.055-4.095C66.863,116.008,64.458,112.296,61.691,110.435z" />
                <g>
                  <path d="M129.861,100.433c-0.045-0.045-0.112-0.051-0.159-0.093c0.028,0.038-0.033,0.001-0.162-0.094 c-0.366-0.295-0.743-0.574-1.208-0.704c0.189,0.036,0.385,0.127,0.569,0.225c-0.79-0.622-1.583-1.247-2.414-1.819 c0.195-3.997-5.503-5.775-6.627-1.479c-0.002,0.008-0.004,0.016-0.006,0.024c-0.872,0.681-1.371,1.832-1.431,3.072 c-0.03,0.131-0.041,0.259-0.066,0.388c-2.396,1.166-2.829,4.137-2.309,6.48c0.414,1.867,2.219,2.41,3.835,2.061 c0.894,1.926,2.917,2.599,4.881,1.693c1.657-0.764,3.382-2.605,4.615-3.925c0.903-0.967,1.471-1.957,1.551-3.31 C130.99,101.948,130.457,101.164,129.861,100.433z" />
                  <path d="M129.54,100.246c0.05,0.039,0.115,0.051,0.162,0.094c-0.059-0.08-0.388-0.354-0.8-0.573 c0.193,0.151,0.396,0.295,0.586,0.446C129.526,100.242,129.512,100.224,129.54,100.246z" />
                </g>
                <path d="M131.217,127.962c-0.011-0.959-0.392-1.896-1.058-2.691c-0.175-0.209-0.275-0.329-0.375-0.447 c-0.09-0.109-0.225-0.273-0.429-0.521c-0.275-0.333-0.587-0.623-0.936-0.858c0.01-0.75-0.606-1.482-1.447-1.201 c-0.29,0.097-0.889-0.024-1.407-0.102c-1.239-0.184-2.338,0.185-3.415,0.788c-0.337,0.189-0.591,0.512-0.884,0.775 c-0.608,0.174-1.201,0.34-1.747,0.435c-2.991,0.522-3.31,5.195-0.812,6.419c0.02,0.172-0.019,0.365,0.014,0.53 c0.508,2.668,3.686,3.122,5.896,3.094c1.801-0.022,4.336,0.011,5.93-0.954C132.415,132.098,132.668,129.477,131.217,127.962z" />
                <path d="M131.843,154.857c0.486-1.273,0.738-2.568-0.15-3.887c-1.418-2.101-4.275-2.885-6.686-2.956 c-2.259-0.066-3.609,1.314-3.919,3.008c-0.311,0.78-0.47,1.688-0.482,2.654c-0.381,0.559-0.735,1.133-0.944,1.79 c-1.072,3.383,2.23,6.043,4.594,7.734c1.371,0.981,3.799,0.341,4.516-1.185c0.604-1.284,1.143-2.597,1.692-3.905 C131.434,157.288,132.016,156.181,131.843,154.857z" />
                <path d="M158.601,139.992c-0.386-0.384-0.752-0.732-1.121-1.058c-0.968-3.181-5.173-4.392-7.089-1.135 c-0.451,0.766-0.694,1.728-0.813,2.715c-0.658,0.536-1.255,1.138-1.676,1.856c-2.603,4.442,5.507,8.865,8.898,5.705 c0.73-0.511,1.236-1.329,1.239-2.517c0.188-0.146,0.391-0.281,0.562-0.438C160.054,143.788,159.957,141.339,158.601,139.992z" />
                <path d="M155.144,112.021c-3.111-2.362-6.604,2.058-5.002,5.003c0.321,0.592,0.669,1.1,1.009,1.595 c-0.057,0.422-0.032,0.854,0.067,1.291c-0.078,0.235-0.155,0.472-0.137,0.694c0.185,2.153,1.343,3.431,3.228,4.376 c2.33,1.169,5.076-0.256,5.151-2.956c0.021-0.738-0.063-1.378-0.162-2.006c0.16-0.271,0.296-0.562,0.362-0.895 C160.35,115.714,157.53,113.835,155.144,112.021z" />
                <path d="M162.797,83.902c-0.073-0.229-0.146-0.457-0.219-0.685c-0.145-0.455-0.218-1.158-0.044,0.378 c-0.121-1.071-0.354-1.915-1.141-2.703c-0.861-0.863-2.471-1.468-3.671-0.971c-0.572,0.237-1.026,0.608-1.465,0.995 c-1.694-0.058-3.277,2.169-2.515,4.037c-0.256,0.714-0.473,1.436-0.674,2.126c-0.395,1.357-0.69,3.013-0.208,4.38 c0.48,1.358,1.58,2.357,2.876,2.791c0.076,0.03,0.155,0.044,0.234,0.069c0.34,0.091,0.673,0.159,1.033,0.155 c0.312,0.008,0.633-0.064,0.962-0.139c0.876,0.405,1.775,0.745,2.605,0.977c2.556,0.711,4.972-1.683,4.358-4.231 c0.056-0.234,0.105-0.466,0.117-0.708C167.206,87.91,165.843,84.389,162.797,83.902z" />
              </g>
            </g>
          </svg>
          <h1 className="text-white font-GothamPro font-light text-[20px] ">
            Случайное
          </h1>
        </section>
        <section className="cursor-pointer flex justify-start hover:bg-darkBlue transition-colors gap-[8px] py-[15px] px-[15px] rounded-[7px]">
          <svg
            className="w-[20px] h-[20px]"
            width="800px"
            height="800px"
            viewBox="0 -2 32 32"
            version="1.1"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Icon-Set"
                transform="translate(-204.000000, -517.000000)"
                fill="#ffffff"
              >
                <path
                  d="M234,543 L228,538 L228,535 L234,531 L234,543 L234,543 Z M223,529.012 C220.232,529.012 217.989,526.768 217.989,524 C217.989,521.232 220.232,518.989 223,518.989 C225.768,518.989 228.011,521.232 228.011,524 C228.011,526.768 225.768,529.012 223,529.012 L223,529.012 Z M226,541 C226,542.104 225.104,543 224,543 L208,543 C206.896,543 206,542.104 206,541 L206,533 C206,531.896 206.896,531 208,531 L224,531 C225.104,531 226,531.896 226,533 L226,541 L226,541 Z M206,525 C206,522.791 207.791,521 210,521 C212.209,521 214,522.791 214,525 C214,527.209 212.209,529 210,529 C207.791,529 206,527.209 206,525 L206,525 Z M234,529 L228,533 C228,531.786 227.448,530.712 226.594,529.979 C228.626,528.753 230,526.546 230,524 C230,520.134 226.866,517 223,517 C219.134,517 216,520.134 216,524 C216,525.962 216.812,527.729 218.111,529 L214.443,529 C215.4,527.937 216,526.544 216,525 C216,521.687 213.313,519 210,519 C206.687,519 204,521.687 204,525 C204,526.809 204.816,528.41 206.082,529.511 C204.847,530.191 204,531.49 204,533 L204,541 C204,543.209 205.791,545 208,545 L224,545 C226.209,545 228,543.209 228,541 L228,540 L234,545 C235.104,545 236,544.104 236,543 L236,531 C236,529.896 235.104,529 234,529 L234,529 Z"
                  id="movie-recorder"
                ></path>
              </g>
            </g>
          </svg>
          <h1 className="text-white font-GothamPro font-light text-[20px] ">
            Фильмы
          </h1>
        </section>
        <section className="cursor-pointer flex justify-start hover:bg-darkBlue transition-colors gap-[8px] py-[15px] px-[15px] rounded-[7px]">
          <svg
            className="w-[20px] h-[20px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12H14.88"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.65 8.6499L16 11.9999L12.65 15.3499"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-white font-GothamPro font-light text-[20px]">
            Вход
          </h1>
        </section>
        <section className="mt-[5px]">
          <div className="mt-[5px] mb-[5px] w-full h-[1px] bg-Blue600"></div>
          <div className="flex items-center justify-between gap-[60px] px-[15px] py-[15px]">
            <img
              className=" w-[60px] h-[60px] rounded-[10px] object-cover"
              src={ProfileUser}
              alt=""
            />
            <h1 className="text-white break-words line-clamp-1 text-center font-GothamPro text-[16px]">
              minxrka
            </h1>
            <a href="#" className="">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
                  stroke="#ffffff"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col">
            <NavLink to="/profile/">
              <section className="cursor-pointer gap-[8px] items-center flex justify-start hover:bg-darkBlue transition-colors py-[15px] px-[15px] rounded-[7px]">
                <svg
                  className="w-[20px] h-[20px]"
                  viewBox="0 0 32 32"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="_40-User" data-name="40-User">
                    <path d="m16 2a7 7 0 1 0 7 7 7 7 0 0 0 -7-7zm0 12a5 5 0 1 1 5-5 5 5 0 0 1 -5 5z" />
                    <path d="m21.17 18h-10.34a8.84 8.84 0 0 0 -8.83 8.83 3.17 3.17 0 0 0 3.17 3.17h21.66a3.17 3.17 0 0 0 3.17-3.17 8.84 8.84 0 0 0 -8.83-8.83zm5.66 10h-21.66a1.17 1.17 0 0 1 -1.17-1.17 6.83 6.83 0 0 1 6.83-6.83h10.34a6.83 6.83 0 0 1 6.83 6.83 1.17 1.17 0 0 1 -1.17 1.17z" />
                  </g>
                </svg>
                <h1 className="text-white font-GothamPro font-light text-[20px] ">
                  Профиль
                </h1>
              </section>
            </NavLink>
            <NavLink to="https://t.me/minxrka">
              <section className="cursor-pointer gap-[8px] items-center flex justify-start hover:bg-darkBlue transition-colors py-[15px] px-[15px] rounded-[7px]">
                <svg
                  className="w-[20px] h-[20px]"
                  fill="white"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path d="M207.37,305.799c-3.911-3.902-10.244-3.891-14.142,0.022l-0.313,0.313c-3.899,3.911-3.89,10.242,0.022,14.142 c1.951,1.946,4.505,2.918,7.06,2.918c2.564,0,5.129-0.98,7.082-2.94l0.313-0.313C211.291,316.03,211.282,309.699,207.37,305.799z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M300.75,286.11c-1.87-1.869-4.44-2.93-7.07-2.93s-5.21,1.061-7.08,2.93c-1.859,1.86-2.92,4.431-2.92,7.07 c0,2.63,1.061,5.21,2.92,7.07c1.87,1.859,4.45,2.93,7.08,2.93s5.2-1.07,7.07-2.93c1.859-1.86,2.93-4.44,2.93-7.07 C303.68,290.54,302.61,287.97,300.75,286.11z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M271.67,257.031c-1.86-1.86-4.44-2.931-7.07-2.931s-5.21,1.07-7.07,2.931c-1.859,1.859-2.93,4.439-2.93,7.069 s1.07,5.21,2.93,7.07s4.44,2.93,7.07,2.93s5.21-1.069,7.07-2.93c1.859-1.86,2.93-4.44,2.93-7.07S273.53,258.89,271.67,257.031z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M244.859,230.22c-1.859-1.86-4.439-2.93-7.069-2.93s-5.21,1.069-7.07,2.93c-1.86,1.861-2.93,4.44-2.93,7.07 s1.069,5.21,2.93,7.069c1.86,1.861,4.44,2.931,7.07,2.931c2.63,0,5.21-1.07,7.069-2.931c1.86-1.859,2.931-4.439,2.931-7.069 S246.72,232.08,244.859,230.22z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M381.783,178.546c3.402,0,6.571-1.729,8.411-4.592l31.21-48.539c2.545-3.957,1.986-9.152-1.34-12.479L396.309,89.18 c-3.327-3.326-8.521-3.883-12.479-1.34l-48.539,31.211c-2.862,1.84-4.592,5.009-4.592,8.411v38.783l-50.778,50.779l-37.76-37.76 v-28.428c0-37.704-30.675-68.379-68.379-68.379h-37.643c-4.047,0-7.695,2.439-9.241,6.179c-1.546,3.74-0.687,8.044,2.18,10.901 l26.981,26.913c3.832,3.822,5.943,8.907,5.947,14.319c0.004,5.411-2.103,10.5-5.929,14.326c-7.893,7.893-20.734,7.893-28.627,0 l-26.914-26.914c-2.86-2.86-7.161-3.713-10.898-2.168c-3.736,1.548-6.173,5.194-6.173,9.239v37.689 c0,37.705,30.675,68.38,68.38,68.38h27.293l12.727,12.727l-88.017,88.017c-13.32,13.32-13.32,34.995,0,48.317l15.05,15.05 c6.661,6.66,15.41,9.991,24.159,9.991c8.749,0,17.498-3.331,24.159-9.991l88.017-88.017l90.052,90.052 c6.661,6.66,15.41,9.991,24.159,9.991c8.749,0,17.498-3.331,24.159-9.991l14.223-14.224c13.32-13.321,13.32-34.996,0-48.316 l-113.763-113.76l52.62-52.621H381.783z M350.698,132.921l37.168-23.899l12.356,12.356l-23.898,37.168h-25.626V132.921z M153.073,391.292c-5.012,5.012-12.868,5.46-18.408,1.375l45.118-45.118c3.905-3.905,3.905-10.237,0-14.143 c-3.906-3.904-10.236-3.904-14.143,0l-45.243,45.243l-2.407-2.407c-5.522-5.523-5.523-14.511,0-20.033l88.017-88.017 l35.083,35.083L153.073,391.292z M393.684,359.072c5.51,5.512,5.519,14.473,0.029,19.999l-69.385-69.384 c-3.906-3.904-10.236-3.904-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l69.387,69.386l-0.112,0.112 c-5.523,5.523-14.51,5.523-20.033,0L191.959,225.86c-1.822-2.796-4.957-4.537-8.376-4.537h-31.738 c-26.677,0-48.38-21.703-48.38-48.38v-13.547l9.843,9.843c7.601,7.601,17.707,11.786,28.456,11.786 c10.749,0,20.854-4.186,28.456-11.787c7.607-7.607,11.793-17.723,11.786-28.48c-0.007-10.759-4.205-20.868-11.823-28.467 l-9.857-9.833h13.456c26.676,0,48.379,21.703,48.379,48.379v32.57c0,2.652,1.054,5.195,2.929,7.071L393.684,359.072z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M467.712,112.033c-3.111-4.565-9.332-5.744-13.895-2.635c-4.564,3.11-5.744,9.331-2.635,13.895 C477.886,162.487,492,208.377,492,256c0,130.131-105.869,236-236,236S20,386.131,20,256S125.869,20,256,20 c48.662,0,95.381,14.688,135.106,42.474c4.526,3.166,10.759,2.063,13.926-2.463c3.166-4.525,2.063-10.761-2.463-13.926 C359.467,15.936,308.784,0,256,0C187.62,0,123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256s26.629,132.667,74.98,181.02 C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98C485.371,388.667,512,324.38,512,256 C512,204.344,496.686,154.561,467.712,112.033z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M437.392,75.354l-0.372-0.373c-3.906-3.904-10.236-3.904-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l0.311,0.312 c1.956,1.972,4.528,2.959,7.102,2.959c2.545,0,5.091-0.966,7.041-2.898C441.253,85.608,441.28,79.276,437.392,75.354z" />
                    </g>
                  </g>
                </svg>

                <h1 className="text-white font-GothamPro font-light text-[20px] ">
                  Поддержка
                </h1>
              </section>
            </NavLink>
            <section className="cursor-pointer gap-[8px] items-center flex justify-start hover:bg-darkBlue transition-colors py-[15px] px-[15px] rounded-[7px]">
              <svg
                className="w-[20px] h-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_6"
                fill="white"
                data-name="Layer 6"
                viewBox="0 0 32 32"
              >
                <path d="M16,22.4A6.4,6.4,0,1,1,22.4,16,6.41,6.41,0,0,1,16,22.4Zm0-10.67A4.27,4.27,0,1,0,20.27,16,4.27,4.27,0,0,0,16,11.73Z" />
                <path d="M17.35,32h-2.7a3.22,3.22,0,0,1-3.17-2.75l-.25-1.74L9.82,28.57a3.22,3.22,0,0,1-4.18-.3L3.73,26.36a3.22,3.22,0,0,1-.3-4.18l1.06-1.41-1.74-.25A3.21,3.21,0,0,1,0,17.35v-2.7a3.21,3.21,0,0,1,2.75-3.17l1.74-.25L3.43,9.82a3.22,3.22,0,0,1,.3-4.18L5.64,3.73a3.22,3.22,0,0,1,4.18-.3l2.85,2.14a1.07,1.07,0,1,1-1.28,1.71L8.54,5.14a1.07,1.07,0,0,0-1.39.1L5.24,7.15a1.07,1.07,0,0,0-.1,1.39l2.14,2.85a1.07,1.07,0,0,1-.7,1.7L3,13.59a1.07,1.07,0,0,0-.92,1.06v2.7A1.07,1.07,0,0,0,3,18.41l3.53.5a1.07,1.07,0,0,1,.7,1.7L5.14,23.46a1.07,1.07,0,0,0,.1,1.39l1.91,1.91a1.07,1.07,0,0,0,1.39.1l2.85-2.14a1.07,1.07,0,0,1,1.7.7l.5,3.53a1.07,1.07,0,0,0,1.06.92h2.7A1.07,1.07,0,0,0,18.41,29a1.07,1.07,0,0,1,2.11.3A3.22,3.22,0,0,1,17.35,32Z" />
                <path d="M24.09,29.2a3.19,3.19,0,0,1-1.92-.64l-2.85-2.14a1.07,1.07,0,1,1,1.28-1.71l2.85,2.14a1.07,1.07,0,0,0,1.39-.1l1.91-1.91a1.07,1.07,0,0,0,.1-1.39l-2.14-2.85a1.07,1.07,0,0,1,.7-1.7l3.53-.5a1.07,1.07,0,0,0,.92-1.06v-2.7A1.07,1.07,0,0,0,29,13.59l-3.53-.5a1.07,1.07,0,0,1-.7-1.7l2.14-2.85a1.07,1.07,0,0,0-.1-1.39L24.85,5.24a1.07,1.07,0,0,0-1.39-.1L20.61,7.28a1.07,1.07,0,0,1-1.7-.7L18.41,3a1.07,1.07,0,0,0-1.06-.92h-2.7A1.07,1.07,0,0,0,13.59,3a1.07,1.07,0,0,1-2.11-.3A3.22,3.22,0,0,1,14.65,0h2.7a3.22,3.22,0,0,1,3.17,2.75l.25,1.74,1.41-1.06a3.22,3.22,0,0,1,4.18.3l1.91,1.91a3.22,3.22,0,0,1,.3,4.18l-1.06,1.41,1.74.25A3.21,3.21,0,0,1,32,14.65v2.7a3.21,3.21,0,0,1-2.75,3.17l-1.74.25,1.06,1.41a3.22,3.22,0,0,1-.3,4.18l-1.91,1.91A3.2,3.2,0,0,1,24.09,29.2Z" />
              </svg>
              <h1 className="text-white font-GothamPro font-light text-[20px] ">
                Настройки
              </h1>
            </section>
            <div className="mt-[5px] mb-[5px] w-full h-[1px] bg-Blue600"></div>
            <section className="cursor-pointer gap-[8px] items-center flex justify-start hover:bg-mainRedJapan transition-colors py-[15px] px-[15px] rounded-[7px]">
              <img
                className="w-[20px] h-[20px] fill-white"
                src={LogOut}
                alt=""
              />
              <h1 className="text-white font-GothamPro font-light text-[20px] ">
                Выйти
              </h1>
            </section>
          </div>
        </section>
      </main>
    </nav>
  );

  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-[70px] bg-mainBlue transition-all duration-500 z-index-header xl:px-[80px] big:px-[150px] sm:px-[25px] lg:px-[73px] px-[160px] py-[10px] items-center flex justify-between after:absolute after:h-[.0625rem] after:w-full after:left-0 after:bottom-[0.1px] after:bg-Blue600`}
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
                className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-darkBlue rounded-[8px] transition-colors"
              >
                None
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink to="/anime">
              <a
                href="#"
                className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-darkBlue rounded-[8px] transition-colors"
              >
                Аниме
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/random">
              <a
                href="#"
                className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-darkBlue rounded-[8px] transition-colors"
              >
                Случайное
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/films">
              <a
                href="#"
                className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-darkBlue rounded-[8px] transition-colors"
              >
                Фильмы
              </a>
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="items-center lg:hidden">
        <ul className="flex items-center gap-[100px] big:gap-[50px] xl:gap-[35px]">
          <button
            className="px-[8px] py-[8px] hover:bg-darkBlue rounded-[8px] transition-colors items-center cursor-pointer"
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

          {/* <li>
            <NavLink to="/login">
              <a
                href="#"
                className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-darkBlue rounded-[8px] transition-colors"
              >
                Вход
              </a>
            </NavLink>
<<<<<<< HEAD
<<<<<<< HEAD
          </li> */}

          {/* ИЛИ УЖЕ ПРОФИЛЬ */}

          <NavPorfilePop />
        </ul>
      </nav>
      <Dialog open={open} onClose={handleClose} className="backdrop-blur-[5px]">
        <div className="border-solid border-2 border-cyberpunk w-[577px] sm:w-full">
          <div className="bg-mainBlue h-[52px] relative gap-[18px] items-center flex px-[20px] py-[14px] justify-between after:absolute after:h-[.0625rem] after:w-full after:left-0 after:-bottom-[0.1px] after:bg-cyberpunk after:opacity-[0.60]">
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
          <section className="bg-mainBlue overflow-auto max-w-[577px] max-h-[600px]">
            {/* <div className="h-[100px] w-full"></div> */}

            {/*           ПРИ НАХОЖДЕНИИ ОТСУТСВИИ ИНФОРМАЦИИ В ПОИСКЕ МОДАЛЬНОГО ОКНА */}
            <main>
              <NavLink to="/watch" onClick={handleClose}>
                <div className="cursor-pointer flex max-w-full h-auto hover:bg-superLightRed px-[20px] py-[15px] transition-colors">
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
              <NavLink to="/watch" onClick={handleClose}>
                <div className="cursor-pointer flex max-w-full h-auto hover:bg-superLightRed px-[20px] py-[15px] transition-colors">
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
            </div> */}

            {/*           ПРИ НАХОЖДЕНИИ ОТСУТСВИИ ИНФОРМАЦИИ В ПОИСКЕ МОДАЛЬНОГО ОКНА */}
          </section>
        </div>
      </Dialog>

      <button
        onClick={toggleDrawer(true)}
        class="hidden group relative h-5 w-[1.875rem] lg:block z-30"
      >
        <span class="bg-white left-0 h-[.0625rem] w-full absolute top-0 group-[.active]:translate-y-2 group-[.active]:rotate-45 transition-transform"></span>
        <span class="bg-white left-0 h-[.0625rem] w-full absolute top-1/2 group-[.active]:opacity-0 transition-opacity"></span>
        <span class="bg-white left-0 h-[.0625rem] w-full absolute bottom-0 group-[.active]:-translate-y-[11px] group-[.active]:-rotate-45 transition-transform"></span>
      </button>
      <Drawer open={visible} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <a href="" class="hidden lg:flex items-center z-30">
        <img className="max-w-[45px] h-auto" src={SmallLogo} alt="logo" />
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
