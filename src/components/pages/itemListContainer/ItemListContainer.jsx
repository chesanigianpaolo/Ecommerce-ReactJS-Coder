import { Card } from "../../common/card/Card"

export const ItemListContainer = () => {
    return (
    <div>
        <Card title="Bag1" price={1200} stock={5}/>
        <Card title="Bag2" price={2400} stock={10}/>
        <Card title="Bag2" price={3600} stock={15}/>
    </div>
    )
}
