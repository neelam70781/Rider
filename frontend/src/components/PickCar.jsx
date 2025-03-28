import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CAR_DATA } from "./CarData";
import { IconCar } from "@tabler/icons-react";
import Bike1 from "../assets/Bikes/hero_splender.png";
import Bike2 from "../assets/Bikes/Activa.jpg";
import Bike3 from "../assets/Bikes/royal_enfield.jpg";
import Bike4 from "../assets/Bikes/Yamaha_R15.webp";

function PickCar() {
  const [selectedBikeIndex, setSelectedBikeIndex] = useState(0);

  const bikes = [
    { name: "Hero Splender", image: Bike1 },
    { name: "Honda Scooty", image: Bike2 },
    { name: "Royal Enfield", image: Bike3 },
    { name: "Yamaha R15", image: Bike4 }
  ];

  const selectedBike = CAR_DATA[selectedBikeIndex][0];

  return (
    <div className="container pt-24 mx-auto h-screen py-8">
      <h1 className="text-2xl font-bold text-center mb-4">Vehicle Models</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col justify-center gap-4">
          {bikes.map((bike, index) => (
            <div
              key={index}
              className={`flex items-center p-2 cursor-pointer ${selectedBikeIndex === index ? "bg-gray-200" : ""
                }`}
              onClick={() => setSelectedBikeIndex(index)}
            >
              <IconCar className="mr-2" />
              <span>{bike.name}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <img src={bikes[selectedBikeIndex].image} alt="Selected Bike" className="max-h-72" />
        </div>
        <div className="flex flex-col ml-24 justify-center w-1/4">
          <h2 className="text-xl text-center font-bold mb-2">Bike Data</h2>
          <table className="border-collapse border">
            <tbody>
              {Object.entries(selectedBike).map(([key, value]) => (
                <tr key={key} className="border">
                  <td className="border px-4 py-2 font-bold">{key}</td>
                  <td className="border px-4 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <a href="#bookingSection" className="py-2 px-6 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-center block w-auto">Reserve Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickCar;
