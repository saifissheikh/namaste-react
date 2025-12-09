import { useContext, useState } from "react";
import { Link } from "react-router";
import logo from "url:./../../assets/logo.webp";
import useOnlineStatus from "../utils/useOnelineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const isOnline = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

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
          <li className="font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button className="login" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Logout" : "Login"}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
