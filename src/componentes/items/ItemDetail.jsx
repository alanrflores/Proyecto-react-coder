import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import style from "./Item.module.css";
import SlideShow from "../slide/SlideShow";
import Cover from "../cover/Cover";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
 
  const { title, description, platforms, price, All_picture, video } =
    props;
  // const [confirm, setConfirm] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    goToTop();
  }, []);

  // button navegacion
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleIndex = () => {
    navigate("/");
  };

  // const buttonConfirm = confirm ? (
  //   <Link to="/cart">
  //     <button className="btn btn-outline-info border-0 border-bottom">
  //       <i>Go to Cart</i>
  //     </button>{" "}
  //   </Link>
  // ) : (
  //   <button className="btn btn-outline-success border-0 border-bottom">
  //     {" "}
  //     <i>Confirm</i>
  //   </button>
  // );

  // const clickConfirm = () => {
  //   setConfirm(true);
  //   //console.log("cumplido");
  // };

  return (
    <>
      <section className="">
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
            <i>Go to Home</i>
          </button>
        </div>
        <hr />

        <div className="row">
          <div className="col">
            <div className={style.slide}>
              <SlideShow imagen={All_picture} />
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center p-2">
        {<ItemCount item={props} />}
      </div>
      <div className={style.price}>
        <p> ARS : $ {price} </p>
      </div>
      <hr />
      <article className={style.description}>
        <p className="text-white">
          <i> Description: {description}</i>
        </p>
        <p className="text-white">
          <i>Platform: {platforms}</i>{" "}
        </p>
      </article>
      <section className={style.sectionButton}>
        <div className={style.button}>
          {/* <i className="m-3" onClick={clickConfirm}>
            {buttonConfirm}
          </i> */}

          <Link to="/games">
            <button className="btn btn-outline-dark  border-0 border-bottom m-3">
              <i>Continue Shopping</i>
            </button>
          </Link>
        </div>
      </section>
      <section className={style.sectionCover}>
        <Cover video={video} />
        <h5 className="text-white border-bottom rounded-pill m-2 p-2">
          <i>{title}</i>
        </h5>
      </section>
    </>
  );
};

export default ItemDetail;
