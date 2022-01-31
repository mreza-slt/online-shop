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
          <div>
            <h1>Mohammadreza shoping</h1>
          </div>
          <ul>
            <li>
              <NavLink
                className={(data) => (data.isActive ? "active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="user-nav">
          <li>
            <NavLink
              className={(data) => (data.isActive ? "active" : "")}
              to="/cart"
            >
              cart
              <span>{cart.length}</span>
            </NavLink>
          </li>
          <div>
            <NavLink to={userData ? "/profile" : "/login"}>
              {userData ? "Profile" : "login/signup"}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
