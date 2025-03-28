import React from 'react';
import backgroundImage from '../assets/BikesBg/bike1.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 w-full h-full bg-cover bg-center animate-slide-images"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Rent a Bike Today!</h1>
        <p className="text-lg">Explore the city on two wheels.</p>
      </div>
    </div>
  );
};

export default Hero;
