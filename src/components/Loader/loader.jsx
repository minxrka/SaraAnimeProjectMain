import React from "react";
import "./loader.css";
export const Loader = () => {
  return (
    <main className="flex justify-center items-center h-[100vh]">
      {/* <div class="sharingon">
        <div class="ring">
          <div class="to"></div>
          <div class="to"></div>
          <div class="to"></div>
          <div class="circle"></div>
        </div>
      </div> */}

      <div class="progress-loader">
        <div class="progress"></div>
      </div>
    </main>
  );
};
