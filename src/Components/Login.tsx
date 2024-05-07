import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({login}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser({email, password})
    }

    const loginUser = ({ email, password }) => {

        console.log(JSON.stringify({ email, password }));
    
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set to 'application/json'
            },
            body: JSON.stringify({ email, password }),
        })
        .then((resp) => {
            console.log(resp);
            if (!resp.ok) {
                // If the response status code is not OK, throw an error to catch it later
                throw new Error('Network response was not ok');
            }
            return resp.json(); // Parse JSON only if response is ok
        })
        .then((data) => {
            console.log(data);
            if (data.error) {
                alert(data.error);
            } else {
                // Assuming setIsLoggedIn is defined elsewhere and accessible here
                // setIsLoggedIn(true);
                alert('Login successful');
                // localStorage.setItem('token', data.data);
                // localStorage.setItem('loggedin', true);

                //from app props
                login();
                //get local storage
                console.log('token from storage -->' + localStorage.getItem('token'));

            }
        })
        .catch((err) => {
            console.error(err);
            alert('An error occurred during login'); // Provide user feedback
        });
    }
        return (
            <div className={'mainContainer'}>
                <div className={'titleContainer'}>
                    <h2>Login</h2>
                </div>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className={'inputContainer'}>
                        <input
                            value={email}
                            placeholder="Enter your email here"
                            onChange={(ev) => setEmail(ev.target.value)}
                            className='inputBox' />
                        <label className='errorLabel'>{emailError}</label>
                    </div>
                    <br />
                    <div className='inputContainer'>
                        <input
                            value={password}
                            placeholder="Enter your password here"
                            onChange={(ev) => setPassword(ev.target.value)}
                            className='inputBox'
                            type='password' />
                        <label className='errorLabel'>{passwordError}</label>
                    </div>
                    <br />
                    <div className='inputContainer'>
                        <input
                            className='inputButton'
                            type='submit'
                            value='Log in' />
                    </div>
                    <div className='inputContainer'>
                    <a href="#" onClick={(e) => { navigate('/signup')}}>Create a new account</a>
                    </div>
                </form>
            </div>
        )
}

export default Login;