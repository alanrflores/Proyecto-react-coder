import Item from "./Item"

const ItemList = ({ items }) => {
    //console.log(items)
    return (
         <div className="row">
        <div className="d-flex justify-content-center align-items-center flex-wrap mt-3 p-1">           
            
                {
                    items.length > 0 ?
                        (items.map((item, i) => (                            
                              <Item
                                    id={item.id}
                                    title={item.title}
                                    picture={item.pictureUrl}
                                    stock={item.stock}
                                    price={item.price}
                                    description={item.description}
                                />                       
                        ))) : (
                            <h3 className="fst-italic fs-5 text text-white">Loading....</h3>
                        )

                }
      
        </div>
        </div>
    )
}

export default ItemList