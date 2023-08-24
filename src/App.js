import "./App.css";
import { Header } from "./components/header/header";
import { ItemAnime } from "./components/mainItems/mainItem";
import { Slider } from "./components/slider/slider";

function App() {
  return (
    <div>
      <Header />
      <div className="px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
        <div className="sm:hidden">
          <Slider />
        </div>
        <ItemAnime />
      </div>
    </div>
  );
}

export default App;
