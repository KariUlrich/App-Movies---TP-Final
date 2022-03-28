import { Link } from "react-router-dom";
import "../styles/Nav.scss";

const Nav = () => {
  return (
    <div className="nav-bar">
      <img
        className="imagen-movie"
        src="https://cdn-icons-png.flaticon.com/512/306/306337.png"
        alt="movie"
      ></img>
      <ul className="li-botones">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Ultmos Lanzamientos</Link>
        </li>
        <li>
          <Link to="/popular">Populares</Link>
        </li>
        <li>
          <Link to="/searchMovie">Buscar por Película</Link>
        </li>
        <li>
          <Link to="/searchTv">Buscar por Serie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
