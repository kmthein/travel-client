import { Button, Card } from "antd";
import React from "react";

const Allflight = ({ allFlight }) => {
  return (
    <div className="my-10">
      {allFlight.map((flight) => (
        <div key={flight.id}>
          <Card className="px-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={flight.ariLineImg}
                  alt="airline logo"
                  className="w-[100px] h-[100px] object-cover text-center"
                />
                <h2 className="text-lg">{flight.name}</h2>
              </div>
              <div>
                <p className="text-center text-lg">Date</p>
                <p className="text-md">{flight.date}</p>
              </div>
              <div className="flex gap-2">
                <div>
                  <p>{flight.departureTime}</p>
                  <p>{flight.departurePlace}</p>
                </div>
                <div class="flex items-center ">
                  <div class="h-0.5 w-16 bg-black"></div>
                  <div class="w-1 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-black"></div>
                </div>

                <div>
                  <p>{flight.arrivalTime}</p>
                  <p>{flight.arrivalPlace}</p>
                </div>
              </div>
              <Button>Select</Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Allflight;
