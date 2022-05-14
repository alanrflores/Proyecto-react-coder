
// const ItemCount = ({ stock }) => {
//   const { less, more, cart, setCart } = useContext(CartContext);

//   return (
//     <> 
//      {
//        cart?.length > 0 && cart.map((item, i)=> (

//         <div className="card border-0 bg-dark shadow" style={{ width: "30rem" }}>
//         <div className="card-body text-dark">
//           <h1 className="card-title text-center fs-6 text-white">
//             {item.quantity}
//           </h1>
//           <p className="text-center fw-bold mt-4 text-white">Stock:{stock}</p>
//         </div>

//         <button
//           className="btn btn-outline-success border-0 m-1"
//           onClick={more(item.id)}
//         >
//           More
//         </button>
//         <button
//           className="btn btn-outline-danger border-0 m-1"
//           onClick={less(item.id)}
//         >
//           Less
//         </button>
//       </div>

//        ))
//      }
      
//     </>
//   );
// };

// export default ItemCount;
