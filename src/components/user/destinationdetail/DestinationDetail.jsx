import React, { useState } from "react";
import noImg from "../../../assets/img/common/no_img.jpg";

const DestinationDetail = ({ destination }) => {
  const [selectImgIndex, setSelectImgIndex] = useState(0);

  return (
    <div className="flex items-start gap-8 mb-8">
      <div className="w-[45%]">
        <div className="w-full h-[60vh] mb-2 rounded-md">
          <img
            src={
              destination?.image.length > 0
                ? destination?.image[selectImgIndex].imgUrl
                : noImg
            }
            preview={false}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="flex items-center gap-3 img_scroll">
          {destination?.image &&
            destination.image.length > 0 &&
            destination.image.map((img, i) => (
              <img
                src={img.imgUrl}
                key={i}
                preview={false}
                onClick={() => setSelectImgIndex(i)}
                className="w-[25%] h-28 border rounded-md"
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
              destination.highlight.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Top Places to Visit</h2>
          <ul className="list-disc list-inside text-gray-700">
            {destination?.topPlace &&
              destination.topPlace.map((topPlace, i) => (
                <li key={i}>{topPlace}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
