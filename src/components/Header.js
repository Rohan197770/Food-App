import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-green-50 shadow-md m-2">
      <div className="logo-conatiner">
        <img className="w-52" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="./contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="./grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="Login"
            onClick={() => {
              // using ternary operator
              btnNameReact == "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
