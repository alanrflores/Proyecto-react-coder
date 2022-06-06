import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import "./Login.css";
import Alert from "../componentes/alert/Alert";

const Login = () => {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { loginUser, loginWithGoogle, resetPassword } = useContext(UserContext);

  const navegate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    setError("");
    try {
      await loginUser(users.email, users.password);
      navegate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  //funcion logear con google
  const handleGoogleSingin = async () => {
    try {
      await loginWithGoogle();
      navegate("/");
    } catch (error) {
      setError(error.message);
    }
  };

//funcion reiniciar contraseña
  const handleResetPassword = async(e) =>{
    e.preventDefault();
    if(!users.email) return setError("Please enter you email")
   try {
    await resetPassword(users.email)
     setError("We sent you an email. Check your inbox o section spam")
   } catch (error) {
     setError(error.message)
   }
  }

  return (
    <>
      <div className="login-container">
        <h1 className="text-center">
          <i>Login</i>
        </h1>
        <hr />
        {error && <Alert message={error} />}
        <div className="d-flex justify-content-center">
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="block m-2">
              Email
            </label>
            <input
              className="form-control shadow mt-2 mb-4 p-2 border-0 border-bottom rounded"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setUsers({ ...users, email: e.target.value })}
            />
            <label htmlFor="password" className="block m-2">
              Password
            </label>
            <input
              className="form-control shadow mt-2 mb-4 p-2 border-0 border-bottom rounded"
              type="password"
              name="password"
              placeholder="******"
              onChange={(e) => setUsers({ ...users, password: e.target.value })}
            />
            <div className="btn-password">
              <button
                className="btn btn-outline-info border-bottom border-0 m-2"
                type="submit"
              >
                <i>To access</i>
              </button>
              <a href="#!" className="a-password" onClick={handleResetPassword} >
              Forgot your Password?
            </a>
            </div>
          </form>
        </div>
        <div className="register">
          <span>Don't have an Account?</span>
          <Link to="/register">
            <div className="button-div">
              <button
                className="btn btn-outline-warning border-bottom border-0"
                type="submit"
              >
                <i>Register</i>
              </button>
            </div>
          </Link>
        </div>
        <hr />
        <div className="google-div">
          <button
            className="btn btn-outline-dark border-0 border-bottom border-top mt-4"
            onClick={handleGoogleSingin}
          >
            <i>Google Login</i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
