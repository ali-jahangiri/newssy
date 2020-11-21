import React from "react";

const ImgS = ({ src }) => {
  try {
    return <img src={src} className="img-fluid" alt="" />;
  } catch (error) {
    return (
      <img
        alt=""
        src={
          "https://static01.nyt.com/images/2020/11/07/us/politics/Bidentakeaways/Bidentakeaways-facebookJumbo.jpg"
        }
      />
    );
  }
};

export default ImgS;
