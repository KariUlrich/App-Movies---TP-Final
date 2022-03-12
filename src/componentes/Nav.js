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
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/new">Ultmos Lanzamientos</Link>
      </button>
      <button>
        <Link to="/popular">Populares</Link>
      </button>
      <button>
        <Link to="/search">Buscar</Link>
      </button>
    </div>
  );
};

export default Nav;
