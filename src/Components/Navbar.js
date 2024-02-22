import { React, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from '../image/Foddie Central.png'
import  './Navbar.css';
import { Dropdown, DropdownButton,ToggleButton } from "react-bootstrap";




function Navbar({isLoggedIn, logout}) {
    const [cartQuantity, setcartQuantity]=useState(0)
    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedin');
        
        //from app props
        logout();
        navigate('/login');
    }
    
    return (
        <nav>

            {/* first  row of the navbar */}
            <div className="firstRow">
             <ul>
              <li className="location"><h3>Find Store Loction</h3></li>
              <li className="foodie"><h3>FOODIE CENTRAL </h3></li>
              <li className="sales"><h3>SALES!!!</h3></li>
             </ul>
            </div>
             {/* second row of the navbar  */}
           
            <div className="secondRow">
                 {/* logo */}
        <div className="logo">
            <img src={logo} alt='logo'/>
        </div>
        <div>
            <Link to ="/food/review">Leave Us A Review</Link>
        </div>
        <div>
            <Link to="/food/random">Let us Pick a Food Item For You</Link>
        </div>
       {/* search */}
        <div className="searchBar">
        <span class="material-symbols-outlined">
search
</span>
            <input type="text" placeholder="search for products" className="search"/>
            <button className="btnSearch">SEARCH</button>

        
            
        </div>
      {/* home */}
       <div className="home">
        HOME
        <Link to="/">
        <span class="material-symbols-outlined">home</span>
        </Link>
        </div>
      {/* grocery */}
        <div className="grocery">
    
    
 grocery
       
     
        </div>
     {/* login & sign up*/}
     <div className="right">

        {isLoggedIn ? 
            <div className="loginSignup"> 
                Logout 
                <Link onClick={logoutUser}>  
                    <span class="material-symbols-outlined">person</span>
                </Link>
            </div>
            :
            <div className="loginSignup"> 
                Login 
                <Link to="/login">  
                    <span class="material-symbols-outlined">person</span>
                </Link>
            </div>    
        }

        
{/* shopping_cart_checkout */}
<div className="cartNumber">
  {<div className="cart">
      <Link to='/cart'>
       <span class="material-symbols-outlined">shopping_cart_checkout</span>
       </Link>
<span className="quantity">{ cartQuantity } </span>
            </div> }
        
        </div>
     </div>

        </div>


        <div>

            <Link to='/'>Home</Link>
            |
            <Link to='/food/new'>New</Link>
        </div>


        </nav>
       
    )
}

export default Navbar