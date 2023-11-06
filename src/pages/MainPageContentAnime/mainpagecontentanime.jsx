import { ContentAnime } from "../../components/ContentAnime/contentanime";
import { Footer } from "../../components/footer/footer";

function MainContentPageAnime() {
  return (
    <div className="main">
      <div className="overflow-hidden">
        <div className="px-[200px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]">
          <ContentAnime />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MainContentPageAnime;
