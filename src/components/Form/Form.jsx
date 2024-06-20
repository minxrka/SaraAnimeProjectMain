import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Form = ({ title, handleClick }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    handleClick(data.email, data.password);
  };
  return (
    <>
      <section className="gap-[20px] flex flex-col">
        <div className="relative">
          <input
            className={`mb-[4px] w-full text-whiteGray font-GothamPro bg-transparent px-[9px] border border-solid border-Blue500 rounded-[10px] h-[40px] placeholder:text-[14px] placeholder:font-GothamPro placeholder:font-light placeholder:text-whiteGray focus:border-solid focus:border-Blue500 focus:shadow-[_0_0_0_4px_#8DA4EC4F] focus:border focus:outline-none peer ${
              errors.email &&
              "  focus:border-[#da4f4a] focus:shadow-[_0_0_0_4px_#DA4F4A4F] focus:border focus:outline-none"
            }`}
            placeholder=""
            type="email"
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
              errors.password &&
              "  focus:border-[#da4f4a] focus:shadow-[_0_0_0_4px_#DA4F4A4F] focus:border focus:outline-none"
            }`}
            placeholder=""
            type="password"
            {...register("password", {
              required: "Поле не должно быть пустым",
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
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
      </section>

      {/* <aside className="flex justify-between items-start">
        <div className="flex items-center gap-[5px] mt-[5px]"></div>
        <div className="relative cursor-pointer mt-[5px] items-center text-[14px] font-GothamPro font-light text-white after:absolute after:w-full after:h-[1px] after:left-0 after:-bottom-[3px] after:bg-white hover:text-cyberpunk after:hover:bg-cyberpunk transition-all">
          Забыли пароль?
        </div>
      </aside>

      <aside className="flex justify-between items-start">
        <div className="flex items-center gap-[5px] mt-[5px]">
          <p className="font-GothamPro font-light text-white AuthClampTextAccept select-none text-center">
            Продолжая, вы соглашаетесь с нашей политикой конфиденциальности и
            пользовательского соглашения
          </p>
        </div>
      </aside> */}

      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-[#966FCF85] mx-[24px] mt-[30px] py-[15px] text-center rounded-[10px] text-white font-GothamPro text-[20px] hover:bg-[#966FCFB2] transition-all"
      >
        {title}
      </button>
    </>
  );
};
export { Form };
