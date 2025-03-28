import React from "react";
import { IconPhone } from "@tabler/icons-react";
import AboutMain from "../assets/Icons/bikeIcon.png";
import Box1 from "../assets/Icons/bikeIcon.png";
import Box2 from "../assets/Icons/bikeIcon.png";
import Box3 from "../assets/Icons/bikeIcon.png";
import PlanTrip from "../components/PlanTrip";

function About() {
  return (
    <>
      <section className="about-page h-screen flex justify-center items-center bg-gray-100">
        <div className="container mx-auto py-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2">
              <img src={AboutMain} alt="Car Rental" className="mx-auto w-40" />
              <div className="mt-6">
                <h3 className="text-lg font-semibold">About Company</h3>
                <h2 className="text-2xl font-bold mb-4">
                  You start the engine and your adventure begins
                </h2>
                <p className="text-gray-700">
                  Certain but she but shyness why cottage. Guy the put
                  instrument sir entreaties affronting. Pretended exquisite see
                  cordially the you. Weeks quiet do vexed or whose. Motionless
                  if no to affronting imprudence no precaution. My indulged as
                  disposal strongly attended.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-center gap-6">
                <div className="flex flex-col items-center">
                  <img src={Box1} alt="Car Types" className="w-16" />
                  <span className="text-xl font-bold">20</span>
                  <span>Car Types</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={Box2} alt="Rental Outlets" className="w-16" />
                  <span className="text-xl font-bold">85</span>
                  <span>Rental Outlets</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src={Box3} alt="Repair Shop" className="w-16" />
                  <span className="text-xl font-bold">75</span>
                  <span>Repair Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PlanTrip />
      <div className="book-banner bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="flex justify-center gap-6 items-center">
            <IconPhone width={40} height={40} />
            <h2 className="text-2xl font-bold">Book a car by getting in touch with us</h2>
            <h3 className="text-xl font-bold">(123) 456-7869</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
