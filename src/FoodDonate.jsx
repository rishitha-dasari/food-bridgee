import React, { useState } from 'react';
import './css-files/fooddonate.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const FoodDetails = () => {
    const [foodName, setFoodName] = useState('');
    const [mealType, setMealType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [exp_date, setExp_Date] = useState('');
    const [foodType, setFoodType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for donation");
        navigate('/');
        console.log('Form submitted:', { foodName, mealType, quantity,exp_date, foodType });
    };

    return (
        <div className="foodDetails">
            <Navbar />

            {/* Split Screen */}
            <div className="split-container">
                {/* Left side image */}
                <div className="image-section">
                    <img src="https://kadagamfoundation.org/assets/uploads/services/7203cf42238a5fdb1753196c68bb1f97.JPG"
                        alt="Donate Food" />
                </div>

                {/* Right side form */}
                <div className="form-container">
                    <h1 >Food Details</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="foodName">Food Name:</label>
                            <input
                                type="text"
                                id="foodName"
                                placeholder="Enter food name"
                                value={foodName}
                                onChange={(e) => setFoodName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Meal Type:</label>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="veg"
                                    value="veg"
                                    checked={mealType === 'veg'}
                                    onChange={() => setMealType('veg')}
                                />
                                <label htmlFor="veg">Veg</label>

                                <input
                                    type="radio"
                                    id="nonVeg"
                                    value="nonVeg"
                                    checked={mealType === 'nonVeg'}
                                    onChange={() => setMealType('nonVeg')}
                                />
                                <label htmlFor="nonVeg">Non-Veg</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                type="text"
                                id="quantity"
                                placeholder="Enter quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exp_date">Exp Date:</label>
                            <input
                                type="text"
                                id="exp_date"
                                placeholder="Enter Expiry Date"
                                value={exp_date}
                                onChange={(e) => setExp_Date(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Food Type:</label>
                            <div className="btn-group">
                                <button
                                    className={`btnn ${foodType === 'rawFood' ? 'active' : ''}`}
                                    onClick={() => setFoodType('rawFood')}
                                    type="button"
                                >
                                    Raw Food
                                </button>
                                <button
                                    className={`btnn ${foodType === 'CookedFood' ? 'active' : ''}`}
                                    onClick={() => setFoodType('CookedFood')}
                                    type="button"
                                >
                                     Cooked Food
                                </button>
                                <button
                                    className={`btnn ${foodType === 'PackedFood' ? 'active' : ''}`}
                                    onClick={() => setFoodType('PackedFood')}
                                    type="button"
                                >
                                     Packed Food
                                </button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="uploadImage">Upload Image:</label>
                            <input type="file" id="uploadImage" />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
