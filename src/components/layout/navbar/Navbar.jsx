import "./Navbar.css";
import {CartWidget} from "../../common/cartWidget/CartWidget"

export const Navbar =()=>{
    return(
        <>
        <div className="container-navbar">

            <img src="https://res.cloudinary.com/dlf2ifmnk/image/upload/v1728584278/Serene_logo_React_emtwac.png" alt="logo de Serene" />

            <ul>
                <li>Todas</li>
                <li>Bags</li>
                <li>MiniBags</li>
                <li>Accesorios</li>
            </ul>

            <CartWidget/>

        </div>
        </>
    );
};