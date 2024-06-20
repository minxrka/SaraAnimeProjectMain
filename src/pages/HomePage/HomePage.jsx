import { SupportUs } from "../../components/SupportUs/supportus";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Join } from "../../components/join us/join";
import { ItemAnime } from "../../components/mainItems/mainItem";
import { Slider } from "../../components/slider/slider";
import { SliderAnime } from "../../components/sliderAnime/sliderAnime";

import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "./../../hooks/useAuth";
import { removeUser } from "./../../store/slices/userSlice";

function Home() {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  return (
    <main className="main">
      <Header />
      <div className="overflow-hidden">
        <div className="content-container px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
          <div className="">
            <Slider />
          </div>

          <ItemAnime />
          {isAuth ? <SupportUs /> : <Join />}

          <SliderAnime />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Home;
