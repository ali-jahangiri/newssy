import React from "react";
import CountryItem from "./country-item";

const codeCC = [
  "Us",
  "Brazil",
  "Canada",
  "Switzerland",
  "Germany",
  "France",
  "India",
  "China",
  "Japan",
  "Russian",
  "Saudi Arabia",
];
const code = ["us", "br", "ca", "ch", "de", "fr", "in", "cn", "jp", "ru", "sa"];
const CountryBar = () => (
  <div style={{ padding: 0 }} className="col-md-12 country__container">
    <div className="row">
      {codeCC.map((el, index) => (
        <CountryItem key={el} code={code[index]} value={el} />
      ))}
    </div>
  </div>
);

export default CountryBar;
