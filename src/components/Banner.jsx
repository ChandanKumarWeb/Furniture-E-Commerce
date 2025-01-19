import { useState } from 'react';
import Bannerimg1 from "./../assets/images/Banner-img/bannImg1.webp";
import Bannerimg2 from "./../assets/images/Banner-img/bannImg2.webp";
import Bannerimg3 from "./../assets/images/Banner-img/bannImg3.webp";
import Bannerimg4 from "./../assets/images/Banner-img/bannImg4.webp";

import BannerImages from "./../components/BannerImages";

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: Bannerimg1, roomName: "01----Bed Room", roomNickName: "Inner Peace" },
    { src: Bannerimg2, roomName: "02----Dinning Room", roomNickName: "Make Immune" },
    { src: Bannerimg3, roomName: "03----Living Room", roomNickName: "Relax Zone" },
    { src: Bannerimg4, roomName: "04----Study Room", roomNickName: "Focus Area" },
    { src: Bannerimg4, roomName: "04----Study Room", roomNickName: "Focus Area" },
    { src: Bannerimg4, roomName: "04----Study Room", roomNickName: "Focus Area" },

  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] pt-9">
      <div className="row-span-4">
        <div className="bannerLeft">
          <h1 className="bannleftHead">50+ Beautiful rooms inspiration</h1>
          <p className="bannleftPera">Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>
          <button className="explorebtn">Explore More</button>
        </div>
      </div>
      <div className="row-span-4 order-first md:order-last">
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((image, index) => (
                <BannerImages
                  key={index}
                  bannerImage={image.src}
                  roomName={image.roomName}
                  roomNickName={image.roomNickName}
                />
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2"
            onClick={prevSlide}
          >
            Prev
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
