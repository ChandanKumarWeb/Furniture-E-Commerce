import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function ProductRoutes(props) {
  return (
    <div>
      <div className="productRoute flex items-center gap-4 p-8">
            <p className="text-lg">Home</p>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p className="text-lg">Shop</p>
            <FontAwesomeIcon icon={faGreaterThan} />
            <p className="text-lg">{props.productName}</p>
          </div>
    </div>
  )
}

export default ProductRoutes
