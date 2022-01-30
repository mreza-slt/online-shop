import { toast } from "react-toastify";
import "./cart.css";

const CartComponent = ({ item, dispatch }) => {
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success(` Another one ${item.name} added`);
  };

  const decrementToCart = (item) => {
    dispatch({ type: "DECREMENT_CART", payload: item });
    toast.error(`${item.name} Decreased...!`);
  };

  const removeCart = (item) => {
    dispatch({ type: "REMOVE_CART", payload: item });
    toast.error(`${item.name} Removed cart`);
  };
  return (
    <section>
      <div className="shopping-cart">
        <div className="image">
          <img src={item.image} alt="" />
          <p> {item.name}</p>
        </div>

        <div className="description">
          {item.description.map((d, index) => (
            <span key={index}>{d.support}</span>
          ))}
        </div>

        <div className="btnGroup">
          <button onClick={() => addToCart(item)} className="plus-btn">
            +
          </button>
          <button>{item.quantity}</button>
          <button onClick={() => decrementToCart(item)} className="minus-btn">
            -
          </button>
        </div>

        <div className="total-price">
          <p className="del"> {item.price * item.quantity} $</p>
          <p> {item.offPrice * item.quantity} $</p>
        </div>

        <div>
          <button onClick={() => removeCart(item)} className="btn delete">
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartComponent;
