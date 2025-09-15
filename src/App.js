import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import User from "./User";
import UserLog from "./UserLog";
import FoodOrder from "./FoodOrder";
import Base from "./Base";
import About from "./About";
import FoodDonate from "./FoodDonate";
import GetOrder from "./GetOrder";
import Profile from "./Profile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/userlog" element={<UserLog />} />
        <Route path="/foodorder" element={<FoodOrder />} />
        <Route path="/base" element={<Base />} />
        <Route path="/about" element={<About />} />
        <Route path="/fooddonate" element={<FoodDonate />} />
        <Route path="/getorder" element={<GetOrder />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
