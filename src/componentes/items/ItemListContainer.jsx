import { useEffect, useContext } from "react";
import ItemList from "./ItemList";
import { CartContext } from "../../context/CartContextProvider";
import db from "../service/Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { items, setItems, search, setLoading } = useContext(CartContext);
  const { id } = useParams();
  
  //traer colleccion de juegos
  //  const getData = async () => {
  //    const col = collection(db, "games")
  //    setLoading(true);
  //    try {
  //      const data = await getDocs(col);
  //      const result = data.docs.map(
  //        (doc) => (doc = { id: doc.id, ...doc.data() })
  //      );
  // // console.log(data);
  //      setItems(result);
  //    } catch (error) {
  //      console.log(error);
  //    } finally {
  //      setLoading(false);
  //    }
  //  };

  useEffect(() => {
     //getData();
     const col = collection(db, "games");
     if (!id) {
       getDocs(col)
         .then((snapshot) => {
           if (!snapshot.empy) {
             setItems(
               snapshot.docs.map((doc) => {
                 return {
                   id: doc.id,
                   ...doc.data(),
                 };
               })
             );
           }
         })
         .catch((e) => {
           console.log(e);
         });
     } else {
       const q = query(col, where("category", "==", id));
       getDocs(q).then((snapshot) => {
         if (!snapshot.empty) {
           setItems(
             snapshot.docs.map((doc) => {
               return {
                 id: doc.id,
                 ...doc.data(),
               };
             })
           );
         }
       });
     }
  }, [id]);

  //  const filters = filter 
  //  ? items.filter((e)=> e.category === filter)
  //  : items;
  //  const searchs = filters.filter((f)=>{
  //    f.id.toLowerCase().includes(search.toLowerCase())
  //  })

  return (
    <>
      <div className="text-center">
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
