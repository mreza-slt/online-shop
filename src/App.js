import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayOut from "./layout/LayOut";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CardProviders from "./providers/CartProviders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOutPage from "./pages/CheckOutPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AuthProvider from "./providers/AuthProvider";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <CardProviders>
            <ToastContainer />
            <LayOut>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckOutPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </LayOut>
          </CardProviders>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
