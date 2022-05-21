import Loading from "../Loading/Loading";
import Item from "./Item";

const ItemList = ({ items }) => {
  //console.log(items)

  return (
    <>
      
        <div className="row">
          {items.length > 0 ? (
            items.map((item, i) => (
              <div className="col-sm-12 col-md-6 col-lg-6 p-2 mt-4">
              <Item
                key={i}
                id={item.id}
                title={item.title}
                picture={item.pictureUrl}
                stock={item.stock}
                price={item.price}
              />
              </div>
            ))
          ) : (
            <Loading />
          )}
          
        </div>
      
    </>
  );
};

export default ItemList;
