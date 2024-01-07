import React from "react";
import Person from "../../img/trailer-photo/death note/79e1c247e1b703aed98a013e87c1ac79.jpg";

const AnimePerson = () => {
  return (
    <React.Fragment>
      <article className="block w-[180px] cursor-pointer hoverGeneralPerson transition-colors">
        <div className="">
          <img
            className="w-full object-cover rounded-[10px] h-[250px]"
            src={Person}
            alt=""
          />
        </div>
        <div className="mt-[15px]">
          <h1 className="text-[16px] font-GothamPro font-light text-white textwrap lineclampone">
            Лайт Ягами
          </h1>
          <p className="mt-[11px] text-whiteGray font-GothamPro font-light text-[14px]">
            Death note
          </p>
        </div>
      </article>
    </React.Fragment>
  );
};

export default AnimePerson;
