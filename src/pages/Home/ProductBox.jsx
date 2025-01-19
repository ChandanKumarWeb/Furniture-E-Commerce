    
function ProductBox(props) {
  return (
    <div>
      <div className="row-span-4 ">
        <div className="productCard">
          <img className="proImg" src={props.images} alt="" />
          <span className="imgText">{props.dis}</span>
          <div className="card__content bg-black/60">
          <button className="opacity-80 card__title" href="">
            Add To Cart
          </button>
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
