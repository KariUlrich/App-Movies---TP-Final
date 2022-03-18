import "../styles/Tarjeta.scss";

const Tarjeta = ({ titulo, imagen, nombre }) => {
  return (
    <div className="tarjeta">
      <img src={imagen}></img>
      <h3> {titulo ? titulo : nombre} </h3>
    </div>
  );
};

export default Tarjeta;
