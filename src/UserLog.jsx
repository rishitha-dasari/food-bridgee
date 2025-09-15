import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './css-files/login.css'
const User = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        if (username !== "" && password !== "") {
            alert("Login successful!");
            navigate('/base');
        } else {
            alert("Invalid username or password. Redirecting to register page.");
            navigate('/user')
        }
    };

    return (
        <div className='admin-container'>
            
            <form onSubmit={handleSubmit} >
                <h2 >User Login</h2>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password"  required />
                <input type="submit" value="Login" />
                <p className="login-text">
                    You'r not registered? <Link to="/user" className="login-link">Register</Link>
                </p>
                
            </form>
        
        </div>
    );
};


export default User;
