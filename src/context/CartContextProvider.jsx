import { createContext, useEffect, useState } from "react";
import { data } from "../componentes/helpers/data";
import Swal from "sweetalert2";

export const CartContext = createContext("");

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const item = data;
    if (item) {
      setItems(item);
    } else {
      setItems([]);
    }
  }, []);

  //agregamos a carrito
  const addCart = (id) => {
    console.log(id);
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const Data = items.filter((item) => {
        return item.id === id;
      });
      setCart([...cart, ...Data]);
    } else {
      Swal.fire(
        'Good job!',
        'The product was added correctly!',
        'success'
      );
    }
  };

  //eliminamos el item por completo
  const clearItem = (id) => {
    if (
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      })
    ) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.quantity = 1;
          cart.splice(index, 1);
        }
      });
      //como se modifico el 'cart' lo guardamos dentro del 'setCart'
      setCart([...cart]);
    }
  };

  //sumamos cantidad
  const addItem = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
  };

  //restamos cantidad
  const removeItem = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
  };

  //Revisamos si se encuentra algo dentro de 'dataCart'
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) {
      setCart(dataCart);
    }
  }, []);

  //Guardamos con el setItem dentro de dataCart, parseamos lo que este dentro 'cart'
  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
    //Cada vez que se haya un cambio dentro de cart, se va a ejecutar
  }, [cart]);


  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        cart,
        setCart,
        addCart,
        counter,
        loading,
        setLoading,
        setCounter,
        removeItem,
        addItem,
        clearItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
