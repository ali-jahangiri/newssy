import React from "react";
import IndexNewsColumn from "./indexNewsAColumn";

const IndexNews = ({ value: { articles } }) => (
  <div className="row no-gutters">
    <IndexNewsColumn col={3} data={articles.slice(0, 5)} />
    <IndexNewsColumn col={4} data={articles.slice(5, 10)} />
    <IndexNewsColumn col={3} data={articles.slice(10, 15)} />
    <IndexNewsColumn col={2} data={articles.slice(15, 20)} />
  </div>
);

export default IndexNews;
