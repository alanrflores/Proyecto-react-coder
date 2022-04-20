
import { Outlet } from "react-router-dom"
import NavBar from "./componentes/navbar/NavBar"


const App = () => {
    return (
        <>
           
                <NavBar />
                
                <div className="container">
                
                 <Outlet />
                 
                </div>
            
        </>
    )
}

export default App