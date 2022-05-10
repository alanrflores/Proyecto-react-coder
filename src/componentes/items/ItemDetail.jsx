import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const [onAdd, setOnAdd] = useState([]);

  let cartStorage = localStorage.getItem("cart");

  useEffect(() => {
    if (cartStorage) {
      let cartParse = JSON.parse(cartStorage);
      setOnAdd(cartParse);
    }
  }, []);

  const cartAdd = () => {
    if (cartStorage) {
      let cartParse = JSON.parse(cartStorage);
      cartParse.push(product);
      setOnAdd(cartParse);
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(cartParse));
    } else {
      setOnAdd([...onAdd, product]);
      localStorage.setItem("cart", JSON.stringify([...onAdd, product]));
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center flex-wrap">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <image className="d-flex justify-content-center me-4">
              <img
                src={product.pictureUrl}
                className="img-fluid"
                width="400px"
                height="340px"
              />
            </image>
            <p className="text-white text-center fw-bold me-5">ARS : $ {product.price}</p>
            <div className="d-flex me-3">
              <ItemCount
                counter={counter}
                setCounter={setCounter}
                stock={product.stock}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly mt-2 me-4">
        <Link to="/cart">
          <button className="btn btn-outline-warning border-0 rounded-pill m-2 me-5">
            Buy now
          </button>
        </Link>
        <button
          className="btn btn-outline-success border-0 rounded-pill m-2"
          onClick={cartAdd}
        >
          Add to Cart
        </button>
      </div>
      <article>
        <h1 className="text-center fw-bold border-bottom rounded-pill">
          {product.title}
        </h1>
        <section className="bg-dark text-white border-0 rounded-pill p-3">
          <p className="ms-2">{product.description}</p>
          <p className="ms-2">Platform: {product.platforms}</p>
        </section>
      </article>
    </>
  );
};

export default ItemDetail;
