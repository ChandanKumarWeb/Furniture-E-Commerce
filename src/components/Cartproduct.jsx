import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Cartproduct(props) {
  return (
    <div>
      <div className=" flex items-center justify-between gap-4 px-5 pt-5">
          <img className="cartImg" src={props.Img} alt=''/>
          <div className="flex flex-col">
            <h2 className="cartProNme" >{props.ProName}</h2>
            <div className="cartProQnt flex justify-between items-center w-auto">
                <p>{props.Quantity}</p>
                <p>X</p>
                <p style={{color:"#B88E2F"}}>{props.TotalPrc}</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faCircleXmark} style={{color: "#9f9f9f",}}/>
        </div>
    </div>
  )
}

export default Cartproduct
