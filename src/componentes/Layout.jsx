import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import NavBar from "./navbar/NavBar"

const Layout = () => {
    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout