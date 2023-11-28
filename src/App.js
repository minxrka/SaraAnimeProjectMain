import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import MainContentPageAnime from "./pages/MainPageContentAnime/mainpagecontentanime";
import ScrollToTop from "./utils/scrollToTop";
import { WatchAnime } from "./components/WatchAnime/watchanime";
import { HeaderLoggedUser } from "./components/HeaderLoggedUsers/headerloggedusers";
import { RandomAnime } from "./pages/RandomAnime/RandomAnime";
import MainContentPageFilm from "./pages/MainPageContentFilm/mainpagecontentfilm";
import { Login } from "./pages/Login/login";
import { Registration } from "./pages/Registration/registration";
import { ErrorPage } from "./pages/ErrorPage/errorpage";
function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop></ScrollToTop>
        {/* <Header /> */}
        {/* <HeaderLoggedUser /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<MainContentPageAnime />} />
          <Route path="/watch" element={<WatchAnime />} />
          <Route path="/random" element={<RandomAnime />} />
          <Route path="/films" element={<MainContentPageFilm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/404" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
