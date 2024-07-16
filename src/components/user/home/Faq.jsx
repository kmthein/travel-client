import React from "react";
import { Collapse } from "antd";
import "antd/dist/reset.css";
import { FaQuestionCircle } from "react-icons/fa";
import Journey from "../../../assets/img/home/journey.png";
const { Panel } = Collapse;

const Faq = () => {
  return (
    <section className="py-20 ">
      <img src={Journey} alt="journey" className="w-full" />
      <div className="w-[70%] mx-auto px-6 lg:px-10 my-10">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="flex justify-center mb-8">
            <FaQuestionCircle size={50} className="text-teal-600" />
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Find answers to some of the most common questions about our services
            and your travel experience.
          </p>
        </div>
        <Collapse
          defaultActiveKey={["1"]}
          expandIconPosition="right"
          className="bg-white shadow-xl rounded-xl border border-gray-200"
          expandIcon={({ isActive }) => (
            <span
              className={`transition-transform ${isActive ? "rotate-180" : ""}`}
              style={{ fontSize: "20px" }}
            >
              &#9660;
            </span>
          )}
        >
          <Panel
            header="What is TravelTrax?"
            key="1"
            className="border-b border-gray-200 py-5"
          >
            <p className="text-gray-700 ">
              TravelTrax is a travel planning and itinerary management platform
              that helps you find destinations, book flights and accommodations,
              create itineraries, track your budget, and get personalized
              recommendations.
            </p>
          </Panel>
          <Panel
            header="How can I book a trip through TravelTrax?"
            key="2"
            className="border-b border-gray-200 py-5"
          >
            <p className="text-gray-700 ">
              You can search for destinations, select your preferred flights and
              accommodations, and create your trip itinerary directly through
              our platform. Once you’ve made your selections, follow the prompts
              to complete your booking.
            </p>
          </Panel>
          <Panel
            header="What if I encounter issues during my trip?"
            key="3"
            className="border-b border-gray-200 py-5"
          >
            <p className="text-gray-700 ">
              If you encounter any issues during your trip, you can contact our
              24/7 customer support team for assistance. We’re here to help
              resolve any problems and ensure you have a great travel
              experience.
            </p>
          </Panel>
          <Panel
            header="How do I get personalized recommendations?"
            key="4"
            className="border-b border-gray-200 py-5"
          >
            <p className="text-gray-700">
              Our platform provides personalized recommendations based on your
              travel preferences, history, and current trends. The more you
              interact with TravelTrax, the better we can tailor our suggestions
              for you.
            </p>
          </Panel>
          <Panel
            header="Is my personal information safe with TravelTrax?"
            key="5"
            className="border-b border-gray-200 py-5"
          >
            <p className="text-gray-700">
              Yes, we prioritize your privacy and security. Your personal
              information is protected with the highest security measures, and
              we follow strict data protection regulations to ensure your
              information remains confidential.
            </p>
          </Panel>
        </Collapse>
      </div>
    </section>
  );
};

export default Faq;
