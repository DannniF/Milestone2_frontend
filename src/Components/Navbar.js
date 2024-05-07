import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/Foddie Central.png";
import "../SCSS/index.css";


function Navbar({ isLoggedIn, logout, reloadnavbar }) {
  const [cartQuantity, setcartquantity] = useState(0);


  const getcarttotalitems = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      let total = 0
      cart.forEach(item => {
        total += item.quantity
      })
      setcartquantity(total)
    }
    else {
      setcartquantity(0)
    }
  }
  useEffect(() => {
    getcarttotalitems()
  }, [reloadnavbar])

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedin");

    //from app props

    logout();
    navigate("/login");
  };

  return (
    <nav>
      {/* first  row of the navbar */}
      <div className="firstRow">
        <ul>
          <li className="location">
            <h3>Find Store Loction</h3>
          </li>
          <li className="foodie">
            <h3>FOODIE CENTRAL </h3>
          </li>
          <li className="sales">
            <h3>SALES!!!</h3>
          </li>
        </ul>
      </div>
      {/* second row of the navbar  */}

      <div className="secondRow">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="home">
          HOME
          <Link to="/">
            <span class="material-symbols-outlined">home</span>
          </Link>
        </div>
        <div className="grocery" >
          <Link to="/grocery" className="Link">Grocery</Link>
        </div>
        <div>
          <Link to="/food/review" className="Link">Leave Us A Review</Link>
        </div>
        <div>
          <Link to="/food/random" className="Link">Food Picker 3000</Link>
        </div>
        {/* search */}
        <div className="searchBar">
          <span class="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="search for products"
            className="search"
          />
          <button className="btnSearch">SEARCH</button>
        </div>
        {/* home */}


        {/* login & sign up*/}
        <div className="right">
          {isLoggedIn ? (
            <div className="loginSignup">
              Logout
              <Link onClick={logoutUser}>
                <span class="material-symbols-outlined">person</span>
              </Link>
            </div>
          ) : (
            <div className="loginSignup">
              Login
              <Link to="/SignUp">
                <span class="material-symbols-outlined">person</span>
              </Link>
            </div>
          )}

          {/* shopping_cart_checkout */}
          <div className="cartNumber">
            {
              <div className="cart">
                <Link to="/cart">
                  <span class="material-symbols-outlined">
                    shopping_cart_checkout
                  </span>
                </Link>
                <span className="quantity">{cartQuantity} </span>
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;


