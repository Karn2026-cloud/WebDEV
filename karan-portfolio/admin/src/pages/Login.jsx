import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");

  const navigate =
  useNavigate();

  const handleLogin =
  async () => {

    try {

      const res =
      await axios.post(
        "https://webdev-1-jsp7.onrender.com/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch(err) {

      alert(
        err.response?.data?.message ||
        "Login Failed"
      );

    }

  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
};

export default Login;