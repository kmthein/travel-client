import React, { useEffect, useState } from "react";
import DestinationDetail from "../../components/user/destinationdetail/DestinationDetail";
import SuggestHotel from "../../components/user/destinationdetail/SuggestHotel";
import Suggestairline from "../../components/user/destinationdetail/Suggestairline";
import ReviewForm from "../../components/user/destinationdetail/ReviewForm";
import ReviewList from "../../components/user/destinationdetail/ReviewList";
import { useParams } from "react-router-dom";
import { getDestinationById } from "../../api/destination";
import SuggestBus from "../../components/user/destinationdetail/SuggestBus";

const DestinationDetailpage = () => {
  const { id } = useParams();

  const [destination, setDestination] = useState(null);

  const getDestinationDetailsHandler = async () => {
    const res = await getDestinationById({ id });
    if (res.data.highlight && res.data.topPlace) {
      await setDestination({
        ...res.data,
      });
    }
  };

  useEffect(() => {
    getDestinationDetailsHandler();
  }, []);

  return (
    <div className="w-[70%] mx-auto p-4">
      <DestinationDetail destination={destination} />
      <SuggestHotel hotels={destination?.hotelList} name={destination?.name} />
      <Suggestairline
        arrive={destination?.flightArriveTo}
        name={destination?.name}
      />
      <SuggestBus arrive={destination?.busArriveTo} name={destination?.name} />
      {/* <ReviewForm destination={destination} />
      <ReviewList /> */}
    </div>
  );
};

export default DestinationDetailpage;
