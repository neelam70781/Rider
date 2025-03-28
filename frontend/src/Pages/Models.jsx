import React, { useState } from 'react';
import Bike1 from "../assets/Bikes/hero_splender.png";
import Bike2 from "../assets/Bikes/Activa.jpg";
import Bike3 from "../assets/Bikes/royal_enfield.jpg";
import Bike4 from "../assets/Bikes/Yamaha_R15.webp";
import Bike5 from "../assets/Bikes/TVS_Raider_125.webp";
import Bike6 from "../assets/Bikes/royal_enfield_hunter_350.webp";
import Bike7 from "../assets/Bikes/hero_splender_plus.webp";
import Bike8 from "../assets/Bikes/TVS_Jupiter.webp";
import Bike9 from "../assets/Bikes/TVS_Jupiter.jpeg";

// Sample bike models data
const bikeModelsData = [
  { id: 1, name: 'Hero Splender', model: 'Hero', price: 15, image: Bike1 },
  { id: 2, name: 'Activa', model: 'Honda', price: 22, image: Bike2 },
  { id: 3, name: 'Royal Enfield', model: 'Royal Enfield', price: 30, image: Bike3 },
  { id: 4, name: 'Yamaha R15', model: 'Yamaha', price: 32, image: Bike4 },
  { id: 5, name: 'TVS Raider 125', model: 'TVS', price: 22, image: Bike5 },
  { id: 6, name: 'Royal Enfield Hunter 350', model: 'Royal Enfield', price: 28, image: Bike6 },
  { id: 7, name: 'Hero Splender Plus', model: 'Hero', price: 16, image: Bike7 },
  { id: 8, name: 'TVS Jupiter', model: 'TVS', price: 16, image: Bike8 },
  { id: 9, name: 'TVS Jupiter', model: 'TVS', price: 16, image: Bike9 },
];

// Bike Model Card Component
const BikeModelCard = ({ bikeModel }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img src={bikeModel.image} alt={bikeModel.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{bikeModel.name}</h2>
      <p className="text-gray-700 mb-2">{bikeModel.model} Bike</p>
      <p className="text-gray-700 mb-2">${bikeModel.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Rent Now</button>
    </div>
  );
};

// Bike Models Page Component
const Models = () => {
  const [filterType, setFilterType] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Filtering bike models based on type
  const filteredBikeModels = filterType ? bikeModelsData.filter(bike => bike.model === filterType) : bikeModelsData;

  // Sorting bike models based on selected criteria
  const sortedBikeModels = filteredBikeModels.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    }
  });

  return (
    <div className="container pt-24 mx-auto py-8">
      {/* Filter Section */}
      <div className="mb-8">
        <label className="mr-4">Filter by Type:</label>
        <select className="border border-gray-300 rounded-md p-2" value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="">All</option>
          <option value="Mountain">Mountain</option>
          <option value="Road">Road</option>
          <option value="Hybrid">Hybrid</option>
          {/* Add more filter options as needed */}
        </select>
      </div>

      {/* Sort Section */}
      <div className="mb-8">
        <label className="mr-4">Sort by:</label>
        <select className="border border-gray-300 rounded-md p-2" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          {/* Add more sorting options as needed */}
        </select>
      </div>

      {/* Bike Models */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedBikeModels.map(bikeModel => (
          <BikeModelCard key={bikeModel.id} bikeModel={bikeModel} />
        ))}
      </div>
    </div>
  );
};

export default Models;
