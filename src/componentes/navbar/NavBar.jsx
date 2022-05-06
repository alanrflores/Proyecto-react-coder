import { NavLink } from "react-router-dom"
import CardWidget from "../cards/CardWidget"
import { FaShoppingBag} from "react-icons/fa"


const NavBar = () => {

    const imgUrl = 
    "https://i.etsystatic.com/10010751/r/il/c16b42/2371207824/il_794xN.2371207824_dx4i.jpg"


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={imgUrl} alt="" className="me-4" style={{ width: "3rem"}} />
                <a className="navbar-brand border border-success rounded-pill p-2" href="#"><h6 className="fw-bold fst-italic">CoderGames</h6></a>
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="me-4">
                            <NavLink className="nav-link fst-italic" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="ms-4">
                            <NavLink className="nav-link fst-italic" to="/games">
                                Games
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex me-2">
                        <CardWidget 
                        Icon={FaShoppingBag} 
                        color={"green"}
                        size={"20px"}
                        />
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2 fst-italic" type="search" placeholder="Search Games..." aria-label="Search" />
                        <button className="btn btn-dark fst-italic" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default NavBar