import { useCart } from "../hooks/useCart";
import { usePortal } from "../hooks/usePortal";
import { updateSummary } from "../utils/cart-utils";
import CartItem from "./CartItem";
import CheckoutModal from "./modal/CheckoutModal";

const SideBarContent = () => {
  const { state } = useCart();
  const summary = updateSummary(state);

  const isProductInBag = state.cartList.length > 0;

  return (
    <div className="flex flex-col justify-start items-center gap-y-2 p-5 h-full min-w-76 max-w-80 mx-auto">
      <h1 className="text-gray-900 text-2xl border-b border-gray-200">
        Your cart
      </h1>
      <div className="flex flex-col justify-start gap-y-3 w-full overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:bg-gray-800">
        {isProductInBag ? (
          state.cartList.map((item) => (
            <CartItem key={item.id} product={item} />
          ))
        ) : (
          <p className="text-gray-50 text-xl text-center">
            Your cart is empty!
          </p>
        )}
      </div>
      <div className="mt-auto space-y-2 w-full">
        {isProductInBag && (
          <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>${summary?.total}</span>
          </div>
        )}
        <CheckoutButton />
      </div>
    </div>
  );
};

export default SideBarContent;

const CheckoutButton = () => {
  const { setOpenSideBar } = useCart();
  const { open } = usePortal();

  const handleModal = () => {
    open(<CheckoutModal />);
    setOpenSideBar(false);
  };

  return (
    <button
      className="inline-flex items-center justify-center bg-gray-900 text-amber-50 text-center py-2 px-3 rounded-md w-full gap-x-2"
      onClick={handleModal}
    >
      <span>Go to Checkout</span>
      <span>&#8618;</span>
    </button>
  );
};
