import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import Loading from "../Loading/Loading";
import Item from "./Item";

const ItemList = ({ items }) => {
  //console.log(items)
  const{loading} = useContext(CartContext)
  return (
    <>
      {items.length > 0 ? (
        items.map((item, i) => (
          <Item
            id={item.id}
            title={item.title}
            picture={item.pictureUrl}
            stock={item.stock}
            price={item.price}
          />
        ))
      ) : <>
        {loading ?  (
          <Loading />
        ) :  <h2>Loaded!!</h2>
      }
      </>
}
    </>
  );
};

export default ItemList;
