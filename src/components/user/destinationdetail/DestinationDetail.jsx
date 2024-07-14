import React, { useEffect, useState } from "react";
import Bagan from "../../../assets/img/destination/bagan.png";
import { Image } from "antd";
import { useParams } from "react-router-dom";
import { getDestinationById } from "../../../api/destination";
const DestinationDetail = () => {
  const { id } = useParams();

  const [destination, setDestination] = useState(null);

  const getDestinationDetailsHandler = async () => {
    const res = await getDestinationById({ id });
    const { highlight, topPlace } = res.data;
    const trimHighlight = highlight.replaceAll(" ", "");
    const newHighlight = trimHighlight.split(",");
    const trimTopPlace = topPlace.replaceAll(" ", "");
    const newTopPlace = trimTopPlace.split(",");
    setDestination({
      ...res.data,
      highlight: newHighlight,
      topPlace: newTopPlace,
    });
  };

  console.log(destination);

  useEffect(() => {
    getDestinationDetailsHandler();
  }, []);

  const [selectImgIndex, setSelectImgIndex] = useState(0);

  return (
    <div className="flex items-start gap-8 mb-8">
      <div className="w-1/2">
        <div className="w-full h-[400px] mb-2 rounded-md">
          <img
            src={destination?.image[selectImgIndex].imgUrl}
            preview={false}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="flex items-center gap-3 img_scroll">
          {destination?.image &&
            destination.image.length > 0 &&
            destination.image.map((img, key) => (
              <img
                src={img.imgUrl}
                preview={false}
                onClick={() => setSelectImgIndex(key)}
                className="w-28 h-28 border rounded-md"
              />
            ))}
        </div>
      </div>
      <div className="w-1/2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{destination?.name}</h2>
          <p className="text-gray-700 mb-4">{destination?.description}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {destination?.highlight &&
              destination.highlight.map((highlight) => <li>{highlight}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Top Places to Visit</h2>
          <ul className="list-disc list-inside text-gray-700">
            {destination?.topPlace &&
              destination.topPlace.map((topPlace) => <li>{topPlace}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
