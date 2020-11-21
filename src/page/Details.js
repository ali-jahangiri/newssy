import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import DetailsBox from "../components/detailsBox";

import Context from "../context/AppContext";

const Details = () => {
  const { details } = useContext(Context);
  return (
    <div>
      <DetailsBox value={details} />
    </div>
  );
};

export default withRouter(Details);
