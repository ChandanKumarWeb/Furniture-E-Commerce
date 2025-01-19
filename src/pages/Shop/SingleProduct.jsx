import ProductRoutes from "../../components/ProductRoutes";
import ProductDetails from "../../components/ProductDetails";
import Discription from "../../components/Discription";
import RelatedProducts from "../../components/RelatedProducts";
import Footer from "../../components/Footer"
function SingleProduct(){
    return(
        <div>
            <ProductRoutes productName="Asgaard sofa"/>
            <ProductDetails/>
            <Discription/>
            <RelatedProducts/>
            <Footer/>
        </div>
    );
}
export default SingleProduct;