import React from "react";
import Beach from "../../../assets/img/home/beach.png";
const About = () => {
  return (
    <div className="max-w-screen-xl  mx-auto py-16">
      <div className="flex items-start space-x-14 pt-20">
        <img src={Beach} alt="" />
        <div>
          <h2 className="text-4xl font-bold">
            Start Your Ultimate Travel Planning Experience
          </h2>
          <p className="my-10 text-xl">
            Welcome to TravelTrax, your trusted partner in seamless travel
            planning. Our mission is to make your travel experience as smooth
            and enjoyable as possible by offering a comprehensive platform where
            you can book hotels, purchase bus or flight tickets, and access a
            variety of other travel-related services. your gateway to
            extraordinary adventures and unforgettable journeys.
          </p>
          <p className="text-xl">
            Whether you're a seasoned traveler or embarking on your first trip,
            our platform is designed to make your travel planning seamless and
            enjoyable. Explore our curated destinations, tailor your
            itineraries, and connect with fellow travelers for insider tips and
            recommendations. Start your journey with us and transform your
            travel dreams into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
