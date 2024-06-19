import React, { useEffect, useState } from "react";
import MainLogo from "../../img/logo/newLogo.svg";
import { Header } from "../../components/header/header";
import video from "../../img/other-content/howlBGMAIN.mp4";
import { NavLink } from "react-router-dom";
import "./aboutus.css";
import { Footer } from "../../components/footer/footer";

function AboutUs() {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = document.querySelector("video");
    if (isMuted) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  }, [isMuted]);
  return (
    <>
      <main>
        <div
          style={{ position: "relative", zIndex: 2 }}
          className="w-full min-h-[100vh] z-2"
        >
          <Header />
          <video
            playsinline
            style={{ position: "absolute", zIndex: 1, top: 0, left: 0 }}
            autoPlay
            loop
            className="object-cover w-full h-full"
            src={video}
          ></video>
          <aside className="containerButtonMute">
            <label class="cursor-pointer">
              <input
                className=""
                onClick={() => setIsMuted(!isMuted)}
                type="checkbox"
              ></input>
              <svg
                viewBox="0 0 576 512"
                height="1.3em"
                xmlns="http://www.w3.org/2000/svg"
                className="mute"
              ></svg>
              <svg
                viewBox="0 0 448 512"
                height="1.3em"
                xmlns="http://www.w3.org/2000/svg"
                className="voice"
              ></svg>
            </label>
          </aside>
          <div
            style={{ position: "relative", zIndex: 2 }}
            className="px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px] max-w-[1900px] mx-auto py-[30px]"
          >
            <div className="w-[250px] mx-auto mb-[30px]">
              <NavLink to="/">
                <img className=" EffectDropShadowLogo" src={MainLogo} />
              </NavLink>
            </div>
            <div className="px-[30px] py-[50px] glassEffect">
              <h1 className="mainText text-center font-Bluecurve text-white mb-[40px] text-[200px] xbig:text-[10px]">
                Anime with Sara
              </h1>
              <div className="flex justify-center duration-500">
                <p className="text-white font-GothamPro font-light mb-[40px] text-center max-w-[1100px] subTitleAboutUs">
                  <span className="font-medium">Anime with Sara</span> — это
                  уникальный сайт, предназначенный для просмотра аниме-контента
                  в уютной атмосфере. Здесь вы сможете наслаждаться любимыми
                  мультфильмами вместе с друзьями и близкими, делиться
                  впечатлениями и обсуждать понравившиеся эпизоды. Основная идея
                  развития сайта заключается в создании платформы, которая
                  предлагает не только развлекательный контент, но и возможность
                  изучения английского языка через просмотр аниме.
                </p>
              </div>
              <div className="flex gap-[90px] justify-center text-center flex-wrap md:gap-[50px] sm:gap-[30px]">
                <div>
                  <h1 className="mainText uppercase font-Bluecurve text-white resultNumbers">
                    600 тыс
                  </h1>
                  <p className="text-white font-GothamPro font-light text-[20px]">
                    пользователей в месяц
                  </p>
                </div>
                <div>
                  <h1 className="mainText uppercase font-Bluecurve text-white resultNumbers">
                    400 тыс
                  </h1>
                  <p className="text-white font-GothamPro font-light text-[20px]">
                    визитов в месяц
                  </p>
                </div>
                <div>
                  <h1 className="mainText uppercase font-Bluecurve text-white resultNumbers">
                    1 млн
                  </h1>
                  <p className="text-white font-GothamPro font-light text-[20px]">
                    просмотров в месяц
                  </p>
                </div>
                <div>
                  <h1 className="mainText uppercase font-Bluecurve text-white resultNumbers">
                    6 тыс
                  </h1>
                  <p className="text-white font-GothamPro font-light text-[20px]">
                    аниме на сайте
                  </p>
                </div>
              </div>
            </div>
            <section className="grid grid-cols-2 mt-[30px] gap-[30px] lg:grid-cols-1 duration-500">
              <div className="px-[30px] py-[50px] glassEffect">
                <h1 className="mainText uppercase font-Bluecurve text-white mb-[20px] titleAboutUs">
                  Чего{" "}
                  <mark style={{ backgroundColor: "#ab2533", color: "white" }}>
                    ждать
                  </mark>{" "}
                  дальше
                </h1>
                <p className="text-white font-GothamPro font-light text-[20px] subTitleAboutUs">
                  Мы планируем добавить вкладку «Обучение». Там вы сможете
                  изучать материалы и проходить тесты после просмотра эпизодов.
                  Также будут доступны субтитры на английском языке с
                  визуальными пояснениями, при нажатии на слово вы увидите
                  наглядный пример его употребления и т.д.
                </p>
              </div>
              <div className="px-[30px] py-[50px] glassEffect">
                <h1 className="mainText uppercase font-Bluecurve text-white mb-[20px] titleAboutUs">
                  Где ваше{" "}
                  <mark style={{ backgroundColor: "#ab2533", color: "white" }}>
                    приложение
                  </mark>
                </h1>
                <p className="text-white font-GothamPro font-light text-[20px] subTitleAboutUs">
                  У нас есть идеи по работе с приложением, но они пока
                  достаточно сырые для показа комьюнити. Как только мы будем
                  уверены, что этим действительно можно пользоваться без
                  каких-либо проблем мы покажем его в нашем Telegram чате
                </p>
              </div>
              <div className="px-[30px] py-[50px] glassEffect">
                <h1 className="mainText uppercase font-Bluecurve text-white mb-[20px] titleAboutUs">
                  Как вам{" "}
                  <mark style={{ backgroundColor: "#ab2533", color: "white" }}>
                    помочь
                  </mark>
                </h1>
                <p className="text-white font-GothamPro font-light text-[20px] subTitleAboutUs">
                  Мы всегда рады помощи фанатов и на данный момент нам нужны:
                  видео-монтажёр(ка), контент-мейкер(ша), сценарист(ка),
                  программист(ка), художник(ца) и модераторы. Если ты тот, кого
                  мы ищем - напиши нам в Telegram чате
                </p>
              </div>
              <div className="px-[30px] py-[50px] glassEffect">
                <h1 className="mainText uppercase font-Bluecurve text-white mb-[20px] titleAboutUs">
                  Хочу{" "}
                  <mark style={{ backgroundColor: "#ab2533", color: "white" }}>
                    больше
                  </mark>{" "}
                  информации
                </h1>
                <p className="text-white font-GothamPro font-light text-[20px] subTitleAboutUs">
                  Вся необходимая информация размещена на сайте и в нашем
                  Telegram-канале. Следите за новостями и подписывайтесь на наши
                  социальные сети, такие как Telegram, TikTok и YouTube.
                </p>
              </div>
            </section>
          </div>
          <section className="MainBlockButtonAboutUs lg:hidden">
            <div className="containerButtonMute">
              <label class="cursor-pointer">
                <input
                  className=""
                  onClick={() => setIsMuted(!isMuted)}
                  type="checkbox"
                ></input>
                <svg
                  viewBox="0 0 576 512"
                  height="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mute"
                >
                  <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path>
                </svg>
                <svg
                  viewBox="0 0 448 512"
                  height="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="voice"
                >
                  <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"></path>
                </svg>
              </label>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export default AboutUs;
