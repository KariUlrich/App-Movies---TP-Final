import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./componentes/Nav";
import Buscar from "./componentes/Buscar";
import Home from "./componentes/Home";
import Populares from "./componentes/Populares";
import PeliculasPopulares from "./componentes/PeliculasPopulares";
import UltimosLanzamientos from "./componentes/UltimosLanzamientos";
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
          <Route path="/tv/popular/page/1" element={<PeliculasPopulares />} />
          <Route path="/search" element={<Buscar />} />
          <Route path="/movie/:idPYS" element={<DetallePeliculaYSerie />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
