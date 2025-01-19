import Img1 from "../assets/images/Products-img/img1.webp";
import Img2 from "../assets/images/Products-img/img2.webp";
import Img3 from "../assets/images/Products-img/img3.webp";
import Img4 from "../assets/images/Products-img/img4.webp";
import Img5 from "../assets/images/Products-img/img5.webp";
import Img6 from "../assets/images/Products-img/img6.webp";
import Img7 from "../assets/images/Products-img/img7.webp";
import Img8 from "../assets/images/Products-img/img8.webp";
import { Link } from "react-router-dom";
import ProductBox from "../pages/Home/ProductBox";
import SeeMorebtn from "./SeeMorebtn";

function ShopProducts() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 place-content-center content-center p-9">
        <div className="row-span-4 productCard ">
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
          <Link to="/singleProduct">
            <ProductBox
              images={Img2}
              dis="-30%"
              proname="Leviosa"
              proinfo="Stylish cafe chair"
              disprice="Rp 2.500.000"
              orgprice="Rp 3.500.000"
            />
          </Link>
        </div>

        <div className="row-span-4 productCard -z-50">
          <Link to="/singleProduct">
            <ProductBox
              images={Img3}
              dis="-50%"
              proname="Lolito"
              proinfo="Luxury big sofa"
              disprice="Rp 7.000.000"
              orgprice="Rp 14.000.000"
            />
          </Link>
        </div>
        <div className="row-span-4 productCard -z-50">
          <ProductBox
            images={Img4}
            dis="NEW"
            proname="Respira"
            proinfo="Outdoor bar table and stool"
            disprice="Rp 500.000"
            orgprice="Rp 3.500.000"
          />
        </div>
        <div className="row-span-4 productCard ">
          <ProductBox
            images={Img5}
            dis="-30%"
            proname="Grifo"
            proinfo="Night lamp"
            disprice="Rp 1.500.000"
            orgprice="Rp 3.500.000"
          />
        </div>

        <div className="row-span-4 productCard">
          <Link to="/singleProduct">
            <ProductBox
              images={Img6}
              dis="-30%"
              proname="Muggo"
              proinfo="Small mug"
              disprice="Rp 150.000"
              orgprice="Rp 3.500.000"
            />
          </Link>
        </div>
        <div className="row-span-4 productCard">
          <ProductBox
            images={Img7}
            dis="-30%"
            proname="Pingky"
            proinfo="Cute bed set"
            disprice="Rp 7.000.000"
            orgprice="Rp 14.000.000"
          />
        </div>
        <div className="row-span-4 productCard">
          <ProductBox
            images={Img8}
            dis="-30%"
            proname="Potty"
            proinfo="Minimalist flower pot"
            disprice="Rp 500.000"
            orgprice="Rp 3.500.000"
          />
        </div>
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
        <div className="row-span-4 productCard">
          <ProductBox
            images={Img5}
            dis="-30%"
            proname="Grifo"
            proinfo="Night lamp"
            disprice="Rp 1.500.000"
            orgprice="Rp 3.500.000"
          />
        </div>
        <div className="row-span-4 productCard">
          <ProductBox
            images={Img6}
            dis="-30%"
            proname="Muggo"
            proinfo="Small mug"
            disprice="Rp 150.000"
            orgprice="Rp 3.500.000"
          />
        </div>

        <div className="row-span-4 productCard">
          <Link to="/singleProduct">
            <ProductBox
              images={Img7}
              dis="-30%"
              proname="Pingky"
              proinfo="Cute bed set"
              disprice="Rp 7.000.000"
              orgprice="Rp 14.000.000"
            />
          </Link>
        </div>

        <div className="row-span-4 productCard">
          <Link to="/singleProduct">
            <ProductBox
              images={Img8}
              dis="-30%"
              proname="Potty"
              proinfo="Minimalist flower pot"
              disprice="Rp 500.000"
              orgprice="Rp 3.500.000"
            />
          </Link>
        </div>
      </div>
      <SeeMorebtn />
    </div>
  );
}

export default ShopProducts;
