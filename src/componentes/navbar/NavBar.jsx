import { NavLink } from "react-router-dom";
import CardWidget from "../cards/CardWidget";
import { FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
  const imgUrl = "https://goodgamesguild.com/front/ggg/200x200.png";

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <img src={imgUrl} alt="" className="me-2" style={{ width: "3rem" }} />
        <a className="navbar-brand  border-start rounded-pill p-2" href="#">
          <h6 className="fw-bold">CoderGames</h6>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="me-4">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="me-4">
              <NavLink className="nav-link" to="/games">
                Games
              </NavLink>
            </li>
          </ul>
          <div className="d-flex m-2 me-1">
            <CardWidget Icon={FaShoppingBag} color={"black"} size={"20px"} />
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Games..."
              aria-label="Search"
            />
            <button
              className="btn btn-dark border-end"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
