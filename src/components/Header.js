import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = ()=> 
{
    let btnName="Login";
    const [btnNameReact,setbtnNameReact]=useState("login");
    return(
      
        <div className="header">
            <div className="logo-conatiner">
              <img 
              className="logo"
              src={LOGO_URL}/>
              
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>
                    {
                        // using ternary operator
                        btnNameReact=="Login"?
                        setbtnNameReact("Logout"):setbtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;