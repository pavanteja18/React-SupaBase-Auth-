import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <h3>Hello, User</h3>
      <p>Welcome to the Supabase Authentication page.</p>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <br />
      <br />
      <button>
        <Link to="/register">Register</Link>
      </button>
    </>
  );
};

export default Home;
