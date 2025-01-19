import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import furnitureImg1 from "../../assets/images/Furniture-img/FurnImg1.webp";
import furnitureImg2 from "../../assets/images/Furniture-img/FurnImg2.webp";
import furnitureImg3 from "../../assets/images/Furniture-img/FurnImg3.webp";
import furnitureImg4 from "../../assets/images/Furniture-img/FurnImg4.webp";
import furnitureImg5 from "../../assets/images/Furniture-img/FurnImg5.webp";
import furnitureImg6 from "../../assets/images/Furniture-img/FurnImg6.webp";
import furnitureImg7 from "../../assets/images/Furniture-img/FurnImg7.webp";
import furnitureImg8 from "../../assets/images/Furniture-img/FurnImg8.webp";
import furnitureImg9 from "../../assets/images/Furniture-img/FurnImg9.webp";


function Furniture() {

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <p className="text-gray-500 text-lg">Share your setup with</p>
        <h1 className="text-4xl font-bold sectionHead">#FuniroFurniture</h1>
      </div>

      
      <ResponsiveMasonry
       columnsCountBreakPoints={{1024: 5, 750: 3, 350: 1 }}
      >
        <Masonry gutter="16px">
          <img
            src={furnitureImg1}
            alt="Furniture 1"
            className="rounded-lg"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <img
            src={furnitureImg2}
            alt="Furniture 2"
            className="rounded-lg"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <img
            src={furnitureImg3}
            alt="Furniture 3"
            className="rounded-lg"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
          <img
            src={furnitureImg4}
            alt="Furniture 4"
            className="rounded-lg"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
          <img
            src={furnitureImg5}
            alt="Furniture 5"
            className="rounded-lg"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
          <img
            src={furnitureImg6}
            alt="Furniture 6"
            className="rounded-lg"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
           <img
            src={furnitureImg7}
            alt="Furniture 7"
            className="rounded-lg"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <img
            src={furnitureImg8}
            alt="Furniture 8"
            className="rounded-lg"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
          <img
            src={furnitureImg9}
            alt="Furniture 9"
            className="rounded-lg"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
          />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Furniture;
