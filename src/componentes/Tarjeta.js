const Tarjeta = ({ titulo, imagen }) => {
  return (
    <div>
      <p>{titulo}</p>
      <img src={imagen}></img>
    </div>
  );
};

export default Tarjeta;
