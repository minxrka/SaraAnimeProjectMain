import React from "react";
import { useCookies } from "react-cookie";
export default function Testingbg() {
  const [cookies, setCookie] = useCookies(["cookieConset"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  return (
    <div className="absolute top-0 left-0 w-[400px] bg-black">
      <p>asdasd</p>
      <button onclick={giveCookieConsent}>accept</button>
    </div>
  );
}
