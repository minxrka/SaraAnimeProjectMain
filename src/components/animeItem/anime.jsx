import React from "react";
import AnimePreview from "../../img/bg-anime-card/bleach.jpg";
import { NavLink } from "react-router-dom";
import banner from "../../img/test.jpg";

export const Anime = () => {
  return (
    <div className="spanhovereffect bgZoomEffect">
      <NavLink to="/watch/">
        <div className="bgZoomEffect overflow-hidden rounded-[20px] adaptiveImageAnime">
          <img
            className="rounded-[20px] absolute top-0 left-0 w-full h-full object-cover"
            src={AnimePreview}
            alt=""
          />
          <div className="spanbgeffect anime absolute top-0 bg-black rounded-[20px] w-full h-full opacity-0 transition-all">
            <svg
              className="max-w-[110px] h-full mx-auto svgPlay invert"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </div>
          <div className="absolute flex left-3 px-[10px] py-[8px] items-center bg-mainBlue rounded-[10px] top-3 z-10">
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
        <div className="flex flex-col justify-between">
          <h1 className="font-GothamPro text-white text-[18px] font-light mt-[8px] textwrap lineclampone">
            Блич: Тысячелетняя кровавая война
          </h1>
          <p className="text-[15px] text-start font-GothamPro font-light text-gray-200 mt-[8px] textwrap lineclampone">
            2022, Приключения, Фэнтези, Экшен
          </p>
        </div>
      </NavLink>
    </div>
  );
};
