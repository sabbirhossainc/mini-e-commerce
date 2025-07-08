import { useReducer, useState } from "react";
import { CartContext } from "../contexts";
import { cartReducer, actionTypes } from "../reducers/cartReducer";
import Products from "../db/products.json";

export default function CartProvider({ children }) {
  const initialState = {
    cartList: [],
    products: Products,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <CartContext.Provider
      value={{ state, dispatch, actionTypes, setOpenSideBar, openSideBar }}
    >
      {children}
    </CartContext.Provider>
  );
}
