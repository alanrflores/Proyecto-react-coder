import Item from "./Item";

const ItemList = ({ items }) => {
  //console.log(items)
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
      ) : (
        <div className="vh-100">
          <h3 className="fs-5 text text-white">Loading....</h3>
        </div>
      )}
    </>
  );
};

export default ItemList;
