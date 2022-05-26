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
      "Your purchase order was correctly generated!",
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
    <form onSubmit={handleSubmit} className="container">
      <h3>
        {" "}
        <i className="fw-bold">Datos</i>{" "}
      </h3>
      {Object.keys(order.buyer).map((key, index) => (
        <Input
          key={index}
          className="mb-4"
          name={`${key}`}
          value={key.value}
          onChange={handleChange}
          placeholder={`${key}`}
          inputclassname={`form-control ${errors[key] && "is-invalid"}`}
          errors={errors}
        />
      ))}
      <button
        className="btn btn-outline-info border-0 border-bottom text-dark"
        type="submit"
      >
        Finish Buy
      </button>
    </form>
  );
};

export default Formulario;
