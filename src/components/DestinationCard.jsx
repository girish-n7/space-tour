/* eslint-disable react/prop-types */
// import React from "react";

export default function DestinationCard({
  name,
  price,
  image,
  status,
  description,
}) {
  let bgColor = "";
  let cardStatus = "";
  const cardImgStyle = {
    backgroundImage: `url("${image}")`,
  };

  if (status === "available") {
    bgColor = "#14A44D";
    cardStatus = "Available";
  } else if (status === "few") {
    bgColor = "#E4A11B";
    cardStatus = "Hurry, few left!";
  } else {
    bgColor = "grey";
    cardStatus = "Sold Out";
  }

  const cardStatusStyle = {
    backgroundColor: bgColor,
  };

  return (
    <div className="card--boundary">
      <div className="card--img" style={cardImgStyle}>
        <p className="card--status" style={cardStatusStyle}>
          {cardStatus}
        </p>
        {status === "filled" ? null : (
          <button
            className="card--buy"
            onClick={() => (window.location.href = "/about")}
          >
            Buy!
          </button>
        )}
      </div>
      <div className="card--head">
        <p className="card--title">{name}</p>
        <p className="card--price">{price} units</p>
      </div>
      <div className="card--description">{description}</div>
    </div>
  );
}
