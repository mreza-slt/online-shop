import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  const cart = useSelector((state) => state.cart.cart);
  const userData = useSelector((state) => state.user.user);
  return (
    <header className="mainNavigation">
      <nav>
        <div className="nav">
          <div className="logo">
            <h1>Mohammadreza shoping</h1>
          </div>
        </div>
        <div className="user-nav">
          <ul>
            <li>
              <NavLink
                className={(data) => (data.isActive ? "active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={(data) => (data.isActive ? "active" : "")}
                to="/cart"
              >
                cart
                <span>{cart.length}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={userData ? "/profile" : "/login"}>
                {userData ? "Profile" : "login/signup"}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
