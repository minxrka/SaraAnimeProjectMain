import React from "react";
import MainLogo from "../../img/logo/main-logo.svg";

export const Header = () => {
  return (
    <header className="xl:px-[80px] big:px-[150px] sm:px-[25px] lg:px-[73px] items-center flex justify-between px-[200px] py-[10px] relative after:absolute after:h-[.0625rem] after:w-full after:left-0 after:-bottom-0.5 after:bg-[#4990E8]">
      <nav className="items-center lg:hidden">
        <ul className="flex items-center gap-[68px] xl:gap-[34px]">
          <li>
            <a href="#">
              <img src={MainLogo} alt="" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors"
            >
              Главная
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors"
            >
              Аниме
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors"
            >
              Случайное
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-GothamPro font-extralight text-white text-[19px] px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors"
            >
              Фильмы
            </a>
          </li>
        </ul>
      </nav>

      <nav className="items-center lg:hidden">
        <ul className="flex items-center gap-[123px] big:gap-[50px] xl:gap-[35px]">
          <li className="px-[8px] py-[8px] hover:bg-[#4A2979] rounded-[8px] transition-colors items-center cursor-pointer">
            <a href="#">
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
            </a>
          </li>

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

      {/* MOBILE */}
      <a href="" class="hidden lg:flex items-center">
        <svg
          width="34"
          height="34"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 10.002H35M5 20.002H35M5 30.002H35"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      <a href="" class="hidden lg:flex items-center">
        <img src={MainLogo} alt="logo" />
      </a>

      <a href="" class="hidden lg:flex items-center">
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
      </a>
    </header>
  );
};
