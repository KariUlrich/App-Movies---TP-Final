import "../styles/Error404.scss";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="contendor-error">
      <img
        src={`https://www.seoptimer.com/es/blog/wp-content/uploads/2015/07/Destacada.jpg`}
        alt="error"
      ></img>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default Error404;
