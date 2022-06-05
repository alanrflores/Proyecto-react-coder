import React, { useState , useContext }from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Login = () => {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

const {loginUser} = useContext(UserContext)

 const navegate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log(users)
  setError("")
try {
   await loginUser(users.email, users.password)
   navegate("/")
   console.log("usuario creado")
} catch (error) {
  console.log(error.code)
  if(error.code === "auth/internal-error"){
  setError("correo invalido")
  }
}

}


  return (
    
    <div className='container vh-100'>
    
    <h1 className='text-center mt-2'>Login</h1>
    <hr />
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
    <input 
      className='form-control mt-2'
      type="email"
      name="email"
      placeholder="ingrese su email"
      onChange={(e) => setUsers({ ...users, email: e.target.value })}
    />
    <input
        className='form-control mt-2'
        type="password"
        name='password'
         placeholder="******"
         onChange={(e) => setUsers({ ...users, password: e.target.value })}
    />
    <div className='d-flex justify-content-evenly'>
    <button className='btn btn-outline-info border-bottom border-0 m-2' type='submit' >
      Acceder
    </button>
    <Link to="/register">
    <button className='btn btn-outline-warning border-bottom border-0 m-2' type='submit' >
      ¿ No tienes Cuenta ?
    </button>
    </Link>
    </div>
    </form>
    </div>
  )
}

export default Login