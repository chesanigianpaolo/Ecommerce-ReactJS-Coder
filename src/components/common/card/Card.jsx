import { Link } from "react-router-dom";

export const Card = ({ title, price, stock, image, id }) => {
  return (
    <div style={{ border: "2px solid black", width: "250px", height: "350px" }}>
      <img src={image} alt="" style={{ width: "100px" }} />
      <h2>Titulo: {title}</h2>
      <h3>Precio: {price}</h3>
      <h3>Stock: {stock}</h3>
      <Link to={`/itemDetail/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};
