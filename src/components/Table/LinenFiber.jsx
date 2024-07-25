import React from "react";
import Image from "react-bootstrap/esm/Image";
import './viscose.css'

const LinenFiber = () => {
  return (
    <div
      style={{ margin: "90px 20px", display: "flex", justifyContent: "center" }}
    >
      <div>
        <h2 style={{fontWeight:'600', textAlign:'center'}}>Linen fibre</h2>
        
          <Image className="con" src={require("../../assets/images/linen-fiber.jpeg")} />
          <div style={{ margin: "12px 0px" }}>
            <h3>More Details:</h3>
            <p>1. Linen fibre /flax fibre </p>
            <p>2. Linen tow </p>
            <p>3. Linen noil </p>
            <p>4. Flax waste </p>
            <p>5. Flax loop waste </p>
            <p>6. Cottonized linen </p>
            <p>7. Cotton-linen flat /Lickerin /Dropping </p>
        </div>
      </div>
    </div>
  );
};

export default LinenFiber;
