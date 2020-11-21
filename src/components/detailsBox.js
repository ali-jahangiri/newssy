import React from "react";
import { withRouter } from "react-router-dom";

const DetailsBox = ({ value, history }) => {
  if (value) {
    return (
      <div className="col-md-10 m-auto">
        <div className="details__box">
          <div className="row mb-5">
            <div className="col-md-7">
              <div className="details__back">
                <span onClick={() => history.push("/")}>back Home</span>
              </div>
              <h1 className="details__title">{value.title}</h1>
            </div>
            <div className="details__img col-md-5">
              <img
                className="img-fluid"
                src={value.urlToImage}
                alt={value.title}
              />
            </div>
          </div>
          <div className="details__desc">
            <p className="details__starter">Description</p>
            <p>{value.description}</p>
          </div>
          <div className="details__content">
            <p className="details__starter">Content</p>
            <p>
              {(value.content &&
                value.content.substr(0, value.content.indexOf("["))) ||
                "there is no Content"}
              <a href={value.url}>Read More</a>
            </p>
          </div>
          <div className="details__info-box">
            <div>
              <p>Author</p>
              <p>{value.author || "Unknow"}</p>
            </div>
            <div>
              <p>Published At</p>
              <p>{value.publishedAt}</p>
            </div>
            <div>
              <p>Source</p>
              <p>{value.source.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    setTimeout(() => {
      history.push("/");
    }, 2000);
    return (
      <div className="details__error">
        <p>there is No data , you will be back to home</p>
      </div>
    );
  }
};

export default withRouter(DetailsBox);
