import { useState } from "react";
import { Link } from "react-router";
import logo from "url:./../../assets/food-app-logo.png";
import useOnlineStatus from "../utils/useOnelineStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="food app logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {isOnline ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
