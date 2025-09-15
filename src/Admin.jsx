import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css-files/login.css';

const Admin = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        if (username === "admin" && password === "pass") {
            alert("Login successful!");
            navigate('/dashboard');
        } else {
            alert("Invalid username or password. Redirecting to register page.");
        }
    };

    return (
        <div className='admin-container'>
            <form onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Admin;
