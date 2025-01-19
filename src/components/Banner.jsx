import { Carousel } from "@material-tailwind/react"; 
import Bannerimg1 from "./../assets/images/Banner-img/bannImg1.webp";
import Bannerimg2 from "./../assets/images/Banner-img/bannImg2.webp";
import Bannerimg3 from "./../assets/images/Banner-img/bannImg3.webp";
import Bannerimg4 from "./../assets/images/Banner-img/bannImg4.webp";

// import BannerImages from "./../pages/Home/BannerImages";
import BannerImages from "./../components/BannerImages";

function Banner() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] pt-9">
      <div className="row-span-4">
        <div className="bannerLeft">
          <h1 className="bannleftHead">50+ Beautiful rooms inspiration</h1>
          <p className="bannleftPera">Our designer already made a lot of beautiful prototipe of rooms that inspire you.</p>
          <button className="explorebtn">Explore More</button>
        </div>
      </div>
      <div className="row-span-4 order-first md:order-last">
        <Carousel className="rounded-xl text-black">
          <BannerImages bannerImage={Bannerimg1} roomName="01----Bed Room" roomnickName="Inner Peace"/>
          <BannerImages bannerImage={Bannerimg2} roomName="02----Dinning Room" roomnickName="Make Immune"/>
          <BannerImages bannerImage={Bannerimg3}/>
          <BannerImages bannerImage={Bannerimg4}/>
          <BannerImages bannerImage={Bannerimg4}/>
          <BannerImages bannerImage={Bannerimg4}/>
          <BannerImages bannerImage={Bannerimg4}/>
          <BannerImages bannerImage={Bannerimg4}/>

        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
