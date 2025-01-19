import "../../assets/Css/main.css";
import "../../assets/Css/Shop.css";
import ShopProducts from "../../components/Shop-products";
import Toolbar from "./Toolbar";
import Features from "./Features";
import Footer from "../../components/Footer";
function Shop() {
  return (
    <div>
      <Toolbar/>
      <ShopProducts/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default Shop;
