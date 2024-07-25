import React from "react";
import Image from "react-bootstrap/esm/Image";
import './cotton.css'

const Waste = () => {
  return (
    <div  
      style={{ margin: "90px 20px", display: "flex", justifyContent:'center'}}
    >
        <div className="imgDiv">
          <h2 style={{fontWeight:'600', textAlign:'center'}}>Waste</h2>
          <Image className="con" src={require("../../assets/yarn/WasteC.jpeg")} />
          <div style={{padding:'23px 0px'}}>
                <p>1. 100% Polyster Flat Waste</p>
                <p>2. Cotton Linen Waste 100%</p>
                <p>3. Saliver P/C - flat</p>
                <p>4. 100% Polyester Rowing and Saliver</p>
                <p>5. Dropping</p>
                <p>6. 100% Viscose Waste Available</p>
                <p>7. 100% Viscose Flat</p>
                <p>8. Rowing</p>
                <p>9. Saliver Cotton Viscose Flat </p>
                <p>10. Polyster Viscose Flat</p>
                <p>11. Lickerin</p>
                <p>12. Processed Waste</p>
          </div>
        </div>
    </div>
  )
}

export default Waste
