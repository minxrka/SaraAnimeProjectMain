import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import MainContentPageAnime from "./pages/MainPageContentAnime/mainpagecontentanime";
import ScrollToTop from "./utils/scrollToTop";
import MainContentPageFilm from "./pages/MainPageContentFilm/mainpagecontentfilm";
import { ErrorPage } from "./pages/ErrorPage/errorpage";
import Profile from "./pages/Profile/profile";
import { FAQ } from "./pages/FAQ/faq";
import CookieConsentComponent from "./components/CookieConsent/CookieConsent";
import { Loader } from "./components/Loader/loader";

import React, { Suspense, useEffect } from "react";
///ОБЪЯВЛЕНИЕ ЗАДЕРЭКИ ЧТОБЫ УВИДЕТЬ ЛОАДЕР.
/* const HomeLazy = React.lazy(() =>
  import("./pages/HomePage/HomePage").then((module) => {
    // Add a delay of 2 seconds (2000 milliseconds)
    return new Promise((resolve) => setTimeout(() => resolve(module), 200000));
  })
); */

const HomeLazy = React.lazy(() => import("./pages/HomePage/HomePage"));
const AnimeLazy = React.lazy(() =>
  import("./pages/MainPageContentAnime/mainpagecontentanime")
);
const RandomAnimeLazy = React.lazy(() =>
  import("./pages/RandomAnime/RandomAnime").then((module) => {
    // Add a delay of 2 seconds (2000 milliseconds)
    return new Promise((resolve) => setTimeout(() => resolve(module), 1750));
  })
);
const FilmsLazy = React.lazy(() =>
  import("./pages/MainPageContentFilm/mainpagecontentfilm")
);
const ProfileLazy = React.lazy(() => import("./pages/Profile/profile"));
const WatchDefaultAnimeLazy = React.lazy(() =>
  import("./components/WatchAnime/watchanime").then((module) => {
    // Add a delay of 2 seconds (2000 milliseconds)
    return new Promise((resolve) => setTimeout(() => resolve(module), 1750));
  })
);
const LoginLazy = React.lazy(() =>
  import("./pages/Login/login").then((module) => {
    // Add a delay of 2 seconds (2000 milliseconds)
    return new Promise((resolve) => setTimeout(() => resolve(module), 1750));
  })
);
const RegistrationLazy = React.lazy(() =>
  import("./pages/Registration/registration").then((module) => {
    // Add a delay of 2 seconds (2000 milliseconds)
    return new Promise((resolve) => setTimeout(() => resolve(module), 1750));
  })
);

const AboutUsLazy = React.lazy(() =>
  import("./pages/AboutUs/aboutus").then((module) => {
    // Add a delay of 2 seconds (2000 milliseconds)
    return new Promise((resolve) => setTimeout(() => resolve(module), 1750));
  })
);
const FAQLazy = React.lazy(() => import("./pages/FAQ/faq"));

function App() {
  useEffect(() => {
    document.title =
      "Anime with Sara - Смотри свои любимые аниме в хорошем качестве";
  }, []);
  return (
    <div className="">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomeLazy />
              </Suspense>
            }
          />
          <Route
            path="/anime"
            element={
              <Suspense fallback={<Loader />}>
                <AnimeLazy />
              </Suspense>
            }
          />
          <Route
            path="/random"
            element={
              <Suspense fallback={<Loader />}>
                <RandomAnimeLazy />
              </Suspense>
            }
          />
          <Route
            path="/films"
            element={
              <Suspense fallback={<Loader />}>
                <FilmsLazy />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <ProfileLazy />
              </Suspense>
            }
          />
          <Route
            path="/watch"
            element={
              <Suspense fallback={<Loader />}>
                <WatchDefaultAnimeLazy />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <LoginLazy />
              </Suspense>
            }
          />
          <Route
            path="/registration"
            element={
              <Suspense fallback={<Loader />}>
                <RegistrationLazy />
              </Suspense>
            }
          />
          <Route path="/404" element={<ErrorPage />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <AboutUsLazy />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<Loader />}>
                <FAQLazy />
              </Suspense>
            }
          />
        </Routes>
        <CookieConsentComponent />
      </Router>
    </div>
  );
}

export default App;
