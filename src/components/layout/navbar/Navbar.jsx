import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode }) => {
  return (
    <>
      <div
        className={
          darkMode ? "container-navbar-dark navbar" : "container-navbar navbar"
        }
      >
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dlf2ifmnk/image/upload/v1728584278/Serene_logo_React_emtwac.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Link>
        <ul style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Todas</Link>
          <Link to="/category/urbanas">Bags</Link>
          <Link to="/category/deportivas">Minibags</Link>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};

// // if
//  if(condicion){
//   --> esto
//  }else{
//   ---> esto
//  }
//  // ternario / 2 caminos
// condicion ? esto : esto

// // switch

// if(){

// }else if() {

// }else if(){

// }
//   else{

// }
