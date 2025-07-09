import { useParams } from "react-router-dom";
import { useCart } from "../hooks";
import { getProductDetails } from "../utils/cart-utils";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {
  const { state } = useCart();
  const { slug } = useParams();

  const product = getProductDetails(state, slug);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
