import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./componentes/Nav";
import BuscarPelicula from "./componentes/BuscarPelicula";
import BuscarSerie from "./componentes/BuscarSerie";
import Home from "./componentes/Home";
import Populares from "./componentes/Populares";
import PeliculasPopulares from "./componentes/PeliculasPopulares";
import SeriesPopulares from "./componentes/SeriesPopulares";
import UltimosLanzamientos from "./componentes/UltimosLanzamientos";
import PeliculasUltimosLanzamientos from "./componentes/PeliculasUltimosLanzamientos";
import SeriesUltimosLanzamientos from "./componentes/SeriesUltimosLanzamientos";
import Error404 from "./componentes/Error404";

import Footer from "./componentes/Footer";
import DetallePeliculaYSerie from "./componentes/DetallePeliculaYSerie";
import "./App.scss";

const App = () => {
  return (
    <div className="body">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<UltimosLanzamientos />} />
          <Route path="/popular" element={<Populares />} />
          <Route
            path="/movie/popular/page/:page"
            element={<PeliculasPopulares />}
          />
          <Route path="/tv/popular/page/:page" element={<SeriesPopulares />} />
          <Route
            path="/movie/now_playing/page/:page"
            element={<PeliculasUltimosLanzamientos />}
          />
          <Route
            path="/tv/airing_today/page/:page"
            element={<SeriesUltimosLanzamientos />}
          />
          <Route path="/searchMovie" element={<BuscarPelicula />} />
          <Route path="/searchTv" element={<BuscarSerie />} />
          <Route path="/:tipo/:idPYS" element={<DetallePeliculaYSerie />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
