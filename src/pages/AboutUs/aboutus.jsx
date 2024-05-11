import React, { useEffect, useState } from "react";
import MainLogo from "../../img/logo/newLogo.svg";
import { Header } from "../../components/header/header";
import video from "../../img/other-content/howlBGMAIN.mp4";
import { NavLink } from "react-router-dom";
import "./aboutus.css";
import { Footer } from "../../components/footer/footer";

export const AboutUs = () => {
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
          className="w-full h-[100vh] z-2"
        >
          <Header />
          <video
            style={{ position: "absolute", zIndex: 1, top: 0, left: 0 }}
            autoPlay
            loop
            className="object-cover w-full h-[100vh]"
            src={video}
          ></video>

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
              <h1 className="mainText text-center uppercase font-Bluecurve text-white mb-[40px] text-[200px] xbig:text-[10px]">
                ИЗУЧЕНИЕ АНГЛИЙСКОГО ЯЗЫКА <br></br> И ОБСУЖДЕНИЕ АНИМЕ
              </h1>
              <div className="flex justify-center">
                <p className="text-white font-GothamPro font-light text-[20px] mb-[40px] text-center max-w-[1100px]">
                  <span className="font-medium">Anime with Sara</span> —
                  Мультимедийный сайт, который не только позволяет просматривать
                  аниме, но и помогает изучать английский язык. На нашем сайте
                  вы найдете множество видео, аудио и текстовых материалов на
                  английском языке, которые помогут вам улучшить свои навыки
                  говорения, чтения и письма. Оставайтесь с нами и
                  присоединяйтесь к нашему сообществу любителей аниме и
                  английского языка!
                </p>
              </div>
              <div className="flex gap-[90px] justify-center text-center">
                <div>
                  <h1 className="mainText uppercase font-Bluecurve text-white ">
                    600 тыс
                  </h1>
                  <p className="text-white font-GothamPro font-light text-[20px]">
                    пользователей в месяц
                  </p>
                </div>
                <div>
                  <h1 className="mainText uppercase font-Bluecurve text-white">
                    400 тыс
                  </h1>
                  <p className="text-white font-GothamPro font-light text-[20px]">
                    визитов в месяц
                  </p>
                </div>
                <div>
                  <h1 className="mainText uppercase font-Bluecurve text-white">
                    1 млн
                  </h1>
                  <p className="text-white font-GothamPro font-light text-[20px]">
                    просмотров в месяц
                  </p>
                </div>
                <div>
                  <h1 className="mainText uppercase font-Bluecurve text-white">
                    6 тыс
                  </h1>
                  <p className="text-white font-GothamPro font-light text-[20px]">
                    аниме на сайте
                  </p>
                </div>
              </div>
            </div>
            <section className="grid grid-cols-2 mt-[30px] gap-[30px]">
              <div className="px-[30px] py-[50px] glassEffect">
                <h1 className="mainText uppercase font-Bluecurve text-white mb-[20px]">
                  Чего{" "}
                  <mark style={{ backgroundColor: "#987AD8", color: "white" }}>
                    ждать
                  </mark>{" "}
                  дальше
                </h1>
                <p className="text-white font-GothamPro font-light text-[20px]">
                  На данный момент мы собираем базу манги и ранобэ для того, что
                  объединить все возможные медиа в одном сайте. Просто
                  представьте себе, что вы можете посмотреть интересный сериал и
                  затем перейти к чтению манги с момента, где остановились
                  смотреть сериал. Круто? Не то слово!
                </p>
              </div>
              <div className="px-[30px] py-[50px] glassEffect">
                <h1 className="mainText uppercase font-Bluecurve text-white mb-[20px]">
                  Где ваше{" "}
                  <mark style={{ backgroundColor: "#987AD8", color: "white" }}>
                    приложение
                  </mark>
                </h1>
                <p className="text-white font-GothamPro font-light text-[20px]">
                  Мы активно разрабатываем приложение для просмотра аниме, но
                  оно пока достаточно сырое для показа комьюнити. Как только мы
                  будем уверены, что этим действительно можно пользоваться без
                  каких-либо проблем мы покажем его в нашем Telegram чате
                </p>
              </div>
              <div className="px-[30px] py-[50px] glassEffect">
                <h1 className="mainText uppercase font-Bluecurve text-white mb-[20px]">
                  Как вам{" "}
                  <mark style={{ backgroundColor: "#987AD8", color: "white" }}>
                    помочь
                  </mark>
                </h1>
                <p className="text-white font-GothamPro font-light text-[20px]">
                  Мы всегда рады помощи фанатов и на данный момент нам нужны:
                  видео-монтажёр(ка), контент-мейкер(ша), сценарист(ка),
                  программист(ка), художник(ца) и модераторы. Если ты тот, кого
                  мы ищем - напиши нам в Telegram чате
                </p>
              </div>
              <div className="px-[30px] py-[50px] glassEffect">
                <h1 className="mainText uppercase font-Bluecurve text-white mb-[20px]">
                  Хочу{" "}
                  <mark style={{ backgroundColor: "#987AD8", color: "white" }}>
                    больше
                  </mark>{" "}
                  информации
                </h1>
                <p className="text-white font-GothamPro font-light text-[20px]">
                  Администраторы всегда рады поговорить по душам с приятным
                  собеседником, пиши, звони и мы всегда ответим! Ну, а если нет
                  - разрешаем нас пнуть!
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="container">
          <label
            style={{
              position: "absolute",
              zIndex: 10,
              bottom: 700,
              right: 230,
            }}
            class="cursor-pointer"
          >
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
      </main>
    </>
  );
};
