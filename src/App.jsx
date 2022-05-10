import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./componentes/items/ItemDetailContainer"
import Layout from "./componentes/Layout"
import Games from "./views/Games"
import Home from "./views/Home"

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/games" element={<Games />}></Route>
                    <Route path="games/detail/:id" element={<ItemDetailContainer />} />
                    </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App