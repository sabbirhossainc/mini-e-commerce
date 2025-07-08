import { useCart } from "../hooks/useCart";

 
 

 
const CheckoutButton = () => {
  return (
    <button
      className="block bg-black text-white text-center py-2 px-3 rounded-md  "
    >
      Go to Checkout
      <span className="inline-block ml-2">→</span>
    </button>
  );
};

const SideBarContent = () => {
  const { state } = useCart();

  return (
  
      <div className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {state.cartList.length > 0 ? (
          state.cartList.map((item) => (
            // <CartItem key={item.id} product={item} />
            item.title
          ))
        ) : (
          <p className="text-3xl text-center text-shop-red">Your cart is empty!</p>
        )}

        <div className="mt-6">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>

          OrderSummary

          <CheckoutButton />
        </div>
      </div>

  );
};

export default SideBarContent;
 