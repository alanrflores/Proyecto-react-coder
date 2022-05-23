import { useEffect } from "react";
import ItemListContainer from "../componentes/items/ItemListContainer";

const Games = () => {

  const goToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth',
    });
  };
  useEffect(()=>{
    goToTop()
  },[])

  return (
    <>
      <i>
        <h3 className="text-center text-white border-bottom rounded-pill">
          Games
        </h3>
      </i>
      <ItemListContainer />
    </>
  );
};

export default Games;
