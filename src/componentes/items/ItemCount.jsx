import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { checkExistInTheCart } from "../check/check";

const ItemCount = ({ item }) => {
  const { cart, addCart } = useContext(CartContext);
  const { stock } = item;
  const [quantity, setQuantity] = useState(1);

  let product = item && {
    ...item,
    quantity,
  };

  const addQuantity = () => {
    if (stock - 1 > quantity) {
      setQuantity(quantity + 1);
    }
  };

  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const byAddCart = () => {
    if (stock < 0 || quantity <= 0) return;
    addCart(product);
  };

  return (
    <div>
      {!checkExistInTheCart(cart, item) ? (
        <>
          <div className="row border-0 border-bottom mx-0">
            <div className="col-9 fs-3">
              {" "}
              <i>Available :</i>{" "}
            </div>
            <div className="col-3 text-center fs-3">{item.stock - 1}</div>
          </div>
          <div className="row border-0 border-bottom my-4 mx-auto d-flex align-items-center">
            <div className="col col-3 d-flex">
              <button
                onClick={removeQuantity}
                className="btn btn-outline-danger border-0 border-bottom fs-5"
              >
                -
              </button>
            </div>
            <div className="col col-6 text-center fs-5">{quantity}</div>
            <div className="col col-3 d-flex">
              <button
                onClick={addQuantity}
                className="btn btn-outline-success border-0 border-bottom fs-5"
              >
                +
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => byAddCart(product)}
                className="btn btn-outline-warning m-3 border-0 border-bottom"
              >
                <i>Add to cart</i>
              </button>
            </div>
          </div>
        </>
      ) : (
        <Link
          className="btn btn-outline-success border-0 border-bottom w-100 my-2 text-dark"
          to="/cart"
        >
          <i>Go to cart</i>
        </Link>
      )}
    </div>
  );
};

export default ItemCount;
