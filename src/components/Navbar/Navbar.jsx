import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink


const Navbar = () => {
  const {state,dispatch} =useContext(AuthContext)
  const {products}=useContext(CartContext)
  return (
    <div data-cy="navbar" className="navbar">
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <span data-cy="navbar-cart-items-count" >Count : ({products.length})</span>
      <button data-cy="navbar-login-logout-button" ><Link data-cy="navbar-home-link" to="/login" onClick={()=>dispatch({type:"logout",token:null})}>{state.isAuth ? "Logout" : "Login"}</Link></button>
    </div>
  );
};

export default Navbar;
