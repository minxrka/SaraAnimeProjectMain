import React from "react";

export const Loader = () => {
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <div className="absolute w-full h-full text-white z-50">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-14 h-14 border-4 animate-spin border-solid border-transparent border-t-[#fecce7]/90 rounded-full"></div>
        </div>
      </div>
    </main>
  );
};
