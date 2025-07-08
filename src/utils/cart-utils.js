import { actionTypes } from "../reducers/cartReducer";

export const handleRemove = (e, product, dispatch) => {
  e.stopPropagation();

  dispatch({
    type: actionTypes.REMOVE,
    payload: product,
  });
};

export const handlePlus = (e, product, dispatch) => {
  e.stopPropagation();

  dispatch({
    type: actionTypes.INC,
    payload: product,
  });
};

export const handleMinus = (e, product, dispatch) => {
  e.stopPropagation();

  dispatch({
    type: actionTypes.DEC,
    payload: product,
  });
};

export const handleAddRemove = (e, product, dispatch) => {
  e.stopPropagation();

  if (product.stock > 0) {
    if (product.inCart) {
      dispatch({
        type: actionTypes.REMOVE,
        payload: product,
      });
    } else {
      dispatch({
        type: actionTypes.ADD,
        payload: product,
      });
    }
  }
};

export const updateSummary = (state) => {
  const deliveryFee = 40;

  const subtotal = state.cartList.reduce(
    (total, item) => total + Number(item.price) * Number(item.qty),
    0
  );

  const total = Math.round(subtotal + deliveryFee);

  return {
    deliveryFee,
    subtotal,
    total,
  };
};

export const getProductDetails = async (state, productSlug) => {
  return state?.products?.find((item) => item.slug === productSlug);
};
