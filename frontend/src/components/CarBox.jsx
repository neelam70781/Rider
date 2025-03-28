import React, { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  const [activeBike, setActiveBike] = useState(0);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div>
          {data.map((car, id) => (
            <div key={id} className={`text-sm p-2 cursor-pointer hover:bg-gray-100 rounded-md ${id === activeBike && 'bg-gray-200'}`} onClick={() => setActiveBike(id)}>
              {car.model}
            </div>
          ))}
        </div>
        <div className="col-span-2">
          <div className="relative mb-4">
            {carLoad && <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>}
            <img
              className={`${carLoad ? 'hidden' : 'block'} w-full rounded-md`}
              src={data[activeBike].img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">{data[activeBike].model}</h4>
              <p className="text-sm text-gray-600">{data[activeBike].mark}</p>
              <p className="text-sm text-gray-600">{data[activeBike].year}</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-500">${data[activeBike].price}</h4>
              <p className="text-sm text-gray-600">Per Day</p>
            </div>
          </div>
          <div className="border-b mt-4 mb-4"></div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-semibold">Doors</span>
              <p className="text-sm text-gray-600">{data[activeBike].doors}</p>
            </div>
            <div>
              <span className="text-xs font-semibold">AC</span>
              <p className="text-sm text-gray-600">{data[activeBike].air}</p>
            </div>
            <div>
              <span className="text-xs font-semibold">Transmission</span>
              <p className="text-sm text-gray-600">{data[activeBike].transmission}</p>
            </div>
            <div>
              <span className="text-xs font-semibold">Fuel</span>
              <p className="text-sm text-gray-600">{data[activeBike].fuel}</p>
            </div>
          </div>
          <a href="#booking-section" className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md mt-4 hover:bg-blue-600">
            Reserve Now
          </a>
        </div>
      </div>
    </>
  );
}

export default CarBox;
