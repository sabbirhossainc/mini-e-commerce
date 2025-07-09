import { useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import SideBarContent from "../SideBarContent";

const SideBar = () => {
  const { setOpenSideBar, openSideBar } = useCart();

  useEffect(() => {
    if (openSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openSideBar]);

  return (
    <div className="">
      {openSideBar && (
        <div
          className="fixed inset-0 z-10 opacity-25 bg-black transition-opacity duration-200"
          onClick={() => setOpenSideBar(!openSideBar)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 z-20 h-full w-auto bg-[var(--secondary)] shadow-xl transition-all duration-200 ease-in-out ${
          openSideBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SideBarContent />
      </div>
    </div>
  );
};

export default SideBar;
