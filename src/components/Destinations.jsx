// import React from "react";
import DestinationCard from "./DestinationCard";
import { data } from "../data/destinationDB";

export default function Destinations() {
  const cardMap = data.map((data) => {
    return (
      <DestinationCard
        key={data._id}
        name={data.name}
        price={data.price}
        image={data.image}
        status={data.status}
        description={data.description}
      />
    );
  });

  return (
    <div className="destinations--container fade">
      <div className="card--container">{cardMap}</div>
    </div>
  );
}
