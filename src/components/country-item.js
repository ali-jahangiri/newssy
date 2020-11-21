import React, { useContext } from "react";

import Context from "../context/AppContext";

const CountryItem = ({ value, code }) => {
  const { setCountery } = useContext(Context);
  return (
    <div className="col-md-1 col-sm-4 country__item">
      <span className="country-item__bar"></span>
      <span onClick={() => setCountery(code)}>{value}</span>
    </div>
  );
};
export default CountryItem;
