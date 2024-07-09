import React from "react";
import Bagan from "../../../assets/img/destination/bagan.png";
import { Image } from "antd";
const DestinationDetail = () => {
  return (
    <div className="flex items-start gap-8 mb-8 overflow-hidden">
      <div className="flex-shrink-0 w-1/2 h-80 bg-gray-200">
        <Image
          src={Bagan}
          preview={false}
          className="object-cover w-full h-full overflow-hidden"
        />
      </div>
      <div className="flex-grow">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            Nestled in the heart of Myanmar, Bagan is a mesmerizing ancient city
            that captivates travelers with its rich history, stunning
            architecture, and serene landscapes. Known for its vast expanse of
            temples and pagodas, Bagan offers a unique glimpse into the past and
            a tranquil escape for modern-day explorers.
          </p>
          <p className="text-gray-700 mb-4">
            Bagan was the capital of the Pagan Kingdom from the 9th to the 13th
            centuries, during which over 10,000 Buddhist temples, pagodas, and
            monasteries were constructed. Today, around 2,200 of these
            structures remain, creating a landscape that is both awe-inspiring
            and humbling. The city is a testament to the architectural and
            artistic prowess of the ancient Burmese civilization.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Hot Air Balloon Rides</li>
            <li>Cycling Tours</li>
            <li>Sunset Viewing</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Top Places to Visit</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Ananda Temple</li>
            <li>Shwezigon Pagoda</li>
            <li>Dhammayangyi Temple</li>
            <li>Thatbyinnyu Temple</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
