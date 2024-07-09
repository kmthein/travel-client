import { Card } from "antd";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import Airplane from "../../../assets/img/home/airplane.png";
import Bus from "../../../assets/img/home/bus.png";
import Hotel from "../../../assets/img/home/hotel.png";
import Restaurant from "../../../assets/img/home/restaurant.png";

const { Meta } = Card;

const OurService = () => {
  return (
    <section className="py-6">
      <div className="w-[70%] mx-auto my-20">
        <h2 className="text-center font-bold text-3xl mb-10">Our Services</h2>
        <div className="flex justify-center gap-10 flex-wrap text-center">
          <Card
            hoverable
            style={{ width: 240 }}
            className="py-10"
            cover={
              <img
                alt="Accommodation"
                src={Hotel}
                className="h-16 w-16 object-contain mx-auto"
              />
            }
          >
            <Meta
              title="Accommodation"
              description="Enjoy luxurious and comfortable stays at top-rated hotels and resorts around the world."
            />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            className="py-10"
            cover={
              <img
                alt="Best Flights Options"
                src={Airplane}
                className="h-16 w-16 object-contain mx-auto"
              />
            }
          >
            <Meta
              title="Best Flights Options"
              description="We offer competitive prices on flights with the best airlines to your desired destinations."
            />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            className="py-10"
            cover={
              <img
                alt="Restaurant Booking"
                src={Bus}
                className="h-16 w-16 object-contain mx-auto"
              />
            }
          >
            <Meta
              title="Restaurant Booking"
              description="Reserve tables at the finest restaurants to enjoy exquisite cuisine during your travels."
            />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            className="py-10"
            cover={
              <img
                alt="Europe Street beat"
                src={Restaurant}
                className="h-16 w-16 object-contain mx-auto"
              />
            }
          >
            <Meta
              title="Local Transport"
              description="Convenient and reliable transportation options to explore the local sights and attractions."
            />
          </Card>
        </div>
      </div>
      <div className="w-[70%] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Why Should You Choose Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We have extensive knowledge and experience in the travel industry.
            </p>
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
              <MdHealthAndSafety size={40} className="text-teal-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Safety and Support
                </h3>
                <p className="text-gray-600">
                  Our top priority is the safety and well-being of our clients.
                  We maintain high safety standards and have emergency support
                  available during the trip.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
              <FaMapLocationDot size={40} className="text-teal-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Diverse Range of Destinations
                </h3>
                <p className="text-gray-600">
                  Whether it's a domestic tour or an international adventure, we
                  cover a wide range of destinations to cater to different
                  interests and preferences.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-lg">
              <RiCustomerService2Fill size={40} className="text-teal-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  24/7 Customer Support
                </h3>
                <p className="text-gray-600">
                  Our dedicated customer support team is available round the
                  clock to address any queries or concerns before, during, and
                  after the trip.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Travel Service"
              className="w-full h-[645px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
