import React from "react";
import Image from "react-bootstrap/esm/Image";
import './cotton.css'

const CottenWaste = () => {
  return (
    <div  
      style={{ margin: "70px 20px", display: "flex", justifyContent:'center'}}
    >
        <div className="imgDiv">
          <h1>Cotton Waste</h1>
          <Image className="con" src={require("../../assets/images/ctn-waste.jpg")} />
          <div style={{textAlign:'center'}}>
          <p style={{ margin: "12px 0px" }}>
          Comber noil, Processed cotton waste, Lickerin, Flat, Dropping, Linter
          waste, Sweeping ,Hard waste, All Types of waste available.
        </p>
        <p>
          Waste, 100% Polyster flat waste, Cotton linen waste 100% polyester
          rowing and saliver P/C - flat , lickerin , dropping 100% viscose waste
          available 100% viscose flat , rowing , saliver Cotton viscose flat and
          processed waste . Polyster viscose flat , lickerin and processed
          waste.
        </p>
          </div>
        </div>
    </div>
  );
};

export default CottenWaste;
