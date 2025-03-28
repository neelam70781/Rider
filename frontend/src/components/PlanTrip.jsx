import React from 'react';
import Drive from '../assets/Icons/bikeIcon.png';
import backgroundImage from '../assets/BikesBg/PlanTripBg.png';

function PlanTrip() {
    return (
        <>
            <section className="plan-section flex justify-between items-center h-screen bg-gray-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container mx-auto py-12 text-center text-white">
                    <h4 className="text-4xl">Plan your trip now</h4>
                    <h1 className="text-6xl">Quick & easy Bike Rental</h1>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <img src={Drive} alt="icon_img" className="mx-auto w-20 mb-2" />
                            <h3 className="text-xl font-bold mb-1">Select Car</h3>
                            <p>
                                We offers a big range of vehicles for all your driving needs. We
                                have the perfect car to meet your needs
                            </p>
                        </div>

                        <div className="text-center">
                            <img src={Drive} alt="icon_img" className="mx-auto w-20 mb-2" />
                            <h3 className="text-xl font-bold mb-1">Contact Operator</h3>
                            <p>
                                Our knowledgeable and friendly operators are always ready to help
                                with any questions or concerns
                            </p>
                        </div>

                        <div className="text-center">
                            <img src={Drive} alt="icon_img" className="mx-auto w-20 mb-2" />
                            <h3 className="text-xl font-bold mb-1">Let's Drive</h3>
                            <p>
                                Whether you're hitting the open road, we've got you covered with
                                our wide range of cars
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PlanTrip;
