import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../../assets/images/Blog-img/BloglftImg1.webp";
import Img2 from "../../assets/images/Blog-img/BloglftImg2.webp";
import Img3 from "../../assets/images/Blog-img/BloglftImg3.webp";
import SmlImg1 from "../../assets/images/Blog-img/blogSmlimg1.webp";
import SmlImg2 from "../../assets/images/Blog-img/blogSmlimg2.webp";
import SmlImg3 from "../../assets/images/Blog-img/blogSmlimg3.webp";
import SmlImg4 from "../../assets/images/Blog-img/blogSmlimg4.webp";
import SmlImg5 from "../../assets/images/Blog-img/blogSmlimg5.webp";
import BlogLftCont from "./BlogLftCont";
import SeeMorebtn from "../../components/SeeMorebtn";
import BlogRecentPostsCrd from "../../components/BlogRecentPostsCrd";
function Blog() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-10 mx-2 sm:mx-14 mt-14 gap-4">
        {/* left Column */}
        <div className="col-span-7 order-last md:order-first">
          <BlogLftCont
            Img={Img1}
            Wood="Wood"
            Head="Going all-in with millennial design"
            BlogPera="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum."
          />
          <BlogLftCont
            Img={Img2}
            Wood="Handmade"
            Head="Exploring new ways of decorating"
            BlogPera="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum."
          />
          <BlogLftCont
            Img={Img3}
            Wood="Wood"
            Head="Handmade pieces that took time to make"
            BlogPera="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum."
          />
        </div>

        {/* Right Column */}
        <div className="col-span-3 order-first md:order-last">
          <div className="flex items-center justify-center">
            <div className="flex border rounded-lg overflow-hidden">
              <input
                type="text"
                className="px-4 py-2 w-64 border-none focus:outline-none"
                placeholder="Search..."
              />
              <button className=" px-4 py-2 font-medium">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          {/* Categories */}
          <div className="flex justify-center items-center ">
            <div className="flex flex-col w-72 py-4 gap-6">
              <h1 className="text-xl">Categories</h1>
              <div style={{ color: "#9F9F9F" }} className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <p>Crafts</p>
                  <p>2</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Design</p>
                  <p>8</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Handmade</p>
                  <p>7</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Interior</p>
                  <p>2</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Wood</p>
                  <p>6</p>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Posts */}
          <div className="flex flex-col justify-center items-center mt-6 px-4">
            <div className="lg:w-68 xl:w-72">
              <h1 className="text-xl pb-4"> Recent Posts</h1>
              <div className="flex flex-col gap-6">
                <BlogRecentPostsCrd img={SmlImg1} post="Going all-in with millennial design" date="03 Aug 2022"/>
                <BlogRecentPostsCrd img={SmlImg2} post="Exploring new ways of decorating" date="03 Aug 2022"/>
                <BlogRecentPostsCrd img={SmlImg3} post="Handmade pieces that took time to make" date="03 Aug 2022"/>
                <BlogRecentPostsCrd img={SmlImg4} post="Modern home in Milan" date="03 Aug 2022"/>
                <BlogRecentPostsCrd img={SmlImg5} post="Colorful office redesign" date="03 Aug 2022"/>

              </div>
            </div>
          </div>
        </div>
      </div>
      <SeeMorebtn />
    </div>
  );
}

export default Blog;
