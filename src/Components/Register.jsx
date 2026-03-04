import React from "react";
import { Link } from "react-router";
import { useState } from "react";
import supabase from "../utils/supabase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
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
      setMessage("User created Successfully!!");
      console.log("User created Successfully!!!");
      return null;
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h3>Registration Page</h3>
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
      <span>Already have an account? </span>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Register;
