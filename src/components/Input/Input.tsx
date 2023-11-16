import React from "react";

interface InputProps {
  id: string;
  onChange: string;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id="email"
        placeholder=""
        className="w-full peer text-whiteGray font-GothamPro bg-transparent px-[9px] border border-solid border-cyberpunk rounded-[10px] h-[40px] placeholder:text-[14px] placeholder:font-GothamPro placeholder:font-light placeholder:text-whiteGray focus:border-solid focus:border-cyberpunk focus:shadow-[_0_0_0_4px_#D6FE504F] focus:border focus:outline-none"
      />
      <label
        className="absolute font-GothamPro text-md text-whiteGray font-light duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
