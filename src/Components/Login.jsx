import React from "react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import supabase from "../utils/supabase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error);
      setMessage(error);
      setEmail("");
      setPassword("");
      return;
    }

    if (data) {
      setMessage("User Logged in Successfully!!!");
      console.log("User Logged in Successfully!!!");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <h3>Login Page</h3>
      <p>Enter your credentials</p>

      {message && <>{message}</>}
      <form>
        <input
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
      <span>Don't have an account? </span>
      <Link to="/register">Register</Link>
    </>
  );
};

export default Login;
