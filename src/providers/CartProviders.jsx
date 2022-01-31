import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const CardProviders = ({ children }) => {
  const initialState = {
    cart: [],
    total: 0,
    discount: 0,
  };

  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CardProviders;

export const useCart = () => {
  return useContext(CartContext);
};
export const useDispatch = () => {
  return useContext(CartContextDispatcher);
};
