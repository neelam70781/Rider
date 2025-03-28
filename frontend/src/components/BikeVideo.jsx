import React from 'react';
import bike1 from '../assets/Videos/bike1.mp4';

const BikeVideo = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bike1} type="video/mp4" />
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Rent Your Dream Bike Today!</h1>
        <p className="text-lg text-white">Explore our wide range of bikes and start your adventure.</p>
      </div>
    </div>
  );
};

export default BikeVideo;
