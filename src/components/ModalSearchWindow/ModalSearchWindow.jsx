import React from "react";
import test from "../../img/bg-anime-card/small/bleach.jpg";
import { useRef } from "react";

export const ModalSearchWindow = () => {
  return (
    <div>
      <section className="max-w-[577px] h-[220px] border-solid border-2 border-cyberpunk rounded-[20px]">
        <div className="gap-[18px] items-center flex px-[20px] py-[14px] justify-between relative after:absolute after:h-[.0625rem] after:w-full after:left-0 after:-bottom-0.5 after:bg-cyberpunk after:opacity-[0.60]">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
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
          <a href="">
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
          </a>
        </div>
        <div className="mt-[1px] flex max-w-full h-auto hoveringbg px-[20px] py-[15px] transition-colors">
          <div>
            <img
              className="rounded-[5px] max-w-[65px] h-auto object-cover"
              src={test}
              alt=""
            />
          </div>
          <div className="ml-[11px] flex flex-col justify-around">
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
      </section>
    </div>
  );
};
