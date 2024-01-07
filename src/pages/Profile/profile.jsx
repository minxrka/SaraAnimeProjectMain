import React from "react";
import "./profile.css";
import { Header } from "../../components/header/header";
import banner from "../../img/test.jpg";
import user from "../../img/bg-anime-card/13d91efa294e8cdff7715d530d946237.jpg";
import { Anime } from "../../components/animeItem/anime";
import prof from "../../img/other-content/photo_2023-12-15_18-57-01.jpg";
import LogOut from "../../img/other-content/svg-profile/logout.svg";
import Pencil from "../../img/other-content/svg-profile/pencil.svg";
import { useState, useEffect, useRef } from "react";
import Dialog from "@mui/material/Dialog";

import { Footer } from "../../components/footer/footer";
import AnimePerson from "../../components/animePerson/animePerson";
import DefaultFavoriteAnime from "../../components/defaultFavoriteAnime/defaultFavoriteAnime";
import AddedFavoriteAnime from "../../components/AddedFavoriteAnime/addedFavoriteAnime";
import DefaultFavoritePerson from "../../components/defaultFavoritePerson/DefaultFavoritePerson";

const Profile = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isHoveringBanner, setIsHoveringBanner] = useState(false);

  const handleMouseOver = () => {
    setIsHoveringBanner(true);
  };

  const handleMouseOut = () => {
    setIsHoveringBanner(false);
  };

  const inputRef = useRef(null);
  const [image, SetImage] = useState(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    SetImage(event.target.files[0]);
  };

  return (
    <div className="">
      <Header />
      <main className="px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px] max-w-[1900px] mx-auto">
        <section className="">
          <aside className="bg-[#754BB6FC] max-w-[644px] mx-auto flex rounded-[40px] mt-[50px]">
            <div className="py-[12px] cursor-pointer px-[25px] active:bg-[#4990E8] hover:bg-[#4990E84F] rounded-[40px] w-[161px] text-center transition-all">
              <h1 className="text-white font-GothamPro font-light text-[20px] select-none">
                Профиль
              </h1>
            </div>
            <div className="py-[12px] cursor-pointer px-[25px] active:bg-[#4990E8] hover:bg-[#4990E84F] rounded-[40px] w-[161px] text-center transition-all">
              <h1 className="text-white font-GothamPro font-light text-[20px] select-none">
                Друзья
              </h1>
            </div>
            <div className="py-[12px] cursor-pointer px-[25px] active:bg-[#4990E8] hover:bg-[#4990E84F] rounded-[40px] w-[161px] text-center transition-all">
              <h1 className="text-white font-GothamPro font-light text-[20px] select-none">
                Чаты
              </h1>
            </div>
            <div className="py-[12px] cursor-pointer px-[25px] active:bg-[#4990E8] hover:bg-[#4990E84F] rounded-[40px] w-[161px] text-center transition-all">
              <h1 className="text-white font-GothamPro font-light text-[20px] select-none">
                Коллекция
              </h1>
            </div>
          </aside>
        </section>
        <section className="mt-[43px]">
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="relative max-w-full mx-auto h-[400px]"
          >
            {image ? (
              <img
                className="rounded-[15px] h-full object-cover w-full"
                src={URL.createObjectURL(image)}
                alt=""
              />
            ) : (
              <img
                className="rounded-[15px] h-full object-cover w-full"
                src={banner}
                alt=""
              />
            )}

            {isHoveringBanner && (
              <button
                onClick={handleImageClick}
                className="flex gap-[7px] absolute top-[30px] right-[30px] items-center bg-[#52357DB2] hover:bg-[#52357DCC] px-[10px] py-[7px] rounded-[10px]"
              >
                <img className="w-[20px] h-[20px]" src={Pencil} alt="pencil" />

                <input
                  className="hidden"
                  ref={inputRef}
                  onChange={handleImageChange}
                  type="file"
                />
                <h1 className="text-white font-GothamPro font-light text-[20px]">
                  Сменить обложку
                </h1>
              </button>
            )}
          </div>

          <div className="">
            <div className="flex justify-between items-center mt-[40px]">
              <div className="flex gap-[20px] items-center z-20">
                <img
                  className="mt-[-150px] w-[220px] h-[220px] object-cover rounded-[15px]"
                  src={prof}
                  alt=""
                />
                <h1 className="lowercase text-[28px] font-GothamPro text-white">
                  MINXRKA
                </h1>
              </div>
              <div>
                <button
                  onClick={handleClickOpen}
                  className="bg-[#ff2b2bc0] cursor-pointer hover:bg-[#ff3030] transition-colors w-[50px] h-[50px] rounded-[50%]"
                >
                  <img
                    className="w-[30px] mx-auto h-[30px] mr-[7px] fill-white"
                    src={LogOut}
                    alt=""
                  />
                </button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  className="backdrop-blur-[5px] transition-all"
                >
                  <div className="w-[330px] h-[110px] bg-[#52357DB2] overflow-hidden">
                    <h1 className="text-white mt-[10px] text-center font-GothamPro font-light text-[20px]">
                      Вы действительно хотите выйти?
                    </h1>
                    <div className="mt-[10px] w-full h-[1px] bg-[#4990E8]"></div>
                    <div className="flex justify-between h-full items-center">
                      <button className="text-center w-[165px] h-full bg-[#33215473] hover:bg-[#ff3030b0] transition-colors">
                        <h1 className="text-white font-Bluecurve uppercase text-[20px] mt-[-39px]">
                          да
                        </h1>
                      </button>
                      <div className="w-[1px] h-full bg-[#4990E8]"></div>
                      <button
                        onClick={handleClose}
                        className="text-center w-[165px] h-full bg-[#33215473] hover:bg-[#332154A1] transition-colors"
                      >
                        <h1 className="text-white font-Bluecurve uppercase text-[20px] mt-[-39px]">
                          нет
                        </h1>
                      </button>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-[40px] w-full h-[1px] bg-[#4990E8]"></div>
        <section>
          <h1 className="text-white mt-[30px] mb-[30px] text-[40px] uppercase font-Bluecurve xl:text-[35px] lg:text-[30px] textwrap">
            Любимые аниме
          </h1>
          <div className="grid grid-cols-[70%_minmax(auto,_1fr)] gap-[30px] xl:grid-cols-1">
            <div className="flex gap-[30px]">
              <Anime />
              <DefaultFavoriteAnime />
              <AddedFavoriteAnime />
            </div>
            <div className="bg-[#4990E84D] rounded-[20px] px-[25px] py-[20px] max-w-[400px]">
              <h1 className="text-white mb-[20px] text-[32px] uppercase font-Bluecurve xl:text-[35px] lg:text-[30px] textwrap">
                Друзья
              </h1>
              <div className="relative grid grid-rows-[100px_minmax(100px,_1fr)] gap-[20px]">
                <div className="flex justify-between">
                  <div className="text-center cursor-pointer w-[100px] h-auto justify-center">
                    <img
                      className="w-[70px] h-[70px] mx-auto object-cover rounded-[20px]"
                      src={user}
                      alt=""
                    />
                    <p className="text-white mt-[7px] break-words line-clamp-1 text-center font-GothamPro text-[16px] font-light">
                      12345678910
                    </p>
                  </div>
                  <div className="text-center cursor-pointer w-[100px] h-auto justify-center">
                    <img
                      className="w-[70px] h-[70px] mx-auto object-cover rounded-[20px]"
                      src={user}
                      alt=""
                    />
                    <p className="text-white mt-[7px] break-words line-clamp-1 text-center font-GothamPro text-[16px] font-light">
                      12345678910
                    </p>
                  </div>
                  <div className="text-center cursor-pointer w-[100px] h-auto justify-center">
                    <img
                      className="w-[70px] h-[70px] mx-auto object-cover rounded-[20px]"
                      src={user}
                      alt=""
                    />
                    <p className="text-white mt-[7px] break-words line-clamp-1 text-center font-GothamPro text-[16px] font-light">
                      12345678910
                    </p>
                  </div>
                </div>
                <div className="absolute top-[105px] w-full h-[1px] bg-[#4990E8]"></div>
                <div className="flex justify-between">
                  <div className="text-center cursor-pointer w-[100px] h-auto justify-center">
                    <img
                      className="w-[70px] h-[70px] mx-auto object-cover rounded-[20px]"
                      src={user}
                      alt=""
                    />
                    <p className="text-white mt-[7px] break-words line-clamp-1 text-center font-GothamPro text-[16px] font-light">
                      12345678910
                    </p>
                  </div>

                  <div className="text-center cursor-pointer w-[100px] h-auto justify-center">
                    <img
                      className="w-[70px] h-[70px] mx-auto object-cover rounded-[20px]"
                      src={user}
                      alt=""
                    />
                    <p className="text-white mt-[7px] break-words line-clamp-1 text-center font-GothamPro text-[16px] font-light">
                      12345678910
                    </p>
                  </div>
                  <div className="text-center cursor-pointer w-[100px] h-auto justify-center">
                    <img
                      className="w-[70px] h-[70px] mx-auto object-cover rounded-[20px]"
                      src={user}
                      alt=""
                    />
                    <p className="text-white mt-[7px] break-words line-clamp-1 text-center font-GothamPro text-[16px] font-light">
                      12345678910
                    </p>
                  </div>
                </div>
                <button className="text-white font-GothamPro px-[22px] py-[14px] font-light border border-solid border-cyberpunk rounded-[15px] max-w-[200px] text-center mx-auto hover:bg-[#D6FE5026] transition-colors">
                  Смотреть всех
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-[40px] w-full h-[1px] bg-[#4990E8]"></div>
        <section>
          <h1 className="text-white mt-[30px] mb-[30px] text-[40px] uppercase font-Bluecurve xl:text-[35px] lg:text-[30px] textwrap">
            Любимые персонажи
          </h1>
          <section className="flex flex-wrap gap-[33px]">
            <AnimePerson />
            <DefaultFavoritePerson />
          </section>
        </section>
        <div className="mt-[40px] w-full h-[1px] bg-[#4990E8]"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
