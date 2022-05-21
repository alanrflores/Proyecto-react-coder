import { NavLink } from "react-router-dom";
import styles  from "./Item.module.css"

const Item = ({ id, title, picture }) => {
  return (
    <>
      <div
        className={styles.card}
        style={{ maxHeight: "480px", minHeight: "480px" }}
      >
        <div className="w-100" style={{ objectFit: "cover" }}>
          <img
            src={picture}
            width="340px"
            height="380px"
            className={styles.imagen}
            alt={title}
          />
        </div>
        <div className="card-body">
          <div>
            <i>
              <h5 className="card-title text-white text-center shadow border-0 border-bottom rounded-pill m-1 p-1 ">
                {title}
              </h5>
            </i>
          </div>
          <p className="card-text bg-dark">
            <i>
              <NavLink
                to={`detail/${id}`}
                className=" btn btn-outline-info border-0 rounded-pill opacity fs-6"
              >
                More Details
              </NavLink>
            </i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Item;
