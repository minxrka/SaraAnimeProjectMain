import React from "react";
import { NavLink } from "react-router-dom";
import Girl404 from "../../img/other-content/egirl.png";

export const ErrorPage = () => {
  return (
    <div className="h-[100vh] py-[10vh]">
      <section className="flex flex-col py-[50px] justify-between relative max-w-[1100px] h-[800px] mx-auto bg-[#4990E812] rounded-[15px] border border-solid border-cyberpunk">
        <div className="text-center">
          <h1 className="text-[32px] font-AnimeAcev02Bold text-white">
            <span className="text-[32px] font-AnimeAcev02Bold text-cyberpunk">
              Упс!
            </span>{" "}
            <br />
            Данная страница не найдена или находится в разработке
          </h1>
        </div>
        <h1 className="text-[#D6FE50B0] font-AnimeAcev02Bold text-[300px] text-center">
          404
        </h1>
        <div className="absolute top-[150px] left-[310px]">
          <img src={Girl404} alt="" />
        </div>
        <div className="text-center text-[32px] font-AnimeAcev02Bold text-white">
          <h1 className="">
            Приносим свои извинения! <br />
          </h1>
          <NavLink to={"/"}>
            <h1 className=" text-cyberpunk underline cursor-pointer">
              на главную
            </h1>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
