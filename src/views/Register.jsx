import React, { useState , useContext }from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'


const Register = () => {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

const {registerUser} = useContext(UserContext)

 const navegate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log(users)
  setError("")
try {
   await registerUser(users.email, users.password)
   navegate("/")
   console.log("usuario creado")
} catch (error) {
  console.log(error.code)
  if(error.code === "auth/internal-error"){
  setError("correo invalido")
  }else if(error.code === "auth/email-already-exists"){
    setError("Este correo de usuario ya existe")
  }else if(error.code === "auth/invalid-password"){
    setError("No es valido, debe ser una string con al menos seis caracteres")
  }
}

}


  return (
    
    <div className='container vh-100'>
    <div className='register'>
    <h1 className='text-center mt-2'>Register</h1>
    <hr />
    {error && <p>{error}</p>}
    <form  onSubmit={handleSubmit}>
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
    <div className='d-flex justify-content-center'>
    <button className='btn btn-outline-success border-0 border-bottom m-2' type='submit' >
      Registrarse
    </button>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Register