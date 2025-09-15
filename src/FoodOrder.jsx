import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './css-files/foodorder.css';

const FoodOrder = () => {
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState('place1');

  // Updated food data with meal type & food type
  const foodData = {
    place1: [
      { item: 'Rice and Curry', quantity: '5kg', mealType: 'Veg', foodType: 'Cooked', donor: 'Rishitha', phone: '123-456-7890' },
      { item: 'Biryani', quantity: '3kg', mealType: 'Non-Veg', foodType: 'Cooked', donor: 'Usha', phone: '123-456-7890' },
    ],
    place2: [
      { item: 'Pulihora', quantity: '10kg', mealType: 'Veg', foodType: 'Cooked', donor: 'Akhila', phone: '123-456-7890' },
      { item: 'Curd Rice', quantity: '7kg', mealType: 'Veg', foodType: 'Cooked', donor: 'John', phone: '123-456-7890' },
    ],
    place3: [
      { item: 'Vegetable Pulao', quantity: '4kg', mealType: 'Veg', foodType: 'Cooked', donor: 'Mary', phone: '123-456-7890' },
    ],
  };

  const handlePlaceChange = (e) => setSelectedPlace(e.target.value);

  const handleGetOrder = (food) => {
    navigate('/getorder', { state: { food } });
  };

  return (
    <div className="containerfood">
      <Navbar />
      <div className="split-container">
        <div className="left-section">
          <h1>Receive Food</h1>
          <p>Select Place:</p>
          <select
            id="places"
            name="places"
            className="foodselect"
            value={selectedPlace}
            onChange={handlePlaceChange}
          >
            <option value="place1">Bhimavaram</option>
            <option value="place2">Undi</option>
            <option value="place3">Veeravasaram</option>
          </select>
        </div>

        <div className="right-section">
          <h2>Available Food</h2>
          <div className="food-details">
            {foodData[selectedPlace].map((food, index) => (
              <div className="food-item" key={index}>
                <strong>Food Item:</strong> {food.item} <br /><br />
                <strong>Quantity:</strong> {food.quantity} <br /><br />
                <strong>Meal Type:</strong> {food.mealType} <br /><br />
                <strong>Food Type:</strong> {food.foodType} <br /><br />
                {/* <strong>Donor:</strong> {food.donor} <br /><br />
                <strong>Phone:</strong> {food.phone} <br /><br /> */}
                <button onClick={() => handleGetOrder(food)}>Place Order</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodOrder;
