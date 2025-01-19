// import { Link } from "react-router-dom";
import ProductBox from "./ProductBox";
import Img1 from "./../../assets/images/Products-img/img1.webp";
import Img2 from "./../../assets/images/Products-img/img2.webp";
import Img3 from "./../../assets/images/Products-img/img3.webp";
import Img4 from "./../../assets/images/Products-img/img4.webp";
import Img5 from "./../../assets/images/Products-img/img5.webp";
import Img6 from "./../../assets/images/Products-img/img6.webp";
import Img7 from "./../../assets/images/Products-img/img7.webp";
import Img8 from "./../../assets/images/Products-img/img8.webp";

function Products() {
  const products = [
    { id: 1, image: Img1, discount: "-30%", name: "Syltherine", info: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000" },
    { id: 2, image: Img2, discount: "-30%", name: "Leviosa", info: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000" },
    { id: 3, image: Img3, discount: "-50%", name: "Lolito", info: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000" },
    { id: 4, image: Img4, discount: "NEW", name: "Respira", info: "Outdoor bar table and stool", price: "Rp 500.000", originalPrice: "Rp 3.500.000" },
    { id: 5, image: Img5, discount: "NEW", name: "Grifo", info: "Night lamp", price: "Rp 1.500.000", originalPrice: "" },
    { id: 6, image: Img6, discount: "NEW", name: "Muggo", info: "Small mug", price: "Rp 150.000", originalPrice: "" },
    { id: 7, image: Img7, discount: "-50%", name: "Pingky", info: "Cute bed set", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000" },
    { id: 8, image: Img8, discount: "-30%", name: "Potty", info: "Minimalist flower pot", price: "Rp 500.000", originalPrice: "" },
  ];

  return (
    <div>
      <div className="heading">
        <h1 className="sectionHead">Our Products</h1>
        <p className="sectionPera">Get your Favourite </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 place-content-center content-center p-9">
        {products.map((product) => (
          <ProductBox
            key={product.id}
            images={product.image}
            dis={product.discount}
            proname={product.name}
            proinfo={product.info}
            disprice={product.price}
            orgprice={product.originalPrice}
          />
        ))}
      </div>

      <div className="flex place-content-center content-center">
        <button type="button" className="seemorebtn">Show More</button>
      </div>
    </div>
  );
}

export default Products;
