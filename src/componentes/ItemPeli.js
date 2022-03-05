import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemPeli = ({ imagen, titulo, link }) => {
  return (
    <div>
      <img src={imagen}></img>
      <p>{titulo}</p>
      <Link to={link}>
        <FaInfoCircle />
      </Link>
    </div>
  );
};

export default ItemPeli;
