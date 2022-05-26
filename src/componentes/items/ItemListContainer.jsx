import { useEffect, useContext } from "react";
import ItemList from "./ItemList";
import { CartContext } from "../../context/CartContextProvider";
import db from "../service/Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams, useSearchParams } from "react-router-dom";

const ItemListContainer = () => {
  const { items, setItems, setLoading } = useContext(CartContext);
  //  const {category} = useParams()
  //  console.log(category)
  //  const [searchQuery] = useSearchParams();
  //  console.log("query", searchQuery.get("category"));

  // const q = query(
  // where('category', '==', )
  // );

  //traer colleccion de juegos
  const getData = async () => {
    const col = collection(db, "games")
    setLoading(true);
    try {
      const data = await getDocs(col);
      const result = data.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      // console.log(data);
      setItems(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="text-center">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
