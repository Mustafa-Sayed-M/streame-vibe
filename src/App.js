import React from "react";
import { Route, Routes } from "react-router-dom";
// Pages:
import Home from "./Pages/Home";
import Movies from "./Pages/Movies/Movies";
import Shows from "./Pages/Shows/Shows";
import Movie from "./Pages/Movies/Movie";
import Series from "./Pages/Shows/Series";
import Episode from "./Pages/Shows/Episode";
import Search from "./Pages/Search";
// Components:
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe";
import Aos from "aos";

function App() {
  React.useEffect(() => { // Initialize Aos:
    Aos.init({
      easing: "ease-in-out",
      duration: 500,
      once: true,
      anchorPlacement: "bottom-center",
    })
  }, []);
  return (
    <div className="App text-white bg-black-color-8 min-h-screen">
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shows/:seriesId" element={<Series />} />
        <Route path="/shows/:seriesId/season/:seasonNumber/episode/:episodeNumber" element={<Episode />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {/* Subscribe */}
      <Subscribe />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;