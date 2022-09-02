import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  addToCart,
  decrementCart,
  removeCart,
} from "../../redux/cart/cartActions";
import "./cart.css";

const CartComponent = ({ item }) => {
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success(` Another one ${item.name} added`);
  };

  const decrementToCart = (item) => {
    dispatch(decrementCart(item));
    toast.error(`${item.name} Decreased...!`);
  };

  const deleteCart = (item) => {
    dispatch(removeCart(item));
    toast.error(`${item.name} Removed cart`);
  };
  return (
    <section>
      <div className="shopping-cart">
        <div className="section_1">
          <div className="image">
            <img src={item.image} alt="" />
            <p> {item.name}</p>
          </div>
        </div>

        <div className="section_2">
          <div className="description">
            {item.description.map((d, index) => (
              <span key={index}>{d.support}</span>
            ))}
          </div>

          <div className="btnGroup">
            <button onClick={() => addCart(item)} className="plus-btn">
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
            <button onClick={() => deleteCart(item)} className="btn delete">
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartComponent;
