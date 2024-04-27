import React from "react";
import "./DefaultFavoritePerson.css";
import BgVideo from "../../img/BgVideoAuth/profileFavPerson.mp4";
const DefaultFavoritePerson = () => {
  return (
    <React.Fragment>
      <article className="w-full relative rounded-[10px] h-[250px]">
        <video
          className="w-full h-full object-cover rounded-[10px]"
          src={BgVideo}
          autoPlay
          muted
          loop
        ></video>
        <div className="flex w-full mia absolute top-0 left-0 flex-col justify-center h-full">
          <h1 className="text-white select-none text-center font-Bluecurve uppercase text-[25px]">
            Пользователь еще не добавил любимых персонажей
          </h1>
        </div>
      </article>
    </React.Fragment>
  );
};

export default DefaultFavoritePerson;
