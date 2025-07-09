import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

const SideBarContent = () => {
  const { state } = useCart();

  return (
    <div className="flex flex-col justify-start items-center gap-y-2 p-5 h-full min-w-76 max-w-80 mx-auto">
      <h1 className="text-gray-900 text-2xl border-b border-gray-200">
        Your cart
      </h1>
      <div className="flex flex-col justify-start gap-y-3 w-full overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:bg-gray-800">
        {state.cartList.length > 0 ? (
          state.cartList.map((item) => (
            <CartItem key={item.id} product={item} />
          ))
        ) : (
          <p className="text-gray-900 text-xl text-center">
            Your cart is empty!
          </p>
        )}
      </div>
      <CheckoutButton />
    </div>
  );
};

export default SideBarContent;

const CheckoutButton = () => {
  return (
    <button className="mt-auto inline-flex items-center justify-center bg-gray-900 text-amber-50 text-center py-2 px-3 rounded-md w-full gap-x-2">
      <span>Go to Checkout</span>
      <span>&#8618;</span>
    </button>
  );
};
