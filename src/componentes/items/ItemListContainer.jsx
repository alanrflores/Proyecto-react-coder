import { useEffect, useContext } from "react";
import ItemList from "./ItemList";
import { data } from "../helpers/data";
import { CartContext } from "../../context/CartContextProvider";

const ItemListContainer = () => {
  const { items, setItems,  setLoading } = useContext(CartContext);

  useEffect(() => {
    const Promises = new Promise((resolve, reject) => {
      setTimeout(() => {
        setLoading(true);
        resolve(data);
        //console.log(data)
      }, 3000);
    });

    Promises.then((res) => setItems(res))
    .catch((err) => console.log(err));

    return () => {};
  }, [setItems]);

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
