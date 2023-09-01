import "./App.css";
import { ModalSearchWindow } from "./components/ModalSearchWindow/ModalSearchWindow";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Join } from "./components/join us/join";
import { ItemAnime } from "./components/mainItems/mainItem";
import { Slider } from "./components/slider/slider";
import { SliderAnime } from "./components/sliderAnime/sliderAnime";
import { useRef } from "react";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
        <div className="sm:hidden">
          <Slider />
        </div>
        <ItemAnime />
        <Join />
        <SliderAnime />
      </div>
      <Footer />
    </div>
  );
}

export default App;
