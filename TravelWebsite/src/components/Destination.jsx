import React from "react";
import "./DestinationStyle.css";
import Mountain1 from '../Images/1.jpg'
import Mountain2 from '../Images/2.jpg'
import Mountain3 from '../Images/3.jpg'
import Mountain4 from '../Images/4.jpg'
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <DestinationData
    className="first-des"
    heading="Taal Volcano, Batangas"
    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Praesentium itaque omnis autem, quis blanditiis officia error vel
    officiis excepturi quos incidunt consectetur voluptatum ea? Ullam
    minima aut a itaque iste fuga natus soluta rem explicabo optio
    fugiat, distinctio accusamus temporibus neque quos, quibusdam quia
    ipsum quasi cumque, nulla aliquid cupiditate?"
    img1={Mountain1}
    img2={Mountain2}
    />
     <DestinationData
     className="first-des-reverse"
    heading="Mt. Daguldul, Batangas"
    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Praesentium itaque omnis autem, quis blanditiis officia error vel
    officiis excepturi quos incidunt consectetur voluptatum ea? Ullam
    minima aut a itaque iste fuga natus soluta rem explicabo optio
    fugiat, distinctio accusamus temporibus neque quos, quibusdam quia
    ipsum quasi cumque, nulla aliquid cupiditate?"
    img1={Mountain3}
    img2={Mountain4}
    />
    </div>
  );
};

export default Destination;
