import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Cartproduct from "../components/Cartproduct";
import img1 from "./../assets/images/SingleProductImg/image1.webp";
import img2 from "./../assets/images/SingleProductImg/CartImg2.webp";

export default function NavbarDefault() {
  const [openNav, setOpenNav] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {[
        { to: "/", label: "HOME" },
        { to: "/shop", label: "SHOP" },
        { to: "/about", label: "ABOUT" },
        { to: "/contact", label: "CONTACT" },
        { to: "/blog", label: "BLOG" },
      ].map((link) => (
        <li key={link.to} className="text-black font-medium" >
          <Link to={link.to} onClick={() => setOpenNav(false)} className="hover:text-gray-600">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  const rightNavList = (
    <div className="flex items-center gap-x-6">
      {["add", "search", "wishlist"].map((icon, idx) => (
        <button key={idx} onClick={() => setOpenNav(false)} className="text-black hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {icon === "add" && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            )}
            {icon === "search" && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            )}
            {icon === "wishlist" && (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            )}
          </svg>
        </button>
      ))}
      <button onClick={toggleCart} className="text-black hover:text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>
    </div>
  );

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">FURNIRO</Link>
        </div>
          <div className="hidden lg:flex gap-6 items-center justify-between">
            {navList}
          </div>
          <div className="hidden lg:flex gap-6 items-center justify-between">
          {rightNavList}
          </div>
        <button
          className="lg:hidden text-black"
          onClick={() => setOpenNav(!openNav)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {openNav ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {openNav && <div className="lg:hidden">{navList} {rightNavList}</div>}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="cart z-20">
        <div className="flex justify-between items-center w-full border-b-4 h-16">
          <h1>Shopping Cart</h1>
          <button onClick={toggleCart}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{ color: "#9f9f9f" }}
            />
          </button>
        </div>
        <div className="smallCartPdt">
          <Link to="/singleProduct">
            <Cartproduct
              Img={img1}
              ProName="Asgaard Sofa"
              Quantity="1"
              TotalPrc="Rs. 250,000.00"
            />
          </Link>
          <Cartproduct
            Img={img2}
            ProName="Casaliving Wood"
            Quantity="1"
            TotalPrc="Rs. 270,000.00"
          />
        </div>
        <div className="flex justify-between items-center p-4 border-b-4">
          <h2 className="text-lg font-semibold">Subtotal</h2>
          <h1 style={{ color: "#B88E2F" }}>Rs. 520,000.00</h1>
        </div>
        <div className="flex justify-between items-center p-2 ">
          <Link to="/cart">
            <button onClick={toggleCart} className="w-28 h-10 text-center border-2 rounded-3xl ">
              Cart
            </button>
          </Link>
          <Link to="/checkout">
            <button onClick={toggleCart} className="w-28 h-10 text-center border-2 rounded-3xl ">
              Checkout
            </button>
          </Link>
        </div>
      </div>
      )}
    </nav>
  );
}
