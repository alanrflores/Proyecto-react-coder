import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./componentes/cart/Cart"
import ItemDetailContainer from "./componentes/items/ItemDetailContainer"
import ItemListContainer from "./componentes/items/ItemListContainer"
import Layout from "./componentes/Layout"
import CartContextProvider from "./context/CartContextProvider"
import Games from "./views/Games"
import Home from "./views/Home"


const App = () => {
  
    return (
        <CartContextProvider>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/games" element={<Games />}/>
                    <Route path="games/detail/:id" element={<ItemDetailContainer />} />
                    <Route path="games/:category" element={<ItemListContainer/>} />
                    <Route path="/cart" element={<Cart />} />
                    
                    </Route>
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
    )
}

export default App