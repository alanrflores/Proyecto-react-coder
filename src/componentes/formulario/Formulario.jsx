import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import db from "../service/Firebase";
import Input from "./inputs/Input";
import Swal from "sweetalert2";

const Formulario = () => {
  const { setLoading, total, cart, setCart, validateAll } =
    useContext(CartContext);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState({
    buyer: {
      email: "",
      name: "",
      phone: "",
    },
    total: total,
    cart: cart,
  });

  const {
    buyer: { email, name, phone },
  } = order;

  const generateTicket = async ({ datos }) => {
    setLoading(true);
    try {
      const col = collection(db, "order");
      const orders = await addDoc(col, datos);
      console.log(orders);
      Swal.fire(`Purchase ID: ${orders.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (validateAll([email, name, phone])) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Missing fields to complete!",
      });
      return;
    }
    Swal.fire(
      "Good job!",
      "Your purchase order was correctly generated ",
      "success"
    );
    generateTicket({ datos: order });
    console.log(order);
    setOrder({
      buyer: {
        email: "",
        name: "",
        phone: "",
      },
      total: total,
      cart: cart,
    });
    setCart([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      buyer: { ...order.buyer, [name]: value },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container-fluid">
      <div className="row">
        <h3 className="text-center">
          {" "}
          <i className="fw-bold ms-4">Datos</i>{" "}
        </h3>
        <span>
          <hr />
        </span>
        {Object.keys(order.buyer).map((key, index) => (
          <div  key={index} className="text-center">
            <Input
             
              className="mb-4 "
              name={`${key}`}
              value={key.value}
              onChange={handleChange}
              placeholder={`${key}`}
              inputclassname={`form-control ${errors[key] && "is-invalid"}`}
              errors={errors}
            />
          </div>
        ))}

        <button
          className="btn btn-outline-success border-0 border-bottom"
          type="submit"
        >
          Finish Buy
        </button>
        <span>
          <hr />
        </span>
      </div>
    </form>
  );
};

export default Formulario;
