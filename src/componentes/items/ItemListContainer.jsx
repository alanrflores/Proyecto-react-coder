import { useEffect, useContext, useState } from "react";
import ItemList from "./ItemList";
import { CartContext } from "../../context/CartContextProvider";
import db from "../service/Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Item from "./Item";
import Search from "../search/Search";

const ItemListContainer = () => {
  const { items, setItems, setLoading } = useContext(CartContext);
  const { id } = useParams();
  const [search, setSearch] = useState("");

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

  //capturamos los caracteres del input y lo actualizamos en el setSearch
  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  //filtramos la busqueda
  const results = !search
    ? items
    : items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()));
  // console.log(results);

  return (
    <>
      <div className="text-center">
        <div className="d-flex justify-content-center">
        <input
          className="form-control me-2 border-0 rounded-pill w-50 p-2 my-2"
          type="text"
          placeholder="Search Games..."
          aria-label="Search"
          onChange={handleChange}
          value={search}
        />
        </div>
        {/* pintamos */}
        <ItemList items={results} />
      </div>
    </>
  );
};

export default ItemListContainer;
