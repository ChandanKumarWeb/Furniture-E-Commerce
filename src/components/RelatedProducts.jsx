import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../assets/images/Products-img/img1.webp";
import Img2 from "../assets/images/Products-img/img2.webp";
import Img3 from "../assets/images/Products-img/img3.webp";
import Img4 from "../assets/images/Products-img/img4.webp";
import ProductBox from "../pages/Home/ProductBox";

function RelatedProducts() {
  return (
    <div className="border-b-4 p-5">
      <div className="heading p-5">
        <h1 className="sectionHead">Related Products</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 place-content-center content-center p-9">
        <div className="row-span-4 productCard">
          <Link to="/singleProduct">
            <ProductBox
              images={Img1}
              dis="-30%"
              proname="Syltherine"
              proinfo="Stylish cafe chair"
              disprice="Rp 2.500.000"
              orgprice="Rp 3.500.000"
            />
          </Link>
        </div>
        <div className="row-span-4 productCard">
          <ProductBox
            images={Img2}
            dis="-30%"
            proname="Leviosa"
            proinfo="Stylish cafe chair"
            disprice="Rp 2.500.000"
            orgprice="Rp 3.500.000"
          />
        </div>
        <div className="row-span-4 productCard">
          <ProductBox
            images={Img3}
            dis="-50%"
            proname="Lolito"
            proinfo="Luxury big sofa"
            disprice="Rp 7.000.000"
            orgprice="Rp 14.000.000"
          />
        </div>
        <div className="row-span-4 productCard">
          <ProductBox
            images={Img4}
            dis="NEW"
            proname="Respira"
            proinfo="Outdoor bar table and stool"
            disprice="Rp 500.000"
            orgprice="Rp 3.500.000"
          />
        </div>
      </div>
      <div className="flex place-content-center content-center">
        <button type="button" className="seemorebtn">
          Show More
        </button>
      </div>
    </div>
  );
}

export default RelatedProducts;
