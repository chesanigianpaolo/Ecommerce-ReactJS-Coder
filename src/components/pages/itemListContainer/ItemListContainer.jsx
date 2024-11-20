// import { Card } from "../../common/card/Card";
// import "./ItemListContainer.css";

// export const ItemListContainer = () => {
//   return (
//     <div className="estilo-listContainer">
//       <Card
//         title="Bag1"
//         price="$12.000"
//         stock={5}
//         imagen="https://tropea.com.ar/pub/media/catalog/product/cache/d1bd8443ca10f2cb00000164c0513360/1/e/1e973579cf4459999e313044ad474dc5_e301022u60ne_2.jpg"
//       />
//       <Card
//         title="Bag2"
//         price={2400}
//         stock={10}
//         imagen="https://ugosantini.com.ar/wp-content/uploads/2023/10/comp_marga-fucsia.jpg"
//       />
//       <Card
//         title="Bag3"
//         price={3600}
//         stock={15}
//         imagen="https://tropea.com.ar/pub/media/catalog/product/cache/d1bd8443ca10f2cb00000164c0513360/1/e/1e973579cf4459999e313044ad474dc5_e301022u60ne_2.jpg"
//       />
//     </div>
//   );
// };

import { useState } from "react";
import { useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

export const ItemListContainer = () => {
  const { name } = useParams(); // undefined -- "dsadasd"

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let docsRef = productsCollection;
    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }
    getDocs(docsRef).then((res) => {
      let arrayEntendible = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setItems(arrayEntendible);
    });
  }, [name]);

  // if con return temprano
  if (items.length === 0) {
    return (
      <>
        <div>
          <Skeleton variant="rectangular" width={200} height={100} />
          <Skeleton variant="text" width={200} height={50} />
          <Skeleton variant="text" width={200} height={100} />
          <Skeleton variant="text" width={200} height={100} />
        </div>
      </>
    );
  }

  return (
    <div>
      <h2>Aca el titulo de la app </h2>
      <ItemList items={items} />
      <h4>Aca algo mas </h4>
    </div>
  );
};
