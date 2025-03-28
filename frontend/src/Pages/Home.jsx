import React from 'react'
import Hero from '../components/Hero'
import PlanTrip from '../components/PlanTrip'
import PickCar from '../components/PickCar'
import BookABike from '../components/BookABike'
import BikeVideo from '../components/BikeVideo'

const Home = () => {
  return (
    <div>
        <Hero/>
        <BikeVideo />
        <BookABike />
        <PlanTrip/> 
        <PickCar />
    </div>
  )
}

export default Home