    
function ProductBox(props) {
  return (
    <div>
      <div className="row-span-4 productCard ">
        <div>
          <img className="proImg" src={props.images} alt="" />
          <span className="imgText">{props.dis}</span>
        </div>
        <div className="aboutProduct ">
          <h1 className="productName">{props.proname}</h1>
          <p className="productInfo">{props.proinfo}</p>
          <div className="priceSec">
            <p className="disPrice">{props.disprice}</p>
            <p className="orgPrice">{props.orgprice}</p>
          </div>
        </div>
        <div className="card__content">
          <button className="card__title" href="">
            Add To Cart
          </button>
          <div className="card__description">
            <p>Share</p>
            <p>Compare</p>
            <p>Like</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
