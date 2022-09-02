import { ADD_TO_CART, DECREMENT_CART, REMOVE_CART } from "./cartType";

const addToCart = (state, payload) => {
  const updatedCart = [...state.cart];
  const index = updatedCart.findIndex((item) => item._id === payload._id);
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
    discount: state.discount + payload.discount,
  };
};

const decrementCart = (state, payload) => {
  const updatedCart = [...state.cart];
  const index = updatedCart.findIndex((item) => item._id === payload._id);

  const updateItem = { ...updatedCart[index] };
  if (updateItem.quantity === 1) {
    const filteredCart = updatedCart.filter((cart) => cart._id !== payload._id);
    return {
      ...state,
      cart: filteredCart,
      total: state.total - payload.price,
      discount: state.discount - payload.discount,
    };
  } else {
    updateItem.quantity--;
    updatedCart[index] = updateItem;
    return {
      ...state,
      cart: updatedCart,
      total: state.total - payload.price,
      discount: state.discount - payload.discount,
    };
  }
};

const removeCart = (state, payload) => {
  const updatedCart = [...state.cart];
  const filteredCart = updatedCart.filter((cart) => cart._id !== payload._id);
  return {
    ...state,
    cart: filteredCart,
    total: state.total - payload.price,
    discount: state.discount - payload.discount,
  };
};
const initialState = {
  cart: [],
  total: 0,
  discount: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);

    case DECREMENT_CART:
      return decrementCart(state, action.payload);

    case REMOVE_CART: {
      return removeCart(state, action.payload);
    }

    default:
      return state;
  }
};

export default cartReducer;
