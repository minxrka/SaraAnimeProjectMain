import React from "react";
import tiltGhoul from "../../img/other-content/ghoul.png";

const DefaultFavoriteAnime = () => {
  return (
    <div className="border-[2px] max-w-[271px] h-auto border-dashed border-[#332154] bg-[#4990E833] rounded-[20px]">
      <div className="h-full flex flex-col justify-center gap-[10px]">
        <h1 className="select-none text-center font-GothamPro text-white text-[18px] font-light">
          Пользователь еще не добавил любимые аниме...
        </h1>
        <div className="max-w-[150px] h-auto mx-auto">
          <img
            className="w-full mx-auto h-full select-none"
            src={tiltGhoul}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultFavoriteAnime;
