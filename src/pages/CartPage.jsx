import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartComponent from "../components/cart/CartComponent";

import "./cartPage.css";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <main className="cart">
      {cart && cart.length ? (
        <>
          <section className="cartList">
            {cart.map((item) => (
              <CartComponent key={item._id} item={item} />
            ))}
          </section>
          <CartSummery />
        </>
      ) : (
        <div className="empty">
          <h1>shapping cart is empty</h1>
          <div>
            <Link className="btn" to="/">
              go to shopping
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;

const CartSummery = () => {
  const { total, discount } = useSelector((state) => state.cart);

  return (
    <section className="summery">
      <div>
        <h1>Your orders</h1>
      </div>
      <div className="item-1">
        <div>Original price total</div>
        <div>{total} $</div>
      </div>
      <div className="item-2">
        <div>Total discounts</div>
        <div> {discount}$</div>
      </div>
      <div className="item-3">
        <div>Total products</div>
        <div>{total - discount} $</div>
      </div>
      <Link to="/signup?redirect=checkout">
        <button className="btn btn-summery">Countinue order</button>
      </Link>
    </section>
  );
};
