import React from "react";
import { NavLink } from "react-router-dom";
import { Anime } from "../animeItem/anime";

import "./GeneralPopularAnime.css";

export const ItemAnime = () => {
  return (
    <main className="overflow-hidden px-[20px] py-[20px] border-solid border border-mainLightRed mt-[39px] rounded-[20px] max-w-[1500px] mx-auto">
      <section className="flex justify-between items-center md:flex-col md:text-center gap-[8px]">
        <h1 className="text-white text-[40px] uppercase font-Bluecurve xl:text-[35px] lg:text-[30px] textwrap">
          Популярное в этом месяце
        </h1>
        <a
          className="hoverBtnShowMore pt-[12px] pb-[12px] pr-[13px] pl-[18px] border border-solid border-Blue500 rounded-[50px] text-base font-GothamPro font-extralight text-white"
          href=""
        >
          <NavLink to="/anime/">
            <p className="textBtnShowMore">Смотреть все</p>
          </NavLink>
        </a>
      </section>
      <section className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-[30px] gap-[90px] lg:gap-[40px] md:justify-center">
        <Anime />
        <Anime />
        <Anime />
        <Anime />
        <Anime />
        <Anime />
        <Anime />
        <Anime />

        {/* БОЛЬШОЕ ИЗОБРАЖЕНИЕ ТЕСТ */}
        {/* <div className="lg:hidden spanhovereffect bgZoomEffect max-w-[620px] h-auto test:max-w-[500px] lg:order-last">
          <a href="">
            <div className="bgZoomEffect overflow-hidden poster anime relative max-w-[620px] rounded-[20px]">
              <img className="rounded-[20px]" src={Anime2} alt="" />
              <div className="spanbgeffect anime absolute top-0 bg-black spanbgeffect rounded-[20px] w-full h-full opacity-0 transition-all">
                <span className="">
                  <svg
                    className="max-w-[110px] h-full mx-auto svgPlay"
                    viewBox="0 0 256 256"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M128 28C108.222 28 88.8879 33.8649 72.443 44.853C55.9981 55.8412 43.1809 71.459 35.6121 89.7317C28.0433 108.004 26.063 128.111 29.9215 147.509C33.78 166.907 43.3041 184.725 57.2894 198.711C71.2746 212.696 89.0929 222.22 108.491 226.079C127.889 229.937 147.996 227.957 166.268 220.388C184.541 212.819 200.159 200.002 211.147 183.557C222.135 167.112 228 147.778 228 128C227.971 101.487 217.426 76.0688 198.679 57.3215C179.931 38.5742 154.513 28.0291 128 28ZM128 220C109.804 220 92.0169 214.604 76.8876 204.495C61.7583 194.386 49.9664 180.018 43.0031 163.207C36.0399 146.396 34.218 127.898 37.7678 110.052C41.3176 92.2054 50.0798 75.8126 62.9462 62.9462C75.8127 50.0797 92.2055 41.3176 110.052 37.7678C127.898 34.2179 146.396 36.0398 163.207 43.0031C180.018 49.9663 194.386 61.7582 204.495 76.8875C214.604 92.0169 220 109.804 220 128C219.974 152.392 210.272 175.777 193.025 193.025C175.777 210.272 152.392 219.974 128 220ZM162.22 124.67L114.22 92.67C113.618 92.268 112.917 92.0371 112.194 92.0021C111.47 91.967 110.751 92.1291 110.112 92.471C109.474 92.8129 108.94 93.3217 108.568 93.9433C108.196 94.5648 108 95.2757 108 96V160C107.999 160.724 108.195 161.435 108.567 162.057C108.938 162.679 109.472 163.188 110.11 163.53C110.749 163.872 111.469 164.034 112.193 163.999C112.917 163.964 113.617 163.733 114.22 163.33L162.22 131.33C162.769 130.965 163.219 130.47 163.53 129.889C163.841 129.308 164.004 128.659 164.004 128C164.004 127.341 163.841 126.692 163.53 126.111C163.219 125.53 162.769 125.035 162.22 124.67ZM116 152.53V103.47L152.79 128L116 152.53Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
              <div className="absolute flex left-3 px-[10px] py-[8px] items-center bg-mainViolet rounded-[10px] top-3 z-10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7168 21.0007C17.5589 21.0013 17.4049 20.9521 17.2766 20.8601L11.248 16.4895L5.21944 20.8601C5.09064 20.9535 4.93547 21.0035 4.77636 21.003C4.61726 21.0024 4.46246 20.9512 4.33434 20.8569C4.20623 20.7625 4.11144 20.6299 4.06368 20.4781C4.01592 20.3263 4.01766 20.1633 4.06865 20.0126L6.4199 13.0484L0.326154 8.86947C0.194159 8.77905 0.0945374 8.64879 0.0418439 8.49772C-0.0108497 8.34666 -0.0138533 8.1827 0.033272 8.0298C0.0803973 7.87691 0.175182 7.74309 0.303776 7.6479C0.432371 7.55271 0.588037 7.50114 0.748029 7.50072H8.26584L10.5346 0.518684C10.5835 0.367945 10.6788 0.236559 10.807 0.143376C10.9352 0.0501921 11.0896 0 11.248 0C11.4065 0 11.5609 0.0501921 11.6891 0.143376C11.8172 0.236559 11.9126 0.367945 11.9615 0.518684L14.2302 7.50306H21.748C21.9082 7.50298 22.0642 7.55419 22.1932 7.6492C22.3222 7.74421 22.4174 7.87802 22.4648 8.03103C22.5122 8.18404 22.5094 8.34822 22.4567 8.49952C22.4041 8.65081 22.3044 8.78128 22.1722 8.87181L16.0762 13.0484L18.426 20.0107C18.4641 20.1234 18.4748 20.2436 18.4572 20.3613C18.4397 20.479 18.3944 20.5908 18.3251 20.6875C18.2558 20.7842 18.1645 20.8631 18.0588 20.9175C17.953 20.972 17.8358 21.0005 17.7168 21.0007Z"
                    fill="#FFE64F"
                  />
                </svg>
                <p className="text-[#FFE64F] text-[19px] font-GothamPro ml-[10px] font-light">
                  9.5
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-center font-GothamPro text-white text-[18px] font-light mt-[8px] textwrap lineclamptwo">
                Киберпанк: Бегущий по краю
              </h1>
              <p className="text-[15px] text-center font-GothamPro font-light text-gray-200 mt-[8px] textwrap lineclampone">
                2022, Fantasy
              </p>
            </div>
          </a>
        </div> */}
        {/* БОЛЬШОЕ ИЗОБРАЖЕНИЕ ТЕСТ */}
      </section>
    </main>
  );
};
