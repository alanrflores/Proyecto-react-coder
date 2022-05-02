
import { Outlet } from "react-router-dom"
import NavBar from "./componentes/navbar/NavBar"
import ItemListContainer from "./componentes/items/ItemListContainer"

const App = () => {
    return (
        <>
           
                <NavBar />               
                <div className="container">                
                 <Outlet />            
                 <ItemListContainer />                 
                </div>
            
        </>
    )
}

export default App