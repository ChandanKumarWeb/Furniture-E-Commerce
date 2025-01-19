import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavbarDefault from "./components/Navbar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import SingleProduct from "./pages/Shop/SingleProduct";
import CartPage from "./pages/Cart/CartPage";
import Checkout from "./pages/Cart/Checkout";
import MainBanner from "./components/MainBanner";
import Footer from "./components/Footer";
import Contact from "./pages/Cart/Contact";
import Features from "./pages/Shop/Features";
import Blog from "./pages/Blog/Blog";
import About from "./pages/Blog/About";
import Browse from "./pages/Home/Browse";
import Products from "./pages/Home/Products";
import Banner from "./components/Banner";
import Furniture from "./pages/Home/Furniture";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <NavbarDefault />
      <Home />
      <Browse/>
      <Products/> 
      <Banner/>
      <Furniture/>
      <Footer/>
    </div>
  },
  {
    path: "/shop",
    element: <div>
      <NavbarDefault />
      <MainBanner PageName="Shop" Nav1="Home" Nav2="Shop"/>
      <Shop />
    </div>
  },
  {
    path: "/singleProduct",
    element: <div>
      <NavbarDefault />
      <SingleProduct/>
    </div>
  },
  {
    path:"/cart",
    element:
    <div>
      <NavbarDefault/>
      <MainBanner PageName="Cart" Nav1="Home" Nav2="Cart" />
      <CartPage/>
    </div>
  },
  {
    path:"/checkout",
    element:
    <div>
      <NavbarDefault/>
      <MainBanner PageName="CheckOut" Nav1="Home" Nav2="CheckOut" />
      <Checkout/>
      <Footer/>
    </div>
  },
  {
    path:"/about",
    element:
    <div>
    <NavbarDefault/>
    <MainBanner PageName="About" Nav1="Home" Nav2="About"/>
    <About/>
    <Features/>
    <Footer/>
    </div>
  },
  {
    path:"/contact",
    element:
    <div>
    <NavbarDefault/>
    <MainBanner PageName="Contact" Nav1="Home" Nav2="Contact"/>
    <Contact/>
    <Features/>
    <Footer/>
    </div>
  },
  {
    path:"/blog",
    element:
    <div>
    <NavbarDefault/>
    <MainBanner PageName="Blog" Nav1="Home" Nav2="Blog"/>
    <Blog/>
    <Features/>
    <Footer/>
    </div>
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}