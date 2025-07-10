import { useCart } from "../hooks/useCart";
import { handleMinus, handlePlus, handleRemove } from "../utils/cart-utils";

const CartItem = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
      <div className="size-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img
          src={product.image}
          alt="Checkered Shirt"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium text-amber-50">{product.title}</h3>
          <span
            className="text-gray-950 hover:text-red-500 text-xl cursor-pointer"
            onClick={(e) => handleRemove(e, product, dispatch)}
          >
            &#735;
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-amber-50">৳ {product.price * product.qty}</p>
          <div className="flex items-center space-x-2">
            <button
              className="size-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
              onClick={(e) => handleMinus(e, product, dispatch)}
            >
              &#45;
            </button>
            <span className="text-sm">{product.qty}</span>
            <button
              className="size-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
              onClick={(e) => handlePlus(e, product, dispatch)}
            >
              &#43;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
