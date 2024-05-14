import { ContentFilm } from "../../components/ContentFilm/ContentFilm";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

function MainContentPageFilm() {
  return (
    <div className="main">
      <Header />
      <div className="overflow-hidden">
        <div className="content-container px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px] mb-[130px]">
          <ContentFilm />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MainContentPageFilm;
