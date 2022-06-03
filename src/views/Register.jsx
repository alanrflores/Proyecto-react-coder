import React, { useState , useContext }from 'react'
import { UserContext } from '../context/UserProvider'

const Register = () => {
  const [email, setEmail] = useState([])
  const [pass, setPass] = useState([])
 
  const {registerUser} = useContext(UserContext)

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log('procesando form : ' , email, pass)
try {
   await registerUser(email, pass)
   console.log("usuario creado")
} catch (error) {
  console.log(error.code)
  alert('Este email ya fue registrado')
}

}


  return (
    <div>
    <h1>Register</h1>
    <hr />
    <form onSubmit={handleSubmit}>
    <input 
      type="email"
      placeholder="ingrese su email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
    />
    <input
        type="password"
         placeholder="ingrese su password"
         value={pass}
         onChange={(e)=> setPass(e.target.value)}
    />
    <button type='submit' >
      Ingresar
    </button>
    <button type='button'>
      ¿No tienes cuenta?
    </button>
    </form>
   
    </div>
  )
}

export default Register