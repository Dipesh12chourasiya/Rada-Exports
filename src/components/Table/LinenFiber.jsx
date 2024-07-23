import React from "react";
import Image from "react-bootstrap/esm/Image";
import './viscose.css'

const LinenFiber = () => {
  return (
    <div
      style={{ margin: "70px 20px", display: "flex", justifyContent: "center" }}
    >
      <div>
        <h1>Linen fibre</h1>
        
          <Image className="con" src={require("../../assets/images/linen-fiber.jpeg")} />
          <p style={{ margin: "12px 0px" }}>
          <ul>
            <h3>More Details:</h3>
            <li>Linen fibre /flax fibre </li>
            <li>Linen tow </li>
            <li>Linen noil </li>
            <li>Flax waste </li>
            <li>Flax loop waste </li>
            <li>Cottonized linen </li>
            <li>Cotton-linen flat /lickerin /dropping </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default LinenFiber;
