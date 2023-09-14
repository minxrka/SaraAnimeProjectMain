import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/NotRegistredUsers/notregistredusers";
import MainContentPageAnime from "./pages/MainPageContentAnime/mainpagecontentanime";
import ScrollToTop from "./utils/scrollToTop";
import { WatchAnime } from "./components/WatchAnime/watchanime";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Header />
        <WatchAnime />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/anime" element={<MainContentPageAnime />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
