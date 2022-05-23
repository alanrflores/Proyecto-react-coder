import { useEffect, useContext } from "react";
import ItemList from "./ItemList";
import { CartContext } from "../../context/CartContextProvider";
import db from "../service/Firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const { items, setItems, setLoading } = useContext(CartContext);

  //traer colleccion de juegos
  const getData = async () => {
    const col = collection(db, "games");
    setLoading(true);
    try {
      const data = await getDocs(col);
      const result = data.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setItems(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    //traer un solo games....
    // const item = doc(db, "games", "B5mtQaprs5gsD9ATBB5Z")
    // getDoc(item).then((snapshot)=> {
    //   if(snapshot.exists()){
    //     setItems([{id:snapshot.id, ...snapshot.data()}])
    //   }
    // })
    //simulando promesa...
    // const Promises = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     setLoading(true);
    //     resolve(data);
    //     //console.log(data)
    //   }, 3000);
    // });

    // Promises.then((res) => setItems(res))
    // .catch((err) => console.log(err));

    // return () => {};
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
