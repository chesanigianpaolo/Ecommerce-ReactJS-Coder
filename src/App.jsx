// import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={'Bienvenido a mi Ecommerce de Carteras Serene Bags'}/>
    {/* <Footer/> */}
    </>
  )
}

export default App
