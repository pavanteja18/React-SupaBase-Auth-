import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import { Navigate } from "react-router";

function Wrapper({ children }) {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuth(!!session);
      setLoading(false);
    };
    getSession();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  } else {
    if (auth) {
      return <>{children}</>;
    }
    return <Navigate to="/login" />;
  }
}

export default Wrapper;
