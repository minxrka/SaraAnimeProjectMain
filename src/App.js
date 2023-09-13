import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotRegistred from "./pages/NotRegistredUsers/notregistredusers";
import MainContentPageAnime from "./pages/MainPageContentAnime/mainpagecontentanime";
import ScrollToTop from "./utils/scrollToTop";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Header />
        <Routes>
          <Route path="/reg" element={<NotRegistred />} />
          <Route path="/anime" element={<MainContentPageAnime />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
