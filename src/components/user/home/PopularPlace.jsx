import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Journey from "../../../assets/img/home/journey.png";
import NgweSaung from "../../../assets/img/home/ngwesaung.png";
import Kalaw from "../../../assets/img/home/kalaw.png";
import InLeLake from "../../../assets/img/home/inleLake.png";
import Bagan from "../../../assets/img/home/bagan.png";
import { Card } from "antd";
const { Meta } = Card;

const PopularPlace = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-16">
      <img src={Journey} alt="journey" className="w-full" />
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 my-12">
          Top Destination to Visit
        </h2>
        <Slider {...settings} className="relative">
          {[
            {
              src: NgweSaung,
              title: "Ngwe Saung, Myanmar",
              description:
                "Discover beautiful and serene beaches perfect for a relaxing getaway. Enjoy water sports, explore nearby islands, and experience the local seafood cuisine.",
            },
            {
              src: Bagan,
              title: "Bagan, Myanmar",
              description:
                "Explore historic landmarks and experience the rich culture of different regions. Witness breathtaking sunrises and sunsets over ancient temples.",
            },
            {
              src: InLeLake,
              title: "Inle Lake, Myanmar",
              description:
                "Find the best adventure spots for thrilling and exciting outdoor activities. Visit floating gardens, stilt villages, and see the unique leg-rowing fishermen.",
            },
            {
              src: Kalaw,
              title: "Kalaw, Myanmar",
              description:
                "Explore lush gardens and beautiful green spaces ideal for nature lovers. Embark on trekking adventures and experience the diverse ethnic cultures.",
            },
          ].map((place, index) => (
            <div key={index} className="p-4">
              <Card
                hoverable
                className="h-[450px] flex flex-col justify-between"
                cover={
                  <img
                    src={place.src}
                    alt={place.title}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  />
                }
              >
                <Meta
                  title={place.title}
                  description={place.description}
                  className="text-center"
                />
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularPlace;
