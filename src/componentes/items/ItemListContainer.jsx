import { useState, useEffect, useContext } from "react";
import ItemList from "./ItemList";
import { data } from "../helpers/data";
import { CartContext } from "../../context/CartContextProvider";

const ItemListContainer = () => {
  const {items, setItems} = useContext(CartContext); 

  useEffect(() => {
    const Promises = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
        //console.log(data)
      }, 2000);
    });

    Promises.then((res) => setItems(res)).catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <>
      <div className="container">
        <div className="text-center">        
          <ItemList items={items} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
