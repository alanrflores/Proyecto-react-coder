import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import  style  from "./Item.module.css"
import SlideShow from "../slide/SlideShow";

const ItemDetail = ({ product }) => {
  const { addCart } = useContext(CartContext);
  const{ id, title, description, price, platforms } = product 

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
            <div className={style.slide}>
              
                  <SlideShow imagen={product?.All_picture}/>
               
            </div>
            </div>
            <p className="text-white text-center me-5">
              ARS : $ {price}{" "}
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
          onClick={() => addCart(id)}
        >
          Add to Cart
        </button>
      </div>
      <article>
        <h5 className="text-white border-bottom rounded-pill m-2 p-2">
          {title}
        </h5>
        <section className="bg-dark text-white border-0 rounded-pill p-3">
          <p className="ms-2 text-white">Description: {description}</p>
          <p className="ms-2">Platform: {platforms}</p>
        </section>
      </article>
    </>
  );
};

export default ItemDetail;
