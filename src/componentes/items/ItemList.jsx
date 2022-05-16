import Loading from "../Loading/Loading";
import Item from "./Item";

const ItemList = ({ items }) => {
  //console.log(items)

  return (
    <>
      {items.length > 0 ? (
        items.map((item, i) => (
          <Item key={i}
            id={item.id}
            title={item.title}
            picture={item.pictureUrl}
            stock={item.stock}
            price={item.price}
          />
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ItemList;
