import React from "react";
import { NavLink } from "react-router-dom";
import Girl404 from "../../img/other-content/egirl.png";
import "./errorPage404.css";

export const ErrorPage = () => {
  return (
    <div className="h-[100vh] py-[10vh]">
      <section className="flex flex-col py-[30px] gap-[60px] sm:gap-[30px] relative max-w-[1100px] h-auto mx-auto bg-[#4990E812] rounded-[15px] border border-solid border-cyberpunk">
        <div className="text-center">
          <h1 className="mainText uppercase font-Bluecurve text-white">
            <span className=" text-cyberpunk">Упс!</span> <br />
            Данная страница не найдена или находится в разработке
          </h1>
        </div>
        <h1 className="text-[#D6FE50B0] select-none main404 uppercase font-Bluecurve text-center">
          404
        </h1>
        <div className="select-none test">
          <img src={Girl404} alt="" />
        </div>
        <div className="text-center mainText uppercase font-Bluecurve text-white">
          <h1 className="">
            Приносим свои извинения! <br />
          </h1>
          <NavLink to={"/"}>
            <h1 className=" text-cyberpunk underline uppercase font-Bluecurve cursor-pointer">
              на главную
            </h1>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
