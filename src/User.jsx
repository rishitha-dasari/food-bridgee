import React, { useState } from 'react';
import './css-files/register.css'; 
import { useNavigate,Link } from 'react-router-dom';
const UserRegistration = () => {
    
    const navigate=useNavigate();
    const[details,setDetails]=useState({
        name:'',
        email:'',
        password:'',
        address:'',
        phone:'',
        district:'',
    })
    
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (details.name && details.email && details.password && details.address && details.phone && details.district) {
          
            setErrorMessage('');
            setSuccessMessage('Registration successful! Redirecting to login page.');

            setTimeout(() => {
               navigate("/userlog")
            }, 10);
        } else {
            setSuccessMessage('');
            setErrorMessage('Registration failed. Please fill in all fields.');
        }
    };

    return (
      
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
            <h2>User Registration</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="name" value={details.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={details.email}onChange={handleChange}required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={details.password} onChange={handleChange} required />
                    <small >*Minimum 6 characters</small>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={details.address} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" value={details.phone}onChange={handleChange} pattern="[0-9]{10}" required />
                </div>
                <div className="form-group">
                    <label htmlFor="district">Select District:</label>
                    <select id="district" name="district" value={details.district} onChange={handleChange} required>
                        <option value="" disabled>Select your district</option>
                        <option value="district1">District 1</option>
                        <option value="district2">District 2</option>
                    </select>
                </div>
                <button type="submit" className="register-button">Register</button>
                <p className="login-text">
                    Already have an account <Link to="/userlog" className="login-link">Login</Link>
                </p>

            </form>
           
        </div>
       
    );
};

export default UserRegistration;
