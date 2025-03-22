import { Link } from "react-router-dom";
    
function ProductBox(props) {
  return (
    <div>
      <div className="row-span-4 ">
        <div className="productCard">
          <img className="proImg" src={props.images} alt="" />
          <span className="imgText">{props.dis}</span>
          <div className="card__content bg-black/60">
          <Link to="/cart">
            <button className="opacity-80 card__title rounded-lg hover:bg-sky-700 hover:text-white" href="">
              Add To Cart
            </button>
          </Link>
        </div>
        </div>
        <div className="aboutProduct ">
          <h1 className="productName">{props.proname}</h1>
          <p className="productInfo">{props.proinfo}</p>
          <div className="priceSec">
            <p className="disPrice">{props.disprice}</p>
            <p className="orgPrice">{props.orgprice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
