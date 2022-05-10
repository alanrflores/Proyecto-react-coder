import { NavLink } from "react-router-dom";

const Item = ({ id, title, picture, price, stock }) => {
  return (
    <>
  
      <div class="row row-cols-1 row-cols-md-2 g-4 text-white">
        <div class="col">
          <div class="card shadow bg-dark border-0 m-2">
            <img src={picture} class="card-img-top img-fluid"  alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">
                <NavLink
                  to={`detail/${id}`}
                  className="btn btn-outline-warning border-0 fs-6 fw-bold"
                >
                  More Details
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow bg-dark border-0 m-2">
            <img src={picture} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">
                <NavLink
                  to={`detail/${id}`}
                  className="btn btn-outline-warning border-0 fs-6 fw-bold"
                >
                  More Details
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        </div>
        
    
    </>
  );
};

export default Item;
