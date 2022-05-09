import { NavLink } from "react-router-dom"

const Item = ({ id, title, picture, price, description, stock }) => {

    return (
        <div className="m-2 fst-italic text-white">
            <div className="card shadow bg-dark border-0 rounded" style={{ width: "12rem" }}>
                <img src={picture} style={{ width: "195px", height: "185px" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5><hr />
                    <span className="fw-bold border-bottom rounded-pill p-1">Stock: {stock}</span>
                    <p className="card-text mt-2">{description}<br />
                        <span className="fw-bold"> ARS ${price}</span>
                    </p>
                    <NavLink
                        to={`detail/${id}`}
                        className="btn btn-outline-success fw-bold">
                        More Details
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Item