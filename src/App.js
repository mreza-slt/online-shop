import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./layout/LayOut";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOutPage from "./pages/CheckOutPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <ToastContainer />
          <LayOut>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/checkout" element={<CheckOutPage />} />
            </Routes>
          </LayOut>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
