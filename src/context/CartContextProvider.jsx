import { createContext, useEffect, useState } from "react";
import { data } from "../componentes/helpers/data";
import Swal from "sweetalert2";

export const CartContext = createContext("");

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
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

  //Revisamos si se encuentra algo dentro de 'dataCart'
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) {
      setCart(dataCart);
    }
  }, []);

  //agregamos a carrito
  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const Data = items.filter((item) => {
        return item.id === id;
      });
      setCart([...cart, ...Data]);
      localStorage.setItem("dataCart", JSON.stringify([...cart, ...Data]));
    } else {
      Swal.fire("Good job!", "The product was added correctly!", "success");
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
      localStorage.setItem("dataCart", JSON.stringify([...cart]))
    }
  };

  //sumamos cantidad
  const addQuantity = (item) => {
    if (cart?.length > 0) {
      cart.forEach((el) => {
        if (el.id === item && el.quantity < el.stock) { 
          let newItem = {
            ...el,
            quantity: el.quantity + 1,
          };
        
          let newCart = cart.filter((el) => el.id !== item);
         
          setCart([...newCart, newItem]);
          localStorage.setItem("dataCart", JSON.stringify([...newCart, newItem]));
        }  
      });
    } 
  };

  //restamos cantidad
  const removeQuantity = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
  };

  //total
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
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
        loading,
        setLoading,
        removeQuantity,
        addQuantity,
        clearItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
