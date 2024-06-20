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
import "./login.css";

import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../../components/Form/Form";

function Login() {
  /*   При слабом подключении к сайту будет отображатся картинка вместо видео */

  const [connectionType, setConnectionType] = useState("");

  useEffect(() => {
    setConnectionType(navigator.connection.effectiveType);
  }, []);

  /*   При слабом подключении к сайту будет отображатся картинка вместо видео */

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/profile");
      })
      .catch(console.error);
  };

  return (
    <>
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
              className="w-full h-full object-cover rounded-r-[80px]"
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
          <section className="w-full flex flex-col">
            <Form title="Вход" handleClick={handleLogin} /* isLogin={true} */ />
          </section>
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
            Еще нет аккаунта?
            <NavLink to={"/registration"}>
              <span className="cursor-pointer hover:text-cyberpunk ml-1">
                Зарегистрируйтесь
              </span>
            </NavLink>
          </h1>
        </section>
      </main>
    </>
  );
}
export default Login;
