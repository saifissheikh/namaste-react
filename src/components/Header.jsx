import { useState } from "react";
import { Link } from "react-router";
import logo from "url:./../../assets/logo.webp";
import useOnlineStatus from "../utils/useOnelineStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const isOnline = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-52 h-40">
        <img className="logo" src={logo} alt="food app logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-6 ">
          <li className="px-4">Online Status: {isOnline ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
