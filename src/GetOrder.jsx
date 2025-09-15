import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './css-files/getorder.css';

const GetOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const food = location.state?.food;

  if (!food) {
    return <p>No food selected!</p>;
  }

  const handleConfirm = () => {
    alert('Order taken successfully!');
    navigate('/base'); // redirect back
  };

  return (
    <div className="getcontainer">
      <Navbar />
      <div className="containerget">
        <h1>Confirm Your Order</h1>

        <div className="food-details">
          <p><strong>Food Item:</strong> {food.item}</p>
          <p><strong>Quantity:</strong> {food.quantity}</p>
          <p><strong>Meal Type:</strong> {food.mealType}</p>
          <p><strong>Food Type:</strong> {food.foodType}</p>
          <p><strong>Donor:</strong> {food.donor}</p>
          <p><strong>Phone:</strong> {food.phone}</p>
        </div>

        <button onClick={handleConfirm}>Confirm Order</button>
      </div>
    </div>
  );
};

export default GetOrder;
