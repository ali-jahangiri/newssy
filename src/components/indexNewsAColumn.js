import React from "react";
import IndexNewsItem from "./indexNewsItem";
const IndexNewsCulomn = ({ data, col }) => {
  return (
    <div className={`col-md-${col}`}>
      <div className="indexnesw__container">
        {data.map((el) => (
          <IndexNewsItem key={el.publishedAt + Math.random()} value={el} />
        ))}
      </div>
    </div>
  );
};

export default IndexNewsCulomn;
