import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="fotter p-5">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div className="columns-xs flex flex-col content-center item-center gap-4">
          <h1 className="font-bold text-2xl text-black">Funiro.</h1>
          <p className="fotterAddress">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
          <p className="copyright font-bold">
            2023 furino. All rights reverved<br/> Developed by <a style={{color:"#898989"}} href="https://its-chandan-portfolio.netlify.app/">Chandan.Dev</a>
          </p>
        </div>
        <div className="columns-3xs flex flex-col content-center item-center gap-4">
          <h1 className="fotterHead">Links.</h1>
          <ul className="fotterList">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="columns-3xs flex flex-col content-center item-center gap-4">
          <h1 className="fotterHead">Help</h1>
          <ul className="fotterList1">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="columns-3xs flex flex-col content-center item-center gap-4">
          <h1 className="fotterHead">Newsletter</h1>
          <div className="subscribe-container flex flex-col content-center item-center">
            <input type="email" placeholder="Email" />
            <button className="w-fit">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
