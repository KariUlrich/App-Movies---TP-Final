import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./componentes/Nav";
import Buscar from "./componentes/Buscar";
import Home from "./componentes/Home";
import Populares from "./componentes/Populares";
import UltimosLanzamientos from "./componentes/UltimosLanzamientos";
import Footer from "./componentes/Footer";
import DetallePelicula from "./componentes/DetallePelicula";
import "./App.scss";

const claveApi = "0f992db40ce22ab302880645bfa455bf";
const urlApi =
  "https://api.themoviedb.org/3/movie/550?api_key=0f992db40ce22ab302880645bfa455bf";

const App = () => {
  return (
    <div className="body">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-movies" element={<UltimosLanzamientos />} />
          <Route path="/popular" element={<Populares />} />
          <Route path="/search" element={<Buscar />} />
          <Route path="/movie/:id" element={<DetallePelicula />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
