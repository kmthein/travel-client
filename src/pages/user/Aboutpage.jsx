import { Divider, Image } from "antd";
import React from "react";
import Tower from "../../assets/img/about/tower.png";
import AboutImg from "../../assets/img/about/aboutimg.png";
import Hotel from "../../assets/img/about/hotel.png";
import BusandTicket from "../../assets/img/about/busandticket.png";
import ReviewForm from "../../components/user/destinationdetail/ReviewForm";
import ReviewList from "../../components/user/destinationdetail/ReviewList";

const Aboutpage = () => {
  return (
    <>
      <div className="bg-gray-100 pb-20">
        <div className="relative">
          <img
            src={Tower}
            className="w-full h-[650px] object-bottom "
            alt="Tower"
          />
          <h2 className="absolute text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold">
            ABOUT <span className="text-blue-400">US</span>
          </h2>
        </div>

        <div className="text-center my-16">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="text-xl mt-4">
            Helping travellers find people to hang out with
          </p>
        </div>

        <div className="w-[70%] mx-auto px-4">
          <div className="flex justify-around items-start my-16 text-center space-x-8">
            <div>
              <p className="text-3xl font-semibold">200</p>
              <p className="italic text-lg">Travellers</p>
            </div>
            <Divider
              type="vertical"
              style={{ borderWidth: "3px", height: "50px" }}
            />
            <div>
              <p className="text-3xl font-semibold">1 Year</p>
              <p className="italic text-lg">in Business</p>
            </div>
            <Divider
              type="vertical"
              style={{ borderWidth: "3px", height: "50px" }}
            />
            <div>
              <p className="text-3xl font-semibold">1.3k</p>
              <p className="italic text-lg">Members</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="w-full  md:w-1/2 mb-8 md:mb-0">
              <Image
                src={AboutImg}
                className="object-button w-full  rounded-lg shadow-lg"
                alt="About"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Who Are We</h2>
              <p className="text-xl leading-9 mb-10">
                Welcome to TravelTrax, your trusted partner in seamless travel
                planning. Our mission is to make your travel experience as
                smooth and enjoyable as possible by offering a comprehensive
                platform where you can book hotels, purchase bus or flight
                tickets, and access a variety of other travel-related services.
              </p>
              <p className="text-xl leading-9">
                At TravelTrax, we are a team of passionate travel enthusiasts
                dedicated to revolutionizing the way you plan your journeys. Our
                team combines years of experience in the travel industry with
                cutting-edge technology to provide you with a user-friendly
                platform that caters to all your travel needs.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src={Hotel}
                className="object-cover w-full h-full rounded-lg shadow-lg"
                alt="Hotel"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <p className="text-xl leading-8 mb-4">
                <span className="font-bold">Hotel Bookings:</span> Discover and
                book from a wide range of hotels, from luxurious resorts to
                budget-friendly accommodations, ensuring a comfortable stay
                wherever your travels take you.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src={BusandTicket}
                className="object-cover w-full h-full rounded-lg shadow-lg"
                alt="Bus and Ticket"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-6">Transportation</h2>
              <p className="text-xl leading-8 mb-4">
                <span className="font-bold">Bus and Flight Tickets:</span>{" "}
                Whether you're traveling by air or by road, TravelTrax offers a
                streamlined booking process for both bus and flight tickets.
                Compare prices, check availability, and secure your seats with
                ease.
              </p>
              <p className="text-xl leading-8">
                Beyond transportation and accommodation, we offer a variety of
                other services to enhance your travel experience. From car
                rentals and travel insurance to guided tours and event tickets,
                TravelTrax has you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[70%] mx-auto py-10">
        <ReviewForm />
        <ReviewList />
      </div>
    </>
  );
};

export default Aboutpage;
