import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import Formulario from "../formulario/Formulario";
import Icon from "../icons/Icon";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart, total, clearItem, removeQuantity, addQuantity } =
    useContext(CartContext);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
    <main className={styles.main}>
      <div className={styles.div}>
        {/* si esta vacio el carrito mostrame carrito vacio, y un boton hacia juegos y si no cargame los items */}
        {cart.length === 0 ? (
          <div className="vh-100">
            <h2 className="text-center text-white border-bottom">
              <i> Empty Cart! </i>
            </h2>
            <div className="d-flex justify-content-center mt-5">
              <Link to="/games">
                <button className="mt-4 btn btn-outline-dark text-white border-0 border-bottom">
                 <h4>
                  <i>Search games now!</i>
                  </h4>
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* recorremos el carrito */}
            {cart.map((item, index) => (
              <section key={index} className={styles.section}>
                <div className={styles.card}>
                  <div className={styles.card_body} style={{ width: "12rem" }}>
                    <img
                      src={item.pictureUrl}
                      className={styles.img}
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        <i className="text-white">Title : {item.title}</i>
                      </h5>
                      <p className="card-text text-white">
                        <i>STOCK AVAILABLE : {item.stock}</i>
                      </p>
                      <div className="row">
                        <button
                          className="btn btn-outline-success border-bottom border-0"
                          onClick={() => addQuantity(item.id)}
                        >
                          <i> Add </i>
                        </button>
                        <p className="text-center m-2">
                          <i>{item.quantity}</i>
                        </p>
                        <button
                          className="btn btn-outline-danger border-bottom border-0"
                          onClick={() => removeQuantity(item.id)}
                        >
                          <i> Remove </i>
                        </button>
                        <div className="d-flex justify-content-end m-2">
                          <button
                            onClick={() => clearItem(item.id)}
                            className="border-0 btn btn-outline-danger"
                          >
                            <Icon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </>
        )}
        {total ? (
          <div className={styles.div_total}>
            <div className={styles.total}>
              <Formulario />
              <h3 className="text-center fw-bold">
                <i>Total: $ {total}</i>
              </h3>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      </main>
    </>
  );
};

export default Cart;
