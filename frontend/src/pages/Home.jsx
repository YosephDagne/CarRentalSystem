import React from "react";
import CarCard from "../components/CarCard";

const Home = () => (
  <div className="min-h-screen bg-gray-100 py-8">
    {/* Header Section */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to the Car Rental System
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Find your perfect car for rent.
      </p>
    </div>

    {/* Car Listings Section */}
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Car 1 */}
      <CarCard car={{ name: "Car 1", brand: "Brand 1", price: "100" }} />

      {/* Car 2 */}
      <CarCard car={{ name: "Car 2", brand: "Brand 2", price: "150" }} />

      {/* You can add more CarCard components here */}
    </div>
  </div>
);

export default Home;
