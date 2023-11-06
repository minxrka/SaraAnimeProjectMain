import { SupportUs } from "../../components/SupportUs/supportus";
import { Footer } from "../../components/footer/footer";
import { Join } from "../../components/join us/join";
import { ItemAnime } from "../../components/mainItems/mainItem";
import { Slider } from "../../components/slider/slider";
import { SliderAnime } from "../../components/sliderAnime/sliderAnime";

function Home() {
  return (
    <main className="main">
      <div className="overflow-hidden">
        <div className="px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
          <div className="sm:hidden">
            <Slider />
          </div>
          <ItemAnime />
          {/* <SupportUs /> */}
          <Join />
          <SliderAnime />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Home;
