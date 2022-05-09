
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { data } from "../helpers/data";


const ItemListContainer = (props) => {

  const [items, setItems] = useState([])



  useEffect(() => {

    const Promises = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
        //console.log(data)
      }, 2000);
    });

    Promises
      .then((res) => setItems(res))
      .catch((err) => console.log(err))


    return () => {

    }
  }, [])

  

  return (
    <>
      <div className="mt-2 text-center">
        
        {/* <ItemCount
        counter={counter}
        setCounter={setCounter}
      /> */}

        <ItemList items={items} />
      </div>
    </>
  )
}

export default ItemListContainer