import React from "react";
import { Link } from "react-router";
import supabase from "../utils/supabase";

const Dashboard = () => {
  const handleClick = async (event) => {
    event.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <>
      <h3>Welcome to the dashboard user!!</h3>
      <button onClick={handleClick}>
        <Link to="/login">SignOut</Link>
      </button>
    </>
  );
};

export default Dashboard;
