import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./componentes/cart/Cart";
import ItemDetailContainer from "./componentes/items/ItemDetailContainer";
import ItemListContainer from "./componentes/items/ItemListContainer";
import Layout from "./componentes/Layout";
import CartContextProvider from "./context/CartContextProvider";
import Games from "./views/Games";
import Home from "./views/Home";
import Error from "./componentes/error/Error";
import UserProvider from "./context/UserProvider";

import Register from "./views/Register";
import Login from "./views/Login";
import RequireAuth from "./componentes/require/RequireAuth";

const App = () => {
  return (
    <CartContextProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route path="/games">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <Games />
                    </RequireAuth>
                  }
                />
                <Route
                  path="category/:id"
                  element={
                    <RequireAuth>
                      <ItemListContainer />
                    </RequireAuth>
                  }
                />
                <Route
                  path="detail/:id"
                  element={
                    <RequireAuth>
                      <ItemDetailContainer />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route
                path="/cart"
                element={
                  <RequireAuth>
                    <Cart />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </CartContextProvider>
  );
};

export default App;
