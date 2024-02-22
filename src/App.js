import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Food from './Components/Food';
import NewFood from './Components/NewFood';
import Home from './Components/Home';
import NewReview from './Components/NewReview';
import Grocery from './Components/Grocery';
import Login from './Components/Login';
import Cart from './Components/Cart.js';
import SignUp from './Components/SignUp.js';
import Footer from './Components/footer.js';
//Home, New, FoodPage

function App() {
  var [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedin'));

  const logout = () => {
    setIsLoggedIn(false);
  }

  const login = () => {
    setIsLoggedIn(true);
  }

  return (
    <div>
         <Router>
          <Navbar isLoggedIn={isLoggedIn} logout={logout} key={isLoggedIn}/>
          <Routes>
            <Route path ='/' element={<Home />}/>
            <Route path ='/food' element={<Food />}/>
            <Route path ='/food/new' element={<NewFood/>}/>
            <Route path ='/food/review' element={<NewReview/>} />
            <Route path = '/Grocery' element={<Grocery/>}/>
            <Route path = '/login' element={isLoggedIn ? <Navigate to="/"/> : <Login login={login}/>}/>
            <Route path = '/signup' element={isLoggedIn ? <Navigate to="/"/> : <SignUp/>}/>
        </Routes>
        <Footer/>
         </Router>
    </div>
  );
}

export default App;
