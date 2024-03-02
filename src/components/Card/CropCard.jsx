import "../Card/CropCard.css";
import React, { useState } from "react";
import Card from "./Card";

import { cropData } from "../../Data/Crop";

function CropCard(props) {
  console.log("This is CropCard", props.value);



  const { img, name, description } = cropData;

  return (
    <>
      {props.value.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      {/* <Card /> */}
    </>
  );
}

export default CropCard;
