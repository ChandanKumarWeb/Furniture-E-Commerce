/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import shopImg from "../assets/images/Shop-pageImages/Shopbanner.webp";

function MainBanner(props) {
  return (
    <div>
      <div className="shophomeimgSec -z-50 mb-5">
        <img className="shophomeimg" src={shopImg} />
        <div className="shopbannText">
          <h1 className="text-4xl font-semibold flex flex-auto justify-center items-center">
            {props.PageName}
          </h1>
          <div className="flex flex-auto justify-center items-center gap-1">
            <p className="text-lg font-semibold">{props.Nav1}</p>
            <FontAwesomeIcon className='mx-4' icon={faGreaterThan} />
            <p className="text-lg">{props.Nav2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
