import React from "react";
import Image from "react-bootstrap/esm/Image";
import './cotton.css'

const CottenWaste = () => {
  return (
    <div  
      style={{ margin: "90px 20px", display: "flex", justifyContent:'center'}}
    >
        <div className="imgDivvv">
          <h2 style={{fontWeight:'600', textAlign:'center'}}>Cotton Waste</h2>
          <Image className="con" src={require("../../assets/yarn/CottonWasteC.jpeg")} />
          <div style={{padding:'23px 0px'}}>
                <p>1. Comber noil</p>
                <p>2. Processed cotton waste</p>
                <p>3. Lickerin</p>
                <p>4. Flat</p>
                <p>5. Dropping</p>
                <p>6. Linter Waste</p>
                <p>7. Sweeping</p>
                <p>8. Hard Waste</p>
                <p>9. All Types of waste available</p>
          </div>
        </div>
    </div>
  );
};

export default CottenWaste;
