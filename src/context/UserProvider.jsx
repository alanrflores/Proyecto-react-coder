import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {createContext, useState, useEffect} from "react"
import { auth } from "../componentes/service/Firebase";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
const [users, setUsers] = useState(null)
const [loading, setLoading] = useState(true)

//Registrar usuario
 const registerUser = (email, pass) => createUserWithEmailAndPassword(auth, email, pass)
//Logear usuario
 const loginUser = (email, pass) => signInWithEmailAndPassword(auth, email, pass)

 //cerrar sesion
 const logout = () => signOut(auth)

//ejecuta cuando carga el componente provider, muestra la info de user si esta registrado o logeado
 useEffect(() => {
   const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
         setUsers(currentUser)
         setLoading(false)
    });
    return () => unsuscribe();
 }, []);
 


return (
     <UserContext.Provider value={{ registerUser, loginUser, logout, users, loading}}>
     {children}
     </UserContext.Provider>

)
}

export default UserProvider;