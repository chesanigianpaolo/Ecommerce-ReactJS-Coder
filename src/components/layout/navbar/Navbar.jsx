import "./Navbar.css";
import {CartWidget} from "../../common/cartWidget/CartWidget"

export const Navbar =()=>{
    return(
        <>
        <div className="container-navbar">

            <h2>Serene</h2>

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