import Item from "./Item"

const ItemList = ({ items }) => {
    //console.log(items)
    return (
         <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center flex-wrap mt-4 p-2">           
            
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
                            <h3>Loading....</h3>
                        )

                }
      
        </div>
        </div>
    )
}

export default ItemList