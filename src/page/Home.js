import React, { useContext } from "react";
import CountryBar from "../components/conutryBar";

import IndexNews from "../components/indexNews";
import context from "../context/AppContext";
import LoadnigProvider from "../HOCs/LodingProvider";

const Home = () => {
  const { loading, value } = useContext(context);
  return (
    <div className="container-fluid">
      <div className="row"></div>
      <CountryBar />
      <LoadnigProvider loading={loading} C={<IndexNews value={value} />}>
        <p>loading..</p>
      </LoadnigProvider>
    </div>
  );
};

export default Home;
