import { SupportUs } from "../../components/SupportUs/supportus";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Join } from "../../components/join us/join";
import { ItemAnime } from "../../components/mainItems/mainItem";
import { Slider } from "../../components/slider/slider";
import { SliderAnime } from "../../components/sliderAnime/sliderAnime";
import { useCookies } from "react-cookie";
/* import CookiesAlert from "../../components/CookiesAlert/cookesalert"; */
import CookieConsent from "react-cookie-consent";

function Home() {
  const [cookies] = useCookies(["cookieConset"]);
  return (
    <main className="main">
      <Header />
      <div className="overflow-hidden">
        <div className="px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
          <div className="">
            <Slider />
          </div>
          <ItemAnime />
          <SupportUs />
          <Join />
          <SliderAnime />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Home;
