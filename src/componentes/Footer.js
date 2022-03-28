import { mail, linkedin, gitHub } from "../utils/variables";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="contenedor-footer">
      <div>
        <p>App de Peliculas y Series hecho por Karina Ulrich</p>
      </div>
      <div>
        <ul>
          <li>
            <a href={mail}>
              {" "}
              <FiMail />{" "}
            </a>
          </li>
          <li>
            <a href={linkedin}>
              {" "}
              <FaLinkedinIn />{" "}
            </a>
          </li>
          <li>
            <a href={gitHub}>
              {" "}
              <FaGithub />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
