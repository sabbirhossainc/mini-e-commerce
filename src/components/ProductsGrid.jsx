import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { handleAddRemove } from "../utils/cart-utils";

const ProductsGrid = () => {
  const { state, dispatch } = useCart();

  return (
    state?.products?.length > 0 &&
    state.products.map((product) => (
      <div
        className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
        key={product.id}
      >
        <Link to={`product-details/${product.slug}`}>
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <img
              src={product.image}
              alt="Polo with Tipping Details"
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{product.title}</h3>
              <span className="text-xs text-gray-700">
                ({product.stock} pcs left)
              </span>
            </div>
            <div className="flex items-center justify-end">
              <p className="font-bold">BDT {product.price}</p>
            </div>
          </div>
        </Link>
        <div className="p-4">
          <button
            className={`disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 ${
              product.inCart ? "bg-red-800" : "bg-gray-800"
            } py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900`}
            onClick={(e) => handleAddRemove(e, product, dispatch)}
            disabled={product.stock === 0}
          >
            {product.btn_text}
          </button>
        </div>
      </div>
    ))
  );
};

export default ProductsGrid;
