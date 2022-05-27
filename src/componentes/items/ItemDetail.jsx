import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import style from "./Item.module.css";
import SlideShow from "../slide/SlideShow";

const ItemDetail = (props) => {
  const { addCart } = useContext(CartContext);
  const { id, title, description, platforms, price, All_picture } = props;
  const [confirm, setConfirm] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    goToTop();
  }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleIndex = () => {
    navigate("/");
  };

  const buttonConfirm = confirm ? (
    <Link to="/cart">
      <button className="btn btn-outline-warning border-0 border-bottom text-dark">
        <i>Go to Cart</i>
      </button>{" "}
    </Link>
  ) : (
    <button className="btn btn-outline-success border-0 border-bottom text-dark">
      {" "}
      <i>Confirm</i>
    </button>
  );

  const clickConfirm = () => {
    setConfirm(true);
    console.log("cumplido");
  };

  return (
    <>
      <section className="container vh-100 w-100">
        <div className={style.navigate}>
          <button
            className="btn btn-outline-dark border-0 border-bottom"
            onClick={handleBack}
          >
            <i>Back</i>{" "}
          </button>
          <button
            className="btn btn-outline-dark border-0 border-bottom"
            onClick={handleIndex}
          >
            <i>Ir al inicio</i>
          </button>
        </div>

        <div className="row justify-content-center flex-wrap">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex justify-content-center me-4">
              <div className={style.slide}>
                <SlideShow imagen={All_picture} />
              </div>
            </div>
            <p className="text-center">ARS : $ {price} </p>
          </div>
        </div>
      </section>
      <section className={style.sectionButton}>
        <div className={style.button}>
        <i className="m-3" onClick={clickConfirm}>{buttonConfirm}</i>

        <Link to="/games">
          <button className="btn btn-outline-info text-dark border-0 border-bottom m-3">
            <i>Continue Shopping</i>
          </button>
        </Link>
        <button
          className="btn btn-outline-success text-dark border-0 border-bottom m-3"
          onClick={() => addCart(id)}
        >
          <i>Add to Cart</i>
        </button>
        </div>
      </section>
      <section>
        <h5 className="text-white border-bottom rounded-pill m-2 p-2">
          <i>{title}</i>
        </h5>
        <article className={style.description}>
          <p className="ms-2 p-2 text-white">
            <i> Description: {description}</i>
          </p>
          <p className="ms-2 p-2 text-white">
            <i>Platform: {platforms}</i>{" "}
          </p>
        </article>
      </section>
    </>
  );
};

export default ItemDetail;
