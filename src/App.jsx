import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./componentes/cart/Cart"
import ItemDetailContainer from "./componentes/items/ItemDetailContainer"
import ItemListContainer from "./componentes/items/ItemListContainer"
import Layout from "./componentes/Layout"
import CartContextProvider from "./context/CartContextProvider"
import Games from "./views/Games"
import Home from "./views/Home"
import Error from "./componentes/error/Error"
import Login from "./views/Register"
import UserProvider from "./context/UserProvider"
import Register from "./views/Register"
import RequireAuth from "./componentes/require/RequireAuth"

const App = () => {
  
    return (
        <CartContextProvider>
        <UserProvider>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element=
                    {
                    <RequireAuth>
                      <Home />
                    </RequireAuth>
                    } 
                    />
                    <Route path="/login" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    

                    <Route path="/games">
                        <Route index element={<Games />}/>
                        <Route path="category/:id" element={<ItemListContainer/>} />
                        <Route path="detail/:id" element={<ItemDetailContainer />} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Error />} />
                    </Route>
            </Routes>
        </BrowserRouter>
        </UserProvider>
        </CartContextProvider>
    )
}

export default App