import React from "react";
import DestinationDetail from "../../components/user/destinationdetail/DestinationDetail";
import SuggestHotel from "../../components/user/destinationdetail/SuggestHotel";
import Suggestairline from "../../components/user/destinationdetail/Suggestairline";
import ReviewForm from "../../components/user/destinationdetail/ReviewForm";
import ReviewList from "../../components/user/destinationdetail/ReviewList";

const DestinationDetailpage = () => {
  return (
    <div className="w-[70%] mx-auto p-4">
      <DestinationDetail />
      <SuggestHotel />
      <Suggestairline />
      <ReviewForm />
      <ReviewList />
    </div>
  );
};

export default DestinationDetailpage;
