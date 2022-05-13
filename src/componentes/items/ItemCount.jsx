import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

const ItemCount = ({ stock }) => {

  const{counter, setCounter} = useContext(CartContext);

  const moreCounter = () => {
    counter < stock ? setCounter(counter + 1) : setCounter(counter);
  };

  const lessCounter = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(counter);
  };

  return (
    <>
      <div className="card border-0 bg-dark shadow" style={{ width: "30rem" }}>
        <div className="card-body text-dark">
          <h1 className="card-title text-center fs-6 text-white">{counter}</h1>
          <p className="text-center fw-bold mt-4 text-white">Stock: {stock}</p>
        </div>
        <button
          className="btn btn-outline-success border-0 m-1"
          onClick={moreCounter}
        >
          More
        </button>
        <button
          className="btn btn-outline-danger border-0 m-1"
          onClick={lessCounter}
        >
          Less
        </button>
      </div>
    </>
  );
};

export default ItemCount;
