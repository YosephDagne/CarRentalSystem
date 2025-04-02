import React from "react";

const CarDetails = ({ car }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-6">
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">{car.name}</h2>
    <p className="text-gray-600 text-lg mb-4">{car.description}</p>
    <p className="text-xl font-bold text-green-600">Price: ${car.price}</p>
    <div className="mt-6">
      <button className="bg-blue-600 text-white py-3 px-6 rounded-md w-full md:w-auto hover:bg-blue-700 transition-colors">
        Rent Now
      </button>
    </div>
  </div>
);

export default CarDetails;
