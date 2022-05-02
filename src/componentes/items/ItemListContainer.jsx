import ItemCount from "./ItemCount"
import { useState } from "react";

const ItemListContainer = () => {
  const [contador, setContador] = useState(1);

  return (
    <div className="container mt-4 text-center">
        <h1>ItemListContainer</h1>
        <ItemCount 
        contador={contador}
        setContador={setContador}
        />
    </div>
  )
}

export default ItemListContainer