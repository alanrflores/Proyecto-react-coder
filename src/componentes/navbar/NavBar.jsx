import { Link, NavLink, useNavigate } from "react-router-dom";
import CardWidget from "../cards/CardWidget";
import { FaShoppingBag } from "react-icons/fa";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";



const NavBar = () => {
  const { cart } = useContext(CartContext);
  
  
  const {logout, users} = useContext(UserContext)

//funcion cerrar sesion
 const handleLogout = async ()=> {
   try {
    await logout()
  } catch (error) {
   console.log(error)
  }
 }  
  const imgUrl = "https://goodgamesguild.com/front/ggg/200x200.png";

  

  return (
    
      
        <>
          <nav className="navbar navbar-expand-lg sticky-top navbar-ligth bg-ligth">
            <div className="container-fluid">
              <img
                src={imgUrl}
                alt=""
                className="me-2"
                style={{ width: "3rem" }}
              />
              <Link
                className="navbar-brand  border-start rounded-pill p-2"
                to="#"
              >
                <h6 className="text-white border-start rounded-pill">
                  CoderGames
                </h6>
              </Link>
             
              <button
                className="navbar-toggler border-0 border-bottom"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon bg-white rounded"></span>
              </button>
              <div
                className="collapse navbar-collapse "
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="me-4">
                    <NavLink
                      className="nav-link text-white boder-0 border-bottom"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="me-4">
                    <NavLink
                      className="nav-link text-white border-0 border-bottom"
                      to="/games"
                    >
                      Games
                    </NavLink>
                  </li>
                  
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Categoryes
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="games/category/Action"
                        >
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="games/category/Adventure"
                        >
                          Adventure
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="games/category/Shooting"
                        >
                          Shooting
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="games/category/Fight"
                        >
                          Fight
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="games/category/Sport"
                        >
                          Sport
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {
                  users ? (
                <button 
                className="btn btn-outline-warning m-2 border-0 border-bottom" 
                onClick={handleLogout}> Logout 
                </button> 

                  ) : ("")
                }
                {cart.length > 0 && (
                  <div className="d-flex m-2 me-1">
                    <Link to="/cart">
                      <CardWidget
                        Icon={FaShoppingBag}
                        color={"black"}
                        size={"20px"}
                      />
                    </Link>
                    <span className="text-info border-0 fw-bold pe-2 ms-1">
                      {cart.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </>
    
  );
};

export default NavBar;
