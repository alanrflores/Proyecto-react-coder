import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContextProvider";
import style from "./Item.module.css";
import SlideShow from "../slide/SlideShow";

const ItemDetail = ({ product }) => {
  const { addCart } = useContext(CartContext);
  

  const goToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth',
    });
  };
  useEffect(()=>{
    goToTop()
  },[])
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
  console.log(product)

  return (
    <>
      <div className="container vh-100 w-100">
        <div className="row justify-content-center flex-wrap">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex justify-content-center me-4">
              <div className={style.slide}>
                <SlideShow imagen={product?.All_picture} />
              </div>
            </div>
            <p className="text-white text-center me-5">ARS : $ {product.price} </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly mt-2 me-4">
        <Link to="/cart">
          <button className="btn btn-outline-warning text-dark border-1 border-start border-end rounded-pill m-2 me-5">
            <i>Finish Buy</i>
          </button>
        </Link>
        <Link to="/games">
          <button className="btn btn-outline-info text-dark border-1 border-start border-end rounded-pill m-2 me-5">
            <i>Continue Shopping</i>
          </button>
        </Link>
        <button
          className="btn btn-outline-success text-dark border-1 border-start border-end rounded-pill m-2"
          onClick={() => addCart(`cart/${product.id}`)}
        >
          <i>Add to Cart</i>
        </button>
      </div>
      <article>
        <h5 className="text-white border-bottom rounded-pill m-2 p-2">
          <i>{product.title}</i>
        </h5>
        <section className={style.description}>
          <p className="ms-2 p-2 text-white">
            <i> Description: {product.description}</i>
          </p>
          <p className="ms-2 p-2 text-white">
            <i>Platform: {product.platforms}</i>{" "}
          </p>
        </section>
      </article>
    </>
  );
};

export default ItemDetail;
