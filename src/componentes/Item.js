import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/Item.scss";

const Item = ({ imagen, titulo, link, nombre }) => {
  return (
    <div className="item">
      <ul>
        <li>
          <div className="item-completo">
            <div className="img-titulo-nombre">
              <img className="img-item" src={imagen} alt="imagen vista"></img>
              <p>{titulo}</p>
              <p>{nombre}</p>
            </div>
            <div className="link-item">
              <Link to={link}>
                <FaInfoCircle className="icono-detalle" />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Item;
