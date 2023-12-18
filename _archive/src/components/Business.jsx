import React from "react";
import businessData from "../data/businessData";

const Business = () => {
  return (
    <div style={{ fontSize: "medium" }}>
      <img
        src={businessData.imageSrc}
        alt={businessData.name}
        style={{ width: "200px" }}
      />
      <div>{businessData.name}</div>
      <div>{businessData.address}</div>
      <div>{businessData.city}</div>
      <div>{businessData.state}</div>
      <div>{businessData.zipCode}</div>
      <h3>{businessData.category.toUpperCase()}</h3>
      <h3>{`${businessData.rating} stars`}</h3>
      <p>{`${businessData.reviewCount} reviews`}</p>
    </div>
  );
};

export default Business;
