import React, { useState } from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {name:name, email:email, password:password}
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
 
  return (
    <div className="signup">
      <h1 className="title">REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputfields">
          <input
            type="text"
            placeholder="Name"
            className="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

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
            Register
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already have an Account ?</p>
        <Link to="/" className="login-btn">
          <span className="login-btn">Login</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
