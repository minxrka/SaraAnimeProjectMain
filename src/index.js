import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoggedUsers from "./pages/LoggedInUsers/loggedinusers";
import NotRegistred from "./pages/NotRegistredUsers/notregistredusers";
import MainContentPageAnime from "./pages/MainPageContentAnime/mainpagecontentanime";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <NotRegistred /> */}
    {/* <LoggedUsers /> */}
    <MainContentPageAnime />
  </React.StrictMode>
);
