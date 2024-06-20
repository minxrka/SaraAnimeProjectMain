import React from "react";
import MainLogo from "../../img/logo/newLogo.svg";
import { NavLink } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  const buttonSubscribe = () => {
    alert("Спасибо, вы подписаны на рассылку!");
  };
  return (
    <footer className=" bg-darkBlue py-[50px]">
      <main className="px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
        <section className="flex justify-between flex-wrap gap-[100px] lg:gap-[50px] md:gap-[20px] max-w-[1500px] mx-auto">
          <div className="flex flex-col max-w-[300px]">
            <NavLink to="/">
              <img src={MainLogo} alt="" />
            </NavLink>
            <p className="text-white text-[20px] font-GothamPro font-light">
              Anime with Sara — это сайт для просмотра аниме одному, а также с
              друзьями на любом утройстве.
            </p>
          </div>
          <div className="flex flex-col gap-[22px]">
            <h1 className="text-[25px] font-GothamPro text-white">
              Карта сайта
            </h1>

            <NavLink
              to="/"
              className="text-white font-GothamPro font-light text-[20px] hover:text-[#da4f4a] transition-colors"
            >
              Главная
            </NavLink>
            <NavLink
              to="/anime"
              className="text-white font-GothamPro font-light text-[20px] hover:text-[#da4f4a] transition-colors"
            >
              Аниме
            </NavLink>
            <NavLink
              to="/random"
              className="text-white font-GothamPro font-light text-[20px] hover:text-[#da4f4a] transition-colors"
            >
              Случайное
            </NavLink>
            <NavLink
              to="/films"
              className="text-white font-GothamPro font-light text-[20px] hover:text-[#da4f4a] transition-colors"
            >
              Фильмы
            </NavLink>
          </div>
          <div className="flex flex-col gap-[22px]">
            <h1 className="text-[25px] font-GothamPro text-white">Помощь</h1>
            <NavLink to="/about">
              <a
                href=""
                className="text-white font-GothamPro font-light text-[20px] hover:text-[#da4f4a] transition-colors"
              >
                О нас
              </a>
            </NavLink>
            <NavLink to="/faq">
              <a
                href=""
                className="text-white font-GothamPro font-light text-[20px] hover:text-[#da4f4a] transition-colors"
              >
                FAQ
              </a>
            </NavLink>
            <a
              href=""
              className="text-white font-GothamPro font-light text-[20px] hover:text-[#da4f4a] transition-colors"
            >
              Настройки
            </a>
          </div>
          <div className="flex flex-col max-w-[611px] gap-[22px]">
            <h1 className="text-[25px] font-GothamPro text-white">
              Будь первым, кто узнает о новостях!
            </h1>
            <p className="text-white font-GothamPro font-light text-[20px] textwrap">
              Только актуальные новости. Мы тоже не любим <br></br> спам :)
            </p>
            <form class="input-container">
              <input
                required
                placeholder="Email"
                type="email"
                className="placeholder:font-GothamPro placeholder:text-[18px] placeholder:font-light placeholder:text-black font-GothamPro font-light"
              />
              <button onClick={buttonSubscribe} class="invite-btn font-Akira">
                follow!
              </button>
            </form>
          </div>
        </section>
        <aside className="social flex max-w-[500px] mx-auto mt-[60px] gap-[57px] flex-wrap md:justify-center">
          <a href="https://discord.gg/tT5cuW72z2" target="_blank">
            <div className="max-w-[80px] h-full bg-white rounded-[50%] px-[10px] py-[10px] hover:bg-cyberpunk hover:scale-105 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="60"
                height="60"
                viewBox="0 0 50 50"
              >
                <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
              </svg>
            </div>
          </a>
          <a href="https://www.youtube.com/@minxrka6491" target="_blank">
            <div className="max-w-[80px] h-full bg-white rounded-[50%] px-[10px] py-[10px] hover:bg-cyberpunk hover:scale-105 transition-all">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 37.5L37.975 30L25 22.5V37.5ZM53.9 17.925C54.225 19.1 54.45 20.675 54.6 22.675C54.775 24.675 54.85 26.4 54.85 27.9L55 30C55 35.475 54.6 39.5 53.9 42.075C53.275 44.325 51.825 45.775 49.575 46.4C48.4 46.725 46.25 46.95 42.95 47.1C39.7 47.275 36.725 47.35 33.975 47.35L30 47.5C19.525 47.5 13 47.1 10.425 46.4C8.175 45.775 6.725 44.325 6.1 42.075C5.775 40.9 5.55 39.325 5.4 37.325C5.225 35.325 5.15 33.6 5.15 32.1L5 30C5 24.525 5.4 20.5 6.1 17.925C6.725 15.675 8.175 14.225 10.425 13.6C11.6 13.275 13.75 13.05 17.05 12.9C20.3 12.725 23.275 12.65 26.025 12.65L30 12.5C40.475 12.5 47 12.9 49.575 13.6C51.825 14.225 53.275 15.675 53.9 17.925Z"
                  fill="black"
                />
              </svg>
            </div>
          </a>
          <a href="https://t.me/animewithsara" target="_blank">
            <div className="max-w-[80px] h-full bg-white rounded-[50%] px-[10px] py-[10px] hover:bg-cyberpunk hover:scale-105 transition-all">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4701 35.05C14.5775 35.0858 14.6879 35.1117 14.8001 35.1275C15.5074 36.7941 16.2107 38.4625 16.9101 40.1325C18.1676 43.1375 19.4351 46.2325 19.7126 47.1225C20.0601 48.2175 20.4251 48.9625 20.8251 49.4725C21.0326 49.7325 21.2701 49.9625 21.5501 50.1375C21.6959 50.2287 21.852 50.3026 22.0151 50.3575C22.8151 50.6575 23.5451 50.5325 24.0026 50.38C24.271 50.2883 24.5265 50.1623 24.7626 50.005L24.7751 50L31.8401 45.595L40.0026 51.85C40.1226 51.9425 40.2526 52.02 40.3926 52.0825C41.3726 52.5075 42.3226 52.6575 43.2176 52.5375C44.1076 52.4125 44.8151 52.04 45.3426 51.6175C45.9483 51.1293 46.4312 50.5059 46.7526 49.7975L46.7751 49.7425L46.7826 49.7225L46.7876 49.7125V49.7075L46.7901 49.705C46.8335 49.5974 46.867 49.4861 46.8901 49.3725L54.3401 11.81C54.3636 11.6897 54.3753 11.5675 54.3751 11.445C54.3751 10.345 53.9601 9.29747 52.9876 8.66497C52.1526 8.12247 51.2251 8.09747 50.6376 8.14247C50.0076 8.19247 49.4226 8.34747 49.0301 8.47247C48.8103 8.5421 48.5935 8.6205 48.3801 8.70747L48.3526 8.71997L6.56755 25.11L6.56255 25.1125C6.42118 25.1645 6.2819 25.222 6.14505 25.285C5.81371 25.4339 5.49586 25.6113 5.19505 25.815C4.62755 26.2025 3.32005 27.2675 3.54255 29.0275C3.71755 30.4275 4.67755 31.29 5.26505 31.705C5.58505 31.9325 5.89005 32.095 6.11505 32.2025C6.21505 32.2525 6.43005 32.3375 6.52255 32.3775L6.54755 32.385L14.4701 35.05ZM49.8151 12.17H49.8101C49.7886 12.1795 49.7669 12.1887 49.7451 12.1975L7.91005 28.61C7.88853 28.6187 7.86686 28.627 7.84505 28.635L7.82005 28.6425C7.74363 28.6725 7.66856 28.7059 7.59505 28.7425C7.66464 28.7823 7.73642 28.8182 7.81005 28.85L15.6651 31.495C15.8054 31.5423 15.9397 31.6061 16.0651 31.685L42.0076 16.4975L42.0326 16.485C42.1333 16.4237 42.2368 16.367 42.3426 16.315C42.5226 16.2225 42.8101 16.0875 43.1351 15.9875C43.3601 15.9175 44.0276 15.72 44.7476 15.9525C45.1295 16.0728 45.4698 16.2982 45.7297 16.6028C45.9897 16.9074 46.1587 17.2789 46.2176 17.675C46.3107 18.0218 46.3132 18.3868 46.2251 18.735C46.0501 19.4225 45.5701 19.9575 45.1301 20.3675C44.7551 20.7175 39.8926 25.4075 35.0951 30.0375L28.5626 36.3375L27.4001 37.4625L42.0801 48.7175C42.2782 48.8006 42.4934 48.8349 42.7076 48.8175C42.8154 48.8028 42.9169 48.7577 43.0001 48.6875C43.1014 48.6019 43.1884 48.5006 43.2576 48.3875L43.2626 48.385L50.4876 11.9525C50.26 12.0072 50.0368 12.0791 49.8201 12.1675L49.8151 12.17ZM28.6626 43.155L25.7326 40.91L25.0226 45.4225L28.6626 43.155ZM23.0451 36.455L25.9576 33.6425L32.4901 27.3375L34.9226 24.9925L18.6226 34.535L18.7101 34.74C19.7381 37.1685 20.7547 39.6019 21.7601 42.04L22.4676 37.54C22.5316 37.1226 22.7351 36.7418 23.0451 36.455Z"
                  fill="black"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.tiktok.com/@minxrka" target="_blank">
            <div className="max-w-[80px] h-full bg-white rounded-[50%] px-[10px] py-[10px] hover:bg-cyberpunk hover:scale-105 transition-all">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.5 14.55C39.7911 12.5991 38.8493 10.0936 38.85 7.5H31.125V38.5C31.0654 40.1776 30.3572 41.7665 29.1494 42.9323C27.9417 44.0981 26.3286 44.7498 24.65 44.75C21.1 44.75 18.15 41.85 18.15 38.25C18.15 33.95 22.3 30.725 26.575 32.05V24.15C17.95 23 10.4 29.7 10.4 38.25C10.4 46.575 17.3 52.5 24.625 52.5C32.475 52.5 38.85 46.125 38.85 38.25V22.525C41.9825 24.7746 45.7434 25.9816 49.6 25.975V18.25C49.6 18.25 44.9 18.475 41.5 14.55Z"
                  fill="black"
                />
              </svg>
            </div>
          </a>
        </aside>
      </main>
      <aside className="mt-[53px] relative after:absolute after:h-[.0625rem] after:w-full after:left-0 after:-bottom-0.5 after:bg-[#4990E8]"></aside>
      <aside className="xl:flex max-w-[1900px] mx-auto xl:flex-col xl:items-center gap-[30px] flex flex-wrap justify-between mt-[100px] px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
        <div className="cursor-pointer">
          <h1 className="text-white font-GothamPro font-light text-[20px] hover:text-[#da4f4a] transition-colors">
            Условия предоставления услуг
          </h1>
        </div>
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.08 10.86C10.13 10.53 10.24 10.24 10.38 9.99C10.52 9.74 10.72 9.53 10.97 9.37C11.21 9.22 11.51 9.15 11.88 9.14C12.11 9.15 12.32 9.19 12.51 9.27C12.71 9.36 12.89 9.48 13.03 9.63C13.17 9.78 13.28 9.96 13.37 10.16C13.46 10.36 13.5 10.58 13.51 10.8H15.3C15.28 10.33 15.19 9.9 15.02 9.51C14.85 9.12 14.62 8.78 14.32 8.5C14.02 8.22 13.66 8 13.24 7.84C12.82 7.68 12.36 7.61 11.85 7.61C11.2 7.61 10.63 7.72 10.15 7.95C9.67 8.18 9.27 8.48 8.95 8.87C8.63 9.26 8.39 9.71 8.24 10.23C8.09 10.75 8 11.29 8 11.87V12.14C8 12.72 8.08 13.26 8.23 13.78C8.38 14.3 8.62 14.75 8.94 15.13C9.26 15.51 9.66 15.82 10.14 16.04C10.62 16.26 11.19 16.38 11.84 16.38C12.31 16.38 12.75 16.3 13.16 16.15C13.57 16 13.93 15.79 14.24 15.52C14.55 15.25 14.8 14.94 14.98 14.58C15.16 14.22 15.27 13.84 15.28 13.43H13.49C13.48 13.64 13.43 13.83 13.34 14.01C13.25 14.19 13.13 14.34 12.98 14.47C12.83 14.6 12.66 14.7 12.46 14.77C12.27 14.84 12.07 14.86 11.86 14.87C11.5 14.86 11.2 14.79 10.97 14.64C10.72 14.48 10.52 14.27 10.38 14.02C10.24 13.77 10.13 13.47 10.08 13.14C10.03 12.81 10 12.47 10 12.14V11.87C10 11.52 10.03 11.19 10.08 10.86ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="white"
            />
          </svg>
          <h1 className="text-white font-GothamPro font-light text-[20px]">
            2023. All rights reserved.
          </h1>
        </div>
        <div className="cursor-pointer">
          <h1 className="text-white font-GothamPro font-light text-[20px] hover:text-[#da4f4a] transition-colors">
            Политика конфиденциальности
          </h1>
        </div>
      </aside>
    </footer>
  );
};
