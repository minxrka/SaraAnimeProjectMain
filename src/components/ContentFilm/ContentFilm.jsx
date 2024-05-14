import React from "react";
import { Anime } from "../animeItem/anime";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const ContentFilm = () => {
  const [animesVisible, setAnimesVisible] = useState(false);
  return (
    <div className="max-w-[1500px] mx-auto">
      <section className="items-center text-center mt-[50px] mb-[50px]">
        <h1 className="text-white text-[40px] font-GothamPro font-light xl:text-[35px] lg:text-[30px] textwrap">
          Каталог фильмов
        </h1>
      </section>

      <main className="overflow-hidden px-[20px] py-[20px] border-solid border border-mainLightRed rounded-[20px] ">
        <section className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[80px] lg:gap-[40px] md:justify-center">
          {/* +Idindex anime NavLink to={`/watch/` + index} */}
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
          <Anime />
          {/* ///////////////////////// */}
        </section>
        {animesVisible && (
          <section className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[80px] lg:gap-[40px] md:justify-center mt-[80px] lg:mt-[40px]">
            {/* +Idindex anime NavLink to={`/watch/` + index} */}
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
            <Anime />
            {/* ///////////////////////// */}
          </section>
        )}
        <div className="flex justify-center mt-[100px] mb-[100px]">
          <button
            onClick={() => setAnimesVisible(true)}
            className="py-[18px] px-[21px] border-solid border border-cyberpunk rounded-[30px] font-GothamPro text-white font-light hover:bg-superLightRed transition-colors"
          >
            Смотреть ещё
          </button>
        </div>
      </main>
    </div>
  );
};
