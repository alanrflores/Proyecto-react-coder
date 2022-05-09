import { useState } from "react";
import ItemCount from "./ItemCount"


const ItemDetail = ({ product }) => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <div className="container rounded-pill ">
        <div className="row justify-content-center flex-wrap">
          <div className="col-sm-10 col-md-8 col-lg-8 ms-5">
            
            <img src={product.pictureUrl} width="400px" height="340px"/>
            <ItemCount
              counter={counter}
              setCounter={setCounter}
              stock={product.stock}
            />
            
          </div>
          <div className="col-sm-12 col-md-4 ms-5">
            
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2 mb-4">
        <button className="btn btn-outline-warning border-0 rounded-pill m-2">
           Buy now
        </button>
        <button className="btn btn-outline-success border-0 rounded-pill m-2">
            Add to Cart
        </button>
      </div>


      <article>
        <h1 className="text-center fw-bold fst-italic border-bottom rounded-pill">
          {product.title}
        </h1>
        <section className="bg-dark fst-italic text-white border-0 rounded-pill p-3">
          <p className="ms-2">
            {product.description}
          </p>
          <p className="ms-2">
            Platform: {product.platforms}
          </p>
        </section>
      </article>
    </>
  )
}

export default ItemDetail