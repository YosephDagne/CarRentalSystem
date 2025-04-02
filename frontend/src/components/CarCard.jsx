import React from "react";

const CarCard = ({ car }) => (
  <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs mx-auto mb-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{car.name}</h3>
    <p className="text-gray-600 mb-2">{car.brand}</p>
    <p className="text-lg font-bold text-green-600">${car.price}</p>
    <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition-colors">
      Rent Now
    </button>
  </div>
);

export default CarCard;
