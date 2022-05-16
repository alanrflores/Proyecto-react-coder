import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

const ItemDetail = ({ product }) => {
  const { addCart } = useContext(CartContext);

  // const addItems= (product) => {
  // setCart([...cart, product])
  //    if(cart?.length > 0) {
  //      cart.forEach(el => {
  //        if(el.id === product.id) {
  //           setCart(cart)
  //           let newProduct = {
  //             ...product,
  //           quantity:  product.quantity + 1
  //           }
  //          let newCart = cart.filter(el => el.id !== product.id)
  //          setCart([...newCart, newProduct]);
  //        }else {
  //          setCart([...cart, product])
  //        }
  //      })
  //    }else {
  //     setCart([...cart, product])
  //    }

  // }

  return (
    <>
      <div className="container vh-100 w-100">
        <div className="row justify-content-center flex-wrap">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex justify-content-center me-4">
              <img src={product.pictureUrl} className="img-fluid" />
            </div>
            <p className="text-white text-center fw-bold me-5">
              ARS : $ {product.price}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly mt-2 me-4">
        <Link to="/cart">
          <button className="btn btn-outline-warning border-0 rounded-pill m-2 me-5">
            Finish Buy
          </button>
        </Link>
        <Link to="/games">
          <button className="btn btn-outline-info border-0 rounded-pill m-2 me-5">
          Continue Shopping
          </button>
        </Link>
        <button
          className="btn btn-outline-success border-0 rounded-pill m-2"
          onClick={() => addCart(product.id)}
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
