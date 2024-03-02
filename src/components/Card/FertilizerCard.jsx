import "../Card/CropCard.css";
import React from "react";
import Card from "./Card";
import { fertilizerData } from "../../Data/Crop";

function FertilizerCard() {
  console.log("data is shown below");

  return (
    <>
      {fertilizerData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </>
  );
}

export default FertilizerCard;
