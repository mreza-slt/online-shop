export const checkInCart = (cart, product) => {
  return cart.find((c) => c.id === product.id);
};
