import React, { useEffect, useState } from "react";
import BgVideo from "../../img/BgVideoAuth/Odin_iz_otvergnutykh.mp4";
import BgImage from "../../img/BgVideoAuth/Odin_iz_otvergnutykh.jpg";
import GirlForm from "../../img/logo/MiniLogoUpdate.png";
import Logo from "../../img/logo/newLogo.svg";
import SocialVK from "../../img/icons/vk.svg";
import SocialDiscord from "../../img/icons/discord.svg";
import SocialShikimori from "../../img/icons/shikimori.svg";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./registration.css";
function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => alert(JSON.stringify(data));

  const password = watch("password");

  /*   При слабом подключении к сайту будет отображатся картинка вместо видео */

  const [connectionType, setConnectionType] = useState("");

  useEffect(() => {
    setConnectionType(navigator.connection.effectiveType);
  }, []);

  /*   При слабом подключении к сайту будет отображатся картинка вместо видео */

  return (
    <div>
      <main className="MainGridAuth h-[100vh]">
        <section className="w-full relative LeftSideAuth">
          {connectionType === "4g" ? (
            <video
              playsinline
              className="w-full h-full object-cover rounded-r-[80px]"
              src={BgVideo}
              autoPlay
              muted
              loop
            ></video>
          ) : (
            <img
              className="w-full h-full object-cover"
              src={BgImage}
              alt="Fallback"
            />
          )}
        </section>
        <section className="flex RigthSideAuth flex-col justify-center items-center px-[57px] sm:px-[15px] w-full h-auto sm:py-[50px]">
          <NavLink to={"/"}>
            <div className="ClampingWidthGirlForm h-auto">
              <img className="mb-[30px] w-full h-full" src={GirlForm} alt="" />
            </div>
          </NavLink>
          <form
            action=""
            className="w-full flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="gap-[20px] flex flex-col">
              <div className="relative">
                <input
                  className={`mb-[4px] w-full text-whiteGray font-GothamPro bg-transparent px-[9px] border border-solid border-Blue500 rounded-[10px] h-[40px] placeholder:text-[14px] placeholder:font-GothamPro placeholder:font-light placeholder:text-whiteGray focus:border-solid focus:border-Blue500 focus:shadow-[_0_0_0_4px_#8DA4EC4F] focus:border focus:outline-none peer ${
                    errors.login &&
                    "  focus:border-[#da4f4a] focus:shadow-[_0_0_0_4px_#DA4F4A4F] focus:border focus:outline-none"
                  }`}
                  placeholder=""
                  id="login"
                  type="text"
                  name="login"
                  {...register("login", {
                    required: "Поле не должно быть пустым",
                    minLength: {
                      value: 5,
                      message: "Логин не может быть менее 5 символов",
                    },
                    maxLength: {
                      value: 12,
                      message: "Логин не может быть более 12 символов",
                    },
                  })}
                />
                <label className="absolute font-GothamPro text-md text-whiteGray font-light duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                  Логин
                </label>
                {errors.login && (
                  <span className="mt-8 text-[15px] font-GothamPro font-light text-[#ff2b2b]">
                    {errors.login.message}
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  className={`mb-[4px] w-full text-whiteGray font-GothamPro bg-transparent px-[9px] border border-solid border-Blue500 rounded-[10px] h-[40px] placeholder:text-[14px] placeholder:font-GothamPro placeholder:font-light placeholder:text-whiteGray focus:border-solid focus:border-Blue500 focus:shadow-[_0_0_0_4px_#8DA4EC4F] focus:border focus:outline-none peer ${
                    errors.email &&
                    "  focus:border-[#da4f4a] focus:shadow-[_0_0_0_4px_#DA4F4A4F] focus:border focus:outline-none"
                  }`}
                  placeholder=""
                  id="email"
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Поле не должно быть пустым",
                  })}
                />
                <label className="absolute font-GothamPro text-md text-whiteGray font-light duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                  Email
                </label>
                {errors.email && (
                  <span className="mt-8 text-[15px] font-GothamPro font-light text-[#ff2b2b]">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  className={`mb-[4px] w-full text-whiteGray font-GothamPro bg-transparent px-[9px] border border-solid border-Blue500 rounded-[10px] h-[40px] placeholder:text-[14px] placeholder:font-GothamPro placeholder:font-light placeholder:text-whiteGray focus:border-solid focus:border-Blue500 focus:shadow-[_0_0_0_4px_#8DA4EC4F] focus:border focus:outline-none peer ${
                    errors.login &&
                    "  focus:border-[#da4f4a] focus:shadow-[_0_0_0_4px_#DA4F4A4F] focus:border focus:outline-none"
                  }`}
                  placeholder=""
                  id="password"
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "Поле не должно быть пустым",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                      message:
                        "Пароль должен содержать одну заглавную букву, одно числовое значение и один специальный символ",
                    },

                    minLength: {
                      value: 5,
                      message: "Пароль не может быть менее 7 символов",
                    },
                    maxLength: {
                      value: 17,
                      message: "Пароль не может быть более 17 символов",
                    },
                  })}
                />
                <label className="absolute font-GothamPro text-md text-whiteGray font-light duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                  Пароль
                </label>
                {errors.password && (
                  <span className="mt-8 text-[15px] font-GothamPro font-light text-[#ff2b2b]">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  className={`mb-[4px] w-full text-whiteGray font-GothamPro bg-transparent px-[9px] border border-solid border-Blue500 rounded-[10px] h-[40px] placeholder:text-[14px] placeholder:font-GothamPro placeholder:font-light placeholder:text-whiteGray focus:border-solid focus:border-Blue500 focus:shadow-[_0_0_0_4px_#8DA4EC4F] focus:border focus:outline-none peer ${
                    errors.confirmPassword &&
                    "  focus:border-[#da4f4a] focus:shadow-[_0_0_0_4px_#DA4F4A4F] focus:border focus:outline-none"
                  }`}
                  placeholder=""
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Поле не должно быть пустым",
                    validate: (value) =>
                      value === password || "Пароли не совподают",
                  })}
                />
                <label className="absolute font-GothamPro text-md text-whiteGray font-light duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                  Подтверждение
                </label>
                {errors.confirmPassword && (
                  <span className="mt-8 text-[15px] font-GothamPro font-light text-[#ff2b2b]">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
            <aside className="flex justify-between items-start">
              <div className="flex items-center gap-[5px] mt-[5px]">
                <p className="font-GothamPro font-light text-white AuthClampTextAccept select-none text-center">
                  Продолжая, вы соглашаетесь с нашей политикой
                  конфиденциальности и пользовательского соглашения
                </p>
              </div>
            </aside>
            <button className="bg-[#966FCF85] mx-[24px] mt-[30px] py-[15px] text-center rounded-[10px] text-white font-GothamPro text-[20px] hover:bg-[#966FCFB2] transition-all">
              Регистрация
            </button>
          </form>
          <h1 className="mt-[30px] mb-[30px] text-center text-[16px] font-GothamPro text-white">
            Вход через социальные сети
          </h1>
          <aside className="gap-[46px] duration-500 flex justify-between flex-wrap px-[24px] sm:flex-col sm:justify-center sm:items-center xl:flex-col xl:justify-center xl:gap-[20px] items-center">
            <div className="w-[125px] flex gap-2 cursor-pointer text-center items-center border border-solid border-Blue500 px-[5px] py-[8px] rounded-[5px]">
              <div>
                <img
                  className=""
                  width={25}
                  height={25}
                  src={SocialVK}
                  alt=""
                />
              </div>
              <p className="text-[15px] font-GothamPro font-light text-white">
                Вконтакте
              </p>
            </div>
            <div className="w-[125px] flex gap-2 cursor-pointer text-center items-center border border-solid border-Blue500 px-[5px] py-[8px] rounded-[5px]">
              <div>
                <img
                  className=""
                  width={25}
                  height={25}
                  src={SocialShikimori}
                  alt=""
                />
              </div>
              <p className="text-[15px] font-GothamPro font-light text-white">
                Shikimori
              </p>
            </div>
            <div className="w-[125px] flex gap-2 cursor-pointer text-center items-center border border-solid border-Blue500 px-[5px] py-[8px] rounded-[5px]">
              <div>
                <img
                  className=""
                  width={25}
                  height={25}
                  src={SocialDiscord}
                  alt=""
                />
              </div>
              <p className="text-[15px] font-GothamPro font-light text-white">
                Discord
              </p>
            </div>
          </aside>
          <h1 className="mt-[30px] text-[16px] text-white font-GothamPro text-center">
            Уже есть аккаунт?
            <NavLink to={"/login"}>
              <span className="cursor-pointer hover:text-cyberpunk ml-1">
                Войти
              </span>
            </NavLink>
          </h1>
        </section>
      </main>
    </div>
  );
}
export default Registration;
