/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { logoutUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import icon from '../images/icon.svg'

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const  dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded  header">
        <a className="navbar-brand headlogo" href="/">
          DOMINO'S~PIZZA 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i style={{color : 'black'}} className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <div className="dropdown mt-2">
              <a style={{color:'black'}} className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               {currentUser.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                
                <a className="dropdown-item" href="/orders">Orders</a>
                <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
              </div>
            </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                {/* Cart {cartstate.cartItems.length} */}
             <span className="icon"> {cartstate.cartItems.length}</span>
              <img  className="cart-icon" src={icon} alt="" width="30"/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
