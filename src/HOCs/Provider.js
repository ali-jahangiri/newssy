import React, { useState } from "react";
import Context from "../context/AppContext";
import useDetails from "../Hook/useDetails";
import useFetch from "../Hook/useFetch";

const Provider = ({ children }) => {
  const [countery, setCountery] = useState("us");
  const [value, error, loading] = useFetch(countery);
  const [details, setDetails] = useDetails();
  return (
    <Context.Provider
      value={{ setCountery, value, loading, error, details, setDetails }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
