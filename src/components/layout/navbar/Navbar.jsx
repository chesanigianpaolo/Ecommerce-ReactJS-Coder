import { CartWidget } from "../../common/cartWidget/CartWidget";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode }) => {
  return (
    <>
      <AppBar
        position="static"
        className={darkMode ? "navbar-dark" : "navbar-light"}
        color="warning"
      >
        <Container>
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dlf2ifmnk/image/upload/v1728584278/Serene_logo_React_emtwac.png"
                alt="Logo"
                style={{
                  width: "200px",
                  height: "100px",
                  display: "inline-block",
                }}
              />
            </Link>

            <div style={{ display: "flex", gap: "20px" }}>
              <Button
                color="inherit"
                component={Link}
                to="/"
                sx={{
                  "&:hover": {
                    backgroundColor: "#ff5722",
                    color: "#fff",
                  },
                }}
              >
                Todas
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/category/Bags"
                sx={{
                  "&:hover": {
                    backgroundColor: "#ff5722",
                    color: "#fff",
                  },
                }}
              >
                Bags
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/category/miniBags"
                sx={{
                  "&:hover": {
                    backgroundColor: "#ff5722",
                    color: "#fff",
                  },
                }}
              >
                MiniBags
              </Button>
            </div>

            <CartWidget />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

// import { CartWidget } from "../../common/cartWidget/CartWidget";
// import "./navbar.css";
// import { Link } from "react-router-dom";

// export const Navbar = ({ darkMode }) => {
//   return (
//     <>
//       <div
//         className={
//           darkMode ? "container-navbar-dark navbar" : "container-navbar navbar"
//         }
//       >
//         <Link to="/">
//           <img
//             src="https://res.cloudinary.com/dlf2ifmnk/image/upload/v1728584278/Serene_logo_React_emtwac.png"
//             alt=""
//             style={{
//               width: "200px",
//               height: "100px",
//             }}
//           />
//         </Link>
//         <ul style={{ display: "flex", gap: "10px" }}>
//           <Link to="/">Todas</Link>
//           <Link to="/category/Bags">Bags</Link>
//           <Link to="/category/miniBags">MiniBags</Link>
//         </ul>

//         <CartWidget />
//       </div>
//     </>
//   );
// };
