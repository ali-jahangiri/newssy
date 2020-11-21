import React from "react";

const LoadnigProvider = ({ loading, children, C }) => (
  <div className="loading-provider">{loading ? children : C}</div>
);
export default LoadnigProvider;
