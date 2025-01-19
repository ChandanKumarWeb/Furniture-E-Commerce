import React, { useState } from "react";
import img1 from "../assets/images/SingleProductImg/image1.webp";
import img2 from "../assets/images/SingleProductImg/image2.webp";
import img3 from "../assets/images/SingleProductImg/image3.webp";
import img4 from "../assets/images/SingleProductImg/image4.webp";
import img5 from "../assets/images/SingleProductImg/image5.webp";

function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("L"); // Default size
  const [selectedColor, setSelectedColor] = useState("purple"); // Default color
  const [quantity, setQuantity] = useState(1); // Default quantity

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} items to the cart.`);
  };

  const handleCompare = () => {
    alert("Product added to compare.");
  };

  const star = (
    <svg
      className="mr-2"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z"
        fill="#FFC700"
      />
    </svg>
  );

  const halfStar = (
    <svg
      width="10"
      height="18"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.1563 6.0125L0.800049 6.9375L5.40005 11.4188L4.31255 17.75L10 14.7625V0.25L7.1563 6.0125Z"
        fill="#FFC700"
      />
    </svg>
  );

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 border-b-4">
      {/* Left Section - Thumbnails */}
      <div className="flex flex-col items-center gap-4 p-6 w-96">
        <img className="imgBgCol w-20" src={img1} alt="Thumbnail 1" />
        <img className="imgBgCol w-20" src={img2} alt="Thumbnail 2" />
        <img className="imgBgCol w-20" src={img3} alt="Thumbnail 3" />
        <img className="imgBgCol w-20" src={img4} alt="Thumbnail 4" />
        <img className="imgBgCol w-20" src={img5} alt="Thumbnail 5" />
      </div>

      {/* Middle Section - Large Image */}
      <div className="w-full py-6 flex justify-center h-full">
        <img className="bigImg w-1/2 h-96" src={img1} alt="Main Product" />
      </div>

      {/* Right Section - Product Details */}
      <div className="w-full p-5 m-4">
        <h1 className="productDetailsProName">Asgaard sofa</h1>
        <h6 className="productDetailsProPrice">Rs. 250,000.00</h6>
        <div className="flex items-center mt-4">
          <h3 className="flex">
            {star} {star} {star} {star} {halfStar}
          </h3>
          <div className="divider mx-5 h-6 w-px bg-gray-300"></div>
          <div className="review-text text-gray-600">5 Customer Review</div>
        </div>
        <div className="productDetailsAbout p-2 mt-2">
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
        </div>

        {/* Size Selection */}
        <h2 className="review-text text-gray-600 mt-2">Size</h2>
        <div className="flex gap-5">
          {["L", "XL", "LS"].map((size) => (
            <button
              key={size}
              className={`sizeBtn ${selectedSize === size ? "selected" : ""}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Color Selection */}
        <h2 className="review-text text-gray-600 mt-6">Color</h2>
        <div className="flex gap-5">
          {["purple", "black", "gold"].map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full ${
                selectedColor === color ? "ring-4 ring-gray-500" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></button>
          ))}
        </div>
        <div className="flex gap-4 mt-4 border-b-4 pb-2">
          {/* Quantity Selector */}
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={handleDecrement}
              className="px-3 py-2 text-gray-600 border-r border-gray-300 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-3 py-2 text-gray-600 border-l border-gray-300 hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Add To Cart
          </button>

          {/* Compare Button */}
          <button
            onClick={handleCompare}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            + Compare
          </button>
        </div>
        {/* Product- related details*/}
        <div className="text-gray-600 flex justify-between items-center m-4 w-3/4">
          <div className="productRelatedDetailsLeft">
            <p>SKU</p>
            <p>Category</p>
            <p>Tags</p>
            <p>Share</p>
          </div>
          <div className="productRelatedDetailsColon">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className="productRelatedDetailsRight">
            <p>SS001</p>
            <p>Sofas</p>
            <p>Sofa, Chair, Home, Shop</p>
            <div className="productRelatedDetailsRightSocialApp flex items-center gap-4">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_140_1310)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.833252 2.36504C0.833252 1.95882 0.994624 1.56923 1.28187 1.28199C1.56911 0.994748 1.9587 0.833376 2.36492 0.833376H17.6333C17.8346 0.833047 18.034 0.872428 18.22 0.949265C18.4061 1.0261 18.5752 1.13888 18.7176 1.28116C18.8601 1.42343 18.973 1.5924 19.0501 1.77838C19.1271 1.96437 19.1667 2.16373 19.1666 2.36504V17.6334C19.1668 17.8347 19.1273 18.0341 19.0504 18.2202C18.9735 18.4063 18.8606 18.5754 18.7183 18.7178C18.5759 18.8602 18.4069 18.9732 18.2209 19.0502C18.0348 19.1272 17.8354 19.1668 17.6341 19.1667H2.36492C2.16371 19.1667 1.96447 19.1271 1.77858 19.05C1.5927 18.973 1.42381 18.8601 1.28157 18.7178C1.13933 18.5755 1.02653 18.4065 0.949604 18.2206C0.87268 18.0347 0.833143 17.8354 0.833252 17.6342V2.36504ZM8.08992 7.82338H10.5724V9.07004C10.9308 8.35338 11.8474 7.70838 13.2249 7.70838C15.8658 7.70838 16.4916 9.13588 16.4916 11.755V16.6067H13.8191V12.3517C13.8191 10.86 13.4608 10.0184 12.5508 10.0184C11.2883 10.0184 10.7633 10.9259 10.7633 12.3517V16.6067H8.08992V7.82338ZM3.50659 16.4925H6.17992V7.70838H3.50659V16.4917V16.4925ZM6.56242 4.84338C6.56746 5.07227 6.52673 5.29987 6.44262 5.5128C6.35851 5.72574 6.23271 5.91974 6.07261 6.0834C5.91251 6.24707 5.72133 6.3771 5.5103 6.46588C5.29926 6.55466 5.07262 6.60039 4.84367 6.60039C4.61472 6.60039 4.38808 6.55466 4.17704 6.46588C3.966 6.3771 3.77483 6.24707 3.61473 6.0834C3.45463 5.91974 3.32883 5.72574 3.24472 5.5128C3.16061 5.29987 3.11988 5.07227 3.12492 4.84338C3.13481 4.39409 3.32024 3.96654 3.64149 3.65228C3.96274 3.33803 4.39427 3.16206 4.84367 3.16206C5.29307 3.16206 5.7246 3.33803 6.04585 3.65228C6.3671 3.96654 6.55253 4.39409 6.56242 4.84338Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_140_1310">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.5625C5.45996 0.5625 0.5625 5.45996 0.5625 11.5C0.5625 17.54 5.45996 22.4375 11.5 22.4375C17.54 22.4375 22.4375 17.54 22.4375 11.5C22.4375 5.45996 17.54 0.5625 11.5 0.5625ZM16.7563 8.80713C16.7637 8.92188 16.7637 9.0415 16.7637 9.15869C16.7637 12.7427 14.0342 16.8711 9.04639 16.8711C7.5083 16.8711 6.08252 16.4243 4.88135 15.6553C5.10107 15.6797 5.31104 15.6895 5.53565 15.6895C6.80518 15.6895 7.97217 15.2598 8.90234 14.5322C7.71094 14.5078 6.70996 13.7266 6.36816 12.6523C6.78564 12.7134 7.16162 12.7134 7.59131 12.6035C6.97785 12.4789 6.42645 12.1457 6.0308 11.6606C5.63515 11.1755 5.41964 10.5684 5.4209 9.94238V9.9082C5.77979 10.1108 6.20215 10.2354 6.64404 10.2524C6.27256 10.0049 5.96792 9.66946 5.75711 9.27595C5.5463 8.88244 5.43585 8.443 5.43555 7.99658C5.43555 7.49121 5.56738 7.02979 5.8042 6.62939C6.48511 7.46762 7.33479 8.15318 8.29801 8.64152C9.26123 9.12986 10.3164 9.41004 11.395 9.46387C11.0117 7.62061 12.3887 6.12891 14.0439 6.12891C14.8252 6.12891 15.5283 6.45605 16.0239 6.9834C16.6367 6.86865 17.2227 6.63916 17.7451 6.33154C17.5425 6.95898 17.1177 7.48877 16.5537 7.82324C17.1006 7.76465 17.6279 7.61328 18.1162 7.40088C17.7476 7.94287 17.2861 8.42383 16.7563 8.80713Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
