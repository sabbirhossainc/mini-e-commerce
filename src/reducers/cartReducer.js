const actionTypes = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  INC: "INC",
  DEC: "DEC",
};

function updateInc(tArray, action) {
  return tArray.map((product) => {
    if (product.id == action.payload.id) {
      return {
        ...product,
        qty: product.qty + 1,
        stock: product.stock - 1,
      };
    } else {
      return product;
    }
  });
}

function updateDec(tArray, action) {
  return tArray.map((product) => {
    if (product.id == action.payload.id) {
      return {
        ...product,
        qty: product.qty - 1,
        stock: product.stock + 1,
      };
    } else {
      return product;
    }
  });
}

function updateAdd(state, action) {
  return state.products.map((prodItem) => {
    if (prodItem.id === action.payload.id) {
      return {
        ...prodItem,
        qty: 1,
        stock: prodItem.stock - 1,
        inCart: true,
        btn_text: "Remove from Cart",
      };
    }
    return prodItem;
  });
}

function updateRemove(state, action) {
  return state.products.map((prodItem) => {
    if (prodItem.id === action.payload.id) {
      return {
        ...prodItem,
        stock: prodItem.stock + action.payload.qty,
        inCart: false,
        btn_text: "Add to Cart",
      };
    }
    return prodItem;
  });
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      if (state.cartList.find((item) => item.id === action.payload.id))
        return state;
      return {
        ...state,
        cartList: [
          ...state.cartList,
          {
            ...action.payload,
            qty: 1,
            stock: action.payload.stock - 1,
            inCart: true,
            btn_text: "Remove from Cart",
          },
        ],
        products: updateAdd(state, action),
      };
    case actionTypes.REMOVE:
      return {
        ...state,
        cartList: state.cartList.filter(
          (item) => item.id !== action.payload.id
        ),
        products: updateRemove(state, action),
      };
    case actionTypes.INC:
      if (
        state.cartList.find((item) => item.id === action.payload.id).stock - 1 <
        0
      )
        return state;
      return {
        ...state,
        cartList: updateInc(state.cartList, action),
        products: updateInc(state.products, action),
      };

    case actionTypes.DEC:
      if (
        state.cartList.find((item) => item.id === action.payload.id).qty - 1 ===
        0
      )
        return state;
      return {
        ...state,
        cartList: updateDec(state.cartList, action),
        products: updateDec(state.products, action),
      };
    default:
      return state;
  }
};

export { cartReducer, actionTypes };
