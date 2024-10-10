// import { Card } from "../../common/card/Card"
import "./ItemListContainer.css"

export const ItemListContainer = ({greeting}) => {
    return (
    <div className="estilo-listContainer">
        <h1 className="greeting">{greeting}</h1>

        {/* <Card title="Bag1" price={1200} stock={5}/>
        <Card title="Bag2" price={2400} stock={10}/>
        <Card title="Bag2" price={3600} stock={15}/> */}
    </div>
    )
}
