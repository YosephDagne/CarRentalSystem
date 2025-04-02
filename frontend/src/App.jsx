import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CarCard from "./components/CarCard";
import Payment from "./components/Payment";
import CarDetails from "./components/CarDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> {/* Navbar appears on every page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-card" element={<CarCard />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/car-details" element={<CarDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
