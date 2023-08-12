import React, { useState } from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {name:name, email:email, password:password}
    axios
      .post("http://localhost:3001/", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data == "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <h1 className="title">LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputfields">
          <input
            type="email"
            className="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            className="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="reg-btn" type="submit">
            LOGIN
          </button>
        </div>
      </form>

      <div className="login">
        <p>New user?</p>
        <Link to="/register" className="signup-btn">
          <span className="login-btn">Signup</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
