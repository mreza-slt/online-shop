import { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { useCart } from "../../providers/CartProviders";
import "./checkout.css";

const Checkout = () => {
  const auth = useAuth() || JSON.parse(localStorage.getItem("stateAuth"));

  return (
    <section className="parrent-checkout">
      <div className="checkout">
        <div className="shopping-checkout">
          <h2>Invoice details</h2>
          <p>
            <span>Name :</span> {auth.name}
          </p>
          <p>
            <span>Email :</span> {auth.email}
          </p>
          <p>
            <span>PhoneNumber :</span> {auth.phoneNumber}
          </p>
        </div>

        <CartSummery />
      </div>
      <div className="payment">
        <div>
          <h2>Paypal secure payment</h2>
        </div>
        <button className="btn">Payment with paypal</button>
      </div>
    </section>
  );
};

export default Checkout;
const CartSummery = () => {
  const [isShow, setIsShow] = useState(false);

  const { discount, total, cart } = useCart();

  return (
    <div className="checkout-summery">
      <div>
        <h1>Your orders</h1>
      </div>
      <div className="section-1">
        <p>product</p>
        <p>quantity</p>
        <p>price</p>
      </div>
      <div className="section-2">
        {cart.map((c) => (
          <div key={c._id}>
            <p>{c.name}</p>
            <p>{c.quantity}</p>
            <p>{c.offPrice} $</p>
          </div>
        ))}
        {isShow ? (
          <div className="parent-isShow">
            <div
              style={{ color: "#6b21a8", cursor: "pointer" }}
              onClick={() => setIsShow(!isShow)}
            >
              Now i dont have !
            </div>
            <div className="isShow">
              <div>
                <input type="text" />
              </div>
              <div>
                <button className="btn" onClick={() => setIsShow(!isShow)}>
                  Add discount
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div onClick={() => setIsShow(!isShow)}>
            <p style={{ color: "#6b21a8", cursor: "pointer" }}>
              You have a discount code ?
            </p>
          </div>
        )}
        <div className="total-summery">
          <p style={{ fontWeight: "bold" }}>Total</p>
          <p>{total - discount} $</p>
        </div>
      </div>
    </div>
  );
};
