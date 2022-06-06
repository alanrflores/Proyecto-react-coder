import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import Alert from "../componentes/alert/Alert";
import "./Register.css";

const Register = () => {
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { registerUser } = useContext(UserContext);

  const navegate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    setError("");
    try {
      await registerUser(users.email, users.password);
      navegate("/");
      console.log("usuario creado");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register-container">
      <h1 className="text-center">
        <i>Check in</i>{" "}
      </h1>
      <hr />
      {error && <Alert message={error} />}
      <div className="d-flex justify-content-center">
        <form className="register-form" onSubmit={handleSubmit}>
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
          <div className="button-container">
            <button
              className="btn btn-outline-success border-0 border-bottom"
              type="submit"
            >
              <i>Check in</i>
            </button>
          </div>
        </form>
      </div>
      <div className="login">
        <span>Already have an Account?</span>
        <Link to="/login">
          <div className="button-div">
            <button
              className="btn btn-outline-info border-bottom border-0"
              type="submit"
            >
              <i>Login</i>
            </button>
          </div>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Register;
