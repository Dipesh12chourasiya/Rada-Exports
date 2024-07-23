import React from 'react'
import Image from 'react-bootstrap/Image';

const PolyesterFiber = () => {
  return (
    <div style={{margin:'70px 20px', display:'flex' , justifyContent:'center'}}>
      <div >
        <h1 >Polyester fibre</h1>
        <Image src={require('../../assets/images/poly-fiber.jpeg')} />
        <p style={{margin:'12px 0px'}}>1.2 DN - 38mm , 40mm , 44mm</p>
        <p>1.4 DN - 38mm , 40mm , 44mm</p>
      </div>
    </div>
  )
}

export default PolyesterFiber;