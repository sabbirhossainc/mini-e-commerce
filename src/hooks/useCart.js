import {  useContext } from "react"; 
import { CartContext } from "../contexts";

export function useCart() {
  return useContext(CartContext);
}