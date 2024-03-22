import React from "react";
import { useCookies } from "react-cookie";
export default function CookiesAlert() {
  const [cookies, setCookie] = useCookies(["cookieConset"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  return (
    <div>
      <p>asdasd</p>
      <button onclick={giveCookieConsent}>accept</button>
    </div>
  );
}
