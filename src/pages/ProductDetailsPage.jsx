import { useParams } from "react-router-dom";
import { useCart } from "../hooks";
import { getProductDetails } from "../utils/cart-utils";

const ProductDetailsPage = () => {
  const { state } = useCart();
  const { slug } = useParams();
  getProductDetails(state, slug);
  return <div>ProductDetailsPage</div>;
};

export default ProductDetailsPage;
