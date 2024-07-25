import React from 'react'
import Image from 'react-bootstrap/esm/Image';
import './viscose.css'

const ViscossFiber = () => {
  return (
    <div
      style={{ margin: "90px 20px", display: "flex", justifyContent:'center'}}
    >
        <div>
        <h2 style={{fontWeight:'600', textAlign:'center'}}>Viscose fibre</h2>
          <Image className='con' src={require("../../assets/images/viscose-fiber.jpeg")} />
        <p style={{ margin: "12px 0px" }}>Virgin and tow cut both available .</p>
        <p>1.4 DN - 38mm , 40mm , 44mm</p>
        <p>1.2 DN - 38mm , 40mm , 44mm</p>
        </div>
    </div>
  )
}

export default ViscossFiber;
