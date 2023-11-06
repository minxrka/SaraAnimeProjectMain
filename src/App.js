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
function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Header />
        {/* <HeaderLoggedUser /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<MainContentPageAnime />} />
          <Route path="/watch" element={<WatchAnime />} />
          <Route path="/random" element={<RandomAnime />} />
          <Route path="/films" element={<MainContentPageFilm />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
