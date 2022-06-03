import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {createContext, useState} from "react"
import { auth } from "../componentes/service/Firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
 const [user, setUser] = useState(false)

 const registerUser = (email, pass) => createUserWithEmailAndPassword(auth, email, pass)

 const loginUser = (email, pass) => signInWithEmailAndPassword(auth, email, pass)

 const signOutUser = () => signOut(auth)


return (
     <UserContext.Provider value={{ user, setUser, loginUser , registerUser, signOutUser }}>
     {children}
     </UserContext.Provider>

)
}

export default UserProvider;