import { NavLink } from "react-router-dom";

const Item = ({ id, title, picture }) => {
  return (
    <>
  
      <div className="row row-cols-1 row-cols-md-2 g-4 text-white">
        <div className="col">
          <div className="card shadow bg-dark border-0 m-2">
            <img src={picture} className="card-img-top img-fluid"  alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
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
        <div className="col">
          <div className="card shadow bg-dark border-0 m-2">
            <img src={picture} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
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
