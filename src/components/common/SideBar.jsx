import { useCart } from "../../hooks/useCart";
import SideBarContent from "../SideBarContent";

const SideBar = () => {
  const { setOpenSideBar, openSideBar } = useCart();

  return (
    <div className="overflow-hidden">
      {openSideBar && (
        <div
          className="fixed inset-0 z-10 opacity-25 bg-black transition-opacity duration-200"
          onClick={() => setOpenSideBar(!openSideBar)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 z-20 h-full w-auto bg-[var(--secondary)] shadow-xl transition-all duration-200 ease-in-out ${
          openSideBar ? "translate-x-10" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full w-96 overflow-y-auto p-4"><SideBarContent/></div>
      </div>
    </div>
  );
};

export default SideBar;
