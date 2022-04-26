import { NavLink } from "react-router-dom"
import CardWidget from "../cards/CardWidget"


const NavBar = () => {

    const imaGen =
        "https://th.bing.com/th/id/OIP.qRgxMaC5Pmm0bmN9GexXCAHaD4?pid=ImgDet&rs=1"
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={imaGen} alt="" className="me-4" style={{ width: "3rem" }} />
                <a className="navbar-brand" href="#">Tec. Coder</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li>
                            <NavLink className="nav-link" to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/Productos">
                                Productos
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex me-2">
                        <CardWidget />
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar productos..." aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default NavBar