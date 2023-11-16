import React from "react";
import BgVideo from "../../img/BgVideoAuth/girl.mp4";
import GirlForm from "../../img/logo/MainLogoSmall.svg";
import Logo from "../../img/logo/main-logo.svg";
import SocialVK from "../../img/icons/vk.svg";
import SocialDiscord from "../../img/icons/discord.svg";
import SocialShikimori from "../../img/icons/shikimori.svg";
import { NavLink } from "react-router-dom";
import { useCallback, useState } from "react";
import Input from "../../components/Input/Input.tsx";

export const Authentication = () => {
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [password, SetPassword] = useState("");

  const [variant, SetVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    SetVariant((currentVariant) =>
      currentVariant == "login" ? "register" : "login"
    );
  }, []);
  return (
    <div>
      <main className="grid grid-cols-[auto_700px] h-[100vh]">
        <section className="w-full relative">
          <NavLink to={"/"}>
            <img
              className="absolute top-5 left-[70px] cursor-pointer z-10"
              src={Logo}
              alt=""
            />
          </NavLink>
          <video
            className="w-full h-full object-cover"
            src={BgVideo}
            autoPlay
            muted
            loop
          ></video>
        </section>
        <section className="flex flex-col justify-center items-center px-[57px] w-full h-auto">
          <img
            className="mb-[30px]"
            width={163}
            height={163}
            src={GirlForm}
            alt=""
          />
          <form action="" className="w-full flex flex-col">
            <div className="gap-[30px] flex flex-col">
              {variant == "register" && (
                <Input
                  label="Email"
                  onChange={(ev: any) => SetEmail(ev.target.value)}
                  id="email"
                  type="email"
                  value={email}
                  required
                />
              )}
              <Input
                label="Логин"
                onChange={(ev: any) => SetName(ev.target.value)}
                id="name"
                value={name}
                required
              />
              <Input
                label="Пароль"
                onChange={(ev: any) => SetPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
                required
              />
            </div>
            <aside className="flex justify-between items-start">
              <div className="flex items-center gap-[5px] mt-[5px]">
                <input type="checkbox" id="cbx" className="hidden" />
                <label for="cbx" class="check">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                </label>
                <p className="text-[14px] font-GothamPro font-light text-white">
                  Запомнить меня
                </p>
              </div>
              <div className="relative cursor-pointer mt-[5px] items-center text-[14px] font-GothamPro font-light text-white after:absolute after:w-full after:h-[1px] after:left-0 after:-bottom-[3px] after:bg-white hover:text-cyberpunk after:hover:bg-cyberpunk transition-all">
                Забыли пароль?
              </div>
            </aside>
            <button className="bg-[#D6FE5080] mx-[24px] mt-[30px] py-[15px] text-center rounded-[10px] text-white font-GothamPro text-[20px] hover:bg-[#D6FE50B2] transition-all">
              Вход
            </button>
          </form>
          <h1 className="mt-[30px] mb-[30px] text-center text-[16px] font-GothamPro text-white">
            Вход через социальные сети
          </h1>
          <aside className="gap-[46px] flex justify-between flex-wrap px-[24px]">
            <div className="min-width-[90px] flex cursor-pointer gap-1 items-center border border-solid border-mainBlue px-[4px] py-[4px] rounded-[5px]">
              <img width={25} height={25} src={SocialVK} alt="" />
              <p className="text-[15px] font-GothamPro font-light text-white">
                Вконтакте
              </p>
            </div>
            <div className="flex cursor-pointer gap-1 items-center border border-solid border-mainBlue px-[4px] py-[4px] rounded-[5px]">
              <img width={25} height={25} src={SocialShikimori} alt="" />
              <p className="text-[15px] font-GothamPro font-light text-white">
                Shikimori
              </p>
            </div>
            <div className="w-[100px] flex cursor-pointer gap-1 items-center border border-solid border-mainBlue px-[4px] py-[4px] rounded-[5px]">
              <img width={25} height={25} src={SocialDiscord} alt="" />
              <p className="text-[15px] font-GothamPro font-light text-white">
                Discord
              </p>
            </div>
          </aside>
          <h1 className="mt-[30px] text-[16px] text-white font-GothamPro text-center">
            {variant == "login"
              ? "Еще нет аккаунта?"
              : "У вас уже есть аккаунт?"}
            <span
              className="cursor-pointer hover:text-cyberpunk"
              onClick={toggleVariant}
            >
              {variant == "login" ? " Регистрация" : " Вход"}
            </span>
          </h1>
        </section>
      </main>
    </div>
  );
};
