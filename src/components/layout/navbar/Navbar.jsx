import "./Navbar.css";
import {CartWidget} from "../../common/cartWidget/CartWidget"
import { List, ListItem, ListItemText } from '@mui/material';


export const Navbar =()=>{
    return(
        <>
        <div className="container-navbar">

            <img src="https://res.cloudinary.com/dlf2ifmnk/image/upload/v1728584278/Serene_logo_React_emtwac.png" alt="logo de Serene" />
            
            <List style={{ display: 'flex', padding: 0, margin: 0 }}>
                <ListItem button>
                    <ListItemText primary="Todas" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Bags" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="MiniBags" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Accesorios" />
                </ListItem>
            </List>

            {/* <ul>
                <li>Todas</li>
                <li>Bags</li>
                <li>MiniBags</li>
                <li>Accesorios</li>
            </ul> */}

            <CartWidget/>

        </div>
        </>
    );
};