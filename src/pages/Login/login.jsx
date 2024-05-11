import React from "react";
import BgVideo from "../../img/BgVideoAuth/Odin_iz_otvergnutykh.mp4";
import GirlForm from "../../img/logo/MainLogoSmall.svg";
import Logo from "../../img/logo/newLogo.svg";
import SocialVK from "../../img/icons/vk.svg";
import SocialDiscord from "../../img/icons/discord.svg";
import SocialShikimori from "../../img/icons/shikimori.svg";
import { NavLink } from "react-router-dom";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

export const Login = () => {
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div>
      <main className="grid grid-cols-[auto_700px] h-[100vh]">
        <section className="w-full relative">
          <NavLink to={"/"}>
            <div className="absolute top-5 left-[70px] z-10 max-w-[250px]">
              <img className="w-full h-auto cursor-pointer" src={Logo} alt="" />
            </div>
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
                  className={`mb-[4px] w-full text-whiteGray font-GothamPro bg-transparent px-[9px] border border-solid border-Blue500  rounded-[10px] h-[40px] placeholder:text-[14px] placeholder:font-GothamPro placeholder:font-light placeholder:text-whiteGray focus:border-solid focus:border-Blue500 focus:shadow-[_0_0_0_4px_#8DA4EC4F] focus:border focus:outline-none peer ${
                    errors.password &&
                    "focus:border-[#da4f4a] focus:shadow-[_0_0_0_4px_#DA4F4A4F] focus:border focus:outline-none"
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
                      message: "Неверный логин или пароль",
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
            </div>
            <aside className="flex justify-between items-start">
              <div className="flex items-center gap-[5px] mt-[5px]">
                <input type="checkbox" id="cbx" className="hidden" />
                <label for="cbx" class="check">
                  <svg width="17px" height="17px" viewBox="0 0 18 18">
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
            <button className="bg-[#966FCF85] mx-[24px] mt-[30px] py-[15px] text-center rounded-[10px] text-white font-GothamPro text-[20px] hover:bg-[#966FCFB2] transition-all">
              Войти
            </button>
          </form>
          <h1 className="mt-[30px] mb-[30px] text-center text-[16px] font-GothamPro text-white">
            Вход через социальные сети
          </h1>
          <aside className="gap-[46px] flex justify-between flex-wrap px-[24px]">
            <div className="min-width-[90px] flex cursor-pointer gap-1 items-center border border-solid border-Blue500 px-[4px] py-[4px] rounded-[5px]">
              <img width={25} height={25} src={SocialVK} alt="" />
              <p className="text-[15px] font-GothamPro font-light text-white">
                Вконтакте
              </p>
            </div>
            <div className="flex cursor-pointer gap-1 items-center border border-solid border-Blue500 px-[4px] py-[4px] rounded-[5px]">
              <img width={25} height={25} src={SocialShikimori} alt="" />
              <p className="text-[15px] font-GothamPro font-light text-white">
                Shikimori
              </p>
            </div>
            <div className="w-[100px] flex cursor-pointer gap-1 items-center border border-solid border-Blue500 px-[4px] py-[4px] rounded-[5px]">
              <img width={25} height={25} src={SocialDiscord} alt="" />
              <p className="text-[15px] font-GothamPro font-light text-white">
                Discord
              </p>
            </div>
          </aside>
          <h1 className="mt-[30px] text-[16px] text-white font-GothamPro text-center">
            Еще нет аккаунта?
            <NavLink to={"/registration"}>
              <span className="cursor-pointer hover:text-cyberpunk ml-1">
                Зарегистрируйтесь
              </span>
            </NavLink>
          </h1>
        </section>
      </main>
    </div>
  );
};
