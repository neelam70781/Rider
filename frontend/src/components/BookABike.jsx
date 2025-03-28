import React, { useState } from "react";
import { CAR_DATA } from "./CarData";

function BookABike() {
  const [selectedBike, setSelectedBike] = useState(CAR_DATA[0][0]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [bikeName, setBikeName] = useState(""); // New state variable
  const [email, setEmail] = useState(""); // New state variable
  const [fullName, setFullName] = useState(""); // New state variable
  const [phone, setPhone] = useState(""); // New state variable
  const [address, setAddress] = useState(""); // New state variable
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSearch = () => {
    // Implement your search logic here
    setIsFormOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting normally
    const data = { // Define the data to be sent
      bikeName, // Using the state variable bikeName
      pickupLocation, // Using the state variable pickupLocation
      dropoffLocation, // Using the state variable dropoffLocation
      pickupDate, // Using the state variable pickupDate
      dropoffDate, // Using the state variable dropoffDate
      fullName, // Using the state variable fullName
      email, // Using the state variable email
      phone, // Using the state variable phone
      address // Using the state variable address
    };
  
    try { // Try to send the data to the server
      const response = await fetch('http://localhost:3000/bookings', { // Send a POST request to your server's /bookings endpoint
        method: 'POST', // Use the POST method
        headers: {
          'Content-Type': 'application/json' // Use JSON as the content type
        },
        body: JSON.stringify(data) // Send the data as JSON
      });
  
      if (response.ok) { // If the response is ok (status code 200-299)
        alert('Booking created!'); // Show a success message
      } else { // If the response is not ok (status code outside of 200-299)
        alert('Error creating booking'); // Show an error message
      }
    } catch (error) { // If there is an error in the try block
      console.error('Error:', error); // Log the error to the console
      alert('Error creating booking'); // Show an error message
    }
  };

  

  return (
    <div id="bookingSection" className="container h-screen pt-36 mx-auto py-8 bg-emerald-200">
      <h1 className="text-2xl font-bold text-center mb-8">Book a Bike</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-start">
            <label htmlFor="bikeType" className="mb-2">
              Select Bike Type
            </label>
            <select
              id="bikeType"
              className="border py-2 px-3 w-full"
              value={selectedBike.name}
              onChange={(e) => {
                setBikeName(selectedBike.name);
                const selectedBikeObj = CAR_DATA.flat().find(
                  (car) => car.name === e.target.value
                );
                setSelectedBike(selectedBikeObj);
                setBikeName(selectedBikeObj.name); // Update bikeName state
              }}
            >
              {CAR_DATA.flat().map((car) => (
                <option key={car.name} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start mt-4">
            <label htmlFor="pickupLocation" className="mb-2">
              Pickup Location
            </label>
            <input
              type="text"
              id="pickupLocation"
              className="border py-2 px-3 w-full"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <label htmlFor="dropoffLocation" className="mb-2">
              Dropoff Location
            </label>
            <input
              type="text"
              id="dropoffLocation"
              className="border py-2 px-3 w-full"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-start">
            <label htmlFor="pickupDate" className="mb-2">
              Pickup Date
            </label>
            <input
              type="date"
              id="pickupDate"
              className="border py-2 px-3 w-full"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start mt-4">
            <label htmlFor="dropoffDate" className="mb-2">
              Dropoff Date
            </label>
            <input
              type="date"
              id="dropoffDate"
              className="border py-2 px-3 w-full"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {isFormOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-start">
                <label htmlFor="fullName" className="mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="border py-2 px-3 w-full"
                  required
                  onChange={(e) => setFullName(e.target.value)} // Update bikeName state
                />
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border py-2 px-3 w-full"
                  required
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                />
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="phone" className="mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="border py-2 px-3 w-full"
                  required
                  onChange={(e) => setPhone(e.target.value)} // Update phone state
                />
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="address" className="mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  className="border py-2 px-3 w-full h-24"
                  required
                  onChange={(e) => setAddress(e.target.value)} // Update address state
                ></textarea>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Book Now
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsFormOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookABike;
