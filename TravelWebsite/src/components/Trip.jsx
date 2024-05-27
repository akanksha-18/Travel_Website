import "./TripStyle.css";
import React from "react";
import TripData from "./TripData";
import Trip1 from "../Images/5.jpg";
import Trip2 from "../Images/8.jpg";
import Trip3 from "../Images/6.jpg";

const Trip = () => {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="tripcard">
          <TripData
            image={Trip1}
            heading="Trip in Indonesia"
            text="Indonesia is a vast and diverse archipelago nation located in Southeast Asia, made up of thousands of islands scattered across the equator. It is the world's largest island country and the fourth most populous country, with over 270 million people. "
          />
           <TripData
            image={Trip2}
            heading="Trip in Malaysia"
            text="Malaysia is located on the Malay Peninsula and the island of Borneo. It shares land borders with Thailand, Indonesia, and Brunei, and maritime borders with Singapore, Vietnam, and the Philippines. The country is characterized by tropical rainforests, mountain ranges, and beautiful coastlines. "
          />
           <TripData
            image={Trip3}
            heading="Trip in France"
            text="France is bordered by Belgium, Luxembourg, Germany, Switzerland, Italy, Spain, Andorra, and Monaco. It has diverse landscapes, including the majestic Alps in the east, rolling hills and vineyards in the center, and beautiful beaches along the Mediterranean coast in the south. "
          />
        </div>
      </div>
    </>
  );
};

export default Trip;
