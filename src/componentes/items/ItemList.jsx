import Item from "./Item"


const ItemList = ({ items }) => {
   // console.log(items)
    return (
        <div className="d-flex flex-row">
            {
                items?.length > 0 &&
                    (items.map((item, i) => (
                        <div key={i} className="mt-4">
                            <Item
                                id={item.id}
                                title={item.title}
                                picture={item.pictureUrl}
                                price={item.price}
                                description={item.description}
                            />
                        </div>
                    ))) 
                    
            }

        </div>
    )
}

export default ItemList