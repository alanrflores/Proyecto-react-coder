import { createContext, useEffect, useState } from "react";
import { data } from "../componentes/helpers/data";

export const CartContext = createContext("");

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(0);

  console.log(items);

  useEffect(() => {
    const item = data.items;
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
      alert("El producto se añadio al carrito");
    }
  };
  
  //eliminamos el item
  const removeItem = (id) => {
    if (window.confirm("¿Quieres remover el producto?")) {
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

  // const reduce = (id) => {
  //   let array = []
  //   cart.forEach((item =>{
  //     if(item.id === id){
  //       item.cantidad === 1? item.cantidad === 1 : array.push(id)
  //     }
  //     setCart([...cart])
  //   }))
  // }

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        cart,
        setCart,
        addCart,
        counter,
        setCounter,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
