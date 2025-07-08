import { Outlet } from "react-router-dom";

import SideBar from "../components/common/SideBar";
import CartProvider from "../Providers/CartProvider";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function Layout() {
  return (
    <CartProvider>
      <main className="relative min-h-screen flex flex-col">
        <Header />
        <SideBar />
        <div className="flex-1 container mx-auto h-full">
          <Outlet />
        </div>
        <Footer />
      </main>
    </CartProvider>
  );
}
