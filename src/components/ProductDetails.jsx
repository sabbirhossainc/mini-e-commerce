import { useCart } from "../hooks/useCart";
import {
  getCartProductDetails,
  handleAddRemove,
  handleMinus,
  handlePlus,
} from "../utils/cart-utils";

const ProductDetails = ({ product }) => {
  const { state, dispatch } = useCart();

  const { id, image, price, stock, tags, title, description, btn_text } =
    product || {};

  const { inCart, qty } = getCartProductDetails(state, id) || {
    inCart: false,
    qty: 0,
  };

  return (
    <div className="flex flex-col my-6">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-5 h-full">
        <div className="md:col-span-4 border border-[var(--primary)]/20 shadow-md mx-4">
          <img className="h-auto min-w-full" src={image} alt={title} />
        </div>
        <div className="md:col-span-4 sticky flex flex-col top-0 h-max w-full gap-y-3 mx-4">
          <h1 className="font-light text-balance text-4xl text-gray-950 capitalize">
            {title}
          </h1>
          <div className="font-semibold flex justify-start items-center gap-x-2">
            <span className="text-[var(--secondary)]">{price}</span>
            <span className="text-[var(--primary)]">BDT</span>
          </div>
          {tags?.length > 0 && (
            <p className="w-auto flex gap-x-1">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="font-medium text-xs bg-[var(--secondary)] text-gray-50 capitalize rounded-full px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </p>
          )}
          <div className="flex items-center gap-x-2">
            <div className="font-medium text-[var(--primary)] text-base">
              Availability:
            </div>
            <div className="text-gray-800 text-sm">
              {stock !== 0 ? (
                <p className="space-x-1">
                  <span className="font-medium">{stock}</span>
                  <span className="text-[var(--secondary)]">In Stock!</span>
                </p>
              ) : (
                <span className="text-red-600">Out of Stock!</span>
              )}
            </div>
          </div>

          <div className="flex justify-start items-center gap-x-2.5">
            {inCart && (
              <>
                <p className="font-bold text-[var(--secondary)]">
                  ৳ {price * qty}
                </p>
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
              </>
            )}
            <button
              className={`w-full md:w-1/2 ${
                inCart ? "bg-red-600" : "bg-gray-800"
              } py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 duration-200 transition-all active:bg-gray-900`}
              onClick={(e) => handleAddRemove(e, product, dispatch)}
            >
              {btn_text}
            </button>
          </div>
          <div className="space-y-1.5">
            <h1 className="font-semibold text-[var(--primary)] text-md">
              Product Details:
            </h1>
            <div className="text-md text-gray-800 text-balance leading-6">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
