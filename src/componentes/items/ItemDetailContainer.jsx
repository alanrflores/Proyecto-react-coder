import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { data } from "../helpers/data";
import { CartContext } from "../../context/CartContextProvider";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const {setLoading} = useContext(CartContext)

  useEffect(() => {
    if (id) {
      let params = parseInt(id);

      const GetPromises = new Promise((resolve, reject) => {
        setTimeout(() => {
          setLoading(true)
          const game = data.find((item) => item.id === params);
          resolve(game);
        }, 2000);
      });

      GetPromises.then((res) => setProduct(res)).catch((err) =>
        console.log(err)
      );
    
    }
  }, [id]);

  //console.log(product)
  return (
    <>
      {product.hasOwnProperty("title") ? (
        <ItemDetail product={product} />
      ) : (<Loading />)
      }
    </>
  );
};

export default ItemDetailContainer;
