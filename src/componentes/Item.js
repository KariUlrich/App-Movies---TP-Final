import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/Item.scss";

const Item = ({ imagen, titulo, link, nombre }) => {
  return (
    <div className="item">
      <img className="img-item" src={imagen}></img>
      <p>{titulo}</p>
      <p>{nombre}</p>
      <Link to={link}>
        <FaInfoCircle className="icono-detalle" />
      </Link>
    </div>
  );
};

export default Item;
