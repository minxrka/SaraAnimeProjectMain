import React from "react";
import { Header } from "../../components/header/header";
import baner from "../../img/test.jpg";
import user from "../../img/bg-anime-card/13d91efa294e8cdff7715d530d946237.jpg";
import achievements from "../../img/icons/onigiri.png";
import { Anime } from "../../components/animeItem/anime";
import prof from "../../img/other-content/photo_2023-12-15_18-57-01.jpg";
import AnimePerson from "../../img/trailer-photo/death note/79e1c247e1b703aed98a013e87c1ac79.jpg";
import { Footer } from "../../components/footer/footer";

const Profile = () => {
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
          <div className="relative max-w-full mx-auto h-[400px]">
            <img
              className="rounded-[15px] h-full object-cover w-full"
              src={baner}
              alt=""
            />
            <img
              className="absolute top-[270px] left-0 w-[220px] h-[220px] md:h-[100px] object-cover rounded-[15px]"
              src={prof}
              alt=""
            />
          </div>
          <div className="">
            <div className="flex justify-between items-center ml-[250px] mt-[40px]">
              <div>
                <h1 className="text-[28px] font-GothamPro text-white">
                  Minxrka
                </h1>
              </div>
              <div className="flex gap-[20px]">
                <div className="bg-[#4990E8] cursor-pointer hover:bg-[#3287F0] transition-colors w-[50px] h-[50px] rounded-[50%]">
                  <img
                    className="w-[30px] mx-auto mt-[9px] h-[30px]"
                    src={achievements}
                    alt=""
                  />
                </div>
                <div className="bg-[#4990E8] cursor-pointer hover:bg-[#3287F0] transition-colors w-[50px] h-[50px] rounded-[50%]">
                  <img
                    className="w-[30px] mx-auto mt-[9px] h-[30px]"
                    src={achievements}
                    alt=""
                  />
                </div>
                <div className="bg-[#4990E8] cursor-pointer hover:bg-[#3287F0] transition-colors w-[50px] h-[50px] rounded-[50%]">
                  <img
                    className="w-[30px] mx-auto mt-[9px] h-[30px]"
                    src={achievements}
                    alt=""
                  />
                </div>
                <div className="bg-[#4990E8] cursor-pointer hover:bg-[#3287F0] transition-colors w-[50px] h-[50px] rounded-[50%]">
                  <img
                    className="w-[30px] mx-auto mt-[9px] h-[30px]"
                    src={achievements}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-[40px] w-full h-[1px] bg-[#4990E8]"></div>
        <section>
          <h1 className="text-white mt-[30px] mb-[30px] text-[40px] font-AnimeAcev02Bold xl:text-[35px] lg:text-[30px] textwrap">
            Любимые аниме
          </h1>
          <div className="grid grid-cols-[70%_minmax(auto,_1fr)] gap-[30px]">
            <div className="flex gap-[30px]">
              <Anime />
              <Anime />
              <Anime />
            </div>
            <div className="bg-[#4990E84D] rounded-[20px] px-[25px] py-[25px]">
              <h1 className="text-white mb-[30px] text-[32px] font-AnimeAcev02Bold xl:text-[35px] lg:text-[30px] textwrap">
                Друзья
              </h1>
              <div className="grid grid-rows-[100px_minmax(100px,_1fr)] gap-[20px]">
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
                <button className="text-white font-GothamPro px-[22px] py-[14px] font-light border border-solid border-cyberpunk rounded-[10px] max-w-[200px] text-center mx-auto hover:bg-[#D6FE5026] transition-colors">
                  Смотреть всех
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-[40px] w-full h-[1px] bg-[#4990E8]"></div>
        <section>
          <h1 className="text-white mt-[30px] mb-[30px] text-[40px] font-AnimeAcev02Bold xl:text-[35px] lg:text-[30px] textwrap">
            Любимые персонажи
          </h1>
          <section className="flex flex-wrap justify-between">
            <article className="block w-[180px] cursor-pointer hoverGeneralPerson transition-colors">
              <div className="">
                <img
                  className="w-full object-cover rounded-[10px] h-[250px]"
                  src={AnimePerson}
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
          </section>
        </section>
        <div className="mt-[40px] w-full h-[1px] bg-[#4990E8]"></div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
