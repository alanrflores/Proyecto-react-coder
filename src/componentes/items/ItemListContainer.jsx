import ItemCount from "./ItemCount"
import { useState } from "react";

const ItemListContainer = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="container mt-4 text-center">
        <h1>ItemListContainer</h1>
        <ItemCount 
        counter={counter}
        setCounter={setCounter}
        />
    </div>
  )
}

export default ItemListContainer