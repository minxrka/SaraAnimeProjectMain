import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import MainContentPageAnime from "./pages/MainPageContentAnime/mainpagecontentanime";
import ScrollToTop from "./utils/scrollToTop";
import { WatchAnime } from "./components/WatchAnime/watchanime";
import { RandomAnime } from "./pages/RandomAnime/RandomAnime";
import MainContentPageFilm from "./pages/MainPageContentFilm/mainpagecontentfilm";
import { Login } from "./pages/Login/login";
import { Registration } from "./pages/Registration/registration";
import { ErrorPage } from "./pages/ErrorPage/errorpage";
import Profile from "./pages/Profile/profile";
import CookieConsent from "react-cookie-consent";
import { AboutUs } from "./pages/AboutUs/aboutus";
import { FAQ } from "./pages/FAQ/faq";

function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop></ScrollToTop>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<MainContentPageAnime />} />
          <Route path="/watch" element={<WatchAnime />} />
          <Route path="/random" element={<RandomAnime />} />
          <Route path="/films" element={<MainContentPageFilm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <CookieConsent
          style={{
            background: "#5662D5F2",
            width: "460px",
            fontFamily: "Gotham Pro",
            textAlign: "left",
            alignItems: "center",
            borderRadius: "9px",
            marginBottom: "25px",
            marginLeft: "25px",
          }}
          buttonStyle={{
            color: "#fff",
            fontSize: "16px",
            fontFamily: "Gotham Pro",
            background: "transparent",
            border: "1px solid #992434",
            borderRadius: "8px",
          }}
          buttonText="Окей!"
          debug={true}
          expires={150} // expires in 150 days
          onAccept={() => console.log("User accepted cookie policy")}
        >
          Наш сайт использует Cookie, потому что они вкусные✨🍪!
        </CookieConsent>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
