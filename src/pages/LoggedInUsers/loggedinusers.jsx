import { Footer } from "../../components/footer/footer";
import { HeaderLoggedUser } from "../../components/HeaderLoggedUsers/headerloggedusers";
import { SupportUs } from "../../components/SupportUs/supportus";
import { ItemAnime } from "../../components/mainItems/mainItem";
import { Slider } from "../../components/slider/slider";
import { SliderAnime } from "../../components/sliderAnime/sliderAnime";

function LoggedUsers() {
  return (
    <div className="main">
      <HeaderLoggedUser />
      <div className="overflow-hidden">
        <div className="px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
          <div className="sm:hidden">
            <Slider />
          </div>
          <ItemAnime />
          <SupportUs />
          <SliderAnime />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LoggedUsers;
