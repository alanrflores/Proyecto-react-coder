import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../context/CartContextProvider";
import Loading from "../Loading/Loading";
import db from "../service/Firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { loading, setLoading } = useContext(CartContext);
  //pedimos el id mediante los params de reac-router
  const { id } = useParams();

  //obtenemos la informacion de un solo elemento
  const getIndividualData = async () => {
    setLoading(true);
    try {
      const document = doc(db, "games", id);
      const result = await getDoc(document);
      let response = result.data();
      setProduct({ id: id, ...response });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getIndividualData();
  }, []);

  return (
    // si loading es true, mostrame el loading y si no, mostrame el producto.
    <>{loading ? <Loading /> : <ItemDetail {...product} />}</>
  );
};

export default ItemDetailContainer;
