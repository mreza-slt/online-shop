import { Link } from "react-router-dom";
import { products } from "../data";
import { useCart, useDispatch } from "../providers/CartProviders";
import { checkInCart } from "../util/checkInCart";
import { toast } from "react-toastify";

const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useDispatch();

  const addProductHandler = (product) => {
    if (!checkInCart(cart, product)) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }

    toast.success(
      ` ${
        checkInCart(cart, product)
          ? "you going to cart page"
          : ` ${product.name} added to cart`
      }`
    );
  };

  return (
    <main>
      <section className="productList">
        {products.map((product) => (
          <section key={product.name} className="product">
            <div className="img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="productDesc">
              <p>{product.name}</p>
              <div>
                <p className="del">{product.price} $</p>
                <p>{product.offPrice} $</p>
              </div>
              <Link
                to={checkInCart(cart, product) ? "/cart" : ""}
                onClick={() => addProductHandler(product)}
                className="btn primary"
              >
                {checkInCart(cart, product)
                  ? "Continue ordering"
                  : "Add to cart"}
              </Link>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
