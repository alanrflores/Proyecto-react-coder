import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import Icon from "../icons/Icon";

const Cart = () => {
  const {cart, total, removeItem} = useContext(CartContext);

  

 
  return (
    <div className="container vh-100 ">
      <h1 className="text-white text-center">Your Cart!</h1>
       {cart?.length > 0 && cart.map((item, index)=> (
           <div key={index} className="d-flex justify-content-center mt-4">
           <div className="card mb-3" style={{ width: "540px" }}>
             <div className="row g-0 ">
               <div className="col-md-4">
                 <img src={item.pictureUrl} className="img-fluid rounded-start" alt="..." />
               </div>
               <div className="col-md-8">
                 <div className="card-body">
                   <h5 className="card-title">{item.title}</h5>
                   <p className="card-text">
                    {item.description}
                   </p>
                   <button >Add Item</button>
                   <p className="card-text">{item.quantity}</p>
                   <button>Remove Item</button>
                   <div className="d-flex justify-content-end m-2">
                     <button onClick={()=> removeItem(item.id)} className="border-0">
                       <Icon/>
                       </button>
                     
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div> 
       ))       
        }
        
        
      </div>
  );
};

export default Cart;
