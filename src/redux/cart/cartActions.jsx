import { ADD_TO_CART, DECREMENT_CART, REMOVE_CART } from "./cartType";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const decrementCart = (data) => {
  return {
    type: DECREMENT_CART,
    payload: data,
  };
};
export const removeCart = (data) => {
  return {
    type: REMOVE_CART,
    payload: data,
  };
};
