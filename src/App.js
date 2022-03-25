import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./componentes/Nav";
import Buscar from "./componentes/Buscar";
import Home from "./componentes/Home";
import Populares from "./componentes/Populares";
import PeliculasPopulares from "./componentes/PeliculasPopulares";
import SeriesPopulares from "./componentes/SeriesPopulares";
import UltimosLanzamientos from "./componentes/UltimosLanzamientos";
import PeliculasUltimosLanzamientos from "./componentes/PeliculasUltimosLanzamientos";
import SeriesUltimosLanzamientos from "./componentes/SeriesUltimosLanzamientos";

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
            path="/movie/popular/page/1"
            element={<PeliculasPopulares />}
          />
          <Route path="/tv/popular/page/1" element={<SeriesPopulares />} />
          <Route
            path="/movie/now_playing/page/1"
            element={<PeliculasUltimosLanzamientos />}
          />
          <Route
            path="/tv/airing_today/page/1"
            element={<SeriesUltimosLanzamientos />}
          />
          <Route path="/search" element={<Buscar />} />
          <Route path="/:tipo/:idPYS" element={<DetallePeliculaYSerie />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
