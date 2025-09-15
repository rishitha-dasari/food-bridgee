import React, { useState } from 'react';
import "./css-files/profile.css";
import Navbar from './Navbar';

const Profile = () => {
  // Editable user details
  const [user, setUser] = useState({
    name: "Rishitha Dasari",
    email: "rishitha@example.com",
    phone: "123-456-7890",
  });

  // Sample donations/received data
  const donations = [
    { item: "Rice and Curry", date: "2023-08-10" },
    { item: "Biryani", date: "2023-08-12" },
  ];

  const received = [
    { item: "Pulihora", donor: "Akhila", date: "2023-08-08" },
    { item: "Curd Rice", donor: "John", date: "2023-08-11" },
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle save button click
  const handleSave = () => {
    alert("User details updated successfully!");
    // Here you can also send data to backend API
  };

  return (
    <div className="profile-container">
      <Navbar />

      <div className="profile-content">
        {/* Left Side: Editable User Details */}
        <div className="left-profile">
          <h2>User Details</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>

        {/* Right Side: Flash Cards */}
        <div className="right-profile">
          <div className="flashcard">
            <h3>Donations ({donations.length})</h3>
            <div className="flashcard-details">
              {donations.map((donation, index) => (
                <p key={index}>{donation.item} - {donation.date}</p>
              ))}
            </div>
          </div>

          <div className="flashcard">
            <h3>Recipients ({received.length})</h3>
            <div className="flashcard-details">
              {received.map((rec, index) => (
                <p key={index}>{rec.item} from {rec.donor} - {rec.date}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
