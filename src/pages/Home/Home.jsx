import furniture from "../../assets/images/home-bg.webp";
import "../../assets/Css/main.css";
import Products from "./Products"; 
import Browse from "./Browse";
import Banner from "../../components/Banner";
import Furniture from "./Furniture";
import Fotter from "../../components/Footer"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
    <div className="homebgImg pb-6 ">
      <img className=" w-full h-screen" src={furniture} alt="bg-image" />
      <div className="imgContent">
        <h6 className="font-semibold">New Arrival</h6>
        <h2 className="text-5xl">
          Discover Our <br /> New Collection
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Link className="btn">
          BUY NOW
        </Link>
      </div> 
    </div>
    <Browse/>
    <Products /> 
    <Banner/>
    <Furniture/>
    <Fotter/>
    </div>
  );
};

export default Home;
