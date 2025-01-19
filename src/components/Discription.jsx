import React from "react";
import Img6 from "../assets/images/SingleProductImg/image6.webp"
import Img7 from "../assets/images/SingleProductImg/image7.webp"


function Discription() {
  return (
    <div className="border-b-4">
      <div className="flex justify-evenly items-center p-5 text-gray-600 font-semibold">
        <h1>Discription</h1>
        <h1>Additional Information</h1>
        <h1>Reviews [5]</h1>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center w-full ">
        <p className="w-3/4">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="w-3/4 ">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
        <div className="flex justify-center items-center gap-2 m-4">
          <img className="discriptionImg" src={Img6} alt=""/>
          <img className="discriptionImg" src={Img7} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Discription;
