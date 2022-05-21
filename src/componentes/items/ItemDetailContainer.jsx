import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../context/CartContextProvider";
import Loading from "../Loading/Loading";
import db from "../service/Firebase";
import {  doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { loading, setLoading } = useContext(CartContext);
  const {id}  = useParams();

  const getIndividualData = async () => {
    let params = id;

    setLoading(true);
    try {
      const document = doc(db, "games", params);

      const result = await getDoc(document);
      let response = result.data();
      console.log(response);

      setProduct({ id: response.id, ...response });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // if (id) {
    //   let params = parseInt(id);
    getIndividualData();
    // const GetPromises = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     setLoading(true);
    //     const game = data.find((item) => item.id === params);
    //     resolve(game);
    //   }, 2000);
    // });

    // GetPromises.then((res) => setProduct(res)).catch((err) =>
    //   console.log(err)
    // );
    //}
  }, [id]);

  //console.log(product)
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ItemDetail
          product={product}
          id={product.id}
          title={product.title}
          description={product.description}
          picture={product.pictureUrl}
          price={product.price}
        />
      )}
    </>
    //   <>
    //   {product.hasOwnProperty("id") ? (
    //      <ItemDetail product={product} />
    //    ) : (
    //  <Loading />
    //   )}
    // </>
  );
};

export default ItemDetailContainer;
