import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar.tsx';
import Food from './Components/Food.tsx';
import NewFood from './Components/NewFood.tsx';
import Home from './Components/Home.tsx';
import NewReview from './Components/NewReview.tsx';
import Grocery from './Components/Grocery.tsx';
import Login from './Components/Login.tsx';
import SignUp from './Components/SignUp.tsx';
import RandomFood from './Components/RandomFood.tsx';
import UpdateForm from './Components/UpdateForm.tsx';
import Footer from './Components/footer.tsx';
import "./SCSS/index.css"
// import 




//Home, New, FoodPage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn')=== 'true');

  const logout = () => {

    //Clear the user's session
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const login = () => {
    //Set the user's session
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  return (
    <div className='mainpage'>


         <Router>
         <Navbar isLoggedIn={isLoggedIn} logout={logout} key={isLoggedIn}/>
         
         <Routes>
            <Route path ='/' element={<Home />}/>
            <Route path ={'foods/:id' }element={<Food />}/>
            <Route path ='/food/new' element={<NewFood/>}/>
            <Route path ='/food/review' element={<NewReview/>} />
            <Route path = '/Grocery' element={<Grocery/>}/>
            <Route path='/login' element={!isLoggedIn ? <Login login={login} /> : <Navigate to="/" />}/>
            <Route path='/signup'element={!isLoggedIn ? <SignUp /> : <Navigate to="/" />}/>  
          {/*<Route path = '/SignIn' element={<SignIn/>}/>*/}
            {/* <Route path ='/Cart'  element={<Cart/>}/> */}

            <Route path = '/login' element={<Login/>} />
            <Route path = '/Signin' element={<SignUp/>}/>
            <Route path = '/food/random' element={<RandomFood/>}/>
            <Route path = '/food/description/:id' element={<UpdateForm/>} />


        </Routes>
        <Footer/>
         </Router>
    </div>
  );
}

export default App;
