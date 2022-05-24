import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import Icon from "../icons/Icon";
import Confirm from "../items/confirmCart/Confirm";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart, total, clearItem, removeQuantity, addQuantity } =
    useContext(CartContext);
  const [change, setChange] = useState(false)
 
  return (
    <>
      <main className={styles.main}>
        {/* si esta vacio el carrito mostrame carrito vacio, y un boton hacia juegos y si no cargame los items */}
        {cart.length === 0 ? (
          <div className="vh-100">
            <h2 className="text-center text-white fs-4">
              <i> Empty Cart! </i>
            </h2>
            <div className="d-flex justify-content-center mt-5">
              <Link to="/games">
                <button className="mt-4 btn btn-outline-info border-0 border-bottom">
                  <i>Search games now!</i>
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
                      class={styles.img}
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        <i>Title : {item.title}</i>
                      </h5>
                      <p className="card-text">
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
              <h3 className="text-center">
                <i>Total: $ {total}</i>
              </h3>

              <div className={styles.total_pay}>
                
                  
                
                <Confirm disabled={false}
                  onClick={() => { change ?  setChange(<Link
                    to="http://www.mercadopago.com.ar"
                    target="_blank"
                    className="btn btn-outline-warning border-0 border-bottom"
                  >
                    <i>Pay</i>
                  </Link>) : setChange(false)
                     }}
                />
                
               
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default Cart;
