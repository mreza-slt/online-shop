const addToCart = (state, payload) => {
  const updatedCart = [...state.cart];
  const index = updatedCart.findIndex((item) => item.id === payload.id);
  if (index < 0) {
    updatedCart.push({ ...payload, quantity: 1 });
  } else {
    const updateItem = { ...updatedCart[index] };
    updateItem.quantity++;
    updatedCart[index] = updateItem;
  }
  return {
    ...state,
    cart: updatedCart,
    total: state.total + payload.price,
    disCount: state.disCount + payload.disCount,
  };
};

const decrementCart = (state, payload) => {
  const updatedCart = [...state.cart];
  const index = updatedCart.findIndex((item) => item.id === payload.id);

  const updateItem = { ...updatedCart[index] };
  if (updateItem.quantity === 1) {
    const filteredCart = updatedCart.filter((cart) => cart.id !== payload.id);
    return {
      ...state,
      cart: filteredCart,
      total: state.total - payload.price,
      disCount: state.disCount - payload.disCount,
    };
  } else {
    updateItem.quantity--;
    updatedCart[index] = updateItem;
    return {
      ...state,
      cart: updatedCart,
      total: state.total - payload.price,
      disCount: state.disCount - payload.disCount,
    };
  }
};

const removeCart = (state, payload) => {
  const updatedCart = [...state.cart];
  const filteredCart = updatedCart.filter((cart) => cart.id !== payload.id);
  return {
    ...state,
    cart: filteredCart,
    total: state.total - payload.price,
    disCount: state.disCount - payload.disCount,
  };
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action.payload);

    case "DECREMENT_CART":
      return decrementCart(state, action.payload);

    case "REMOVE_CART": {
      return removeCart(state, action.payload);
    }

    default:
      return state;
  }
};

export default cartReducer;
