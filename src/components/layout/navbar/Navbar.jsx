import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
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
              width: "200px",
              height: "100px",
            }}
          />
        </Link>
        <ul style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Todas</Link>
          <Link to="/category/Bags">Bags</Link>
          <Link to="/category/miniBags">MiniBags</Link>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
