import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { data } from "../helpers/data";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (id) {
      let params = parseInt(id);

      const GetPromises = new Promise((resolve, reject) => {
        setTimeout(() => {
          const game = data.find((item) => item.id === params);
          resolve(game);
        }, 1000);
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
      ) : (
        <div>
          <h5 className=" vh-100 text-center text-white">Loading....</h5>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
