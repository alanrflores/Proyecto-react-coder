import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import Icon from "../icons/Icon";

const Cart = () => {
  const { cart, total, removeItem, clearItem, addItem } = useContext(CartContext);

  return (
    <div className="container vh-100">
      <h1 className="text-white fs-3 ms-2">Your Cart</h1>
      {cart.length === 0 ? (
        <h2 className=" border-bottom rounded-pill shadow p-3 mb-5 rounded text-center text-white">
          Empty Cart
        </h2>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="d-flex justify-content-center">
              <div className="card mb-3 bg-dark" style={{ width: "540px" }}>
                <div className="row g-0 ">
                  <div className="col-md-4">
                    <img
                      src={item.pictureUrl}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-white">{item.title}</h5>
                      <p className="card-text text-white">{item.description}</p>
                      {/* <div className="d-flex me-3">
                      <ItemCount stock={item.stock} />
                    </div> */}

                      <button
                        className="btn btn-outline-success"
                        onClick={() => addItem(item.id)}
                      >
                        Add Item
                      </button>
                      <p className="card-text text-white m-2 ms-4">
                        {item.quantity}
                      </p>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                      <div className="d-flex justify-content-end m-2">
                        <button
                          onClick={() => clearItem(item.id)}
                          className="border-0 bg-dark btn btn-outline-dark"
                        >
                          <Icon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      <div className="d-flex justify-content-center m-2">
        <h3 className="text-white fs-4">Total: $ {total}</h3>
        </div>
        <div className="d-flex justify-content-center m-2">
        <button className="btn btn-outline-warning border-0 border-bottom ">Pay</button>
        </div>
    </div>
  );
};

export default Cart;
