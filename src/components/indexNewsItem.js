import React, { useContext } from "react";
import ImgS from "./Img";
import { withRouter } from "react-router-dom";

import Context from "../context/AppContext";
const IndexNewsItem = ({ value, history }) => {
  const { setDetails } = useContext(Context);
  const goDetails = () => {
    setDetails(value);
    history.push(`/details`);
  };
  return (
    <div className={`indexNews__item`}>
      <div onClick={() => goDetails()}>
        <ImgS src={value.urlToImage} />
        <h2>{value.title}</h2>
        <p className="indexNews__author">{value.author}</p>
      </div>
    </div>
  );
};
export default withRouter(IndexNewsItem);
