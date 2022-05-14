import { useEffect, useContext } from "react";
import ItemList from "./ItemList";
import { data } from "../helpers/data";

import { CartContext } from "../../context/CartContextProvider";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const { items, setItems, loading, setLoading } = useContext(CartContext);

  useEffect(() => {
    const Promises = new Promise((resolve, reject) => {
      setTimeout(() => {
        setLoading(true);
        resolve(data);
        //console.log(data)
      }, 3000);
    });

    Promises.then((res) => setItems(res)).catch((err) => console.log(err));
    setLoading(false)

    return () => {};
  }, [setItems]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <div className="text-center">
              <ItemList items={items} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ItemListContainer;
