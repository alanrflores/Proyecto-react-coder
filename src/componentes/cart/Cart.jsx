import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import Icon from "../icons/Icon";

const Cart = ({}) => {
  const { items, setItems, cart, total, clearItem, removeQuantity, addQuantity } =
    useContext(CartContext);
    console.log(cart)
  const [formulario, setFormulario] = useState({
    buyer: {
      email: "",
      nombre: "",
      apellido: "",
      telefono: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(formulario);
  };

  const handleChange = (e) => {
    setFormulario((formulario) => ({
      ...formulario,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <>
      <h1 className="text-white fs-3 ms-2 border-0 border-bottom p-2 rounded-pill">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <div className="vh-100">
          <h2 className="text-center text-white fs-4">Empty Cart!</h2>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/games">
              <button className="mt-4 btn btn-outline-info border-0 border-bottom">
                Search games now!
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-row justify-content-center bd-highlight mb-3"
            >
              <div className="p-2 bd-highlight">
                <div className="card bg-dark" style={{ width: "14rem" }}>
                  <img
                    src={item.pictureUrl}
                    class="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white">
                      {" "}
                      Title : {item.title}
                    </h5>
                    <p className="card-text text-white">
                      STOCK AVAILABLE : {item.stock}
                    </p>
                    <div className="row">
                      <button
                        className="btn btn-outline-success border-bottom border-0"
                        onClick={() => addQuantity(item.id)}
                      >
                        Add
                      </button>
                      <p className="text-white text-center m-2">
                        {item.quantity}
                      </p>
                      <button
                        className="btn btn-outline-danger border-bottom border-0"
                        onClick={() => removeQuantity(item.id)}
                      >
                        Remove
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
      <div className="d-flex flex-column justify-content-center">
        <h3 className="text-white text-center fs-4 fw-bold">
          Total: $ {total}
        </h3>
        <Link
          href="http://www.mercadopago.com.ar"
          target="_blank"
          className="btn btn-outline-warning border-0 border-bottom "
        >
          Pay
        </Link>
        <div className="container">
          <div className="m-2">
            <form className="d-flex flex-column p-2" onSubmit={handleSubmit}>
              <input
                className="m-2"
                type="text"
                nombre="email"
                placeholder="Ingrese su email"
                value={formulario.email}
                onChange={handleChange}
              />

              <input
                className="m-2"
                type="text"
                nombre="nombre"
                placeholder="Ingrese su nombre"
                value={formulario.nombre}
                onChange={handleChange}
              />

              <input
                className="m-2"
                type="text"
                nombre="apellido"
                placeholder="Ingrese su apellido"
                value={formulario.apellido}
                onChange={handleChange}
              />
              <input
                className="m-2"
                type="number"
                nombre="telefono"
                placeholder="Ingrese su telefono"
                value={formulario.telefono}
                onChange={handleChange}
              />
              <button>enviar!</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
