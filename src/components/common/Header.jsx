import { Link } from "react-router-dom"; 
import { useCart } from "../../hooks/useCart";
import { Cart, User } from "../../utils/svgs";

const Header = () => {
  const { state, openSideBar, setOpenSideBar } = useCart();

  return (
    <header className="border-b border-[var(--secondary)] py-4 px-4 md:px-8 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          E.SHOP
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="#">Shop</Link>
          <Link to="#">On Sale</Link>
          <Link to="#">New Arrivals</Link>
          <Link to="#">Brands</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={() => setOpenSideBar(!openSideBar)}>
            <div className="relative p-1">
              <Cart />
              {state?.cartList?.length > 0 && (
                <div className="absolute bg-[var(--secondary)] text-gray-50 rounded-full size-4 text-xs bottom-0 right-0">
                  {state?.cartList?.length} 
                </div>
              )}
            </div>
          </button>

          <Link to="#">
            <User />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
